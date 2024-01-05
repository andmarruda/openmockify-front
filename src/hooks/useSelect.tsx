import React from "react";

const useSelect = (nullable : boolean | null) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    const validate = (value : string) => {
        if (nullable === null) return true;

        if(value.length == 0)
        {
            setError('validation.required');
            return false;
        }

        setError('');
        return true;
    };

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(error) validate(e.target.value);
        setValue(e.target.value);
    }

    return {
        value,
        error,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
}

export default useSelect;