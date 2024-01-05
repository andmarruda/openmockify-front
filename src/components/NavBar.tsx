import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-height bg-light">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control col-2" type="search" placeholder="Buscar" />
                        <button type="submit" className="btn btn-outline-primary"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                    <div className="icon-name">A</div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;