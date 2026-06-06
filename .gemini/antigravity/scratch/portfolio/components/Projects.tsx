"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "@/components/Icons";

// Icon alias for consistency
const GithubIcon = Github;

const categories = ["All", "Computer Vision", "Machine Learning", "Deep Learning", "LLM / NLP", "LLM / RAG", "ML Deployment", "Full Stack", "Mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#060d1f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">What I&apos;ve Built</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-white/10 rounded-full`}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-0.5">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {expanded === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 text-sm overflow-hidden"
                      >
                        <div className="p-3 rounded-xl bg-white/3 border border-white/8">
                          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Problem</p>
                          <p className="text-gray-300">{project.problem}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/3 border border-white/8">
                          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">My Contribution</p>
                          <p className="text-gray-300">{project.contribution}</p>
                        </div>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-10 border border-white/10`}>
                          <p className="text-gray-500 text-xs font-semibold uppercase mb-1">Result / Impact</p>
                          <p className="text-white font-medium">{project.result}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-white/5 text-gray-400 border border-white/10 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:text-white hover:border-white/20 transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> GitHub
                      </a>
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Demo
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
                    >
                      {expanded === project.id ? (
                        <><ChevronUp className="w-4 h-4" /> Less</>
                      ) : (
                        <><ChevronDown className="w-4 h-4" /> Details</>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
