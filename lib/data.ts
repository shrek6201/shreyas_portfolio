import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sumz from "@/public/sumz.png";
import transfor_me from "@/public/transfor_me.png";

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

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Pune, Maharashtra",
    description:
      "I graduated with a degree of B.B.A(C.A). Immediately Started looking for jobs as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Masters Degree",
    location: "Pune, Maharashtra",
    description:
      "I started pursuing my Masters degree in Computer Applications. Started hunting for jobs or internships related to Data Analytics and AI.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Software Development Intern",
    location: "Pune, Maharashtra",
    description:
      "I'm now a full-stack developer working as a Data Analyst. My project consists of deriving detailed human-readable results by performing data analysis on incoming information and using AI to transform it into Clear and concise texts.",
    icon: React.createElement(FaPython),
    date: " April 2023 - Sept 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Summize",
    description:
      "Transform lengthy and extensive websites and texts into clear and concise articles using the power of AI!",
    tags: ["React", "TypeScript", "RapidApi", "Artificial Intelligence"],
    imageUrl: sumz,
  },
  {
    title: "Transfor_ME",
    description:
      "Get easy to understand and helpful exercise videos anywhere you go. Transfor_ME contains 1000+ exercise to transform You!",
    tags: ["React", "JavaScript", "Firebase", "RapidApi"],
    imageUrl: transfor_me,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Django",
  "C Lang",
  "C++",
  "Adv. Java",
  "Adv. Python",
] as const;