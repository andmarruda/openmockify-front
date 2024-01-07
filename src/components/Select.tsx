import React from "react";
import { useTranslation } from "react-i18next";
import { OptionsType } from "../types/OptionsType";

type SelectProps = React.InputHTMLAttributes<HTMLSelectElement> & {
    error: string,
    validate: Function,
    label: string,
    options: OptionsType,
};

//pass defaultValue in the place of selected in option
const Select : React.FC<SelectProps> = ({name, id, error, label, options, validate, ...restProps}) => {
    const { t } = useTranslation();
    return (
        <div className="mb-3">
            <label htmlFor="subdomain" className="form-label">{ t(label) }</label>
            <select name={name} id={id} {...restProps}>
                { options.map((option, index) => (
                    <option key={index} value={option.value}>{ option.label }</option>
                )) }
            </select>
            { error != '' && <div className="invalid-feedback">{ error }</div> }
        </div>
    )
}

export default Select;