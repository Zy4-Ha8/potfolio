import React from "react";
import { Code, Server, Globe } from "lucide-react";
function SkillSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-[#288f7e] bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white/10 backdrop-blur-md cursor-pointer rounded-2xl p-8 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Code className="text-[#288f7e] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="space-y-4">
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
              ].map((skill) => (
                <div key={skill} className="flex justify-between items-center">
                  <span>{skill}</span>
                  <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#288f7e] to-cyan-400 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white/10 backdrop-blur-md cursor-pointer rounded-2xl p-8 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Server className="text-emerald-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Backend & Database</h3>
            </div>
            <div className="space-y-4">
              {[
                "Supabase",
                "Express.js",
                "Nest.js",
                "PostgreSQL",
                "REST APIs",
                "Authentication",
              ].map((skill) => (
                <div key={skill} className="flex justify-between items-center">
                  <span>{skill}</span>
                  <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      style={{ width: skill === "Supabase" ? "85%" : "65%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="bg-white/10 backdrop-blur-md cursor-pointer rounded-2xl p-8 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <Globe className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Tools & Others</h3>
            </div>
            <div className="space-y-4">
              {["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="flex justify-between items-center"
                  >
                    <span>{skill}</span>
                    <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
