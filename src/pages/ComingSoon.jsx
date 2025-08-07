import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  Code,
  Rocket,
  Sparkles,
  Mail,
  Bell,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ComingSoon = ({ onGoBack, pageName = "This Page" }) => {
  const [email, setEmail] = useState("");
  const [isNotified, setIsNotified] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifyMe = () => {
    if (email) {
      setIsNotified(true);
      setEmail("");
      setTimeout(() => setIsNotified(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#1a5a52] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#288f7e] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20 ">
        <Link
          to={"/"}
          onClick={onGoBack}
          className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-8">
            {/* Icon with Animation */}
            <div className="mb-8">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#288f7e] to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-black to-gray-900 rounded-full flex items-center justify-center">
                  <Rocket size={48} className="text-[#288f7e] animate-bounce" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#288f7e] to-cyan-400 bg-clip-text text-transparent">
              Coming Soon
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300">
              {pageName} is Under Development
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm working hard to bring you something amazing. This page is
              currently being crafted with attention to detail and modern
              technologies.
            </p>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Code className="text-[#288f7e] mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Modern Design</h3>
                <p className="text-sm text-gray-400">
                  Built with the latest technologies and best practices
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Sparkles className="text-emerald-400 mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Interactive Experience</h3>
                <p className="text-sm text-gray-400">
                  Engaging animations and smooth user interactions
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Rocket className="text-cyan-400 mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">High Performance</h3>
                <p className="text-sm text-gray-400">
                  Optimized for speed and accessibility
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            {/* <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <Clock className="text-[#288f7e] mr-2" size={24} />
                <h3 className="text-xl font-semibold">Estimated Launch</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#288f7e] mb-1">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Notify Me Form */}
            {/* <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                <Bell className="mr-2 text-[#288f7e]" size={20} />
                Get Notified When It's Ready
              </h3>

              {isNotified ? (
                <div className="bg-[#288f7e]/20 backdrop-blur-md rounded-full px-6 py-4 border border-[#288f7e]/30 flex items-center justify-center">
                  <CheckCircle className="mr-2 text-[#288f7e]" size={20} />
                  <span className="text-[#288f7e] font-semibold">
                    Thanks! You'll be notified soon.
                  </span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 focus:border-[#288f7e] focus:outline-none transition-all duration-300 placeholder-gray-400"
                  />
                  <button
                    onClick={handleNotifyMe}
                    className="px-6 py-3 bg-[#288f7e] hover:bg-[#2a9f8a] rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    <Mail size={16} className="mr-2" />
                    Notify
                  </button>
                </div>
              )}
            </div> */}
          </div>

          {/* Progress Indicator */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Development Progress</span>
              <span className="text-sm text-[#288f7e] font-bold">75%</span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#288f7e] to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Almost there! Just putting the finishing touches.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-10 left-10 opacity-30 pointer-events-none">
        <div className="animate-bounce delay-300">
          <Code className="text-[#288f7e]" size={32} />
        </div>
      </div>
      <div className="fixed top-1/4 right-10 opacity-20 pointer-events-none">
        <div className="animate-pulse delay-700">
          <Sparkles className="text-cyan-400" size={28} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
