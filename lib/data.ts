import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  SiAndroidstudio,
  SiCss,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
} from "react-icons/si";

export interface Skill {
  title: string;
  Icon: IconType;
  tone: string;
  category: "Frontend" | "Mobile" | "Backend" | "Tools";
}

export interface Project {
  id: number;
  title: string;
  img: string;
  desc: string;
  git?: string;
  link?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  Icon: IconType;
  accent: string;
  description: string;
}

export const navItems = ["Home", "Skills", "Projects", "Contact"] as const;

export const skills: Skill[] = [
  { title: "React.js", Icon: SiReact, tone: "#61dafb", category: "Frontend" },
  { title: "Next.js", Icon: SiNextdotjs, tone: "#ffffff", category: "Frontend" },
  { title: "TypeScript", Icon: SiTypescript, tone: "#3178c6", category: "Frontend" },
  { title: "JavaScript", Icon: SiJavascript, tone: "#f7df1e", category: "Frontend" },
  { title: "HTML5", Icon: SiHtml5, tone: "#e34f26", category: "Frontend" },
  { title: "CSS", Icon: SiCss, tone: "#1572b6", category: "Frontend" },
  { title: "Tailwind CSS", Icon: SiTailwindcss, tone: "#38bdf8", category: "Frontend" },
  { title: "Kotlin", Icon: SiKotlin, tone: "#7f52ff", category: "Mobile" },
  { title: "Jetpack Compose", Icon: SiJetpackcompose, tone: "#3ddc84", category: "Mobile" },
  { title: "Android Studio", Icon: SiAndroidstudio, tone: "#3ddc84", category: "Mobile" },
  { title: "Python", Icon: SiPython, tone: "#3776ab", category: "Backend" },
  { title: "Django", Icon: SiDjango, tone: "#092e20", category: "Backend" },
  { title: "PostgreSQL", Icon: SiPostgresql, tone: "#336791", category: "Backend" },
  { title: "Git", Icon: SiGit, tone: "#f05032", category: "Tools" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "TestEdify Learning Platform",
    img: "/edify.jpg",
    desc: "Edify is a comprehensive Next.js 16 educational platform featuring tailored portals for students, teachers, and administrators. It integrates Gemini AI for automated test generation, tracks student progress with gamified XP and streaks, and offers robust curriculum-driven navigation. Built with React 19, Tailwind CSS, and Firebase, it supports complex workflows like image-based inputs, LaTeX math rendering, and multi-language support to modernize classroom management.",
    git: "https://github.com/umidjon0339/edify-student",
    link: "https://testedify.uz",
  },
  {
    id: 2,
    title: "QR Restaurant Menu & POS",
    img: "/restaurant.jpg",
    desc: "A real-time restaurant ordering platform built with Next.js, TypeScript, and Firebase. It features a dual-experience architecture: a secure Admin dashboard for staff to manage menus, track live orders, and generate table-specific QR codes, alongside a mobile-first customer interface for browsing and cart management using Zustand. The application leverages Firestore real-time listeners for live order status updates and includes multi-language support (Uzbek, Russian, English) with a responsive, themed UI tailored via Tailwind CSS.",
    git: "https://github.com/umidjon0339/yalla-menu",
    link: "https://yalla-menu.vercel.app",
  },
  {
    id: 3,
    title: "Modern Clinic Website",
    img: "/clinicPreview.JPG",
    desc: "A clean, responsive informational website for a medical clinic built with Next.js, TypeScript, and Tailwind CSS. The project utilizes the Next.js App Router to deliver fast, dynamic routing for doctor profiles, service listings, and appointment booking interfaces. It features a modular component architecture and a custom static data layer, demonstrating a strong grasp of modern frontend practices for building accessible, user-friendly marketing websites.",
    git: "https://github.com/umidjon0339/healthplus-clinic",
    link: "https://healthplus-clinic-c3ru.vercel.app/",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Telegram",
    href: "https://t.me/umidjon0339",
    Icon: SiTelegram,
    accent: "#2AABEE",
    description: "Fast replies on Telegram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ujcodes/",
    Icon: FaLinkedin,
    accent: "#0A66C2",
    description: "Professional profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/umidjon0339",
    Icon: FaGithub,
    accent: "#ffffff",
    description: "View projects and code",
  },
];
