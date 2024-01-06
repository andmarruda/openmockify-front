import { useTranslation } from "react-i18next";
import { BreadcrumbList } from "../../types/BreadcrumbList";
import Breadcrumb from "../../components/Breadcrumb";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";

const NewSubdomain = () => {
    const { t } = useTranslation();
    const subdomainInput = useInput('');

    const breadcrumbList : BreadcrumbList = [
        {
            name: t('subdomain'),
            url: "/subdomain",
            active: false
        },
        {
            name: t('new'),
            url: "/subdomain/new",
            active: true
        }
    ];

    return (
        <>
            <Breadcrumb list={breadcrumbList} />
            <form action="" method="">
                <Input type="text" name="subdomain" id="subdomain" className="form-control" label="subdomain" {...subdomainInput} />
            </form>
        </>
    )
}

export default NewSubdomain;