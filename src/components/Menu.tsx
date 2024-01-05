import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faObjectGroup } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand brand" to="/">Openmockify</Link>
                </div>
            </nav>
            <div className="row">
                <div className="col-12 bg-light menu">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><FontAwesomeIcon icon={faChartLine} /> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><FontAwesomeIcon icon={faObjectGroup} />Subdomain</Link>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Menu;