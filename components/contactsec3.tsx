"use client";
import React from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { Mail, Phone, ArrowUp, Clock, Globe } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-contactsec3")) {
  const link = document.createElement("link");
  link.id = "google-fonts-contactsec3";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.12, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const floatAnim = (duration = 5, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const quick = [
  {
    icon: Mail,
    title: "Prefer Email?",
    value: "ashfaquealishaikh7890@gmail.com",
    href: "mailto:ashfaquealishaikh7890 @gmail.com",
    color: "#1d63fe",
  },
  {
    icon: Phone,
    title: "Prefer a Call?",
    value: "+91 7208117478",
    // href: "tel:+917208117478",
    color: "#16a34a",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Usually within 24 hours",
    href: undefined,
    color: "#f59e0b",
  },
  {
    icon: Globe,
    title: "Timezone",
    value: "IST (UTC + 5:30)",
    href: undefined,
    color: "#a855f7",
  },
];

export default function ContactSec3() {
  return (
    <section id="contactsec3" className="relative w-full min-h-[80vh] bg-[#0b1329] text-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-16 lg:py-20 flex flex-col items-center justify-center scroll-mt-16 select-none">
      {/* texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />
      <motion.div {...floatAnim(8, 12)} className="absolute -top-16 -left-16 w-72 h-72 bg-[#1d63fe]/20 rounded-full blur-3xl pointer-events-none" />
      <motion.div {...floatAnim(9, 14)} className="absolute -bottom-20 -right-10 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* watermark */}
      <div className="pointer-events-none select-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[15vw] lg:text-[9rem] leading-none font-['Oswald',sans-serif] font-black uppercase text-white/[0.04] tracking-tighter">
        SAY HELLO
      </div>

      {/* intro */}
      <div className="relative z-10 flex items-start gap-4 mb-6">
        <svg className="w-14 h-10 text-amber-300 -rotate-[10deg]" viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M15,55 Q55,68 85,20" />
          <path d="M70,25 L85,20 L78,38" />
        </svg>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-['Caveat',cursive] text-3xl sm:text-4xl font-bold text-amber-300 rotate-[-2deg]"
        >
          your next project starts here
        </motion.p>
      </div>

      {/* Quick contact cards */}
      <div className="relative z-10 max-w-[1100px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {quick.map((q, idx) => (
          <motion.div
            key={q.title}
            custom={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative bg-white/5 border-2 border-white/15 rounded-2xl p-5 text-center backdrop-blur"
          >
            <span className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto" style={{ color: q.color }}>
              <q.icon className="w-6 h-6" />
            </span>
            <p className="mt-3 text-xs font-black uppercase tracking-widest text-slate-400">{q.title}</p>
            {q.href ? (
              <a href={q.href} className="mt-1 block text-sm font-black text-white break-all hover:text-amber-300">
                {q.value}
              </a>
            ) : (
              <p className="mt-1 text-sm font-black text-white">{q.value}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* big CTA */}
      <motion.div
        custom={2}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mt-10 text-center"
      >
        <p className="font-['Caveat',cursive] text-2xl font-bold text-slate-300 rotate-[-2deg]">
          and remember ... keep it simple, keep it premium ✦
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group mt-6 inline-flex items-center gap-2 bg-amber-300 hover:bg-amber-200 text-[#0b1329] font-black text-sm uppercase tracking-wider px-6 py-3 rounded-full border-2 border-amber-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:-translate-y-0.5 active:translate-y-0.5"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          Back to Top
        </button>
      </motion.div>
    </section>
  );
}