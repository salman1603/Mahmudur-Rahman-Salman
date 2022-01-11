import React from 'react';
import bg from '../../../img/profile.png'
import './Hero.css'
import ScrollToTop from "react-scroll-to-top";
import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-tsparticles";


const Hero = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <div className='container'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 40,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <ScrollToTop smooth />
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 pt-5 mt-5">
                    <h4 className='fw-bold text-light'>Hello! I'm</h4>
                    <h1><span style={{ color: 'goldenRod', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['SALMAN', 'A Front End Developer', 'React JS Developer']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span></h1>
                </div>
                <div class="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;