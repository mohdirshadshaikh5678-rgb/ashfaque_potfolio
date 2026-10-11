// "use client";
// import React, { useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, Volume2, VolumeX, Maximize, X, Sparkles } from "lucide-react";

// if (typeof document !== "undefined" && !document.getElementById("google-fonts-aiedit")) {
//   const link = document.createElement("link");
//   link.id = "google-fonts-aiedit";
//   link.rel = "stylesheet";
//   link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
//   document.head.appendChild(link);
// }

// const shorts = [
//   { src: "/assest/aivid/_cutaway_1080p_20261010113307.mp4",    title: "Cutaway",       tag: "Cinematic" },
//   { src: "/assest/aivid/_genzmodel_1080p_20261010112926.mp4",  title: "Gen Z Model",   tag: "Fashion" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923125142.mp4",     title: "TV Ads #1",     tag: "Advertising" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923130211.mp4",     title: "TV Ads #2",     tag: "Advertising" },
//   { src: "/assest/aivid/_ui-kit_1080p_20261010113544.mp4",     title: "UI Kit",        tag: "Motion UI" },
//   { src: "/assest/aivid/Coffee_Motion_Timing_Preview.mp4",     title: "Coffee Motion", tag: "Product" },
//   { src: "/assest/aivid/Glass_Cards_Silent_Preview.mp4",       title: "Glass Cards",   tag: "Abstract" },
// ];

// // ─── Reusable progress bar ────────────────────────────────────────────────────
// function ProgressBar({ progress, onSeek, color = "bg-violet-500" }: {
//   progress: number;
//   onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
//   color?: string;
// }) {
//   return (
//     <div
//       className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/bar hover:h-2 transition-all duration-150"
//       onClick={onSeek}
//     >
//       <div className={`h-full ${color} rounded-full relative`} style={{ width: `${progress}%` }}>
//         <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
//       </div>
//     </div>
//   );
// }

// // ─── Short video card (portrait) ─────────────────────────────────────────────
// function ShortCard({ video }: { video: typeof shorts[0] }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

//   const play  = useCallback(() => { ref.current?.play();  setPlaying(true);  }, []);
//   const pause = useCallback(() => { ref.current?.pause(); setPlaying(false); }, []);

//   const togglePlay = (e: React.MouseEvent) => { e.stopPropagation(); playing ? pause() : play(); };
//   const toggleMute = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -6, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="relative flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-violet-500 transition-colors group cursor-pointer bg-[#0d0d1a] shadow-[0_8px_32px_rgba(124,58,237,0.15)]"
//       style={{ width: "calc((100vw - 4rem - 3 * 1rem) / 4)", minWidth: 180, maxWidth: 280 }}
//       onMouseEnter={() => !isMobile && play()}
//       onMouseLeave={() => !isMobile && pause()}
//     >
//       <video
//         ref={ref}
//         src={video.src}
//         className="w-full aspect-[9/16] object-cover block"
//         muted={muted}
//         loop
//         playsInline
//         onTimeUpdate={onTimeUpdate}
//         onEnded={() => setPlaying(false)}
//       />

//       {/* tag pill */}
//       <span className="absolute top-3 left-3 bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-violet-400/30">
//         {video.tag}
//       </span>

//       {/* play hint */}
//       {!playing && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none">
//           <div className="w-12 h-12 rounded-full bg-violet-600/90 border-2 border-white/80 flex items-center justify-center shadow-lg">
//             <Play className="w-5 h-5 text-white fill-white ml-0.5" />
//           </div>
//         </div>
//       )}

//       {/* controls */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
//         <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//         <div className="flex items-center gap-2 mt-2">
//           <button onClick={togglePlay} className="w-7 h-7 rounded-full bg-white/15 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//             {playing ? <Pause className="w-3 h-3 text-white fill-white" /> : <Play className="w-3 h-3 text-white fill-white ml-0.5" />}
//           </button>
//           <button onClick={toggleMute} className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors">
//             {muted ? <VolumeX className="w-3 h-3 text-white" /> : <Volume2 className="w-3 h-3 text-white" />}
//           </button>
//           <span className="ml-auto text-white font-black text-[10px] font-['Oswald',sans-serif] uppercase tracking-wide truncate max-w-[90px]">
//             {video.title}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Final video (full-width featured) ───────────────────────────────────────
// function FinalVideo() {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted]     = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [started, setStarted]   = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const toggle = () => {
//     const v = ref.current;
//     if (!v) return;
//     if (v.paused) { v.play(); setPlaying(true); setStarted(true); }
//     else          { v.pause(); setPlaying(false); }
//   };
//   const toggleMute = () => {
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };
//   const fullscreen = () => ref.current?.requestFullscreen?.();
//   const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
//   const cur = ref.current?.currentTime || 0;
//   const dur = ref.current?.duration    || 0;

//   return (
//     <>
//       <div className="relative w-full rounded-3xl overflow-hidden border-2 border-violet-500/40 shadow-[0_0_60px_rgba(124,58,237,0.25)] group">
//         {/* glow ring */}
//         <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20 pointer-events-none z-10" />

//         <video
//           ref={ref}
//           src="/assest/aivid/Final (1) (1).mp4"
//           className="w-full block"
//           onTimeUpdate={onTimeUpdate}
//           onEnded={() => setPlaying(false)}
//           playsInline
//         />

//         {/* big play overlay */}
//         {!started && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-20" onClick={toggle}>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-600 border-4 border-white/80 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.8)]"
//             >
//               <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
//             </motion.div>
//           </div>
//         )}

//         {/* controls */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-5 pb-5 pt-14 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//           <div className="flex items-center gap-3 mt-3">
//             <button onClick={toggle} className="w-10 h-10 rounded-full bg-white/10 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//               {playing ? <Pause className="w-4 h-4 text-white fill-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
//             </button>
//             <button onClick={toggleMute} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
//             </button>
//             <span className="text-white/60 text-xs font-mono">{fmt(cur)} / {fmt(dur)}</span>
//             <button onClick={fullscreen} className="ml-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               <Maximize className="w-4 h-4 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // ─── Main page ────────────────────────────────────────────────────────────────
// export default function AiEditPage() {
//   return (
//     <div className="relative min-h-screen bg-[#07070f] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">

//       {/* ── background grid ── */}
//       <div className="fixed inset-0 pointer-events-none"
//         style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
//       />
//       {/* glow orbs */}
//       <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-20">

//         {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >
//           {/* eyebrow */}
//           <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6">
//             <Sparkles className="w-3.5 h-3.5 text-violet-400" />
//             <span className="text-violet-300 text-xs font-black uppercase tracking-widest">AI Generated</span>
//           </div>

//           <h1 className="text-[13vw] sm:text-[9vw] lg:text-[7rem] leading-[1.1] font-black tracking-tighter font-['Oswald',sans-serif] uppercase ">
//             <span className="block text-white">AI</span>
//             <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
//               EDIT
//             </span>
//           </h1>

