import React from "react";

export default function Resume() {
    return (
        <section id="resume" className="resume section">
            <div className="container section-title" data-aos="fade-up ">
                <h2>Resume</h2>
                <p>My Education and Working Experience</p>
            </div>

            <div className="container">

                <div className="row">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Information Technology</h4>
                            <h5>2020 - 2024</h5>
                            <p><em>University of Science, Ho Chi Minh, Viet Nam</em></p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>BOSCH EMC AI Internship</h4>
                            <h5>2nd Jan. 2024 - 2nd June 2024</h5>
                            <p><em>BGSV - Etown 2, Ho Chi Minh City</em></p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}