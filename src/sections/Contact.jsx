import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

/* ----------------------- Static data ----------------------- */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rahilibrahimi2002@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rahilibrahimi2002@gmail.com&su=Project%20Inquiry",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+7 707 891 1621",
    href: "https://wa.me/77078911621",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kazakhstan",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/ibrahimi2002", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rahila-ibrahimi-b66503309/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/ribrahimi2002?s=21", label: "X" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ibrahimi.rahil/",
    label: "Instagram",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // Read Vite env vars safely
  const EMAILJS = useMemo(() => {
    return {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    };
  }, []);

  const envMissing =
    !EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (envMissing) {
      setStatus({
        state: "error",
        message:
          "EmailJS env variables are missing. Check .env and restart npm run dev.",
      });
      return;
    }

    setStatus({ state: "loading", message: "Sending..." });

    try {
      // IMPORTANT: these names must match your EmailJS template variables:
      // {{name}}, {{email}}, {{message}}, {{time}}
      const params = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        params,
        EMAILJS.publicKey
      );

      setStatus({ state: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error FULL:", err);
      setStatus({
        state: "error",
        message:
          err?.text ||
          err?.message ||
          "Failed to send. Please check EmailJS service/template/public key.",
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get in touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            <span style={{ color: "var(--color-primary)" }}>Let’s build</span>{" "}
            <span className="font-serif italic font-normal">
              something great.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I’d love to hear about it. Send me a message
            and let’s discuss how we can work together.
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

        {/* Layout */}
        <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-3 items-start">
          {/* LEFT: Form */}
          <div className="glass rounded-3xl p-6 border border-white/10 lg:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-white/10 focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              {(status.state !== "idle" || envMissing) && (
                <p
                  className={`text-sm ${
                    status.state === "success"
                      ? "text-primary"
                      : "text-red-400"
                  }`}
                >
                  {envMissing
                    ? "EmailJS env variables are missing. Check .env and restart npm run dev."
                    : status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={status.state === "loading"}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:opacity-90 disabled:opacity-60"
              >
                {status.state === "loading" ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* RIGHT: Cards + Social separate bottom */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="glass rounded-3xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                  <a
  key={idx}
  href={item.href}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 rounded-2xl p-4 bg-white/5 border border-white/10 hover:border-primary/40 transition-all"
>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Currently Available */}
            <div className="glass rounded-3xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <p className="font-semibold">Currently Available</p>
              </div>

              <p className="text-sm text-muted-foreground">
                I’m currently open to new opportunities and exciting projects.
                Whether you need a full-time team member or a freelance
                collaborator, feel free to reach out.
              </p>
            </div>

            {/* Social Links (Bottom - Separate) */}
            <div className="flex items-center gap-3 pt-2 mb-20">
              <span className="text-sm text-muted-foreground mt-20">Follow:</span>

              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 mt-20"
                  >
                    <Icon className="w-9 h-9  " />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};