//           <div className="mt-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10 relative">
//             <p className="text-slate-400 text-base sm:text-lg font-medium max-w-lg leading-relaxed">
//               AI-generated video content, motion experiments &amp; creative shorts — crafted using cutting-edge AI tools and motion design.
//             </p>
//             <div className="flex gap-6 shrink-0 absolute top-0 right-5 ">
//               {[["8", "Videos"], ["AI", "Powered"], ["HD", "Quality"]].map(([val, lbl]) => (
//                 <div key={lbl} className="text-center">
//                   <p className="text-2xl sm:text-6xl font-black text-violet-400 font-['Oswald',sans-serif]">{val}</p>
//                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{lbl}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* handwritten accent */}
//           <p className="mt-4 font-['Caveat',cursive] text-violet-400 text-2xl font-bold rotate-[-1.5deg]">
//             where imagination meets AI ✦
//           </p>
//         </motion.div>

//         {/* ══ FEATURED FINAL VIDEO ═════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo />
//         </motion.div>
//   <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo />
//         </motion.div>
//         {/* ══ SHORTS ROW ═══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//               AI <span className="text-fuchsia-400">Shorts</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
//             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">scroll →</span>
//           </div>

//           {/* horizontal scroll — 4 visible, rest scroll */}
//           <div
//             className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
//             style={{ scrollbarWidth: "thin", scrollbarColor: "#7c3aed #0d0d1a" }}
//           >
//             <div className="flex gap-4" style={{ width: "max-content" }}>
//               {shorts.map((v, i) => (
//                 <motion.div
//                   key={v.src}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
//                 >
//                   <ShortCard video={v} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* ══ BOTTOM CTA ═══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20 text-center"
//         >
//           <div className="inline-block relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-3xl blur-xl" />
//             <div className="relative border border-violet-500/20 rounded-2xl px-8 sm:px-14 py-10 bg-white/[0.02] backdrop-blur-sm">
//               <p className="font-['Caveat',cursive] text-violet-400 text-2xl font-bold mb-2">want something like this?</p>
//               <h3 className="text-3xl sm:text-4xl font-black italic uppercase font-['Oswald',sans-serif] text-white mb-4">
//                 Let&apos;s Create Together
//               </h3>
//               <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-6">
//                 AI video, motion graphics, 3D animation — I bring your ideas to life with the latest creative tools.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-sm uppercase tracking-widest px-7 py-3.5 rounded-full border-2 border-violet-400/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:-translate-y-0.5"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 Get In Touch
//               </a>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, Volume2, VolumeX, Maximize, X, Sparkles } from "lucide-react";

// if (typeof document !== "undefined" && !document.getElementById("google-fonts-aiedit")) {
//   const link = document.createElement("link");
//   link.id = "google-fonts-aiedit";
//   link.rel = "stylesheet";
//   link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
//   document.head.appendChild(link);
// }

// const shorts = [
//   { src: "/assest/aivid/_cutaway_1080p_20261010113307.mp4",    title: "Cutaway",     tag: "Cinematic" },
//   { src: "/assest/aivid/_genzmodel_1080p_20261010112926.mp4",  title: "Gen Z Model",   tag: "Fashion" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923125142.mp4",     title: "TV Ads #1",    tag: "Advertising" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923130211.mp4",     title: "TV Ads #2",    tag: "Advertising" },
//   { src: "/assest/aivid/_ui-kit_1080p_20261010113544.mp4",     title: "UI Kit",       tag: "Motion UI" },
//   { src: "/assest/aivid/Coffee_Motion_Timing_Preview.mp4",     title: "Coffee Motion", tag: "Product" },
//   { src: "/assest/aivid/Glass_Cards_Silent_Preview.mp4",       title: "Glass Cards",   tag: "Abstract" },
// ];

// const islamicshorts = [
//   { src: "/assest/islamic/Eak Garib Aadmi Or seekh _shorts _viral _youtubeshorts(2K_60FPS).webm",    title: "Eak Garib Aadmi Or seekh",     tag: "Cinematic" },
//   { src: "/assest/islamic/सच्चा दुकानदार – जो हमेशा सच बोलता था और अल्लाह ने उसे बरक(2K_60.webm",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/vidssave.com Ramzan story #shorts #youtubeshorts #viral 720P.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/vidssave.com Roja Kaisay  Insan ko shabar sikhata hai #shorts #youtubeshorts #viral #islamic #story 720P.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },

  


// ];

// // ─── Reusable progress bar ────────────────────────────────────────────────────
// function ProgressBar({ progress, onSeek, color = "bg-violet-500" }: {
//   progress: number;
//   onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
//   color?: string;
// }) {
//   return (
//     <div
//       className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/bar hover:h-2 transition-all duration-150"
//       onClick={onSeek}
//     >
//       <div className={`h-full ${color} rounded-full relative`} style={{ width: `${progress}%` }}>
//         <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
//       </div>
//     </div>
//   );
// }

// // ─── Short video card (portrait) ─────────────────────────────────────────────
// function ShortCard({ video }: { video: typeof shorts[0] }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

//   const play  = useCallback(() => { ref.current?.play();  setPlaying(true);  }, []);
//   const pause = useCallback(() => { ref.current?.pause(); setPlaying(false); }, []);

//   const togglePlay = (e: React.MouseEvent) => { e.stopPropagation(); playing ? pause() : play(); };
//   const toggleMute = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -6, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="relative flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-violet-500 transition-colors group cursor-pointer bg-[#0d0d1a] shadow-[0_8px_32px_rgba(124,58,237,0.15)]"
//       style={{ width: "calc((100vw - 4rem - 3 * 1rem) / 4)", minWidth: 180, maxWidth: 280 }}
//       onMouseEnter={() => !isMobile && play()}
//       onMouseLeave={() => !isMobile && pause()}
//     >
//       <video
//         ref={ref}
//         src={video.src}
//         className="w-full aspect-[9/16] object-cover block"
//         muted={muted}
//         loop
//         playsInline
//         onTimeUpdate={onTimeUpdate}
//         onEnded={() => setPlaying(false)}
//       />

//       {/* tag pill */}
//       <span className="absolute top-3 left-3 bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-violet-400/30">
//         {video.tag}
//       </span>

//       {/* play hint */}
//       {!playing && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none">
//           <div className="w-12 h-12 rounded-full bg-violet-600/90 border-2 border-white/80 flex items-center justify-center shadow-lg">
//             <Play className="w-5 h-5 text-white fill-white ml-0.5" />
//           </div>
//         </div>
//       )}

//       {/* controls */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
//         <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//         <div className="flex items-center gap-2 mt-2">
//           <button onClick={togglePlay} className="w-7 h-7 rounded-full bg-white/15 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//             {playing ? <Pause className="w-3 h-3 text-white fill-white" /> : <Play className="w-3 h-3 text-white fill-white ml-0.5" />}
//           </button>
//           <button onClick={toggleMute} className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors">
//             {muted ? <VolumeX className="w-3 h-3 text-white" /> : <Volume2 className="w-3 h-3 text-white" />}
//           </button>
//           <span className="ml-auto text-white font-black text-[10px] font-['Oswald',sans-serif] uppercase tracking-wide truncate max-w-[90px]">
//             {video.title}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Final video (full-width featured) ───────────────────────────────────────
// function FinalVideo({ src }: { src: string }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted]    = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [started, setStarted]   = useState(false);

