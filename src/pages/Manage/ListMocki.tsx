import Breadcrumb from "../../components/Breadcrumb";
import { BreadcrumbList } from "../../types/BreadcrumbList";
import { MockiProps } from "../../types/MockiProps";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrash, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const ListMocki = ({ subdomainId }: MockiProps) => {
    const { t } = useTranslation();
    const manageUrl = `/subdomain/manage/${subdomainId}`;

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
            name: t('list'),
            url: manageUrl,
            active: true
        }
    ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Breadcrumb list={breadcrumbList} />
                <Link className="btn btn-outline-primary" to={`/subdomain/manage/${subdomainId}/new`} title={ t('new') }><FontAwesomeIcon icon={faPlus} /></Link>
            </div>

            <p>{t('subdomain')}: <mark>teste.sysborg.com.br</mark></p>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{ t('name') }</th>
                        <th>{ t('url') }</th>
                        <th>{ t('method') }</th>
                        <th>{ t('action') }</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Teste 1</td>
                        <td>/teste1</td>
                        <td>GET</td>
                        <td>
                            <Link to={`${manageUrl}/edit/1`} className="btn btn-outline-primary btn-sm ama-action" role="button" title={ t('edit') }><FontAwesomeIcon icon={faPenToSquare} /></Link>
                            <Link to={`${manageUrl}/delete/1`} className="btn btn-outline-danger btn-sm ama-action" role="button" title={ t('manage') }><FontAwesomeIcon icon={faTrash} /></Link>
                            <a href="#" role="button" className="btn btn-outline-primary btn-sm ama-action"><FontAwesomeIcon icon={faCopy} /></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ListMocki;