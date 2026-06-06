"use client";
import { motion } from "framer-motion";
import { aboutStats, education, personalInfo } from "@/lib/data";
import { GraduationCap, MapPin, BookOpen } from "@/components/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#060d1f] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Get to know me</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span> My Journey
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I&apos;m an undergraduate pursuing a <strong className="text-white">B.Sc. in Information Technology</strong> at
                  Rajarata University of Sri Lanka, with a deep focus on Artificial Intelligence and Machine Learning.
                  My journey began with curiosity a desire to understand how machines could be taught to &quot;think.&quot;
                </p>
                <p>
                  That curiosity evolved into hands-on expertise. I&apos;ve built everything from <strong className="text-blue-400">computer vision systems</strong> detecting animals in the wild, to <strong className="text-cyan-400">LLM-powered chatbots</strong> drawing from 2,000-year-old Tamil wisdom. Every project pushes me to bridge the gap between classical knowledge and cutting-edge AI.
                </p>
                <p>
                  I&apos;m a firm believer that the best technology is invisible; it just <em>works</em> for people. That&apos;s why I focus on <strong className="text-violet-400">end-to-end solutions</strong>: from research and model training to deployment and user experience.
                </p>
                <p>
                  Beyond code, I&apos;ve served as a <strong className="text-white">web designer for IEEE Sri Lanka</strong> and volunteered at national tech events; because great engineers also build communities.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border border-blue-500/20 text-center hover:border-blue-500/40 transition-colors"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-base group-hover:text-blue-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-400 text-sm font-medium mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </span>
                    </div>
                    {edu.courses.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {edu.courses.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Values */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-purple-600/5 border border-violet-500/20">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">💡</span> What Drives Me
              </h3>
              <ul className="space-y-3">
                {[
                  "Continuous learner;   always exploring new AI frontiers",
                  "Passionate about healthcare and safety AI applications",
                  "Community builder through IEEE and tech events",
                  "Goal-driven with international ambitions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-violet-400 mt-0.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