//   const toggle = () => {
//     const v = ref.current;
//     if (!v) return;
//     if (v.paused) { v.play(); setPlaying(true); setStarted(true); }
//     else          { v.pause(); setPlaying(false); }
//   };
//   const toggleMute = () => {
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };
//   const fullscreen = () => ref.current?.requestFullscreen?.();
//   const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
//   const cur = ref.current?.currentTime || 0;
//   const dur = ref.current?.duration    || 0;

//   return (
//     <>
//       <div className="relative w-full rounded-3xl overflow-hidden border-2 border-violet-500/40 shadow-[0_0_60px_rgba(124,58,237,0.25)] group">
//         {/* glow ring */}
//         <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20 pointer-events-none z-10" />

//         <video
//           ref={ref}
//           src={src}
//           className="w-full block"
//           onTimeUpdate={onTimeUpdate}
//           onEnded={() => setPlaying(false)}
//           playsInline
//         />

//         {/* big play overlay */}
//         {!started && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-20" onClick={toggle}>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-600 border-4 border-white/80 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.8)]"
//             >
//               <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
//             </motion.div>
//           </div>
//         )}

//         {/* controls */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-5 pb-5 pt-14 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//           <div className="flex items-center gap-3 mt-3">
//             <button onClick={toggle} className="w-10 h-10 rounded-full bg-white/10 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//               {playing ? <Pause className="w-4 h-4 text-white fill-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
//             </button>
//             <button onClick={toggleMute} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
//             </button>
//             <span className="text-white/60 text-xs font-mono">{fmt(cur)} / {fmt(dur)}</span>
//             <button onClick={fullscreen} className="ml-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               <Maximize className="w-4 h-4 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // ─── Main page ────────────────────────────────────────────────────────────────
// export default function AiEditPage() {
//   return (
//     <div className="relative min-h-screen bg-[#07070f] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">

//       {/* ── background grid ── */}
//       <div className="fixed inset-0 pointer-events-none"
//         style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
//       />
//       {/* glow orbs */}
//       <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-20">

//         {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >
//           {/* eyebrow */}
//           <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6">
//             <Sparkles className="w-3.5 h-3.5 text-violet-400" />
//             <span className="text-violet-300 text-xs font-black uppercase tracking-widest">AI Generated</span>
//           </div>

//           <h1 className="text-[13vw] sm:text-[9vw] lg:text-[7rem] leading-[1.1] font-black tracking-tighter font-['Oswald',sans-serif] uppercase ">
//             <span className="block text-white">AI</span>
//             <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
//               EDIT
//             </span>
//           </h1>

//           <div className="mt-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10 relative">
//             <p className="text-slate-400 text-base sm:text-lg font-medium max-w-lg leading-relaxed">
//               AI-generated video content, motion experiments &amp; creative shorts — crafted using cutting-edge AI tools and motion design.
//             </p>
//             <div className="flex gap-6 shrink-0 absolute lg:top-0 lg:right-5 -top-25 right-1 ">
//               {[["8", "Videos"], ["AI", "Powered"], ["HD", "Quality"]].map(([val, lbl]) => (
//                 <div key={lbl} className="text-center">
//                   <p className="text-2xl sm:text-6xl font-black text-violet-400 font-['Oswald',sans-serif]">{val}</p>
//                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{lbl}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* handwritten accent */}
//           <p className="mt-4 font-['Caveat',cursive] text-violet-400 text-2xl font-bold rotate-[-1.5deg]">
//             where imagination meets AI ✦
//           </p>
//         </motion.div>

//         {/* ══ FEATURED FINAL VIDEO (FIRST BIG VIDEO) ═════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo src="/assest/aivid/Final (1) (1).mp4" />
//         </motion.div>

//         {/* ══ SECOND BIG VIDEO ═════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              ISLAMIC AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo src="/assest/youtube/01.mp4" />
//         </motion.div>

//         {/* ══ SHORTS ROW ═══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//               AI <span className="text-fuchsia-400">Shorts</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
//             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">scroll →</span>
//           </div>

//           {/* horizontal scroll — 4 visible, rest scroll */}
//           <div
//             className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
//             style={{ scrollbarWidth: "thin", scrollbarColor: "#7c3aed #0d0d1a" }}
//           >
//             <div className="flex gap-4" style={{ width: "max-content" }}>
//               {shorts.map((v, i) => (
//                 <motion.div
//                   key={v.src}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
//                 >
//                   <ShortCard video={v} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

// {/* islamic vide0 */}

//  <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="py-15"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//               ISLAMIC  <span className="text-fuchsia-400">Shorts</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
//             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">scroll →</span>
//           </div>

//           {/* horizontal scroll — 4 visible, rest scroll */}
//           <div
//             className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
//             style={{ scrollbarWidth: "thin", scrollbarColor: "#7c3aed #0d0d1a" }}
//           >
//             <div className="flex gap-4" style={{ width: "max-content" }}>
//               {islamicshorts.map((v, i) => (
//                 <motion.div
//                   key={v.src}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
//                 >
//                   <ShortCard video={v} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//         {/* ══ BOTTOM CTA ═══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20 text-center"
//         >
//           <div className="inline-block relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-3xl blur-xl" />
//             <div className="relative border border-violet-500/20 rounded-2xl px-8 sm:px-14 py-10 bg-white/[0.02] backdrop-blur-sm">
//               <p className="font-['Caveat',cursive] text-violet-400 text-2xl font-bold mb-2">want something like this?</p>
//               <h3 className="text-3xl sm:text-4xl font-black italic uppercase font-['Oswald',sans-serif] text-white mb-4">
//                 Let&apos;s Create Together
//               </h3>
//               <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-6">
//                 AI video, motion graphics, 3D animation — I bring your ideas to life with the latest creative tools.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-sm uppercase tracking-widest px-7 py-3.5 rounded-full border-2 border-violet-400/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:-translate-y-0.5"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 Get In Touch
//               </a>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, Volume2, VolumeX, Maximize, X, Sparkles } from "lucide-react";

// if (typeof document !== "undefined" && !document.getElementById("google-fonts-aiedit")) {
//   const link = document.createElement("link");
//   link.id = "google-fonts-aiedit";
//   link.rel = "stylesheet";
//   link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
//   document.head.appendChild(link);
// }

// const shorts = [
//   { src: "/assest/aivid/_cutaway_1080p_20261010113307.mp4",    title: "Cutaway",     tag: "Cinematic" },
//   { src: "/assest/aivid/_genzmodel_1080p_20261010112926.mp4",  title: "Gen Z Model",    tag: "Fashion" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923125142.mp4",     title: "TV Ads #1",    tag: "Advertising" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923130211.mp4",     title: "TV Ads #2",    tag: "Advertising" },
//   { src: "/assest/aivid/_ui-kit_1080p_20261010113544.mp4",     title: "UI Kit",       tag: "Motion UI" },
//   { src: "/assest/aivid/Coffee_Motion_Timing_Preview.mp4",     title: "Coffee Motion", tag: "Product" },
//   { src: "/assest/aivid/Glass_Cards_Silent_Preview.mp4",       title: "Glass Cards",   tag: "Abstract" },
// ];

