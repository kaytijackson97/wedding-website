import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/our-story">Our Story</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/venue">Venue</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/photos">Photos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/wedding-party">Wedding Party</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/registry">Registry</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rsvp">RSVP</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;