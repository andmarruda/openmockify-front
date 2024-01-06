import React from "react";
import { useTranslation } from "react-i18next";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error: string,
    validate: Function,
    label: string,
};

const Input : React.FC<InputProps> = ({type, name, id, error, label, ...restProps}) => {
    const { t } = useTranslation();
    return (
        <div className="mb-3">
            <label htmlFor="subdomain" className="form-label">{ t(label) }</label>
            <input type={type} name={name} id={id} {...restProps} />
            { error != '' && <div className="invalid-feedback">{ error }</div> }
        </div>
    )
}

export default Input;