import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm position-sticky top-0" 
             style={{ borderBottom: '2px solid #007bff', zIndex: 10 }}>
            <div className="container-fluid">
                {/* Brand Title with enhanced styling */}
                <Link className="navbar-brand fw-bold text-primary" to="/" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* Right Side Links */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" 
                                  to="/about" 
                                  style={{ fontSize: '1.1rem', transition: 'color 0.3s' }}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" 
                                  to="/manage-assessments" 
                                  style={{ fontSize: '1.1rem', color: '#007bff', fontWeight: '500', transition: 'color 0.3s' }}>
                                Manage Assessments
                            </Link>
                        </li>
                    </ul>

                    {/* Optional Search Bar */}
                    {props.searchBar && (
                        <form className="d-flex ms-3" style={{ position: 'relative' }}>
                            <input className="form-control me-2" 
                                   type="search" 
                                   placeholder="Search assessments..." 
                                   aria-label="Search" 
                                   style={{ borderRadius: '20px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }} />
                            <button className="btn btn-outline-primary" 
                                    type="submit" 
                                    style={{ borderRadius: '20px' }}>
                                Search
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
};

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
};
