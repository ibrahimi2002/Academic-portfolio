// src/sections/Projects.jsx
import { ArrowUpRight, Github } from "lucide-react";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

const projects = [
  {
    title: "Coffee Shop Landing Page",
    description:
      "A modern and visually rich coffee shop website featuring a hero section, product highlights, and strong call-to-action buttons.",
    image: p1,
    tags: ["React", "Tailwind", "UI Design"],
    link: "#",
    github: "https://github.com/ibrahimi2002/beauty-website.git",
  },
  {
    title: "Crypto Analytics Dashboard",
    description:
      "A clean cryptocurrency dashboard displaying real-time market prices, trends, and performance cards with a dark modern interface.",
    image: p2,
    tags: ["React", "Dashboard", "Charts"],
    link: "#",
    github: "https://github.com/ibrahimi2002/salon-portfolio.git",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive developer portfolio showcasing projects, skills, and contact sections with smooth animations and modern layout.",
    image: p3,
    tags: ["React", "Tailwind", "Responsive"],
    link: "#",
    github: "https://github.com/ibrahimi2002/7th-project-degital-devices-e-commarce.git",
  },
  {
    title: "Business Landing Page",
    description:
      "A professional corporate landing page designed to highlight services, features, and client engagement with clean UI components.",
    image: p4,
    tags: ["React", "UI/UX", "Branding"],
    link: "#",
    github: "https://github.com/ibrahimi2002/beauty-website.git",
  },
  {
    title: "E-commerce Interface",
    description:
      "A user-friendly e-commerce front-end interface with product sections, filtering options, and intuitive navigation flow.",
    image: p5,
    tags: ["React", "Frontend", "UX"],
    link: "#",
    github: "https://github.com/ibrahimi2002/e-commarce-6th-project.git",
  },
  {
    title: "Creative Web Concept",
    description:
      "An experimental and creative web layout exploring modern typography, animations, and immersive visual storytelling.",
    image: p6,
    tags: ["React", "Animation", "Design"],
    link: "#",
    github: "https://github.com/ibrahimi2002/event-website.git",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          {/* Small Top Label */}
          <span
            className="text-sm font-medium tracking-wider uppercase animate-fade-in animation-delay-100"
            style={{ color: "var(--color-primary)" }}
          >
            FEATURED WORK
          </span>
 {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200">
            <span style={{ color: "var(--color-primary)" }}>Projects that</span>{" "}
            <span
              className="font-serif italic font-normal"
              style={{ color: "var(--color-foreground)" }}
            >
              make an impact.
            </span>
          </h2>

          {/* Paragraph */}
          <p
            className="animate-fade-in animation-delay-300"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid (3 columns, 2 rows) */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image + Overlays */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(32,178,166,0.4)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};