import React from "react";
import { useTranslation } from "react-i18next";

type InputProps = React.InputHTMLAttributes<HTMLSelectElement> & {
    error: string,
    validate: Function,
    label: string,
    options: Array<{
        value: string,
        label: string,
        selected: boolean
    }>,
};

const Input : React.FC<InputProps> = ({name, id, error, label, options, ...restProps}) => {
    const { t } = useTranslation();
    return (
        <div className="mb-3">
            <label htmlFor="subdomain" className="form-label">{ t(label) }</label>
            <select name={name} id={id} {...restProps}>
                { options.map((option, index) => (
                    <option key={index} value={option.value} selected={option.selected}>{ option.label }</option>
                )) }
            </select>
            { error != '' && <div className="invalid-feedback">{ error }</div> }
        </div>
    )
}

export default Input;