"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-footer")) {
  const link = document.createElement("link");
  link.id = "google-fonts-footer";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Oswald:wght@700&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "3D Modeling & Hard-Surface Assets",
  "Texturing, Shading & Materials",
  "Lighting & Scene Composition",
  "Rendering & Look Development",
  "Motion Graphics (After Effects)",
  "AI Video & Content Creation",
];

const GithubIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const InstagramIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socials = [
  { label: "GitHub", href: "https://github.com", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Email", href: "mailto:ashfaquealishaikh7890@gmail.com", icon: Mail },
];

const TapeStrip = ({ className = "" }) => (
  <svg viewBox="0 0 100 30" className={`w-16 h-6 fill-amber-300/70 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

const floatAnim = (duration = 6, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());
  const router = useRouter();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const goTo = (href: string) => {
    router.push(href);
    window.scrollTo({ top: 0 });
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <footer className="relative w-full bg-[#0b1329] text-slate-300 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Subtle paper-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      {/* Colored doodle blobs */}
      <motion.div {...floatAnim(8, 12)} className="absolute -top-16 -left-16 w-64 h-64 bg-[#1d63fe]/20 rounded-full blur-3xl pointer-events-none" />
      <motion.div {...floatAnim(9, 14)} className="absolute -bottom-20 -right-10 w-80 h-80 bg-[#c81e1e]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Giant background watermark word */}
      <div className="pointer-events-none select-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[16vw] lg:text-[11rem] leading-none font-['Oswald',sans-serif] font-black uppercase text-white/[0.04] tracking-tighter">
        modeling 
      </div>

      {/* ============ TOP CONTENT ============ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 pt-20 pb-10">
        {/* Cursive intro line + arrow */}
        <div className="flex items-start gap-4 mb-14">
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 1, pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-12 text-amber-300 -rotate-[10deg] pointer-events-none"
            viewBox="0 0 100 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M15,55 Q55,68 85,20" />
            <path d="M70,25 L85,20 L78,38" />
          </motion.svg>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-['Caveat',cursive] text-amber-300 text-3xl sm:text-4xl font-bold rotate-[-2deg]"
          >
            Let&apos;s create something{" "}
            <span className="underline decoration-[#1d63fe] decoration-[3px]">extraordinary</span> in 3D
          </motion.p>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 pb-12 border-b border-dashed border-white/10">
          {/* BRAND COLUMN */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Link href="/" onClick={() => goTo("/")} className="relative inline-flex items-center gap-3 select-none group">
              <span className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white border-2 border-white shadow-[3px_3px_0px_0px_rgba(251,191,36,1)]">
                <span className="font-mono text-[#0b1329] font-black text-base tracking-tight">&lt;/&gt;</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-white text-2xl font-black tracking-tight font-['Oswald',sans-serif] uppercase">
                  Ashfaque<span className="text-[#1d63fe]">.Shaikh</span>
                </span>
                <span className="font-['Caveat',cursive] text-amber-300 text-base font-bold rotate-[-3deg]">
                  3D modeling 
                </span>
              </span>
              <TapeStrip className="absolute -top-3 -right-2 rotate-[24deg] opacity-60" />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
              Passionate 3D modeling  creating realistic models, textures, and 
              renders using Autodesk Maya — turning creative ideas into 
              high-quality 3D assets and cinematic visual experiences.
            </p>

            {/* Social buttons */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s, idx) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  custom={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-11 h-11 rounded-xl bg-white hover:bg-amber-300 text-[#0b1329] border-2 border-white shadow-[3px_3px_0px_0px_rgba(29,99,254,0.4)] hover:shadow-[3px_3px_0px_0px_rgba(11,19,41,1)] flex items-center justify-center transition-all duration-300"
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-white font-black text-lg uppercase tracking-wider font-['Oswald',sans-serif] mb-1">
              Quick Links
            </h3>
            <span className="block w-14 h-1.5 bg-amber-300 rounded-full mb-5" />

            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-amber-300 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#1d63fe]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-white font-black text-lg uppercase tracking-wider font-['Oswald',sans-serif] mb-1">
              Services
            </h3>
            <span className="block w-14 h-1.5 bg-[#1d63fe] rounded-full mb-5" />

            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm font-semibold text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-amber-300 mt-1.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-white font-black text-lg uppercase tracking-wider font-['Oswald',sans-serif] mb-1">
              Get In Touch
            </h3>
            <span className="block w-14 h-1.5 bg-[#c81e1e] rounded-full mb-5" />

            <ul className="space-y-4">
              <li>
                <a href="mailto:ashfaque.shaikh.dev@gmail.com" className="group flex items-center gap-3 text-sm font-semibold text-slate-400 hover:text-amber-300 transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-300 group-hover:text-[#0b1329] transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  ashfaque.shaikh.dev@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="group flex items-center gap-3 text-sm font-semibold text-slate-400 hover:text-amber-300 transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-300 group-hover:text-[#0b1329] transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  +91 7208117478
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                Maharashtra, India
              </li>
            </ul>

            {/* CTA button */}
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); goTo("/contact"); }}
              className="group inline-flex items-center gap-2 mt-6 bg-amber-300 hover:bg-amber-200 text-[#0b1329] font-black text-xs uppercase tracking-widest px-5 py-3 rounded-full border-2 border-amber-200 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wide">
            © {year} Ashfaque Shaikh. All rights reserved.
          </p>

          {/* <p className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wide">
            Built with
            <Code2 className="w-3.5 h-3.5 text-[#1d63fe]" />
            <Heart className="w-3.5 h-3.5 text-[#c81e1e] fill-[#c81e1e]" />
            using Next.js &amp; Tailwind
          </p> */}

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="group w-11 h-11 rounded-xl bg-white hover:bg-amber-300 text-[#0b1329] border-2 border-white shadow-[3px_3px_0px_0px_rgba(251,191,36,1)] flex items-center justify-center transition-all active:translate-y-0.5"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}