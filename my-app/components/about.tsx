'use client';

import React from "react";
import SectionHeading from "./section_heading";
import { motion } from "framer-motion";

export default function AboutMe(){
    return(
        <motion.section className="mb-28 max-2-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <div className="mb-3">
                <h2 className="italic"><strong>Education</strong></h2>
                <p><strong>VNUHCM - University of Science (HCMUS)</strong></p>
                <p> <span className="italic">Score:</span> 8.65/10</p>
                <p> <span className="italic">Major:</span> Information Technology</p>
                <p>Specialization in Computer Vision</p>
            </div>

            <div>
            <h2 className="italic"><strong>Working Experience</strong></h2>
                <p><strong>BOSCH Global Software</strong> - 6 months (Jan. 2nd, 2024 - June 2nd, 2024)</p>
            </div>
        </motion.section>
    )
}