"use client";

import React, { useEffect }  from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active_section_context";


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id='intro' className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/ava.png"
                            alt="Portrait"
                            width={200}
                            height={200}
                            quality={100}
                            priority={true}
                            className='h-35 w-35 object-cover mt-28'
                        />
                    </motion.div>
                </div>
            </div>

            <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Nguyễn Mạnh Hùng.</span> I'm a{" "}
                <span className="font-bold">AI developer</span> with{" "}
                <span className="font-bold">6 months</span> of experience. I enjoy
                building, testing and deploying <span className="italic">AI models</span>.
                My focus is{" "} <span className="underline">Computer Vision</span>.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
                rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >Contact me here</Link>

                <a className="group bg-slate-300 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
                    hover:scale-110 active:scale-105 transition cursor-pointer border-black dark:bg-white/10"
                >
                    Download CV{" "} <HiDownload/>
                </a>

                <a className="bg-slate-300 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
                    hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black dark:bg-white/10 
                    dark:text-white/60"
                    href="https://github.com/Hung369"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>

        </section>
    );
}