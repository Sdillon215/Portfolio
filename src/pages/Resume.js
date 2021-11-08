import React from 'react';

const Resume = () => {
    return (
        <section className="section top">
            
            <div className="stuff">
                <br></br>
                    <h1 className="title">Resume Placeholder</h1>
                    <hr />
                        <p className="title">Interests</p>
                        <ul className="resume-list">
                            <li>Drawing</li>
                            <li>Photography</li>
                            <li>Design</li>
                            <li>Programming</li>
                            <li>Computer Science</li>
                        </ul>
                        <p className="title">Skills</p>
                        <ul className="resume-list">
                            <li>Web Design with HTML & CSS</li>
                        </ul>
                        <p className="title">Education</p>
                        <ul className="resume-list">
                            <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
                                <li>Wilton High School</li>
                            </a>
                            <a href="https://www.silvermineart.org/">
                                <li>Silvermine School of Arts</li>
                            </a>
                        </ul>
                        <p className="title">Experience</p>
                        <ul className="resume-list">
                            <li>Student Technology Intern for Wilton School District</li>
                            <li>Babysitter</li>
                        </ul>
                        <p className="title">Extracurriculars</p>
                        <ul className="resume-list">
                            <li>Recycling Club</li>
                            <li>Gardening Club</li>
                            <li>Book Club</li>
                        </ul>
                    </div>
                </section>
                    );
};

export default Resume;