import { MockiProps } from "../../types/MockiProps";
import { useTranslation } from "react-i18next";

const NewMocki = ({ subdomainId }: MockiProps) => {
    const { t } = useTranslation();
    
    return (
        <div>
            <h1>New Mocki</h1>
        </div>
    );
}

export default NewMocki;