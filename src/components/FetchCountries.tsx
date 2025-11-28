import useFetch from "../hooks/useFetch";
import Country from "../components/Countries";
import { useContext } from "react";
import { FilterCountryContext } from "../contexts/FilterCountryContext";

function filterCountries(countries: any[], filter: string|null) {
    if (!filter) return countries;
    return countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
    );
}

export default function FetchCountries() {
    const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all?fields=name,flags");
    const { filterCountry } = useContext(FilterCountryContext);
    
    const filteredData = filterCountries(data || [], filterCountry);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul className="bg-black">
            {filteredData.map((country: any) => (
                <Country name={country.name} flag_url={country.flags.png} key={country.name.common} />
            ))}
        </ul>
    );
}