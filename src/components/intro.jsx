"use client";

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import "@/app/style/main.css";

export default function Intro() {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['AI Engineer', 'AI Developer', 'AI Tester'],
            typeSpeed: 20,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return(
        <section id="hero" className="hero section dark-background">
            <Image
                src="/sep.jpg"
                alt=""
                width={1600}
                height={900}
                priority
                data-aos="fade-in"
                className=""
            />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Nguyễn Mạnh Hùng</h2>
                <p> I'm <span ref={typedElement}></span>
                    <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
                </p>
            </div>
        </section>
    );
}