// const islamicshorts = [
//   { src: "/assest/islamic/Eak Garib Aadmi Or seekh _shorts _viral _youtubeshorts(2K_60FPS).webm",    title: "Eak Garib Aadmi Or seekh",     tag: "Cinematic" },
//   { src: "/assest/islamic/सच्चा दुकानदार – जो हमेशा सच बोलता था और अल्लाह ने उसे बरक(2K_60.webm",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/001.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/002.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/003.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },

// ];

// const aiteckshorts = [
//   { src: "/assest/aitechvid/0001.mp4",    title: "REAL VS FAKE MANGO",     tag: "INDENTFY" },
//   { src: "/assest/aitechvid/0002.mp4",    title: "REAL VS FAKE MANGO",     tag: "COMPANY" },
 
// ];

// // ─── Reusable progress bar ────────────────────────────────────────────────────
// function ProgressBar({ progress, onSeek, color = "bg-violet-500" }: {
//   progress: number;
//   onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
//   color?: string;
// }) {
//   return (
//     <div
//       className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/bar hover:h-2 transition-all duration-150"
//       onClick={onSeek}
//     >
//       <div className={`h-full ${color} rounded-full relative`} style={{ width: `${progress}%` }}>
//         <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
//       </div>
//     </div>
//   );
// }

// // ─── Short video card (portrait) ─────────────────────────────────────────────
// function ShortCard({ video }: { video: typeof shorts[0] }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

//   const play  = useCallback(() => { ref.current?.play();  setPlaying(true);  }, []);
//   const pause = useCallback(() => { ref.current?.pause(); setPlaying(false); }, []);

//   const togglePlay = (e: React.MouseEvent) => { e.stopPropagation(); playing ? pause() : play(); };
//   const toggleMute = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };

//   return (
//     <div
//       className="relative flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-violet-500 transition-colors group cursor-pointer bg-[#0d0d1a] shadow-[0_8px_32px_rgba(124,58,237,0.15)]"
//       style={{ width: "calc((100vw - 4rem - 3 * 1rem) / 4)", minWidth: 180, maxWidth: 280 }}
//       onMouseEnter={() => !isMobile && play()}
//       onMouseLeave={() => !isMobile && pause()}
//     >
//       <video
//         ref={ref}
//         src={video.src}
//         className="w-full aspect-[9/16] object-cover block rounded-2xl"
//         muted={muted}
//         loop
//         playsInline
//         onTimeUpdate={onTimeUpdate}
//         onEnded={() => setPlaying(false)}
//       />

//       {/* tag pill */}
//       <span className="absolute top-3 left-3 bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-violet-400/30">
//         {video.tag}
//       </span>

//       {/* play hint */}
//       {!playing && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none">
//           <div className="w-12 h-12 rounded-full bg-violet-600/90 border-2 border-white/80 flex items-center justify-center shadow-lg">
//             <Play className="w-5 h-5 text-white fill-white ml-0.5" />
//           </div>
//         </div>
//       )}

//       {/* controls */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
//         <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//         <div className="flex items-center gap-2 mt-2">
//           <button onClick={togglePlay} className="w-7 h-7 rounded-full bg-white/15 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//             {playing ? <Pause className="w-3 h-3 text-white fill-white" /> : <Play className="w-3 h-3 text-white fill-white ml-0.5" />}
//           </button>
//           <button onClick={toggleMute} className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors">
//             {muted ? <VolumeX className="w-3 h-3 text-white" /> : <Volume2 className="w-3 h-3 text-white" />}
//           </button>
//           <span className="ml-auto text-white font-black text-[10px] font-['Oswald',sans-serif] uppercase tracking-wide truncate max-w-[90px]">
//             {video.title}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Final video (full-width featured) ───────────────────────────────────────
// function FinalVideo({ src }: { src: string }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted]    = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [started, setStarted]   = useState(false);

//   const toggle = () => {
//     const v = ref.current;
//     if (!v) return;
//     if (v.paused) { v.play(); setPlaying(true); setStarted(true); }
//     else          { v.pause(); setPlaying(false); }
//   };
//   const toggleMute = () => {
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };
//   const fullscreen = () => ref.current?.requestFullscreen?.();
//   const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
//   const cur = ref.current?.currentTime || 0;
//   const dur = ref.current?.duration    || 0;

//   return (
//     <>
//       <div className="relative w-full rounded-3xl overflow-hidden border-2 border-violet-500/40 shadow-[0_0_60px_rgba(124,58,237,0.25)] group">
//         {/* glow ring */}
//         <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20 pointer-events-none z-10" />

//         <video
//           ref={ref}
//           src={src}
//           className="w-full block"
//           onTimeUpdate={onTimeUpdate}
//           onEnded={() => setPlaying(false)}
//           playsInline
//         />

//         {/* big play overlay */}
//         {!started && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-20" onClick={toggle}>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-600 border-4 border-white/80 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.8)]"
//             >
//               <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
//             </motion.div>
//           </div>
//         )}

//         {/* controls */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-5 pb-5 pt-14 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//           <div className="flex items-center gap-3 mt-3">
//             <button onClick={toggle} className="w-10 h-10 rounded-full bg-white/10 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//               {playing ? <Pause className="w-4 h-4 text-white fill-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
//             </button>
//             <button onClick={toggleMute} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
//             </button>
//             <span className="text-white/60 text-xs font-mono">{fmt(cur)} / {fmt(dur)}</span>
//             <button onClick={fullscreen} className="ml-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               <Maximize className="w-4 h-4 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // ─── Main page ────────────────────────────────────────────────────────────────
// export default function AiEditPage() {
//   return (
//     <div className="relative min-h-screen bg-[#07070f] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">

//       {/* ── background grid ── */}
//       <div className="fixed inset-0 pointer-events-none"
//         style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
//       />
//       {/* glow orbs */}
//       <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-20">

//         {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >
//           {/* eyebrow */}
//           <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6">
//             <Sparkles className="w-3.5 h-3.5 text-violet-400" />
//             <span className="text-violet-300 text-xs font-black uppercase tracking-widest">AI Generated</span>
//           </div>

//           <h1 className="text-[13vw] sm:text-[9vw] lg:text-[7rem] leading-[1.1] font-black tracking-tighter font-['Oswald',sans-serif] uppercase ">
//             <span className="block text-white">AI</span>
//             <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
//               EDIT
//             </span>
//           </h1>

