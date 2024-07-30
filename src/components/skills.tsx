import React from 'react';

export default function Skills(){
    return(
        <section id="skills" className="skills section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>Skills</h2>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row skills-content skills-animation">

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">Python</span>
                        </div>

                        <div className="progress">
                            <span className="skill">C++</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Machine Learning</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Tensorflow</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Pytorch</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Shell Programming</span>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">Docker</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Signal Processing</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Natural Language Processing</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Image Processing</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Cloud Service</span>
                        </div>

                        <div className="progress">
                            <span className="skill">Automation Test</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}