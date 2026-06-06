"use client";
import { motion } from "framer-motion";
import { volunteerWork } from "@/lib/data";
import { Heart, Calendar, ImageIcon } from "@/components/Icons";

export default function VolunteerWork() {
  return (
    <section id="volunteer" className="py-24 bg-[#040813] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Giving Back</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Volunteer{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-400 text-sm">
            Building communities and contributing beyond code
          </p>
        </motion.div>

        {/* Single column layout matching hackathons */}
        <div className="max-w-2xl mx-auto space-y-6">
          {volunteerWork.map((vol, i) => (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative flex gap-0 rounded-2xl overflow-hidden border border-white/8 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 bg-white/3"
            >
              {/* Left image */}
              <div className="relative w-48 sm:w-56 flex-shrink-0 overflow-hidden">
                <img
                  src={vol.image}
                  alt={vol.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
                  onError={(e: any) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />{/*
                <div className={`absolute inset-0 bg-gradient-to-br ${vol.color} flex flex-col items-center justify-center p-4 text-center`}>
                  <div className="text-4xl mb-2">{vol.icon}</div>
                  <p className="text-white/50 text-xs">Upload image</p>
                </div> */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold">Volunteer</span>
                </div>
                <h3 className="font-bold text-white text-lg leading-tight group-hover:text-emerald-300 transition-colors">
                  {vol.title}
                </h3>
                <p className="text-emerald-400/80 text-sm font-medium mt-1">{vol.organization}</p>
                <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{vol.period}</span>
                </div>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {vol.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
