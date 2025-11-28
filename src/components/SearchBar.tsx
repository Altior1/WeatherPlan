import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FilterCountryContext } from '../contexts/FilterCountryContext';

export default function SearchBar() {
    const { dispatch } = useContext(FilterCountryContext);
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data: any) => {
        dispatch({ type: 'SET_FILTER', payload: data.filter } as any);
    };
    return (
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Search for a country..."
                    {...register('filter', {
                        required: false
                    }
                    )}
                />
                <button type="submit">Search</button> 
            </form>

    )
}