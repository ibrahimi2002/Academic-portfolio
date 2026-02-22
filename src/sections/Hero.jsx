import { ArrowRight, Download } from "lucide-react";
import { Button } from "../Component/Button";
import heroBg from "../assets/hero-bg.jpg";
import profilePhoto from "../assets/profile-photo.png";

const skills = [
  "Python",
  "JavaScript",
  "SQL",
  "Dart",
  "NumPy",
  "Pandas",
  "Data Visualization",
  "Machine Learning",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Django",
  "Flutter",
  "GitHub",
  "Jupyter Notebook",
  "VS Code",
  "Microsoft Office",
  "WordPress",
  "Webflow",
  "Blender",
  "Photoshop",
  "AutoCAD",
  "Video Editing",
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="max-w-3xl space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Software Engineer · Data Analyst
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafting <span className="text-primary">digital</span>
              <br />
              experiences with
              <br />
              <span className="font-serif italic font-normal text-white">
                precision.
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg">
              Hi, I’m Rahila Ibrahimi, a software engineer specializing in
              Programming. I build scalable, performant web applications that
              users love.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </Button>

              {/* Disabled CV Button */}
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border border-primary/40 text-muted-foreground/70 cursor-not-allowed opacity-70"
                title="CV available upon request"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-center">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">
              {/* Glow gradient layer */}
              <div
                className="
                  absolute inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-primary/30
                  via-transparent
                  to-primary/10
                  blur-2xl
                  animate-pulse
                "
              />

              {/* Glass card */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-6 glass rounded-xl px-4 py-2 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-white/90">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">
                  Years Exp.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};