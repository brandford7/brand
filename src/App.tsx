import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import {
  FaFileAlt,
  FaVideo,
  FaDollarSign,
  FaPaw,
  FaCode,
} from "react-icons/fa";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    /* {
      title: "DocuFlow SaaS",
      category: "Full-Stack Platform",
      description:
        "Enterprise document editing platform with PDF/Word editing, format conversion, and multi-gateway payment integration",
      tech: ["Nuxt 3", "Spring Boot", "PostgreSQL", "Stripe", "Paystack"],
      gradient: "from-blue-500 to-cyan-500",
      icon: <FaFileAlt className="w-6 h-6" />,
    },
   */

    {
      title: "Betting Tips Platform",
      category: "Multi-Region SaaS",
      description:
        "Pan-African betting platform with VIP tip filtering, crypto payments, and multi-gateway integration",
      tech: [
        "NestJS",
        "Nuxt 3",
        "PostgreSQL",
        "Paystack",
        "Korapay",
        "NOWPayments",
      ],
      gradient: "from-orange-500 to-red-500",
      icon: <FaDollarSign className="w-6 h-6" />,
      link: "https://successsecretbet.com/",
    },
    {
      title: "Pawfect Daily",
      category: "Pet Blog",
      description:
        "A delightful pet blog built with Next.js and Sanity CMS, delivering engaging content about pet care and stories",
      tech: ["Next.js", "Sanity CMS", "Vercel", "React"],
      gradient: "from-green-500 to-emerald-500",
      icon: <FaPaw className="w-6 h-6" />,
      link: "https://pet-blog-one.vercel.app/",
    },
    {
      title: "CodeTideHub",
      category: "Programming Blog",
      description:
        "Technical blog built with Astro and Markdown, sharing programming insights and tutorials",
      tech: ["Astro", "Markdown", "Cloudflare Pages", "TypeScript"],
      gradient: "from-indigo-500 to-purple-500",
      icon: <FaCode className="w-6 h-6" />,
      link: "https://codetidehub1.pages.dev/",
    },
  ];

  const skills = [
    { name: "React & Next.js" },
    { name: "Vue & Nuxt 3" },
    { name: "TypeScript" },
    { name: "NestJS" },
    { name: "Spring Boot" },
    { name: ".NET Core" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated cursor trail */}
      <div
        className="fixed w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <header
          className={`mb-32 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1
                className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-cyan-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Brandford Junior Korang-Teku
              </h1>
              <p
                className="text-2xl text-slate-400"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Full-Stack Developer & Technical Architect
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
              >
                <MdEmail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            <div className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10">
              <div className="text-4xl font-bold text-pink-400 mb-2">10+</div>
              <div className="text-slate-400">Technologies</div>
            </div>
          </div>
        </header>

        {/* About */}
        <section
          className={`mb-32 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2
            className="text-5xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p
                className="text-xl text-slate-300 leading-relaxed mb-6"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Full-stack developer based in Accra, Ghana, with deep expertise
                in building scalable SaaS platforms and enterprise applications.
                I specialize in modern frontend frameworks and robust backend
                architectures.
              </p>
              <p
                className="text-xl text-slate-300 leading-relaxed"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                From React ecosystems to Spring Boot microservices, I deliver
                production-ready solutions that balance technical excellence
                with business value.
              </p>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">
                      {skill.name}
                    </span>
                    {/* <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {skill.level}%
                    </span>*/}
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        transitionDelay: `${index * 100 + 400}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section
          className={`mb-32 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2
            className="text-5xl font-bold mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                onMouseEnter={() => setActiveProject(index)}
                className={`group relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeProject === index
                    ? "bg-white/10 border-white/30 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${project.gradient} mb-6 relative z-10`}
                >
                  {project.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-sm text-slate-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-yellow-300 transition-colors group/btn"
                  >
                    View Project
                    <HiExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section
          className={`text-center transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-16 rounded-3xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
            <h2
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's Build Something Amazing
            </h2>
            <p
              className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              I'm currently available for new opportunities. Whether you need a
              robust SaaS platform or a complex enterprise application, let's
              discuss how I can help.
            </p>
            <button className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-white/10 text-center text-slate-500">
          <p>&copy; 2026 Brandford Korang-Teku. All rights reserved.</p>
        </footer>
      </div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+Pro:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
