import React from 'react';
import {
    Herobg,
    Weekender,
    TechBlog,
    Horiseon,
    EZBudget,
    DeepThoughts,
    Top5,
    DataVerse
} from '../../assets/images';

const Projects = () => {
    const work = [
        {
            site: "https://gentle-temple-58806.herokuapp.com/",
            git: "https://github.com/Zunaty/dataverse",
            image: DataVerse,
            text: "DataVerse"
        },
        {
            site: "https://sdillon215.github.io/run-buddy/",
            git: "https://github.com/Sdillon215/run-buddy",
            image: Herobg,
            text: "Run Buddy"
        },
        {
            site: "https://sdillon215.github.io/Horiseon/",
            git: "https://github.com/Sdillon215/Horiseon",
            image: Horiseon,
            text: "Horiseon"
        },
        {
            site: "https://sdillon215.github.io/Weekender/",
            git: "https://github.com/Sdillon215/Weekender",
            image: Weekender,
            text: "Weekender"
        },
        {
            site: "https://ez-budget-1.herokuapp.com/",
            git: "https://github.com/Sdillon215/easy-budget",
            image: EZBudget,
            text: "EZ Budget"
        },
        {
            site: "https://rocky-ridge-17665.herokuapp.com/",
            git: "https://github.com/Sdillon215/deep-thoughts",
            image: DeepThoughts,
            text: "Deep Thoughts"
        },
        {
            site: "https://limitless-harbor-51312.herokuapp.com/",
            git: "https://github.com/Sdillon215/Tech-blog",
            image: TechBlog,
            text: "Tech Blog"
        },
        {
            site: "https://serene-harbor-24165.herokuapp.com/",
            git: "https://github.com/Sdillon215/Top-5",
            image: Top5,
            text: "Top 5"
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
                    <p>
                        <a className="photo-text" href={project.git}>{project.text} Github Repo</a>
                    </p>
                </div>
            ))}
        </>
    );
};

export default Projects;