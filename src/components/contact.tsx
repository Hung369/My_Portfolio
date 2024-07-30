import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact Info</h2>
                <p className="fst-italic py-3"> You can contact me by </p>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(+84)931852310</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>nguyenmhung2310@gmail.com</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Sai Gon, Viet Nam</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}