//           <div className="mt-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10 relative">
//             <p className="text-slate-400 text-base sm:text-lg font-medium max-w-lg leading-relaxed">
//               AI-generated video content, motion experiments &amp; creative shorts — crafted using cutting-edge AI tools and motion design.
//             </p>
//             <div className="flex gap-6 shrink-0 absolute lg:top-0 lg:right-5 -top-25 right-1 ">
//               {[["8", "Videos"], ["AI", "Powered"], ["HD", "Quality"]].map(([val, lbl]) => (
//                 <div key={lbl} className="text-center">
//                   <p className="text-2xl sm:text-6xl font-black text-violet-400 font-['Oswald',sans-serif]">{val}</p>
//                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{lbl}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* handwritten accent */}
//           <p className="mt-4 font-['Caveat',cursive] text-violet-400 text-2xl font-bold rotate-[-1.5deg]">
//             where imagination meets AI ✦
//           </p>
//         </motion.div>

//         {/* ══ FEATURED FINAL VIDEO (FIRST BIG VIDEO) ═════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo src="/assest/aivid/Final (1) (1).mp4" />
//         </motion.div>

//         {/* ══ SECOND BIG VIDEO ═════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              ISLAMIC AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo src="/assest/youtube/01.mp4" />
//         </motion.div>

//         {/* ══ SHORTS ROW ═══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//                AI <span className="text-fuchsia-400">Shorts</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
//             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">scroll →</span>
//           </div>

//           {/* horizontal scroll — 4 visible, rest scroll */}
//           <div
//             className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
//             style={{ scrollbarWidth: "thin", scrollbarColor: "#7c3aed #0d0d1a" }}
//           >
//             <div className="flex gap-4" style={{ width: "max-content" }}>
//               {shorts.map((v, i) => (
//                 <motion.div
//                   key={v.src}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
//                 >
//                   <ShortCard video={v} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

// {/* islamic vide0 */}

//  <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="py-15"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//                ISLAMIC  <span className="text-fuchsia-400">Shorts</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
//             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">scroll →</span>
//           </div>

//           {/* horizontal scroll — 4 visible, rest scroll */}
//           <div
//             className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
//             style={{ scrollbarWidth: "thin", scrollbarColor: "#7c3aed #0d0d1a" }}
//           >
//             <div className="flex gap-4" style={{ width: "max-content" }}>
//               {islamicshorts.map((v, i) => (
//                 <motion.div
//                   key={v.src}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
//                 >
//                   <ShortCard video={v} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>


//         {/* ai tech video */}


//          <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="py-15"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//                AI INFO  <span className="text-fuchsia-400">Shorts</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
//             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0">scroll →</span>
//           </div>

//           {/* horizontal scroll — 4 visible, rest scroll */}
//           <div
//             className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
//             style={{ scrollbarWidth: "thin", scrollbarColor: "#7c3aed #0d0d1a" }}
//           >
//             <div className="flex gap-4" style={{ width: "max-content" }}>
//               {aiteckshorts.map((v, i) => (
//                 <motion.div
//                   key={v.src}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
//                 >
//                   <ShortCard video={v} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//         {/* ══ BOTTOM CTA ═══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20 text-center"
//         >
//           <div className="inline-block relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-3xl blur-xl" />
//             <div className="relative border border-violet-500/20 rounded-2xl px-8 sm:px-14 py-10 bg-white/[0.02] backdrop-blur-sm">
//               <p className="font-['Caveat',cursive] text-violet-400 text-2xl font-bold mb-2">want something like this?</p>
//               <h3 className="text-3xl sm:text-4xl font-black italic uppercase font-['Oswald',sans-serif] text-white mb-4">
//                 Let&apos;s Create Together
//               </h3>
//               <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-6">
//                 AI video, motion graphics, 3D animation — I bring your ideas to life with the latest creative tools.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-sm uppercase tracking-widest px-7 py-3.5 rounded-full border-2 border-violet-400/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:-translate-y-0.5"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 Get In Touch
//               </a>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, Volume2, VolumeX, Maximize, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// if (typeof document !== "undefined" && !document.getElementById("google-fonts-aiedit")) {
//   const link = document.createElement("link");
//   link.id = "google-fonts-aiedit";
//   link.rel = "stylesheet";
//   link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
//   document.head.appendChild(link);
// }

// const shorts = [
//   { src: "/assest/aivid/_cutaway_1080p_20261010113307.mp4",    title: "Cutaway",     tag: "Cinematic" },
//   { src: "/assest/aivid/_genzmodel_1080p_20261010112926.mp4",  title: "Gen Z Model",    tag: "Fashion" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923125142.mp4",     title: "TV Ads #1",    tag: "Advertising" },
//   { src: "/assest/aivid/_tv_ads_1080p_20260923130211.mp4",     title: "TV Ads #2",    tag: "Advertising" },
//   { src: "/assest/aivid/_ui-kit_1080p_20261010113544.mp4",     title: "UI Kit",       tag: "Motion UI" },
//   { src: "/assest/aivid/Coffee_Motion_Timing_Preview.mp4",     title: "Coffee Motion", tag: "Product" },
//   { src: "/assest/aivid/Glass_Cards_Silent_Preview.mp4",       title: "Glass Cards",   tag: "Abstract" },
// ];

// const islamicshorts = [
//   { src: "/assest/islamic/Eak Garib Aadmi Or seekh _shorts _viral _youtubeshorts(2K_60FPS).webm",    title: "Eak Garib Aadmi Or seekh",     tag: "Cinematic" },
//   { src: "/assest/islamic/सच्चा दुकानदार – जो हमेशा सच बोलता था और अल्लाह ने उसे बरक(2K_60.webm",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/001.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/002.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
//   { src: "/assest/islamic/003.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
// ];

// const aiteckshorts = [
//   { src: "/assest/aitechvid/0001.mp4",    title: "REAL VS FAKE MANGO",    tag: "INDENTFY" },
//   { src: "/assest/aitechvid/0002.mp4",    title: "REAL VS FAKE MANGO",    tag: "COMPANY" },
//   { src: "/assest/aitechvid/videoplayback(1).mp4",    title: "REAL VS FAKE MANGO",    tag: "COMPANY" },
//   { src: "/assest/aitechvid/videoplayback.mp4",    title: "REAL VS FAKE MANGO",    tag: "COMPANY" },
//   // { src: "/assest/aitechvid/0002.mp4",    title: "REAL VS FAKE MANGO",    tag: "COMPANY" },

// ];

// // ─── Reusable progress bar ────────────────────────────────────────────────────
// function ProgressBar({ progress, onSeek, color = "bg-violet-500" }: {
//   progress: number;
//   onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
//   color?: string;
// }) {
//   return (
//     <div
//       className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/bar hover:h-2 transition-all duration-150"
//       onClick={onSeek}
//     >
//       <div className={`h-full ${color} rounded-full relative`} style={{ width: `${progress}%` }}>
//         <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
//       </div>
//     </div>
//   );
// }

// // ─── Short video card (portrait) ─────────────────────────────────────────────
// function ShortCard({ video }: { video: typeof shorts[0] }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted] = useState(true);
//   const [progress, setProgress] = useState(0);

//   const play  = useCallback(() => { ref.current?.play();  setPlaying(true);  }, []);
//   const pause = useCallback(() => { ref.current?.pause(); setPlaying(false); }, []);

