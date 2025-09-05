import { NavLink } from "react-router";

export default function Menu() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Movies React</NavLink>
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/genres" className="nav-link active" aria-current="page">Genres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/actors" className="nav-link">Actors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cinemas" className="nav-link">Cinemas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies/create" className="nav-link">Create Movie</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}