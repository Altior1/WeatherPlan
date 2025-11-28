import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SearchBar() {
    const [form, handleForm] = useForm()

    const onSubmit = () => {

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