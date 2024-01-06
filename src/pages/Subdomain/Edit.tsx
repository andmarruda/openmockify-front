import { useTranslation } from "react-i18next";
import { BreadcrumbList } from "../../types/BreadcrumbList";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";

const Edit = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const breadcrumbList : BreadcrumbList = [
        {
            name: t('subdomain'),
            url: "/subdomain",
            active: false
        },
        {
            name: t('edit'),
            url: `/subdomain/edit/${id}`,
            active: true
        }
    ];

    return (
        <>
            <Breadcrumb list={breadcrumbList} />
        </>
    )
}

export default Edit;