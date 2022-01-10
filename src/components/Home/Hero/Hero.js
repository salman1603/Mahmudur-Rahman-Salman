import React from 'react';
import bg from '../../../img/profile.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='container'>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 pt-5 mt-5">
                    <h5>Hello! I'm Salman</h5>
                    <h2>A front end developer</h2>
                </div>
                <div class="col-lg-6">
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;