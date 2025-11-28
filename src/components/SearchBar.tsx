import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FilterCountryContext } from '../contexts/FilterCountryContext';

export default function SearchBar() {
    const { dispatch } = useContext(FilterCountryContext);
    const [form, handleForm] = useForm()

    const onSubmit = () => {
        dispatch(handleForm(form));
    }
    return (
        <div>
            <form onSubmit={handleForm(onSubmit)}>
                <label for>

                </label>
            </form>
        </div>
    )
}