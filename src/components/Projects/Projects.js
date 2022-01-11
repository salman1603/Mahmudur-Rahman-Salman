import React from 'react';
import autowash from '../../img/Auto Wash.png';
import seogram from '../../img/SeoGram..png';
import digigram from '../../img/DigiGram.png';
import onlinedu from '../../img/OnlineEdu.png';

const Projects = () => {

    const seoGithubClick = () => {
        window.open("https://github.com/salman1603/SeoGram.");
    };
    const seoLiveSite = () => {
        window.open("https://seoagency.netlify.app/");
    };
    const autowashGithubSite = () => {
        window.open("https://github.com/salman1603/Auto-Wash");
    };
    const autowashLiveSite = () => {
        window.open("https://auto-wash.netlify.app/");
    };
    const digigramGithubSite = () => {
        window.open("https://github.com/salman1603/DigiGram-Agency");
    };
    const digigramLiveSite = () => {
        window.open("https://digigram-agency.netlify.app/");
    };
    const onlineEduGithubSite = () => {
        window.open("https://github.com/salman1603/OnlineEdu");
    };
    const onlineEduLiveSite = () => {
        window.open("https://online-education-edu.netlify.app/");
    };
    return (
        <div className='mt-5 pt-5 container'>
            <h3 className='text-center text-dark'>Projects</h3>
            <div className="underline"></div>
            <div className="row row-cols-1 row-cols-lg-3 g-4 mt-5 ">
                <div className="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card h-100">
                        <img src={seogram} className="card-img-top" alt="seoagency" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">SEO Agency</h5>
                            <p className="card-text">Complete responsive website for a SEO Agency who sells different types of services.</p>
                            <button type="button" className="btn btn-primary" onClick={seoGithubClick}>Github</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={seoLiveSite}>Livesite</button>

                        </div>
                        <div className="card-footer">
                            <small className="text-muted">React JS, React Router, React Aos Animation, React Bootstrap, React Typewriter , React scroll</small>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card h-100">
                        <img src={autowash} className="card-img-top" alt="carwash" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Auto Wash</h5>
                            <p className="card-text">Responsive website for Car Wash company who sells different types of services.</p>
                            <button type="button" className="btn btn-primary" onClick={autowashGithubSite}>Github</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={autowashLiveSite}>Livesite</button>

                        </div>
                        <div className="card-footer">
                            <small className="text-muted">React JS, React Router, React Aos Animation, React Bootstrap, React Typewriter , React scroll</small>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card h-100">
                        <img src={digigram} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Digital Products</h5>
                            <p className="card-text">Responsive website for Digital products company who sells different types of services.</p>
                            <button type="button" className="btn btn-primary" onClick={digigramGithubSite}>Github</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={digigramLiveSite}>Livesite</button>

                        </div>
                        <div className="card-footer">
                            <small className="text-muted">HTML , CSS, Bootstrap, JavaScript</small>
                        </div>
                    </div>
                </div>
                <div className="col" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="card h-100">
                        <img src={onlinedu} className="card-img-top" alt="onlineedu" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">OnlineEdu</h5>
                            <p className="card-text">Responsive website for online educational platform who teach different types of education and sell it.</p>
                            <button type="button" className="btn btn-primary" onClick={onlineEduGithubSite}>Github</button>
                            <button type="button" className="btn btn-primary ms-2" onClick={onlineEduLiveSite}>Livesite</button>

                        </div>
                        <div className="card-footer">
                            <small className="text-muted">HTML , CSS, Bootstrap, JavaScript, React JS, React router</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;