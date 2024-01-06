import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const List = () => {
    const breadcrumbList : Array<{name: string, url: string, active: boolean}> = [
        {
            name: "Subdomain",
            url: "/subdomain",
            active: false
        },
        {
            name: "List",
            url: "/subdomain",
            active: true
        }
    ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Breadcrumb list={breadcrumbList} />
                <Link className="btn btn-outline-primary" to="/subdomain/new"><FontAwesomeIcon icon={faPlus} /></Link>
            </div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subdomain</th>
                        <th>Mocks</th>
                        <th>Running</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    );
}

export default List;