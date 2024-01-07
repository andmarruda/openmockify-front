import { MockiProps } from "../../types/MockiProps";
import { useTranslation } from "react-i18next";
import { BreadcrumbList } from "../../types/BreadcrumbList";
import Breadcrumb from "../../components/Breadcrumb";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";

const NewMocki = ({ subdomainId }: MockiProps) => {
    const { t } = useTranslation();
    const manageUrl = `/subdomain/manage/${subdomainId}`;
    const inputName = useInput('');
    const inputUrl = useInput('');

    const breadcrumbList : BreadcrumbList = [
        {
            name: t('subdomain'),
            url: "/subdomain",
            active: false
        },
        {
            name: t('manage'),
            url: manageUrl,
            active: false
        },
        {
            name: t('new'),
            url: `${manageUrl}/new`,
            active: true
        }
    ];
    
    return (
        <>
            <Breadcrumb list={breadcrumbList} />
            <form>
                <Input type="text" name="name" id="name" className="form-control" label="name" {...inputName} />
                <Input type="text" name="url" id="url" className="form-control" label="url" {...inputUrl} />
            </form>
        </>
    );
}

export default NewMocki;