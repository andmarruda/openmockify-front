import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faGear } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import { BreadcrumbList } from "../../types/BreadcrumbList";

const List = () => {
    const { t } = useTranslation();
    const breadcrumbList : BreadcrumbList = [
        {
            name: t('subdomain'),
            url: "/subdomain",
            active: false
        },
        {
            name: t('list'),
            url: "/subdomain",
            active: true
        }
    ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Breadcrumb list={breadcrumbList} />
                <Link className="btn btn-outline-primary" to="/subdomain/new" title={ t('new') }><FontAwesomeIcon icon={faPlus} /></Link>
            </div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{ t('subdomain') }</th>
                        <th>{ t('mocks') }</th>
                        <th>{ t('running') }</th>
                        <th>{ t('action') }</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>teste.sysborg.com.br</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                            <Link to="/subdomain/edit/1" className="btn btn-outline-primary btn-sm ama-action" title={ t('edit') }><FontAwesomeIcon icon={faPenToSquare} /></Link>
                            <Link to="/" className="btn btn-outline-primary btn-sm ama-action" title={ t('manage') }><FontAwesomeIcon icon={faGear} /></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default List;