import React from 'react';
import {
    Herobg,
    Weekender,
    Top5,
    Horiseon,
    EZBudget
} from '../../assets/images';

const Projects = () => {
    const work = [
        {
            site: "https://sdillon215.github.io/run-buddy/",
            image: Herobg,
            text: "Run Buddy"
        },
        {
            site: "https://sdillon215.github.io/Horiseon/",
            image: Horiseon,
            text: "Horiseon"
        },
        {
            site: "https://sdillon215.github.io/Weekender/",
            image: Weekender,
            text: "Weekender"
        },
        {
            site: "https://ez-budget-1.herokuapp.com/",
            image: EZBudget,
            text: "EZ Budget"
        }
    ];

    return (
        <>
            {work.map((project) => (
                <div className="photo">
                    <img src={project.image} alt={project.text} />
                    <p >
                        <a className="photo-text" href={project.site}>{project.text}</a>
                    </p>
                </div>
            ))}
        </>
    );
};

export default Projects;