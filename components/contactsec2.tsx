"use client";
import React, { useState } from "react";
import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import type { ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Coffee } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-contactsec2")) {
  const link = document.createElement("link");
  link.id = "google-fonts-contactsec2";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const floatAnim = (duration = 5, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  },
});

const TapeStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={`w-14 h-5 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

const inputClass =
  "w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0b1329] placeholder:text-slate-400 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:shadow-[5px_5px_0px_0px_rgba(251,191,36,1)] transition-all";

export default function ContactSec2() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const info = [
    {
      icon: Mail,
      title: "Email",
      value: "ashfaquealishaikh7890@gmail.com",
      href: "mailto:ashfaquealishaikh7890@gmail.com",
      color: "#1d63fe",
      bg: "#e0ebff",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7208117478",
      // href: "tel:+917208117478",
      color: "#16a34a",
      bg: "#e0fbea",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Maharashtra, India",
      href: undefined,
      color: "#c81e1e",
      bg: "#ffe4e4",
    },
  ];

  return (
    <section id="contactsec2" className="relative w-full bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-20 lg:py-24 scroll-mt-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* LEFT: info cards */}
        <div className="lg:col-span-5">
          <motion.div custom={0} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-block relative">
              <span className="absolute inset-0 bg-amber-300 rotate-[-1deg] -skew-x-2 rounded-xs" />
              <h2 className="relative text-3xl sm:text-4xl font-[900] tracking-wider px-4 py-1 font-['Permanent_Marker',cursive] uppercase">
                Contact Info
              </h2>
            </div>
            <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium max-w-md">
              Choose whatever is easiest — a message, an email, or a quick call. I&apos;d love to
              hear from you.
            </p>
          </motion.div>

          <div className="mt-8 space-y-5">
            {info.map((i, idx) => (
              <motion.div
                key={i.title}
                custom={idx + 1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] p-5 flex items-center gap-4"
              >
                <TapeStrip className="absolute -top-3 -right-3 rotate-[18deg] w-12 h-5" />
                <span className="w-12 h-12 rounded-xl border-2 border-slate-900 flex items-center justify-center shrink-0" style={{ backgroundColor: i.bg, color: i.color }}>
                  <i.icon className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">{i.title}</p>
                  {i.href ? (
                    <a href={i.href} className="mt-0.5 block text-sm font-black text-[#0b1329] hover:text-[#1d63fe] truncate">
                      {i.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-black text-[#0b1329]">{i.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* availability note */}
          <motion.div {...floatAnim(5, 6)} className="relative mt-8 bg-white border-2 border-slate-900 rounded-xl p-5 shadow-[5px_5px_0px_0px_rgba(251,191,36,1)] rotate-[-1.5deg]">
            <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] w-12 h-5" />
            <p className="font-['Caveat',cursive] text-2xl font-bold text-[#0b1329] flex items-center gap-2">
              <Coffee className="w-5 h-5 text-amber-500" />
              Availability
            </p>
            <p className="mt-1 text-sm font-bold text-green-600 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              Open to new projects — yes!
            </p>
          </motion.div>
        </div>

        {/* RIGHT: form */}
        <motion.div custom={2} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7">
          <form
            onSubmit={submit}
            className="relative bg-white/60 backdrop-blur border-2 border-slate-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-6 sm:p-8"
          >
            <div className="absolute -top-3 left-10 rotate-[-6deg]">
              <svg viewBox="0 0 100 30" className="w-20 h-7 fill-amber-300/90 pointer-events-none" preserveAspectRatio="none">
                <path d="M3,4 L97,2 L94,26 L6,28 Z" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="w-6 h-6 text-[#1d63fe]" />
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide font-['Oswald',sans-serif] text-[#0b1329]">
                Send a Message
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-600 mb-1.5">Your Name</label>
                <input name="name" value={form.name} onChange={update} required placeholder="John Doe" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-600 mb-1.5">Your Email</label>
                <input name="email" type="email" value={form.email} onChange={update} required placeholder="john@email.com" className={inputClass} />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-600 mb-1.5">Subject</label>
              <input name="subject" value={form.subject} onChange={update} required placeholder="I need a website for..." className={inputClass} />
            </div>

            <div className="mt-5">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-600 mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                required
                rows={5}
                placeholder="Tell me about your project, timeline and budget..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#0b1329] hover:bg-[#1d63fe] text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] transition-all hover:-translate-y-0.5 active:translate-y-0.5"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              {sent ? "Message Sent!" : "Send Message"}
            </button>

            {sent && (
              <p className="mt-4 text-center text-sm font-black text-green-600">
                🎉 Thanks! Your message has been sent. I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}