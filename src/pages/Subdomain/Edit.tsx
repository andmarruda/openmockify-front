import { useTranslation } from "react-i18next";
import { BreadcrumbList } from "../../types/BreadcrumbList";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const Edit = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const subdomainInput = useInput('');

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
            <form>
                <Input type="text" name="subdomain" id="subdomain" className="form-control" label="subdomain" {...subdomainInput} />
                <div className="mb-3">
                    <button type="submit" className="btn btn-outline-primary"><FontAwesomeIcon icon={faFloppyDisk} /> { t('save') }</button>
                </div>
            </form>
        </>
    )
}

export default Edit;