//   const togglePlay = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (playing) {
//       pause();
//     } else {
//       play();
//     }
//   };

//   const toggleMute = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.stopPropagation();
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };

//   return (
//     <div
//       className="relative flex-shrink-0 snap-start rounded-2xl overflow-hidden border-2 border-white/10 hover:border-violet-500 transition-colors group cursor-pointer bg-[#0d0d1a] shadow-[0_8px_32px_rgba(124,58,237,0.15)]"
//       style={{ width: "calc((100vw - 4rem - 3 * 1rem) / 4)", minWidth: 180, maxWidth: 280 }}
//       onMouseEnter={() => play()}
//       onMouseLeave={() => pause()}
//     >
//       <video
//         ref={ref}
//         src={video.src}
//         className="w-full aspect-[9/16] object-cover block rounded-2xl"
//         muted={muted}
//         loop
//         playsInline
//         onTimeUpdate={onTimeUpdate}
//         onEnded={() => setPlaying(false)}
//       />

//       {/* tag pill */}
//       <span className="absolute top-3 left-3 bg-violet-600/95 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-violet-400/30 z-10">
//         {video.tag}
//       </span>

//       {/* play hint / clickable play overlay for mobile & desktop */}
//       <div 
//         className="absolute inset-0 flex items-center justify-center bg-black/20 z-10"
//         onClick={togglePlay}
//       >
//         {!playing && (
//           <div className="w-12 h-12 rounded-full bg-violet-600/95 border-2 border-white/80 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
//             <Play className="w-5 h-5 text-white fill-white ml-0.5" />
//           </div>
//         )}
//       </div>

//       {/* controls */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
//         <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//         <div className="flex items-center gap-2 mt-2">
//           <button onClick={togglePlay} className="w-7 h-7 rounded-full bg-white/15 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//             {playing ? <Pause className="w-3 h-3 text-white fill-white" /> : <Play className="w-3 h-3 text-white fill-white ml-0.5" />}
//           </button>
//           <button onClick={toggleMute} className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors">
//             {muted ? <VolumeX className="w-3 h-3 text-white" /> : <Volume2 className="w-3 h-3 text-white" />}
//           </button>
//           <span className="ml-auto text-white font-black text-[10px] font-['Oswald',sans-serif] uppercase tracking-wide truncate max-w-[90px]">
//             {video.title}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Video Carousel Section with Smooth Desktop Sliding ──────────────────────────────
// function VideoCarouselSection({ title, subtitle, items }: { title: string; subtitle: string; items: typeof shorts }) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;
//     const container = scrollRef.current;
    
//     // Calculates width of visible items to smoothly slide one full frame over
//     const scrollAmount = container.clientWidth * 0.75;
    
//     container.scrollTo({
//       left: direction === "left" 
//         ? container.scrollLeft - scrollAmount 
//         : container.scrollLeft + scrollAmount,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.3 }}
//       className="py-6 relative group/section"
//     >
//       {/* label */}
//       <div className="flex items-center gap-3 mb-6">
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
//           <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
//         </div>
//         <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//            {title} <span className="text-fuchsia-400">{subtitle}</span>
//         </h2>
//         <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
        
//         {/* Desktop Smooth Slide Buttons */}
//         <div className="hidden lg:flex items-center gap-2">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => scroll("left")}
//             className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-violet-600 hover:border-violet-400 text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur-md"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => scroll("right")}
//             className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-violet-600 hover:border-violet-400 text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur-md"
//             aria-label="Scroll right"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </motion.button>
//         </div>

//         <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0 lg:hidden">scroll →</span>
//       </div>

//       {/* horizontal scroll container */}
//       <div
//         ref={scrollRef}
//         className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
//       >
//         <div className="flex gap-4" style={{ width: "max-content" }}>
//           {items.map((v, i) => (
//             <motion.div
//               key={v.src}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
//             >
//               <ShortCard video={v} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Final video (full-width featured) ───────────────────────────────────────
// function FinalVideo({ src }: { src: string }) {
//   const ref = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted]    = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [started, setStarted]   = useState(false);

//   const toggle = () => {
//     const v = ref.current;
//     if (!v) return;
//     if (v.paused) { v.play(); setPlaying(true); setStarted(true); }
//     else          { v.pause(); setPlaying(false); }
//   };
//   const toggleMute = () => {
//     if (!ref.current) return;
//     ref.current.muted = !ref.current.muted;
//     setMuted(ref.current.muted);
//   };
//   const onTimeUpdate = () => {
//     const v = ref.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };
//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     const v = ref.current;
//     if (!v) return;
//     const r = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
//   };
//   const fullscreen = () => ref.current?.requestFullscreen?.();
//   const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
//   const cur = ref.current?.currentTime || 0;
//   const dur = ref.current?.duration    || 0;

//   return (
//     <>
//       <div className="relative w-full rounded-3xl overflow-hidden border-2 border-violet-500/40 shadow-[0_0_60px_rgba(124,58,237,0.25)] group">
//         {/* glow ring */}
//         <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20 pointer-events-none z-10" />

//         <video
//           ref={ref}
//           src={src}
//           className="w-full block"
//           onTimeUpdate={onTimeUpdate}
//           onEnded={() => setPlaying(false)}
//           playsInline
//         />

//         {/* big play overlay */}
//         {!started && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-20" onClick={toggle}>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-600 border-4 border-white/80 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.8)]"
//             >
//               <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
//             </motion.div>
//           </div>
//         )}

//         {/* controls */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-5 pb-5 pt-14 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
//           <div className="flex items-center gap-3 mt-3">
//             <button onClick={toggle} className="w-10 h-10 rounded-full bg-white/10 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
//               {playing ? <Pause className="w-4 h-4 text-white fill-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
//             </button>
//             <button onClick={toggleMute} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
//             </button>
//             <span className="text-white/60 text-xs font-mono">{fmt(cur)} / {fmt(dur)}</span>
//             <button onClick={fullscreen} className="ml-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
//               <Maximize className="w-4 h-4 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // ─── Main page ────────────────────────────────────────────────────────────────
// export default function AiEditPage() {
//   return (
//     <div className="relative min-h-screen bg-[#07070f] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">

//       {/* ── background grid ── */}
//       <div className="fixed inset-0 pointer-events-none"
//         style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
//       />
//       {/* glow orbs */}
//       <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-20">

//         {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >
//           {/* eyebrow */}
//           <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6">
//             <Sparkles className="w-3.5 h-3.5 text-violet-400" />
//             <span className="text-violet-300 text-xs font-black uppercase tracking-widest">AI Generated</span>
//           </div>

//           <h1 className="text-[13vw] sm:text-[9vw] lg:text-[7rem] leading-[1.1] font-black tracking-tighter font-['Oswald',sans-serif] uppercase ">
//             <span className="block text-white">AI</span>
//             <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
//               EDIT
//             </span>
//           </h1>

