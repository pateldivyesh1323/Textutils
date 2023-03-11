import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

Navbar.defaultProps = { 
    title: "Company Name",
    navlinkname1: "Home",
    navlinkname2: "About"
};

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">{props.navlinkname1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.navlinkname2}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label htmlFor="flexSwitchCheckDefault" className={`text-${props.mode ==="light" ? "dark" : "light" }`}>Enable {props.mode === "dark" ? "Light" : "Dark"} Mode</label>
            </div>
        </nav>
    )
}

// Is Required property is used when the prop is compulsary required.
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    navlinkname1: PropTypes.string.isRequired,
    navlinkname2: PropTypes.string.isRequired
};


