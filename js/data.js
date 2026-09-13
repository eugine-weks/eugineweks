/* Shared content data — replace these placeholders with real details. */

export const profile = {
  name: "Eugine Weks",
  firstName: "Eugine",
  role: "Software Engineer",
  roles: ["Full Stack Developer", "UI/UX Designer", "API & AI Engineer"],
  tagline:
    "I build secure, scalable, and AI-powered web applications that solve real-world problems.",
  email: "neuroweks@gmail.com",
  phone: "+254 180102741",
  location: "Bungoma, Kenya",
};

export const socials = [
  { name: "Facebook", icon: "facebook", url: "https://facebook.com/" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
  { name: "GitHub", icon: "github", url: "https://github.com/" },
  { name: "Instagram", icon: "instagram", url: "https://instagram.com/" },
];

export const navLinks = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Skills", href: "skills.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Services", href: "services.html" },
  { label: "Contact", href: "contact.html" },
];

export const stats = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Years of Experience", value: 3, suffix: "" },
  { label: "Happy Clients", value: 10, suffix: "+" },
  { label: "Technologies Used", value: 12, suffix: "" },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: "layout",
    level: 95,
    description:
      "Pixel-accurate, accessible interfaces built with modern component architecture and design systems.",
    stack: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    icon: "server",
    level: 90,
    description:
      "Secure, well-tested services, authentication flows and business logic built to scale.",
    stack: ["Node.js", "Express", "Python", "PostgreSQL"],
  },
  {
    title: "APIs & AI Integration",
    icon: "sparkles",
    level: 88,
    description:
      "REST and GraphQL APIs plus LLM-powered features such as smart search, chat and automation.",
    stack: ["REST", "GraphQL", "OpenAI", "Webhooks"],
  },
  {
    title: "UI/UX Appreciation",
    icon: "pen",
    level: 85,
    description:
      "Prototyping, motion detail and accessibility work that make products feel genuinely premium.",
    stack: ["Figma", "Design Systems", "Motion", "A11y"],
  },
  {
    title: "Cloud & Deployment",
    icon: "cloud",
    level: 87,
    description:
      "Containerised deployments, CI/CD pipelines and cost-aware infrastructure with monitoring.",
    stack: ["Docker", "AWS", "CI/CD", "Nginx"],
  },
];

 export const journey = [
  {
    year: "2023",
    title: "Learned Basic Computing",
    description:
      "Learned typing printing and use of Microsoft office such as word, excel and ms access to create databases.",
  },
  {
    year: "2024",
    title: "First Touch of the Web",
    description:
      "Discovered web technologies and learned responsive web  design in html, css and JavaScript.",
  },
  {
    year: "2025",
    title: "Explored Advanced JavaScript",
    description:
      "Learned DOM manipulation, array mapping, json data formatting and APIs in JavaScript.",
  },
  {
    year: "2026",
    title: "Full Stack Development ",
    description:
      "Dived into web programing and creating scalable projects in React, Typescript, Node.js, PostgreSQL and Python.",
  },
];

export const services = [
  {
    title: "Web Development",
    icon: "globe",
    description:
      "End-to-end websites and web apps built with a modern stack, from first sketch to launch day.",
  },
  {
    title: "Frontend Development",
    icon: "layout",
    description: "Component-driven interfaces that are fast, accessible and delightful to use.",
  },
  {
    title: "Backend Development",
    icon: "server",
    description:
      "Reliable server logic, authentication and integrations built with security in mind.",
  },
  {
    title: "REST API Development",
    icon: "plug",
    description:
      "Documented, versioned APIs that other teams and products can confidently build on.",
  },
  {
    title: "Database Design",
    icon: "database",
    description:
      "Normalised schemas, sane indexes and safe migrations that keep data fast and trustworthy.",
  },
  {
    title: "Website Maintenance",
    icon: "wrench",
    description: "Updates, monitoring, backups and dependency care so nothing quietly breaks.",
  },
  {
    title: "Responsive Web Design",
    icon: "phone",
    description: "Mobile-first layouts that hold up from small phones to ultrawide displays.",
  },
  {
    title: "Performance Optimization",
    icon: "gauge",
    description: "Core Web Vitals audits, bundle trimming and caching strategies for instant loads.",
  },
];

export const experience = [
  {
    role: "Founder & Software Engineer",
    company: "Fixera Platforms",
    duration: "2026 — Present",
    responsibilities: [
      "Lead development of AI-assisted client platforms end to end.",
      "Own frontend architecture, the design system and code review culture.",
      "Mentor junior developers and manage release cycles.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Founder & Developer",
    company: "Quantum Systems",
    duration: "2024 — 2026",
    responsibilities: [
      "Explored the design of modern interactive and reponsive websites for the purpose of learning.",
      "Created my first website including my portfolio website and a frontend site for christ for all people church."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "VS Code"],
  },
  {
    role: "Learned Computer Studies",
    company: "Chewoyet High",
    duration: "2021 — 2024",
    responsibilities: [
      "Learned basic computing and computer best practices for day to day use.",
      "Introduced to database design and created information management systems using Microsoft access.",
    ],
    tech: ["MS Access", "Excell", "Word", "Powerpoint"],
  },
];

export const projects = [
  {
    title: "Church Management System ",
    image: "images/project-1.jpg",
    category: "Full Stack",
    description:
      "CAP - church system with role based access for members and Admin, and an intergrated M-pesa API.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/eugine-weks/church-website",
    demo: "https://ejneuro.github.io/church-website",
  },
  {
    title: "My Portfolio website",
    image: "images/project-2.jpg",
    category: "Frontend",
    description: "This is my personal portfolio app to showcase my bio technical skills and featured projects.",
    tech: ["JavaScript", "CSS", "Morden UI/UX"],
    github: "https://github.com/eugine-weks/eugineweks",
    demo: "https://eugineweks.netlify.app/",
  },
  {
    title: "WhatsApp Event-Booking App",
    image: "images/project-3.jpg",
    category: "Full Stack",
    description:
      "A WhatsApp first event booking platform with payment intergration and ticket processing.",
    tech: ["React", "Python", "OpenAI"],
    github: "https://github.com/eugine-weks",
    demo: "https://eventshub.com/",
  },
  {
    title: "Orbit API Platform",
    image: "images/project-4.jpg",
    category: "Backend",
    description:
      "Versioned REST API with rate limiting, webhook delivery and auto-generated documentation.",
    tech: ["Node.js", "Redis", "OpenAPI"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Flowboard Task Manager",
    image: "images/project-5.jpg",
    category: "Full Stack",
    description:
      "Collaborative kanban board with realtime presence, drag-and-drop and activity history.",
    tech: ["JavaScript", "WebSockets", "Docker"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Havenly Property Finder",
    image: "images/project-6.jpg",
    category: "Frontend",
    description:
      "Map-driven property discovery with saved searches, filters and shareable listing pages.",
    tech: ["JavaScript", "Maps API", "CSS"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];
