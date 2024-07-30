import React from "react";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio section">

            <div className="container section-title" data-aos="fade-up">
                <h2>My Project</h2>
            </div>

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6 portfolio-item d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
                        <div>
                            <h4 className="title"><a href="portfolio-details.html" className="stretched-link">Vital Sign Tracking</a></h4>
                            <p className="description">Fully developed algorithm for radar system to track driver vital sign (heart rate and breath rate) while driving</p>
                            <p className="description">Frameworks: Python, Signal Processing, mmwave SDK </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item d-flex" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
                        <div>
                            <h4 className="title"><a href="portfolio-details.html" className="stretched-link">Embedded AI</a></h4>
                            <p className="description">Deploy violence detection model on CCS2 circuit with ONNX framework for DMS/OMS project</p>
                            <p className="description">Frameworks: C++, ONNXRuntime </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item d-flex" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
                        <div>
                            <h4 className="title"><a href="portfolio-details.html" className="stretched-link">Visual Automation Test</a></h4>
                            <p className="description">Building a visual AI model for automation test robot arm </p>
                            <p className="description">Frameworks: Pytorch, Tensorflow, Tkinter, Robot Framework </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}