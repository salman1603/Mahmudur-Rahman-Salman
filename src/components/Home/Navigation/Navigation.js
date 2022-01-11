import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bgcolor">
                <div className="container-fluid container">
                    <a className="navbar-brand brandName text-info" href="www.google.com">Dev <span className='text-warning'>Salman</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02" data-aos="fade-left" data-aos-duration="2000">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" href="#about" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" href="#about" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" href="#about" to="/contact">Contact</Link>
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