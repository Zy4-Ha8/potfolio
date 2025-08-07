import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Icon,
  ExternalLink,
  Code,
  Server,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
  Instagram,
} from "lucide-react";
import WhatsAppImage from "../assets/whatsapp.svg";
function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#288f7e] bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <div className="grid md:grid-cols-2 gap-12 ">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development.
              </p>

              <div className="space-y-4  ">
                <div className="flex items-center">
                  <Mail className="text-[#288f7e] mr-4" size={20} />
                  <span>haiderumbra@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="text-[#288f7e] mr-4" size={20} />
                  <a href="https://github.com/Zy4-Ha8" target="_blank">
                    Github
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    src={WhatsAppImage}
                    alt="WhatsApp"
                    className="mr-4"
                    style={{ width: 20, height: 20 }}
                  />
                  <a
                    href="https://wa.me/message/WI3JQHRNQCM7A1"
                    target="_blank"
                  >
                    Whatsapp
                  </a>
                </div>
                <div className="flex items-center">
                  <Instagram className="text-[#288f7e] mr-4" size={20} />
                  <a
                    href="https://www.instagram.com/h_a_i_d_e_r_l_a_i?igsh=MWd0azVxZDgyamFjaA=="
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-[#288f7e] mr-4" size={20} />
                  <a
                    href="https://www.linkedin.com/in/haider-ali-232783289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    linkedin
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:border-[#288f7e] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:border-[#288f7e] focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 focus:border-[#288f7e] focus:outline-none transition-colors resize-none"
                ></textarea>
                <button className="w-full px-8 py-3 bg-[#288f7e] hover:bg-[#2a9f8a] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
