"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-projectssec1")) {
  const link = document.createElement("link");
  link.id = "google-fonts-projectssec1";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Oswald:wght@700;800;900&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.12, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const floatAnim = (duration = 4, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    rotate: [0, 1, -1, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const TapeStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={`w-16 h-6 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

const CurvedArrowLeft = () => (
  <svg className="w-16 h-14 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M10,15 Q45,5 85,60" />
    <path d="M68,55 L85,60 L80,42" />
  </svg>
);

export default function ProjectsSec1() {
  const stats = [
    { value: "20+", label: "Projects Built" },
    { value: "15+", label: "Clients" },
    { value: "99%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section id="projectssec1" className="relative w-full min-h-[92vh] bg-[#f4f4f3] text-slate-900 overflow-hidden selection:bg-amber-300 selection:text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] px-4 sm:px-8 flex items-center justify-center pt-16 pb-12 scroll-mt-16">
      {/* Paper Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{ backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />

      <motion.div {...floatAnim(8, 12)} className="absolute -top-20 -left-20 w-72 h-72 bg-[#1d63fe]/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div {...floatAnim(9, 14)} className="absolute -bottom-24 -right-16 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative w-full mt-2">
          <h1 className="text-[12vw] lg:text-[8.5rem] leading-[0.82] font-black tracking-tighter text-[#0b1329] font-['Oswald',sans-serif] uppercase flex justify-center items-center flex-wrap gap-x-3 sm:gap-x-6">
            <span className="relative inline-block">PROJECTS</span>
            <span className="relative inline-block text-[#1d63fe]">& WORK</span>
          </h1>

          <div className="absolute top-3 right-[8%] hidden md:block rotate-[22deg]">
            <TapeStrip className="w-24 h-8" />
          </div>
          <div className="absolute -top-2 left-[8%] hidden md:block -rotate-[14deg]">
            <TapeStrip className="w-16 h-6 opacity-80" />
          </div>
        </motion.div>

        <motion.p
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-8 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold rotate-[-2deg]"
        >
          a few things I&apos;ve designed, coded & shipped
        </motion.p>

        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-2xl text-slate-700 text-base sm:text-lg leading-relaxed font-medium"
        >
          Real 3D projects — from product models and props to environments, with detailed texturing,
          lighting & rendering in Autodesk Maya. Here&apos;s a selection of my work.
        </motion.p>

        {/* stats row */}
        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative bg-white border-2 border-slate-900 rounded-xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] px-4 py-5 text-center"
            >
              <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg] w-12 h-5" />
              <p className="text-3xl sm:text-4xl font-black text-[#0b1329] font-['Oswald',sans-serif]">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...floatAnim(5, 5)} className="mt-12 hidden lg:flex items-center gap-2 text-gray-700">
          <div className="rotate-[6deg]">
            <CurvedArrowLeft />
          </div>
          <span className="font-['Caveat',cursive] text-xl font-bold rotate-[-4deg]">see the work !</span>
        </motion.div>
      </div>
    </section>
  );
}