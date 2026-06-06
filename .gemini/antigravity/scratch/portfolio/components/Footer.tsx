"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "@/components/Icons";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#020609] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1729_1px,transparent_1px),linear-gradient(to_bottom,#0f1729_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top area */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                SS
              </div>
              <span className="text-white font-bold text-lg">Sivakumar Sivalojan</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI/ML Engineer & Software Developer building intelligent solutions for real-world impact.
            </p>
            <div className="flex gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/8 text-gray-500 hover:text-white hover:border-white/20 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/8 text-gray-500 hover:text-blue-400 hover:border-blue-500/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-white/5 border border-white/8 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
            <div className="mt-6">
              <a
                href="mailto:lojan279@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Sivakumar Sivalojan · {new Date().getFullYear()}
          </p>
          <p className="text-gray-700 text-xs">Next.js · Tailwind CSS · Framer Motion</p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-gray-500 hover:text-white hover:border-white/20 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
