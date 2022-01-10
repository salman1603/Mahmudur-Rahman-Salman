import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid container">
                    <a className="navbar-brand brandName" href="www.google.com">Developer Salman</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02" data-aos="fade-left" data-aos-duration="2000">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="www.google.com">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="www.google.com">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="www.google.com">Contact</a>
                            </li>
                            <button className='btn btn-outline-light ms-2 fw-bold'>Resume</button>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;