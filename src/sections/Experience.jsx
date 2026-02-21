import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "Mar 2025 — Present",
    role: "Web Design Intern",
    company: "FEFA Academy (Platoonpro, Paris)",
    description:
      "Completed a structured web design internship. Designed and developed 10+ web projects focused on layout, usability, and responsive design; gained hands-on experience with practical front-end workflows and WordPress.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Webflow"],
    current: true,
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Summer Research Program (Online)",
    company: "Nazarbayev University",
    description:
      "Analyzed global HIV/AIDS burden (1990–2021) using GBD data with trend analysis and Python-based statistical modeling (incidence, mortality, DALYs).",
    technologies: ["Python", "Pandas", "Statistics", "GBD Data", "EAPC"],
    current: false,
  },
  {
    period: "Oct 2025 — Mar 2026",
    role: "Research Project (Conference)",
    company: "Rahela Trust — Afghan Diaspora Annual Conference (UK)",
    description:
      "Research project: 'Education Under Restriction' — analyzing technology as an alternative pathway for female university students in Afghanistan.",
    technologies: ["Research", "Data Analysis", "Writing", "Presentation"],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "Volunteer, Educational Outreach",
    company: "Online Afghanistan Academy (AOA)",
    description:
      "Provided scholarship information and application guidance to Afghan students via online seminars and educational channels; supported learners with step-by-step application support.",
    technologies: ["Mentoring", "Scholarship Guidance", "Communication"],
    current: false,
  },
  {
    period: "2024 — Present",
    role: "Vice President ( International student association)",
    company: "Energo University (Almaty)",
    description:
      "Promoted to Vice President in recognition of leadership and contribution; supported academic and social activities and improved communication and networking across the club.",
    technologies: ["Leadership", "Teamwork", "Public Speaking"],
    current: false,
  },
  {
    period: "2024 — Present",
    role: "Member",
    company: "KIMEP University Toastmasters Club",
    description:
      "Developed confidence, communication, and leadership skills through structured public speaking and feedback sessions.",
    technologies: ["Public Speaking", "Leadership", "Communication"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* BG glow like screenshot */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-sm font-medium tracking-wider uppercase animate-fade-in"
            style={{ color: "var(--color-primary)" }}
          >
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            <span style={{ color: "var(--color-primary)" }}>Experience that</span>{" "}
            <span className="font-serif italic font-normal">
              speaks volumes.
            </span>
          </h2>

          <p
            className="animate-fade-in animation-delay-200"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            A timeline of my professional growth, from learning and volunteering to research and real-world product building.
          </p>
        </div>

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
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile: left, desktop: center) */}
          <div
            className="
              timeline-glow
              absolute left-4 md:left-1/2 top-0 bottom-0
              w-[2px]
              bg-gradient-to-b from-primary/70 via-primary/30 to-transparent
              md:-translate-x-1/2
            "
          />

          {/* Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-4 md:left-1/2 top-8
                    w-3 h-3 rounded-full
                    bg-primary
                    md:-translate-x-1/2
                    shadow-[0_0_25px_rgba(32,178,166,0.8)]
                  "
                />

                {/* Content (mobile always right of line; desktop alternates) */}
                <div
                 className={`pl-12 md:pl-0 ${
  idx % 2 === 0
    ? "md:pr-16"
    : "md:col-start-2 md:pl-16"
}`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-primary/90">
                        {exp.period}
                      </span>

                      {exp.current && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-sm mt-1 text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* Tech chips */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Optional small action like template */}
                    <div
                      className={`mt-5 ${
                        idx % 2 === 0 ? "md:flex md:justify-end" : ""
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 text-sm text-primary/90">
                        Learn more <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty column so alternating works cleanly */}
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};