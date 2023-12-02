import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <h1>Gombavadászat </h1>
            </header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">
                            Kezdőlap
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link ">
                            Admin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/public" className="nav-link ">
                            Publikus
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
