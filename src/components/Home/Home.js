import React from 'react';
import Hero from './Hero/Hero';
import Navigation from './Navigation/Navigation';
import './Home.css'


const Home = () => {
    return (
        <div id='bgcolor'>
            <Navigation></Navigation>
            <Hero></Hero>
        </div>
    );
};

export default Home;