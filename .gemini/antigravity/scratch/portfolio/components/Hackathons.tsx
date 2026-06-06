"use client";
import { motion } from "framer-motion";
import { hackathons } from "@/lib/data";
import { Trophy, Calendar, ImageIcon } from "@/components/Icons";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 bg-[#060d1f] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Competitions & Events</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Hackathon{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Participation
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-400 text-sm">
            Upload your participation certificates to the cards below
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative flex gap-0 rounded-2xl overflow-hidden border border-white/8 hover:border-violet-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 bg-white/3"
            >
              {/* Left image area */}
              <div className="relative w-48 sm:w-56 flex-shrink-0 overflow-hidden">
                <img
                  src={hack.image}
                  alt={hack.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  onError={(e: any) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
               {/* Fallback */}
               {/* <div className={`absolute inset-0 bg-gradient-to-br ${hack.color} flex flex-col items-center justify-center p-4 text-center`}>
                  <ImageIcon className="w-8 h-8 text-white/40 mb-2" />
                  <p className="text-white/50 text-xs leading-tight">Upload certificate</p>
                  <p className="text-white/30 text-xs mt-1 break-all">{hack.image}</p>
                </div> 
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 text-xs font-semibold">{hack.achievement}</span>
                </div>
                <h3 className="font-bold text-white text-lg leading-tight group-hover:text-violet-300 transition-colors">
                  {hack.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{hack.event} · {hack.date}</span>
                </div>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {hack.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
