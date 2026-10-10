"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Download, FileText } from "lucide-react";

const RESUME_PDF = "/assest/pdfresume/Black and White Simple Infographic Resume_20261009_230638_0000.pdf";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-navbar")) {
  const link = document.createElement("link");
  link.id = "google-fonts-navbar";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Oswald:wght@700&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const navLinks = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "AI Edit", href: "/aiedit" },
  { label: "Contact", href: "/contact" },
];

const TapeStrip = ({ className = "" }) => (
  <svg viewBox="0 0 100 30" className={`w-14 h-5 fill-amber-300/90 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 font-['Plus_Jakarta_Sans',sans-serif] ${
        scrolled
          ? "bg-[#f4f4f3] backdrop-blur-md shadow-[0_4px_0px_rgba(251,191,36,0.9)]"
          : "bg-[#f4f4f3] border-b-2 border-dashed border-[#0b1329]/10"
      }`}
    >
      {/* Thin top scribble line */}
      <div className="h-1 w-full bg-[#0b1329]/90" />

      <nav className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-8 py-3">
        {/* ============ LOGO ============ */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="relative flex items-center gap-2.5 group select-none">
          {/* Marker highlight box behind logo */}
          <span className="absolute -inset-x-2 -inset-y-1 bg-amber-300 -rotate-1 transform -skew-x-2 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0b1329] border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
            <span className="font-mono text-[#fde047] font-black text-sm tracking-tight">3D</span>
          </span>

            <span className="relative flex flex-col leading-none">
              <span className="text-[#0b1329] text-lg font-black tracking-tight font-['Oswald',sans-serif] uppercase">
                Ashfaque<span className="text-[#1d63fe]">.Shaikh</span>
              </span>
              <span className="font-['Caveat',cursive] text-[#1d63fe] text-sm font-bold rotate-[-3deg]">
                3D modeling 
              </span>
            </span>

          {/* Tape strip accent */}
          {/* <TapeStrip className="absolute -top-2.5 -right-6 rotate-[20deg] opacity-70" /> */}
        </Link>

        {/* ============ DESKTOP LINKS ============ */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, idx) => {
            const active = isActive(link.href);
            return (
              <li key={link.label}>
                <motion.a
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.5 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(link.href);
                    setMenuOpen(false);
                  }}
                  className={`relative block px-4 py-2 text-sm font-extrabold tracking-wide uppercase transition-colors group ${
                    active
                      ? "text-[#0b1329]"
                      : "text-[#0b1329]/85 hover:text-[#0b1329]"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute left-3 right-3 bottom-1 h-[7px] bg-amber-300 -skew-x-6 rounded-[2px] transition-opacity duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* ============ DESKTOP CTA ============ */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden lg:block"
        >
          <button
            onClick={() => setResumeOpen(true)}
            className="group relative inline-flex items-center gap-2 bg-[#0b1329] hover:bg-[#1d63fe] text-white font-black text-sm uppercase tracking-wider px-6 py-3 rounded-full border-2 border-[#0b1329] shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] transition-all duration-300 hover:shadow-[2px_2px_0px_0px_rgba(251,191,36,1)] hover:-translate-y-0.5 active:translate-y-0.5 select-none"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            Resume
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* ============ MOBILE HAMBURGER ============ */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden relative w-11 h-11 rounded-xl bg-[#0b1329] text-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center active:translate-y-0.5 transition-transform"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* ============ MOBILE MENU ============ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#f4f4f3]/95 backdrop-blur-md border-b-2 border-dashed border-[#0b1329]/15"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(link.href);
                      setMenuOpen(false);
                    }}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-extrabold text-[#0b1329] hover:bg-amber-300/30 uppercase tracking-wide transition-colors border-b border-dashed border-[#0b1329]/10 group"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-3"
              >
                <button
                  onClick={() => { setResumeOpen(true); setMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0b1329] text-white font-black text-sm uppercase tracking-wider px-6 py-3.5 rounded-full border-2 border-[#0b1329] shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] active:translate-y-0.5 transition-transform"
                >
                  <FileText className="w-4 h-4 text-amber-300" />
                  Resume
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

      {/* ============ RESUME MODAL ============ */}
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
            onClick={() => setResumeOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative w-full max-w-3xl bg-white border-2 border-slate-900 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] overflow-hidden flex flex-col"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* modal header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b-2 border-slate-900 bg-[#f4f4f3] shrink-0">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#1d63fe]" />
                  <h3 className="font-black italic uppercase text-[#0b1329] font-['Oswald',sans-serif] text-lg sm:text-xl tracking-wide">
                    Resume
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={RESUME_PDF}
                    download="Ashfaque_Shaikh_Resume.pdf"
                    className="inline-flex items-center gap-1.5 bg-[#1d63fe] hover:bg-[#0b1329] text-white font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-0.5 active:translate-y-0.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                  <button
                    onClick={() => setResumeOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* PDF iframe */}
              <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
                <iframe
                  src={`${RESUME_PDF}#toolbar=0&navpanes=0`}
                  className="w-full h-full"
                  style={{ minHeight: "70vh" }}
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}