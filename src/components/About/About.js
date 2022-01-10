import React from 'react';
import './About.css'


const About = () => {
    return (
        <div className='pt-5 container pb-5'>
            <div className="row g-5 mb-5">
                <div className="col-lg-6" data-aos="zoom-out-right" data-aos-duration="2000">
                    <h3>About Me</h3>
                    <div className="underline"></div>
                    <div className='pt-5 text-start lh-5'>
                        <p>I’m a Front-End Developer. I develop web applications. I like working with JavaScript. Therefore I use React JS to make stunning UI. I am ready to work with honesty, dedication, sincerity, and confidence to adapt to any situation to achieve my purpose.</p>
                        <p>I always stay hungry to learn something new. Currently focused on expanding my knowledge about developing high performing websites and get hired.</p>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="zoom-out-left" data-aos-duration="2000">
                    <h3>Skills</h3>
                    <div className="underline"></div>
                    <div className="pt-5">
                        <h5 className='text-start'>HTML</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>90%</div>
                        </div>
                        <h5 className='text-start'>CSS</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>80%</div>
                        </div>
                        <h5 className='text-start'>JavaScript</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>80%</div>
                        </div>
                        <h5 className='text-start'>Bootstrap</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>85%</div>
                        </div>
                        <h5 className='text-start'>React JS</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>80%</div>
                        </div>
                        <h5 className='text-start'>Tailwind CSS</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>75%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;