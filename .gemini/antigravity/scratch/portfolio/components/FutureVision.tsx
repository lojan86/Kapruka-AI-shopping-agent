"use client";
import { motion } from "framer-motion";
import { futureGoals } from "@/lib/data";

export default function FutureVision() {
  return (
    <section id="vision" className="py-24 bg-[#060d1f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1060_0%,_transparent_70%)] opacity-40" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Looking Ahead</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            My Future{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I don&apos;t just write code; I build toward a future where AI genuinely improves lives.
            Here&apos;s where I&apos;m headed in the next <strong className="text-white">3–5 years</strong>.
          </p>
        </motion.div>

        {/* Vision statement banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-violet-600/15 via-blue-600/10 to-cyan-600/15 border border-violet-500/20 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">
            &quot;To become a world-class AI/ML Engineer who builds{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              intelligent systems
            </span>{" "}
            that solve real human problems at scale, with impact.&quot;
          </p>
          <p className="mt-4 text-gray-400">-Sivalojan</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent hidden lg:block" />

          <div className="space-y-8">
            {futureGoals.map((goal, i) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:flex-row`}
              >
                {/* Card */}
                <div className="lg:w-[calc(50%-2rem)] w-full">
                  <div className="group p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />

                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                        {goal.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${goal.color} text-white mb-2`}>
                          {goal.year}
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                          {goal.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot (desktop) */}
                <div className="hidden lg:flex w-16 justify-center flex-shrink-0">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                    className={`w-5 h-5 rounded-full bg-gradient-to-r ${goal.color} shadow-lg`}
                  />
                </div>

                {/* Empty spacer on alternate side */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-400 text-lg">
              Want to be part of this journey?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5"
              >
                Let&apos;s Connect 🚀
              </a>
              <a
                href="https://linkedin.com/in/sivakumar-sivalojan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-violet-500/30 text-violet-300 font-semibold rounded-xl hover:bg-violet-500/10 transition-all"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
