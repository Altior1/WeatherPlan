import useFetch from "../hooks/useFetch";
import Country from "./countries";


export default function FetchCountries() {
    const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all?fields=name,flags");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul className="bg-black">
            {data.map((country: any) => (
                <Country name={country.name} flag_url={country.flags.png} key={country.name.common} />
            ))}
        </ul>
    );
}