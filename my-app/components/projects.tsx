"use client";

import React, {useRef, useEffect} from "react";
import SectionHeading from "./section_heading";
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

type ProjectProps = typeof projectsData[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div  ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-8 sm:mb-10 last:mb-0">
        <section className="bg-gray-300 max-w-[60rem] border-black/5 overflow-hidden sm:pr-8 sm:mb-8 relative sm:h-[20rem] 
            hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        >
            <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
                <h2 className="text-2x1 font-semibold">{title}</h2>
                <p className="mt-2 leading-relaxed">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {
                        tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider 
                            text-white rounded-full dark:text-white/70" key={index}>{tag}</li>
                        ))
                    }
                </ul>
            </div>

            <Image src={imageUrl} alt={title} quality={95} 
                className="absolute top-20 right-0.5 w-[28.25rem] rounded-t-lg shadow-2x1" 
            />
        </section>
        </motion.div>
    )
}