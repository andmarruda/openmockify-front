import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faObjectGroup, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <>
            <div className="row bg-light">
                <div className="col-12 text-center mt-3">
                    <Link className="brand" to="/">Openmockify</Link>
                </div>
                <div className="col-12 menu mt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item menu-active">
                            <Link className="nav-link" to="/"><FontAwesomeIcon icon={faChartLine} /> Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/subdomain"><FontAwesomeIcon icon={faObjectGroup} /> Subdomain</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faAddressCard} /> About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;