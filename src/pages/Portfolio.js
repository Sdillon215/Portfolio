import React from 'react';
import Projects from '../components/Projects';


const Portfolio = () => {

    return (
        <div className="section top">
            <h2 className="title">My Projects</h2>
            <section className="proj hero-section">
                <Projects />
            </section>
        </div>
    );
};

export default Portfolio;