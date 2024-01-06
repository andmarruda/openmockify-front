import { useTranslation } from "react-i18next";
import { BreadcrumbList } from "../../types/BreadcrumbList";
import Breadcrumb from "../../components/Breadcrumb";

const NewSubdomain = () => {
    const { t } = useTranslation();

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
        </>
    )
}

export default NewSubdomain;