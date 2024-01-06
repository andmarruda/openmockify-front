import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faObjectGroup, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const Menu = () => {
    const location = useLocation();
    const { t } = useTranslation();
    console.log(t);

    const menus = [
        { name: 'dashboard', icon: faChartLine, path: '/' },
        { name: 'subdomain', icon: faObjectGroup, path: '/subdomain' },
        { name: 'about', icon: faAddressCard, path: '/about' }
    ];

    return (
        <>
            <div className="row bg-light">
                <div className="col-12 text-center mt-3">
                    <Link className="brand" to="/">Openmockify</Link>
                </div>
                <div className="col-12 menu mt-3">
                    <ul className="nav flex-column">
                        { menus.map((item) => {
                            return (
                                <li className={`nav-item ${item.path==location.pathname ? 'menu-active' : ''}`} key={item.path}>
                                    <Link className="nav-link" to={item.path}><FontAwesomeIcon icon={item.icon} /> { t(item.name) }</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;