//           <div className="mt-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10 relative">
//             <p className="text-slate-400 text-base sm:text-lg font-medium max-w-lg leading-relaxed">
//              AI-generated videos, motion design experiments, and creative shorts — created using cutting-edge AI tools like Grok AI and Flow, then professionally edited and enhanced in Adobe After Effects. Every video showcased here is crafted using a blend of AI creativity, motion design, and post-production.
//             </p>
//             <div className="flex gap-6 shrink-0 absolute lg:top-0 lg:right-5 -top-25 right-1 ">
//               {[["8", "Videos"], ["AI", "Powered"], ["HD", "Quality"]].map(([val, lbl]) => (
//                 <div key={lbl} className="text-center">
//                   <p className="text-2xl sm:text-6xl font-black text-violet-400 font-['Oswald',sans-serif]">{val}</p>
//                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{lbl}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* handwritten accent */}
//           <p className="mt-4 font-['Caveat',cursive] text-violet-400 text-2xl font-bold rotate-[-1.5deg]">
//             where imagination meets AI ✦
//           </p>
//         </motion.div>

//         {/* ══ FEATURED FINAL VIDEO (FIRST BIG VIDEO) ═════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo src="/assest/aivid/Final (1) (1).mp4" />
//         </motion.div>

//         {/* ══ SECOND BIG VIDEO ═════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mb-16"
//         >
//           {/* label */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
//               <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
//             </div>
//             <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
//              ISLAMIC AI<span className="text-violet-400">  VIDEO</span>
//             </h2>
//             <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
//           </div>

//           <FinalVideo src="/assest/youtube/01.mp4" />
//         </motion.div>

//         {/* ══ SHORTS CAROUSELS ════════════════════════════════════════════════ */}
//         <VideoCarouselSection title="AI" subtitle="Shorts" items={shorts} />
//         <VideoCarouselSection title="ISLAMIC" subtitle="Shorts" items={islamicshorts} />
//         <VideoCarouselSection title="AI INFO" subtitle="Shorts" items={aiteckshorts} />

//         {/* ══ BOTTOM CTA ═══════════════════════════════════════════════════════ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20 text-center"
//         >
//           <div className="inline-block relative w-full
//           ">
//             <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-3xl blur-xl" />
//             <div className="relative border border-violet-500/20 rounded-2xl px-8 sm:px-14 py-10 bg-white/[0.02] backdrop-blur-sm">
//               <p className="font-['Caveat',cursive] text-violet-400 text-2xl font-bold mb-2">want something like this?</p>
//               <h3 className="text-3xl sm:text-4xl font-black italic uppercase font-['Oswald',sans-serif] text-white mb-4">
//                 Let&apos;s Create Together
//               </h3>
//               <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-6">
//                 AI video, motion graphics, 3D animation — I bring your ideas to life with the latest creative tools.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-sm uppercase tracking-widest px-7 py-3.5 rounded-full border-2 border-violet-400/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:-translate-y-0.5"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 Get In Touch
//               </a>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }

"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

