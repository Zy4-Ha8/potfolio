import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-[#288f7e] bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Chat App",
              description:
                "Full-stack chat application with Supabase real-time subscriptions and React frontend",
              tech: ["React", "Supabase", "TypeScript"],
              type: "Full Stack",
              icon: <Globe className="text-[#288f7e]" size={24} />,
            },
            {
              title: "Task Management API",
              description:
                "RESTful API built with Express.js and PostgreSQL for task management system",
              tech: ["Express.js", "PostgreSQL", "JWT"],
              type: "Backend",
              icon: <Server className="text-emerald-400" size={24} />,
            },
            {
              title: "Portfolio Website",
              description:
                "Responsive portfolio website with glassmorphism design and smooth animations",
              tech: ["React", "Tailwind CSS", "Framer Motion"],
              type: "Frontend",
              icon: <Code className="text-cyan-400" size={24} />,
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                {project.icon}
                <span className="text-sm px-3 py-1 bg-white/20 rounded-full">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#288f7e] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-[#288f7e]/20 rounded-full border border-[#288f7e]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center text-sm hover:text-[#288f7e] transition-colors">
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </button>
                <button className="flex items-center text-sm hover:text-[#288f7e] transition-colors">
                  <Github size={16} className="mr-1" />
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={"/soon"}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-semibold border border-white/30 transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
