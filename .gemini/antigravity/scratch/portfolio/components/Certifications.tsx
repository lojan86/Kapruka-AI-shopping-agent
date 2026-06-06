"use client";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award } from "@/components/Icons";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#040813] relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Credentials</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-sm">
            Click on a card to view the certificate. Images will be available once uploaded.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  onError={(e: any) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                {/* Fallback 
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-80 flex items-center justify-center`}>
                  <div className="text-center px-4">
                    <Award className="w-10 h-10 text-white/60 mx-auto mb-2" />
                    <p className="text-white/60 text-xs">Upload certificate image</p>
                    <p className="text-white/40 text-xs mt-1">{cert.image}</p>
                  </div>
                </div> */}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-white/20 backdrop-blur px-3 py-1.5 rounded-full">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 bg-white/3">
                <h3 className="font-bold text-white text-sm leading-tight group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{cert.subtitle}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-gray-400 text-xs">{cert.issuer}</span>
                  <span className={`px-2 py-0.5 text-xs font-bold bg-gradient-to-r ${cert.color} rounded-full text-white`}>
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
