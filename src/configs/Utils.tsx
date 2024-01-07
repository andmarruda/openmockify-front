import { OptionsType } from "../types/OptionsType";
import DataPattern from './DataPattern.json';
import { useTranslation } from "react-i18next";

export const timeIntervalOptions = () => {
    const dataPattern : OptionsType = DataPattern.timeInterval;
    const { t } = useTranslation();
    
    for(const option in dataPattern) {
        if(!dataPattern.hasOwnProperty(option)) continue;
        dataPattern[option].label = t(dataPattern[option].label);
    }

    return dataPattern;
}