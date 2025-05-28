import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TechCard from './components/NoirBox';
import Blog from './components/Blog';
import About from './components/About';

const App = () => {

    return (
        <div>
            <Hero></Hero>
            <About></About>
            <TechCard></TechCard>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default App;
