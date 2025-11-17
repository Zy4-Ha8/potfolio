import avatar from "../assets/avatar.jpg";

function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#288f7e] bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="w-48 h-58 mx-auto bg-gradient-to-br from-[#288f7e] to-cyan-400 rounded-2xl flex items-center justify-center text-6xl font-bold">
                <img className="w-full h-full rounded-2xl object-top-left object-cover " src={avatar} alt="" />
              </div>
            </div>

            <div className="space-y-6 text-center md:text-start">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate frontend developer evolving into a full-stack
                developer. With expertise in modern React applications, I'm now
                building complete solutions using Supabase as my
                backend-as-a-service platform for rapid development.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently mastering Express.js and Nest.js to expand my backend
                capabilities. I focus on creating scalable applications that
                combine beautiful user interfaces with robust server-side
                architecture and efficient database management.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <span className="px-4 py-2 bg-[#288f7e]/20 rounded-full text-sm border border-[#288f7e]/30">
                  Frontend Expert
                </span>
                <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-sm border border-emerald-500/30">
                  Backend Learning
                </span>
                <span className="px-4 py-2 bg-teal-500/20 rounded-full text-sm border border-teal-500/30">
                  Full Stack Journey
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
