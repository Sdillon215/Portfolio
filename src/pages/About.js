import React from 'react';
import {
    Portrait,
    Tuolumne,
    Taco,
    OuterLimits
} from '../assets/images';

const About = () => {
    return (
        <div>
            <section className="hero hero-section">
                <div className="photo">
                    <img src={Portrait} alt="Sean-Dillon-Portrait" />
                </div>
                <div className="photo">
                    <img src={Tuolumne} alt="Tenaya-lake" />
                </div>
                <div className="photo">
                    <img src={Taco} alt="My-truck-aka-my-house" />
                </div>
                <div className="photo">
                    <img src={OuterLimits} alt="rock-climging-yosemite" />
                </div>
            </section>
            <section className="section">
                <h2 id="about-me" className="title">
                    About Me
                </h2>
                <p>
                    My name is Sean Dillon and I am a Full-Stack Web Developer as well as a Data Analyst.
                    I was drawn to this field of work by the ability to work remotely and the freedom that allows.
                    My introduction to Web developement and Data Analysis started with a boot camp through The University of
                    Utah.
                    As I am learning new skills and technologies I am finding a passion in the creative proccess of building web
                    applications.
                    This skill set gives me the freedom work from anywhere in the world which has given me the ability to pursue
                    other passions such as climbing and traveling.
                    These two passions fuel each other and the result is awesome code and time spent in the most beautiful
                    places in the world!
                </p>
            </section>
        </div>
    );
};

export default About;