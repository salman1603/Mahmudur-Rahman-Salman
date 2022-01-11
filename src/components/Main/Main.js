import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Main;