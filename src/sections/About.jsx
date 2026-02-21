import { Code2, Rocket, FlaskConical, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "I build responsive interfaces with HTML, CSS, JavaScript, React, and Next.js, focusing on clean UI and usability.",
  },
  {
    icon: Rocket,
    title: "Performance & UX",
    description:
      "I care about fast and smooth experiences—reusable components, clean structure, and practical design decisions.",
  },
  {
    icon: FlaskConical,
    title: "Research Mindset",
    description:
      "I have experience analyzing health datasets and trend modeling using Python-based workflows.",
  },
  {
    icon: Users,
    title: "Collaboration & Leadership",
    description:
      "I enjoy teamwork, communication, and taking responsibility to deliver results.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section label */}
        <p className="text-sm text-primary mb-3">ABOUT ME</p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Building the future,{" "}
          <span className="italic font-serif text-muted-foreground">
            one component at a time.
          </span>
        </h2>


        {/* Description */}
        <div className="space-y-4 text-muted-foreground max-w-3xl">
          <p>
            I’m Rahila Ibrahimi — a junior software engineer and frontend web
            developer based in Almaty. I work mainly with React and Next.js and
            enjoy turning ideas into modern, responsive interfaces.
          </p>

          <p>
            My academic work includes building an AI-powered medical diagnosis
            system and analyzing global health datasets using Python tools such
            as Pandas and Scikit-learn.
          </p>

          <p>
            Alongside development, I’m interested in AI, data-driven systems,
            and building technology that creates meaningful educational
            opportunities.
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

        {/* Mission Card */}
        <div className="mt-10 glass rounded-2xl p-6 border border-primary/20">
          <p className="italic text-muted-foreground">
            “My mission is to create digital experiences that are not just
            functional, but truly delightful — products that users love to use
            and developers love to maintain.”
          </p>
        </div>

        {/* Highlight Cards (KEEP THIS PART) */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {highlights.map((h, idx) => (
            <div key={idx} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <h.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