if (typeof document !== "undefined" && !document.getElementById("google-fonts-aiedit")) {
  const link = document.createElement("link");
  link.id = "google-fonts-aiedit";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

const shorts = [
  { src: "/assest/aivid/_cutaway_1080p_20261010113307.mp4",    title: "Cutaway",     tag: "Cinematic" },
  { src: "/assest/aivid/_genzmodel_1080p_20261010112926.mp4",  title: "Gen Z Model",    tag: "Fashion" },
  { src: "/assest/aivid/_tv_ads_1080p_20260923125142.mp4",     title: "TV Ads #1",    tag: "Advertising" },
  { src: "/assest/aivid/_tv_ads_1080p_20260923130211.mp4",     title: "TV Ads #2",    tag: "Advertising" },
  { src: "/assest/aivid/_ui-kit_1080p_20261010113544.mp4",     title: "UI Kit",       tag: "Motion UI" },
  { src: "/assest/aivid/Coffee_Motion_Timing_Preview.mp4",     title: "Coffee Motion", tag: "Product" },
  { src: "/assest/aivid/Glass_Cards_Silent_Preview.mp4",       title: "Glass Cards",   tag: "Abstract" },
];

const islamicshorts = [
  { src: "/assest/islamic/Eak Garib Aadmi Or seekh _shorts _viral _youtubeshorts(2K_60FPS).webm",    title: "Eak Garib Aadmi Or seekh",     tag: "Cinematic" },
  { src: "/assest/islamic/सच्चा दुकानदार – जो हमेशा सच बोलता था और अल्लाह ने उसे बरक(2K_60.webm",  title: "सच्चा दुकानदार",   tag: "TRUST" },
  { src: "/assest/islamic/001.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
  { src: "/assest/islamic/002.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
  { src: "/assest/islamic/003.mp4",  title: "सच्चा दुकानदार",   tag: "TRUST" },
];

const aiteckshorts = [
  { src: "/assest/aitechvid/0001.mp4",    title: "REAL VS FAKE MANGO",    tag: "INDENTFY" },
  { src: "/assest/aitechvid/0002.mp4",    title: "REAL VS FAKE MANGO",    tag: "COMPANY" },
  { src: "/assest/aitechvid/videoplayback(1).mp4",    title: "REAL VS FAKE MANGO",    tag: "COMPANY" },
  { src: "/assest/aitechvid/videoplayback.mp4",    title: "REAL VS FAKE MANGO",    tag: "COMPANY" },
];

// ─── Reusable progress bar ────────────────────────────────────────────────────
function ProgressBar({ progress, onSeek, color = "bg-violet-500" }: {
  progress: number;
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
  color?: string;
}) {
  return (
    <div
      className="w-full h-1 bg-white/20 rounded-full cursor-pointer group/bar hover:h-2 transition-all duration-150"
      onClick={onSeek}
    >
      <div className={`h-full ${color} rounded-full relative`} style={{ width: `${progress}%` }}>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

// ─── Short video card (portrait) ─────────────────────────────────────────────
function ShortCard({ video }: { video: typeof shorts[0] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const play  = useCallback(() => { ref.current?.play();  setPlaying(true);  }, []);
  const pause = useCallback(() => { ref.current?.pause(); setPlaying(false); }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
    setMuted(ref.current.muted);
  };
  const onTimeUpdate = () => {
    const v = ref.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    const r = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
  };

  return (
    <div
      className="relative flex-shrink-0 snap-start rounded-2xl overflow-hidden border-2 border-white/10 hover:border-violet-500 transition-colors group cursor-pointer bg-[#0d0d1a] shadow-[0_8px_32px_rgba(124,58,237,0.15)]"
      style={{ width: "calc((100vw - 4rem - 3 * 1rem) / 4)", minWidth: 180, maxWidth: 280 }}
      onMouseEnter={() => play()}
      onMouseLeave={() => pause()}
    >
      <video
        ref={ref}
        src={video.src}
        className="w-full aspect-[9/16] object-cover block rounded-2xl"
        muted={muted}
        loop
        playsInline
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setPlaying(false)}
      />

      {/* tag pill */}
      <span className="absolute top-3 left-3 bg-violet-600/95 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-violet-400/30 z-10">
        {video.tag}
      </span>

      {/* play hint / clickable play overlay for mobile & desktop */}
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black/20 z-10"
        onClick={togglePlay}
      >
        {!playing && (
          <div className="w-12 h-12 rounded-full bg-violet-600/95 border-2 border-white/80 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        )}
      </div>

      {/* controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
        <div className="flex items-center gap-2 mt-2">
          <button onClick={togglePlay} className="w-7 h-7 rounded-full bg-white/15 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
            {playing ? <Pause className="w-3 h-3 text-white fill-white" /> : <Play className="w-3 h-3 text-white fill-white ml-0.5" />}
          </button>
          <button onClick={toggleMute} className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors">
            {muted ? <VolumeX className="w-3 h-3 text-white" /> : <Volume2 className="w-3 h-3 text-white" />}
          </button>
          <span className="ml-auto text-white font-black text-[10px] font-['Oswald',sans-serif] uppercase tracking-wide truncate max-w-[90px]">
            {video.title}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Video Carousel Section with Smooth Desktop Sliding ──────────────────────────────
function VideoCarouselSection({ title, subtitle, items }: { title: string; subtitle: string; items: typeof shorts }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    const scrollAmount = container.clientWidth * 0.75;
    
    container.scrollTo({
      left: direction === "left" 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="py-6 relative group/section"
    >
      {/* label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
        <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
           {title} <span className="text-fuchsia-400">{subtitle}</span>
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
        
        {/* Desktop Smooth Slide Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-violet-600 hover:border-violet-400 text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-violet-600 hover:border-violet-400 text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest shrink-0 lg:hidden">scroll →</span>
      </div>

      {/* horizontal scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
      >
        <div className="flex gap-4" style={{ width: "max-content" }}>
          {items.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
            >
              <ShortCard video={v} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Final video (full-width featured) ───────────────────────────────────────
function FinalVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted]    = useState(false);
  const [progress, setProgress] = useState(0);
  const [started, setStarted]   = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { 
      v.play().then(() => {
        setPlaying(true);
        setStarted(true);
      }).catch(() => {}); 
    } else { 
      v.pause(); 
      setPlaying(false); 
    }
  };

  const toggleMute = () => {
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
    setMuted(ref.current.muted);
  };

  const onTimeUpdate = () => {
    const v = ref.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = ref.current;
    if (!v) return;
    const r = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
  };

  const fullscreen = () => ref.current?.requestFullscreen?.();
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const cur = ref.current?.currentTime || 0;
  const dur = ref.current?.duration    || 0;

  return (
    <>
      <div className="relative w-full rounded-3xl overflow-hidden border-2 border-violet-500/40 shadow-[0_0_60px_rgba(124,58,237,0.25)] group">
        {/* glow ring */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20 pointer-events-none z-10" />

        <video
          ref={ref}
          src={src}
          className="w-full block"
          controls
          controlsList="nodownload"
          onPlay={() => { setPlaying(true); setStarted(true); }}
          onPause={() => setPlaying(false)}
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setPlaying(false)}
          playsInline
        />

        {/* big play overlay for when video hasn't started */}
        {!started && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-20" onClick={toggle}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-600 border-4 border-white/80 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.8)]"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
            </motion.div>
          </div>
        )}

        {/* desktop custom controls bar (hidden on mobile since native 'controls' attribute is active) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-5 pb-5 pt-14 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
          <ProgressBar progress={progress} onSeek={seek} color="bg-violet-500" />
          <div className="flex items-center gap-3 mt-3">
            <button onClick={toggle} className="w-10 h-10 rounded-full bg-white/10 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors">
              {playing ? <Pause className="w-4 h-4 text-white fill-white" /> : <Play className="w-4 h-4 text-white fill-white ml-0.5" />}
            </button>
            <button onClick={toggleMute} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
              {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
            </button>
            <span className="text-white/60 text-xs font-mono">{fmt(cur)} / {fmt(dur)}</span>
            <button onClick={fullscreen} className="ml-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
              <Maximize className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function AiEditPage() {
  return (
    <div className="relative min-h-screen bg-[#07070f] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">

      {/* ── background grid ── */}
      <div className="fixed inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />
      {/* glow orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-20">

        {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-violet-300 text-xs font-black uppercase tracking-widest">AI Generated</span>
          </div>

          <h1 className="text-[13vw] sm:text-[9vw] lg:text-[7rem] leading-[1.1] font-black tracking-tighter font-['Oswald',sans-serif] uppercase ">
            <span className="block text-white">AI</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              EDIT
            </span>
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10 relative">
            <p className="text-slate-400 text-base sm:text-lg font-medium max-w-lg leading-relaxed">
              AI-generated videos, motion design experiments, and creative shorts — created using cutting-edge AI tools like Grok AI and Flow, then professionally edited and enhanced in Adobe After Effects. Every video showcased here is crafted using a blend of AI creativity, motion design, and post-production.
            </p>
            <div className="flex gap-6 shrink-0 absolute lg:top-0 lg:right-5 -top-25 right-1 ">
              {[["18", "Videos"], ["AI", "Powered"], ["HD", "Quality"]].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="text-2xl sm:text-6xl font-black text-violet-400 font-['Oswald',sans-serif]">{val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* handwritten accent */}
          <p className="mt-4 font-['Caveat',cursive] text-violet-400 text-2xl font-bold rotate-[-1.5deg]">
            where imagination meets AI ✦
          </p>
        </motion.div>

        {/* ══ FEATURED FINAL VIDEO (FIRST BIG VIDEO) ═════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-16"
        >
          {/* label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
             AI<span className="text-violet-400">  VIDEO</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
          </div>

          <FinalVideo src="/assest/aivid/Final (1) (1).mp4" />
        </motion.div>

        {/* ══ SECOND BIG VIDEO ═════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-16"
        >
          {/* label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black italic uppercase text-white font-['Oswald',sans-serif] tracking-wide">
             ISLAMIC AI<span className="text-violet-400">  VIDEO</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
          </div>

          <FinalVideo src="/assest/youtube/01.mp4" />
        </motion.div>

        {/* ══ SHORTS CAROUSELS ════════════════════════════════════════════════ */}
        <VideoCarouselSection title="AI" subtitle="Shorts" items={shorts} />
        <VideoCarouselSection title="ISLAMIC" subtitle="Shorts" items={islamicshorts} />
        <VideoCarouselSection title="AI INFO" subtitle="Shorts" items={aiteckshorts} />

        {/* ══ BOTTOM CTA ═══════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-3xl blur-xl" />
            <div className="relative border border-violet-500/20 rounded-2xl px-8 sm:px-14 py-10 bg-white/[0.02] backdrop-blur-sm">
              <p className="font-['Caveat',cursive] text-violet-400 text-2xl font-bold mb-2">want something like this?</p>
              <h3 className="text-3xl sm:text-4xl font-black italic uppercase font-['Oswald',sans-serif] text-white mb-4">
                Let&apos;s Create Together
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-6">
                AI video, motion graphics, 3D animation — I bring your ideas to life with the latest creative tools.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-black text-sm uppercase tracking-widest px-7 py-3.5 rounded-full border-2 border-violet-400/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}