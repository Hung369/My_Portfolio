import React from "react";
import vitalsignImg from '@/public/vital_sign.jpg';
import automationImg from '@/public/automation.jpg';
import onnxImg from '@/public/onnx.png';

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projectsData = [
    {
      title: "Vital Sign Detection",
      description: "Fully developed algorithm for radar system to track driver vital sign (heart rate and breath rate) while driving",
      tags: ["Python", "Signal Processing", "mmwave SDK"],
      imageUrl: vitalsignImg,
    },
    {
      title: "Visual Automation Test",
      description: "Building a visual AI model for automation test robot arm",
      tags: ["Pytorch", "Tensorflow", "Tkinter", "Robot Framework"],
      imageUrl: automationImg,
    },
    {
      title: "Embedded AI model",
      description: "Deploy violence detection model on CCS2 circuit with ONNX framework for DMS/OMS project",
      tags: ["C++", "ONNX framework"],
      imageUrl: onnxImg,
    },
  ] as const;