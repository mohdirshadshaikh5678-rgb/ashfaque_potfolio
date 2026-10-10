"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-contactsec1")) {
  const link = document.createElement("link");
  link.id = "google-fonts-contactsec1";
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

const SpiderWebSvg = () => (
  <svg className="w-10 h-10 text-slate-800/80" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M0,0 L50,50 M50,0 L0,50 M25,0 L25,50 M0,25 L50,25" />
    <path d="M15,15 Q25,20 35,15 Q40,25 35,35 Q25,30 15,35 Q10,25 15,15 Z" />
  </svg>
);

export default function ContactSec1() {
  return (
    <section id="contactsec1" className="relative w-full min-h-[92vh] bg-[#f4f4f3] text-slate-900 overflow-hidden selection:bg-amber-300 selection:text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] px-4 sm:px-8 flex items-center justify-center pt-16 pb-12 scroll-mt-16">
      {/* Paper Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0"
        style={{ backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />

      <motion.div {...floatAnim(8, 12)} className="absolute -top-20 -right-20 w-72 h-72 bg-[#1d63fe]/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div {...floatAnim(9, 14)} className="absolute -bottom-24 -left-16 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative w-full mt-2">
          <h1 className="text-[13vw] lg:text-[9rem] leading-[0.82] font-black tracking-tighter text-[#0b1329] font-['Oswald',sans-serif] uppercase flex justify-center items-center flex-wrap gap-x-3 sm:gap-x-6">
            <span className="relative inline-block">GET IN</span>
            <span className="relative inline-block">
              TO
              <span className="absolute -top-2 -right-1 pointer-events-none">
                <SpiderWebSvg />
              </span>
              UCH
            </span>
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
          let&apos;s talk about your next project
        </motion.p>

        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-2xl text-slate-700 text-base sm:text-lg leading-relaxed font-medium"
        >
          Have a question, an idea or a project in mind? Send me a message — I usually reply
          within <span className="font-black text-[#0b1329]">24 hours</span>.
        </motion.p>

        {/* contact chips */}
        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {["📞 +91 7208117478", "📧 ashfaquealishaikh7890@gmail.com", "📍 Maharashtra, India"].map((chip) => (
            <span
              key={chip}
              className="text-sm font-bold px-4 py-2 rounded-full bg-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* scroll prompt */}
        <motion.div {...floatAnim(5, 5)} className="mt-12 hidden lg:flex items-center gap-2 text-gray-700">
          <span className="text-2xl rotate-[-10deg]">👇</span>
          <span className="font-['Caveat',cursive] text-xl font-bold rotate-[-4deg]">drop me a message !</span>
        </motion.div>
      </div>
    </section>
  );
}