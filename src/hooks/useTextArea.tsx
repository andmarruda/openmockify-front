import React from "react";
import { Validation } from "../configs/Validation";

const useTextArea = (keyValidation : string) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    const validationObj = keyValidation == '' || !(keyValidation in Validation) ? null : Validation[keyValidation as keyof typeof Validation];

    const validate = (value : string) => {
        if (validationObj === null) return true;

        if(value.length == 0)
        {
            setError('validation.required');
            return false;
        }

        if(!validationObj.expr.test(value))
        {
            setError(validationObj.message);
            return false;
        }

        setError('');
        return true;
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

export default useTextArea;