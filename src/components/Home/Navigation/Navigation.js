import React from 'react';

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid container">
                    <a class="navbar-brand" href="www.google.com">Developer Salman</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="www.google.com">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="www.google.com">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="www.google.com">Contact</a>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;