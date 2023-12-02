import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <h1>Gombavadászat </h1>
            </header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link "  >
                            Kezdőlap
                        </NavLink>
                    </li>
                    <li className="nav-item"  >
                        <NavLink to="/admin" className="nav-link "  >
                            Admin
                        </NavLink>
                    </li>
                    <li className="nav-item"   >
                        <NavLink to="/public" className="nav-link "  >
                            Publikus
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;


