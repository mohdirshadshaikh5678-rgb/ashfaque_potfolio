
// "use client"
// import React from 'react';
// import { motion, type Variants, type TargetAndTransition } from 'framer-motion';
// import { 
//   Check, 
//   ArrowRight, 
//   Grip, 
//   Smartphone, 
//   Monitor, 
//   Globe, 
//   ShoppingBag, 
//   ShoppingCart,
//   Database,
//   ShieldCheck,
//   Headphones,
//   Sparkles
// } from 'lucide-react';

// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec4-v2')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec4-v2';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap';
//   document.head.appendChild(link);
// }

// const cardContainerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.18,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardItemVariants: Variants = {
//   hidden: { opacity: 0, y: 60, scale: 0.92 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const floatAnim = (
//   duration = 4,
//   yDist = 6,
//   rotateDist = 2
// ): { animate: TargetAndTransition } => ({
//   animate: {
//     y: [0, -yDist, 0],
//     rotate: [-rotateDist, rotateDist, -rotateDist],
//     transition: {
//       duration,
//       repeat: Infinity,
//       ease: 'easeInOut',
//     },
//   },
// });

// const TopLeftArrowSVG = () => (
//   <svg className="w-16 h-12 text-white overflow-visible" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
//     <path d="M10 15 Q 55 0, 85 42" strokeDasharray="100" />
//     <path d="M68 38 L 85 42 L 78 22" strokeWidth="3.5" strokeLinejoin="round" />
//     {/* Chalk Hatching Lines */}
//     <line x1="0" y1="5" x2="12" y2="15" opacity="0.6" strokeWidth="2" />
//     <line x1="5" y1="0" x2="18" y2="10" opacity="0.6" strokeWidth="2" />
//   </svg>
// );

// const BottomLeftArrowSVG = () => (
//   <svg className="w-16 h-10 text-white overflow-visible" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
//     <path d="M15 42 Q 60 48, 85 12" />
//     <path d="M68 15 L 85 12 L 81 30" strokeWidth="3.5" strokeLinejoin="round" />
//   </svg>
// );

// const BottomRightArrowSVG = () => (
//   <svg className="w-16 h-10 text-white overflow-visible" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
//     <path d="M85 38 Q 40 48, 15 18" />
//     <path d="M15 18 L 32 18 M 15 18 L 22 34" strokeWidth="3.5" strokeLinejoin="round" />
//   </svg>
// );

// export default function homesec4() {
//   return (
//     <section id="homesec4" className="relative w-full min-h-screen bg-[#c81e1e] text-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4 py-12 lg:py-16 flex flex-col items-center justify-center select-none scroll-mt-16">
      
//       {/* Dynamic Red Textured Background with Chalk/Scratch Doodles */}
//       <div 
//         className="absolute inset-0 pointer-events-none opacity-25 bg-cover bg-center mix-blend-overlay"
//         style={{
//           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(150,0,0,0.8) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><path d="M0 0L120 120M120 0L0 120M30 0L0 30M90 120L120 90" stroke="%23ffffff" stroke-width="1" opacity="0.3"/></svg>')`
//         }}
//       />

//       {/* Decorative Red Background Lines & Crosshatch Strokes */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
//         <div className="absolute top-8 left-8 text-white font-serif text-8xl font-black rotate-[-15deg] select-none">{"//"}</div>
//         <div className="absolute bottom-12 right-12 text-white font-serif text-9xl font-black rotate-[20deg] select-none">{"///"}</div>
//         <div className="absolute top-1/4 right-6 text-white text-5xl rotate-12">✦</div>
//         <div className="absolute bottom-1/3 left-6 text-white text-6xl -rotate-45">✦</div>
//         <div className="absolute top-1/2 left-2 text-white text-4xl opacity-50">≡</div>
//         <div className="absolute bottom-1/4 right-4 text-white text-4xl opacity-50">{"///"}</div>
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 max-w-[1360px] w-full mx-auto flex flex-col items-center justify-center">

//         {/* ================= CURSIVE DOODLES AROUND CARDS ================= */}
        
//         {/* TOP-LEFT DOODLE: "Code Build Create" */}
//         <motion.div 
//           {...floatAnim(4.5, 5, 2)}
//           className="absolute -top-10 left-2 sm:left-8 z-30 hidden md:flex flex-col items-start font-['Caveat',cursive] text-white text-3xl lg:text-4xl font-extrabold leading-none rotate-[-10deg] pointer-events-none drop-shadow-md"
//         >
//           <div className="flex items-center gap-1.5">
//             <span className="text-2xl opacity-90">≡</span>
//             <span>Code</span>
//           </div>
//           <p className="pl-4">Build</p>
//           <p className="pl-8 underline decoration-white/80 decoration-2">Create</p>
//           <div className="mt-1 translate-x-14">
//             <TopLeftArrowSVG />
//           </div>
//         </motion.div>

//         {/* TOP-RIGHT DOODLE: "Better Web Solutions" */}
//         <motion.div 
//           {...floatAnim(5.2, 6, -2)}
//           className="absolute -top-8 right-2 sm:right-8 z-30 hidden md:flex flex-col items-end font-['Caveat',cursive] text-white text-3xl lg:text-4xl font-extrabold leading-none rotate-[8deg] pointer-events-none text-right drop-shadow-md"
//         >
//           <p>Better</p>
//           <p className="pr-3">Web <span className="text-2xl opacity-90">≡</span></p>
//           <p className="pr-6 underline decoration-white/80 decoration-2">Solutions</p>
//           {/* Spark Lines */}
//           <div className="absolute -left-6 top-1 text-2xl">✦</div>
//         </motion.div>

//         {/* BOTTOM-LEFT DOODLE: "Turn Ideas Into Websites" */}
//         <motion.div 
//           {...floatAnim(4.8, 5, -1.5)}
//           className="absolute -bottom-10 left-2 sm:left-10 z-30 hidden md:flex flex-col items-start font-['Caveat',cursive] text-white text-3xl lg:text-4xl font-extrabold leading-none rotate-[-6deg] pointer-events-none drop-shadow-md"
//         >
//           <div className="flex items-center gap-1.5">
//             <span className="text-2xl opacity-90">≡</span>
//             <span>Turn Ideas</span>
//           </div>
//           <p className="pl-5 underline decoration-white/80 decoration-2">Into Websites</p>
//           <div className="mt-1 translate-x-16">
//             <BottomLeftArrowSVG />
//           </div>
//         </motion.div>

//         {/* BOTTOM-RIGHT DOODLE: "Clean Code Great Results" */}
//         <motion.div 
//           {...floatAnim(5.5, 6, 2)}
//           className="absolute -bottom-10 right-2 sm:right-8 z-30 hidden md:flex flex-col items-end font-['Caveat',cursive] text-white text-3xl lg:text-4xl font-extrabold leading-none rotate-[10deg] pointer-events-none text-right drop-shadow-md"
//         >
//           <div className="mb-1 mr-14">
//             <BottomRightArrowSVG />
//           </div>
//           <p>Clean Code <span className="text-2xl opacity-90">{"///"}</span></p>
//           <p className="pr-4 underline decoration-white/80 decoration-2">Great Results</p>
//         </motion.div>


//         {/* ================= 3 CARDS GRID CONTAINER ================= */}
//         <motion.div 
//           variants={cardContainerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center justify-center my-6"
//         >

//           {/* ================= 1. LEFT CARD (PURPLE E-COMMERCE) ================= */}
//           <motion.div
//             variants={cardItemVariants}
//             whileHover={{ scale: 1.03, rotate: -2, zIndex: 40 }}
//             className="lg:col-span-4 bg-[#2e1052] text-white rounded-[32px] p-6 sm:p-7 border-4 border-white shadow-[0_25px_50px_rgba(0,0,0,0.5)] transform lg:rotate-[-6deg] lg:-mr-3 relative overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[610px] z-10"
//           >
//             {/* Inner Subtle Chalk Outline */}
//             <div className="absolute inset-2 border border-white/20 rounded-[26px] pointer-events-none" />

//             {/* Top Bar Header */}
//             <div className="flex justify-between items-center mb-3 z-10">
//               <span className="text-white font-mono font-black text-2xl tracking-wider">&lt;/&gt;</span>
//               <Grip className="w-6 h-6 text-white/70" />
//             </div>

//             {/* Title & Subtitle */}
//             <div className="mb-3 z-10">
//               <h3 className="text-3xl sm:text-4xl font-black italic tracking-wide text-white font-['Oswald',sans-serif] uppercase leading-[0.98] mb-2 drop-shadow">
//                 E-COMMERCE<br />WEBSITE<br />DEVELOPMENT
//               </h3>
//               <p className="text-white/90 font-['Caveat',cursive] text-xl font-bold leading-tight">
//                 Build your online store with modern web solutions.
//               </p>
//             </div>

//             {/* Center Graphic: Laptop showing E-Commerce Store & Floating Cart */}
//             <div className="relative my-2 bg-[#3e176d] rounded-2xl p-3 border border-white/20 shadow-inner flex flex-col items-center z-10">
              
//               {/* Laptop Display Container */}
//               <div className="w-full bg-[#1b0833] rounded-xl p-2.5 border border-white/30 flex gap-2 items-center min-h-[135px] relative overflow-hidden">
                
//                 {/* Product Display Box */}
//                 <div className="w-1/2 bg-[#2a0e4f] rounded-lg p-2 border border-purple-400/30 flex flex-col items-center justify-between h-full">
//                   <div className="w-full h-12 bg-purple-950/80 rounded flex items-center justify-center border border-purple-400/20">
//                     <ShoppingBag className="w-7 h-7 text-purple-300" />
//                   </div>
//                   <div className="w-full space-y-1 mt-1">
//                     <div className="w-full h-1.5 bg-purple-300/40 rounded" />
//                     <div className="w-2/3 h-1.5 bg-purple-300/20 rounded" />
//                   </div>
//                 </div>

//                 {/* Right Checkout Details */}
//                 <div className="w-1/2 flex flex-col gap-2 justify-center">
//                   <div className="w-full h-2 bg-purple-300/40 rounded" />
//                   <div className="w-4/5 h-2 bg-purple-300/30 rounded" />
//                   <div className="w-full h-8 bg-[#1d63fe] rounded-lg flex items-center justify-center text-xs font-black gap-1 mt-1 text-white shadow">
//                     <ShoppingCart className="w-3.5 h-3.5" /> Buy Now
//                   </div>
//                 </div>

//               </div>

//               {/* Floating Purple Cart Overlay Badge */}
//               <div className="absolute -right-2 -bottom-2 bg-[#5113a8] border-2 border-white rounded-2xl p-2.5 shadow-xl rotate-12 flex items-center justify-center">
//                 <ShoppingCart className="w-6 h-6 text-white" />
//               </div>

//               {/* Extra Shopping Cart Doodle Icon */}
//               <div className="absolute left-2 -bottom-3 text-white/40 text-xs font-mono">
//                 🛒
//               </div>
//             </div>

//             {/* Checklist items */}
//             <ul className="space-y-2.5 my-3 pl-1 text-sm sm:text-base font-bold text-white z-10">
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-white text-[#2e1052] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>Custom Store Design</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-white text-[#2e1052] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>Payment Integration</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-white text-[#2e1052] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>Product Management</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-white text-[#2e1052] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>Fast & Secure</span>
//               </li>
//             </ul>

//             {/* Bottom CTA Pill Button */}
//             <button className="mt-2 w-full bg-white hover:bg-slate-100 text-[#2e1052] font-black text-sm py-3.5 px-6 rounded-full shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider z-10">
//               <ArrowRight className="w-4 h-4 stroke-[3.5]" />
//               <span>START YOUR STORE</span>
//             </button>
//           </motion.div>


//           {/* ================= 2. CENTER MAIN CARD (RED HIGHLIGHTED) ================= */}
//           <motion.div
//             variants={cardItemVariants}
//             whileHover={{ scale: 1.04, zIndex: 50 }}
//             className="lg:col-span-4 bg-[#b21212] text-white rounded-[36px] p-6 sm:p-8 border-4 border-white shadow-[0_30px_70px_rgba(0,0,0,0.7)] relative z-20 overflow-hidden flex flex-col justify-between min-h-[640px]"
//           >
//             {/* Corner Decorative Sketch Accent */}
//             <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full pointer-events-none" />

//             {/* Top Bar Header */}
//             <div className="flex justify-between items-center mb-2 z-10">
//               <span className="text-white font-mono font-black text-2xl tracking-wider">&lt;/&gt;</span>
//               <Grip className="w-6 h-6 text-white/80" />
//             </div>

//             {/* Title & Subtitle */}
//             <div className="mb-2 text-left z-10">
//               <h2 className="text-4xl sm:text-5xl font-black italic tracking-wide font-['Oswald',sans-serif] uppercase leading-[0.92] drop-shadow-md">
//                 <span className="text-white">FULL STACK</span><br />
//                 <span className="text-[#0c1838]">WEB</span><br />
//                 <span className="text-[#0c1838]">DEVELOPMENT</span>
//               </h2>
//               <p className="mt-2 text-white/95 font-['Caveat',cursive] text-xl sm:text-2xl font-bold leading-tight">
//                 We build complete web applications from start to success.
//               </p>
//             </div>

//             {/* Center Laptop Graphic: FRONTEND vs BACKEND Split Screen */}
//             <div className="relative my-2 bg-[#8c0a0a] rounded-2xl p-3 border-2 border-white/40 shadow-2xl z-10">
              
//               {/* Labels Header */}
//               <div className="grid grid-cols-2 gap-2 text-center text-xs font-black mb-1.5">
//                 <span className="bg-white/20 text-white py-0.5 rounded-md uppercase tracking-wider text-[11px] border border-white/20">FRONTEND</span>
//                 <span className="bg-white/20 text-white py-0.5 rounded-md uppercase tracking-wider text-[11px] border border-white/20">BACKEND</span>
//               </div>

//               {/* Laptop Frame Container */}
//               <div className="bg-[#140202] rounded-xl p-2.5 border border-white/30 grid grid-cols-2 gap-2 items-center min-h-[125px] relative">
                
//                 {/* Left: FRONTEND (React, Tailwind, HTML, CSS) */}
//                 <div className="border border-white/20 rounded-lg p-2 flex flex-col gap-1.5 items-center justify-center bg-red-950/50 h-full">
//                   <div className="w-full h-2 bg-sky-400/50 rounded" />
//                   <div className="w-3/4 h-2 bg-sky-400/30 rounded" />
                  
//                   {/* Tech Logos Row */}
//                   <div className="flex items-center gap-1 mt-1">
//                     <span className="text-xs">⚛️</span>
//                     <span className="text-[10px] font-bold text-sky-300">Tailwind</span>
//                     <span className="text-[9px] font-black bg-orange-600 text-white px-1 rounded">5</span>
//                     <span className="text-[9px] font-black bg-blue-600 text-white px-1 rounded">3</span>
//                   </div>
//                 </div>

//                 {/* Center </ > Badge */}
//                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#b21212] font-black text-xs px-2 py-0.5 rounded-full border border-red-900 shadow-lg z-20">
//                   &lt;/&gt;
//                 </div>

//                 {/* Right: BACKEND (Node JS, DB, MongoDB, Server) */}
//                 <div className="border border-white/20 rounded-lg p-2 flex flex-col gap-1.5 items-center justify-center bg-red-950/50 h-full">
//                   <div className="w-full h-2 bg-green-400/50 rounded" />
//                   <div className="w-3/4 h-2 bg-green-400/30 rounded" />

//                   {/* Tech Logos Row */}
//                   <div className="flex items-center gap-1.5 mt-1">
//                     <span className="text-[9px] font-black bg-green-700 text-white px-1 rounded">JS</span>
//                     <span className="text-xs">🍃</span>
//                     <Database className="w-3.5 h-3.5 text-blue-300" />
//                   </div>
//                 </div>

//               </div>

//             </div>

//             {/* 4 Feature Columns below laptop */}
//             <div className="grid grid-cols-4 gap-1.5 my-2 text-center z-10">
//               <div className="flex flex-col items-center gap-1">
//                 <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
//                   <Sparkles className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-['Caveat',cursive] text-xs sm:text-sm font-bold leading-none">Modern Technologies</span>
//               </div>

//               <div className="flex flex-col items-center gap-1">
//                 <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
//                   <Monitor className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-['Caveat',cursive] text-xs sm:text-sm font-bold leading-none">Responsive Design</span>
//               </div>

//               <div className="flex flex-col items-center gap-1">
//                 <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
//                   <ShieldCheck className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-['Caveat',cursive] text-xs sm:text-sm font-bold leading-none">Secure & Scalable</span>
//               </div>

//               <div className="flex flex-col items-center gap-1">
//                 <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
//                   <Headphones className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-['Caveat',cursive] text-xs sm:text-sm font-bold leading-none">Ongoing Support</span>
//               </div>
//             </div>

//             {/* Bottom CTA Pill Button */}
//             <button className="mt-2 w-full bg-white hover:bg-slate-100 text-[#b21212] font-black text-sm py-4 px-6 rounded-full shadow-2xl transition-transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider z-10">
//               <ArrowRight className="w-4 h-4 stroke-[3.5]" />
//               <span>LET&apos;S BUILD SOMETHING GREAT</span>
//             </button>
//           </motion.div>


//           {/* ================= 3. RIGHT CARD (YELLOW PORTFOLIO) ================= */}
//           <motion.div
//             variants={cardItemVariants}
//             whileHover={{ scale: 1.03, rotate: 2, zIndex: 40 }}
//             className="lg:col-span-4 bg-[#f19d00] text-[#0c1838] rounded-[32px] p-6 sm:p-7 border-4 border-white shadow-[0_25px_50px_rgba(0,0,0,0.5)] transform lg:rotate-[6deg] lg:-ml-3 relative overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[610px] z-10"
//           >
//             {/* Top Right Tape / Sticker Graphic */}
//             <div className="absolute -top-3 right-6 w-24 h-8 bg-amber-200/90 rotate-12 border border-black/10 shadow-sm pointer-events-none z-20" />

//             {/* Inner Subtle Outline */}
//             <div className="absolute inset-2 border border-black/10 rounded-[26px] pointer-events-none" />

//             {/* Top Bar Header */}
//             <div className="flex justify-between items-center mb-3 z-10">
//               <span className="text-[#0c1838] font-mono font-black text-2xl tracking-wider">&lt;/&gt;</span>
//               <Grip className="w-6 h-6 text-[#0c1838]/60" />
//             </div>

//             {/* Title & Subtitle */}
//             <div className="mb-3 z-10">
//               <h3 className="text-3xl sm:text-4xl font-black italic tracking-wide text-[#0c1838] font-['Oswald',sans-serif] uppercase leading-[0.98] mb-2 drop-shadow-sm">
//                 PORTFOLIO<br />WEBSITE<br />DESIGN
//               </h3>
//               <p className="text-[#0c1838]/90 font-['Caveat',cursive] text-xl font-bold leading-tight">
//                 Showcase your work with a modern and professional website.
//               </p>
//             </div>

//             {/* Center Graphic: Laptop showing Portfolio Screen & Plant Pot */}
//             <div className="relative my-2 bg-[#d88700] rounded-2xl p-3 border border-black/10 shadow-inner flex flex-col items-center z-10">
              
//               {/* Laptop Screen Frame */}
//               <div className="w-full bg-white rounded-xl p-2.5 border border-black/15 flex gap-2 items-center min-h-[135px] relative overflow-hidden">
                
//                 {/* Left Profile Card */}
//                 <div className="w-1/3 bg-purple-100 rounded-lg p-2 border border-purple-200 flex flex-col items-center justify-center h-full">
//                   <div className="w-9 h-9 rounded-full bg-purple-300 border border-purple-400 flex items-center justify-center text-sm font-bold text-purple-900">
//                     👤
//                   </div>
//                   <div className="w-3/4 h-1.5 bg-purple-400/40 rounded mt-2" />
//                 </div>

//                 {/* Right Portfolio Lines */}
//                 <div className="w-2/3 flex flex-col gap-2 justify-center">
//                   <div className="w-full h-2 bg-slate-200 rounded" />
//                   <div className="w-4/5 h-2 bg-slate-200 rounded" />
//                   <div className="w-1/2 h-2.5 bg-amber-500 rounded" />
//                 </div>

//               </div>

//               {/* Plant Pot Doodle next to laptop */}
//               <div className="absolute -right-2 -bottom-2 text-2xl pointer-events-none drop-shadow">
//                 🪴
//               </div>

//             </div>

//             {/* Checklist items */}
//             <ul className="space-y-2.5 my-3 pl-1 text-sm sm:text-base font-extrabold text-[#0c1838] z-10">
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-[#0c1838] text-[#f19d00] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>Custom Design</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-[#0c1838] text-[#f19d00] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>Fast Loading</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-[#0c1838] text-[#f19d00] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>SEO Friendly</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <div className="w-5 h-5 rounded-full bg-[#0c1838] text-[#f19d00] flex items-center justify-center shrink-0 shadow">
//                   <Check className="w-3.5 h-3.5 stroke-[3.5]" />
//                 </div>
//                 <span>Mobile Responsive</span>
//               </li>
//             </ul>

//             {/* Device Icons Row */}
//             <div className="flex justify-center items-center gap-5 my-2 text-[#0c1838] z-10">
//               <Monitor className="w-6 h-6 stroke-[2.5]" />
//               <span className="text-sm font-bold opacity-40">|</span>
//               <Smartphone className="w-6 h-6 stroke-[2.5]" />
//               <span className="text-sm font-bold opacity-40">|</span>
//               <Globe className="w-6 h-6 stroke-[2.5]" />
//             </div>

//             {/* Bottom CTA Pill Button */}
//             <button className="mt-2 w-full bg-white hover:bg-slate-100 text-[#0c1838] font-black text-sm py-3.5 px-6 rounded-full shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider z-10">
//               <ArrowRight className="w-4 h-4 stroke-[3.5]" />
//               <span>CREATE YOUR PORTFOLIO</span>
//             </button>
//           </motion.div>

//         </motion.div>

//       </div>

//     </section>
//   );
// }


"use client";
import React, { useState } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import { Check, ArrowRight, Grip, ExternalLink } from 'lucide-react';
import img01 from '../public/assest/teknodewebimg.png';
import img02 from '../public/assest/vibgyorventure.jpeg';
import img04 from '../public/assest/innercompass.jpeg';
import img05 from '../public/assest/hiparks.jpeg';

const cardGraphic = (img: { src: string }, alt: string) => (
  <div className="relative my-2 rounded-2xl p-1.5 overflow-hidden border border-white/20 shadow-inner flex flex-col items-center z-10 w-full bg-white/10">
    <img
      src={img.src}
      alt={alt}
      className="w-full h-[140px] object-contain rounded-xl"
    />
  </div>
);

if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec4-v2')) {
  const link = document.createElement('link');
  link.id = 'google-fonts-homesec4-v2';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:wght@700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap';
  document.head.appendChild(link);
}

const floatAnim = (
  duration = 4,
  yDist = 6,
  rotateDist = 2
): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDist, 0],
    rotate: [-rotateDist, rotateDist, -rotateDist],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});

const TopLeftArrowSVG = () => (
  <svg className="w-14 h-10 text-white overflow-visible" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
    <path d="M10 15 Q 55 0, 85 42" strokeDasharray="100" />
    <path d="M68 38 L 85 42 L 78 22" strokeWidth="3.5" strokeLinejoin="round" />
    <line x1="0" y1="5" x2="12" y2="15" opacity="0.6" strokeWidth="2" />
    <line x1="5" y1="0" x2="18" y2="10" opacity="0.6" strokeWidth="2" />
  </svg>
);

const BottomLeftArrowSVG = () => (
  <svg className="w-14 h-10 text-white overflow-visible" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
    <path d="M15 42 Q 60 48, 85 12" />
    <path d="M68 15 L 85 12 L 81 30" strokeWidth="3.5" strokeLinejoin="round" />
  </svg>
);

const BottomRightArrowSVG = () => (
  <svg className="w-14 h-10 text-white overflow-visible" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
    <path d="M85 38 Q 40 48, 15 18" />
    <path d="M15 18 L 32 18 M 15 18 L 22 34" strokeWidth="3.5" strokeLinejoin="round" />
  </svg>
);

export default function HomeSec4() {
  const [currentIndex, setCurrentIndex] = useState(2); // Center card default

  const cardsData = [
    // 1. Purple Card - Teknode E-Commerce
    {
      id: 0,
      bgColor: "bg-[#2e1052]",
      textColor: "text-white",
      accentColor: "#2e1052",
      buttonBg: "bg-white hover:bg-slate-100 text-[#2e1052]",
      title: <>PRODUCT<br />VISUALIZATION<br />MODEL</>,
      subtitle: "High-fidelity product model with accurate materials and clean topology.",
      cta: "VIEW PROJECT",
      link: "#",
      graphic: cardGraphic(img01, "3D product visualization model"),
      checklist: ["Hard-Surface Modeling", "UV Mapping", "Texturing", "Photoreal Render"],
    },
    // 2. Cyan/Blue Card - Vibgyor Ventures
    {
      id: 1,
      bgColor: "bg-[#0284c7]",
      textColor: "text-white",
      accentColor: "#0284c7",
      buttonBg: "bg-white hover:bg-slate-100 text-[#0284c7]",
      title: <>PROPS &<br />ASSETS<br />COLLECTION</>,
      subtitle: "Game-ready and presentation props modeled, textured & lit in Autodesk Maya.",
      cta: "VIEW PROJECT",
      link: "#",
      graphic: cardGraphic(img02, "3D props and assets"),
      checklist: ["Low/High Poly", "Clean Topology", "Shading", "Optimized Assets"],
    },
    // 3. Center Red Card - Inner Compass Web App
    {
      id: 2,
      bgColor: "bg-[#b21212]",
      textColor: "text-white",
      accentColor: "#b21212",
      buttonBg: "bg-white hover:bg-slate-100 text-[#b21212]",
      title: <><span className="text-white">INTERIOR</span><br /><span className="text-[#0c1838]">SCENE</span><br /><span className="text-[#0c1838]">RENDER</span></>,
      subtitle: "Architectural interior scene with realistic lighting, materials and composition.",
      cta: "VIEW PROJECT",
      link: "#",
      graphic: cardGraphic(img04, "3D interior scene render"),
      checklist: ["Scene Modeling", "Lighting", "Materials", "Final Render"],
    },
    // 4. Yellow Card - Horizon Industrial Parks
    {
      id: 3,
      bgColor: "bg-[#f19d00]",
      textColor: "text-[#0c1838]",
      accentColor: "#f19d00",
      buttonBg: "bg-white hover:bg-slate-100 text-[#0c1838]",
      title: <>ENVIRONMENT<br />DESIGN<br />ASSET</>,
      subtitle: "Stylized/realistic environment built with cinematic lighting and detailed assets.",
      cta: "VIEW PROJECT",
      link: "#",
      graphic: cardGraphic(img05, "3D environment design"),
      checklist: ["Blockout", "Texturing", "Lighting", "Look Development"],
    },
  ];

  const getCardOffset = (cardIdx: number) => {
    const total = cardsData.length;
    let diff = cardIdx - currentIndex;
    if (diff < -2) diff += total;
    if (diff > 2) diff -= total;
    return diff;
  };

  return (
    <section id="homesec4" className="relative w-full min-h-screen bg-[#c81e1e] text-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4 py-12 lg:py-16 flex flex-col items-center justify-center select-none scroll-mt-16">
      
      {/* Background Texture & Doodles */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(150,0,0,0.8) 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><path d="M0 0L120 120M120 0L0 120M30 0L0 30M90 120L120 90" stroke="%23ffffff" stroke-width="1" opacity="0.3"/></svg>')`
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-8 left-8 text-white font-serif text-8xl font-black rotate-[-15deg] select-none">{"//"}</div>
        <div className="absolute bottom-12 right-12 text-white font-serif text-9xl font-black rotate-[20deg] select-none">{"///"}</div>
        <div className="absolute top-1/4 right-6 text-white text-5xl rotate-12">✦</div>
        <div className="absolute bottom-1/3 left-6 text-white text-6xl -rotate-45">✦</div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col items-center justify-center">

        {/* Section Title */}
        <div className="relative z-30 text-center mb-8">
          <div className="flex items-center gap-3 justify-center mb-1">
            <span className="w-3.5 h-3.5 rounded-full bg-white shrink-0" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-wide text-white font-['Oswald',sans-serif] uppercase drop-shadow-md">
              MY PROJECTS
            </h2>
            <span className="w-3.5 h-3.5 rounded-full bg-white shrink-0" />
          </div>
          <svg className="w-64 h-3 text-white mx-auto mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 6 C60 10, 160 10, 236 4" />
          </svg>
          <p className="mt-3 font-['Caveat',cursive] text-white text-2xl font-bold rotate-[-1deg]">
            real 3D projects I&apos;ve modeled, textured, lit & rendered
          </p>
        </div>

        {/* Cursive Corner Doodles */}
        <motion.div 
          {...floatAnim(4.5, 5, 2)}
          className="absolute -top-10 left-2 sm:left-8 z-30 hidden lg:flex flex-col items-start font-['Caveat',cursive] text-white text-3xl font-extrabold leading-none rotate-[-10deg] pointer-events-none drop-shadow-md"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-2xl opacity-90">≡</span>
            <span>Code</span>
          </div>
          <p className="pl-4">Build</p>
          <p className="pl-8 underline decoration-white/80 decoration-2">Create</p>
          <div className="mt-1 translate-x-12">
            <TopLeftArrowSVG />
          </div>
        </motion.div>

        <motion.div 
          {...floatAnim(5.2, 6, -2)}
          className="absolute -top-8 right-2 sm:right-8 z-30 hidden lg:flex flex-col items-end font-['Caveat',cursive] text-white text-3xl font-extrabold leading-none rotate-[8deg] pointer-events-none text-right drop-shadow-md"
        >
            <p>Realistic</p>
          <p className="pr-3">3D <span className="text-2xl opacity-90">≡</span></p>
          <p className="pr-6 underline decoration-white/80 decoration-2">Assets</p>
          <div className="absolute -left-6 top-1 text-2xl">✦</div>
        </motion.div>

        <motion.div 
          {...floatAnim(4.8, 5, -1.5)}
          className="absolute -bottom-12 left-2 sm:left-10 z-30 hidden lg:flex flex-col items-start font-['Caveat',cursive] text-white text-3xl font-extrabold leading-none rotate-[-6deg] pointer-events-none drop-shadow-md"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-2xl opacity-90">≡</span>
            <span>Turn Ideas</span>
          </div>
          <p className="pl-5 underline decoration-white/80 decoration-2">Into Websites</p>
          <div className="mt-1 translate-x-14">
            <BottomLeftArrowSVG />
          </div>
        </motion.div>

        <motion.div 
          {...floatAnim(5.5, 6, 2)}
          className="absolute -bottom-12 right-2 sm:right-8 z-30 hidden lg:flex flex-col items-end font-['Caveat',cursive] text-white text-3xl font-extrabold leading-none rotate-[10deg] pointer-events-none text-right drop-shadow-md"
        >
          <div className="mb-1 mr-12">
            <BottomRightArrowSVG />
          </div>
            <p>Clean Mesh <span className="text-2xl opacity-90">{"///"}</span></p>
          <p className="pr-4 underline decoration-white/80 decoration-2">Great Renders</p>
        </motion.div>

        {/* ================= 5-CARDS CAROUSEL ================= */}
        <div className="relative w-full h-[580px] sm:h-[620px] flex items-center justify-center my-4 overflow-visible perspective-[1200px]">
          
          {cardsData.map((card, idx) => {
            const offset = getCardOffset(idx);
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null; // Only render visible adjacent cards

            const isCenter = offset === 0;
            const xPos = offset * (typeof window !== 'undefined' && window.innerWidth < 640 ? 210 : 330);
            const scale = isCenter ? 1.02 : 0.86 - absOffset * 0.04; 
            
            // Center card is straight (0 degree), Side cards rotate
            const rotateZ = isCenter ? 0 : offset < 0 ? -6 * absOffset : 6 * absOffset;
            const rotateY = isCenter ? 0 : offset < 0 ? 12 : -12;
            
            const zIndex = 30 - absOffset * 10;
            const opacity = absOffset === 2 ? 0.35 : absOffset === 1 ? 0.88 : 1;

            return (
              <motion.div
                key={card.id}
                onClick={() => setCurrentIndex(idx)}
                initial={false}
                animate={{
                  x: xPos,
                  scale: scale,
                  rotateY: rotateY,
                  rotateZ: rotateZ,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                whileHover={
                  !isCenter 
                    ? { scale: scale + 0.04, filter: 'brightness(1.08)' } 
                    : { scale: 1.04 }
                }
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 25,
                  mass: 0.9,
                }}
                className={`absolute w-[310px] sm:w-[350px] ${card.bgColor} ${card.textColor} rounded-[32px] p-5 sm:p-6 border-4 border-white shadow-[0_25px_50px_rgba(0,0,0,0.45)] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[520px] sm:min-h-[560px] will-change-transform transform-gpu`}
              >
                {/* Subtle Inner Border */}
                <div className="absolute inset-2 border border-white/20 rounded-[26px] pointer-events-none" />

                {/* Card Header */}
                <div className="flex justify-between items-center mb-2 z-10">
                  <span className="font-mono font-black text-xl tracking-wider">&lt;/&gt;</span>
                  <Grip className="w-5 h-5 opacity-70" />
                </div>

                {/* Title */}
                <div className="mb-2 z-10 text-left">
                  <h3 className="text-2xl sm:text-3xl font-black italic tracking-wide font-['Oswald',sans-serif] uppercase leading-[0.98] mb-1 drop-shadow">
                    {card.title}
                  </h3>
                  <p className="font-['Caveat',cursive] text-base sm:text-lg font-bold leading-tight opacity-90">
                    {card.subtitle}
                  </p>
                </div>

                {/* Graphic Section */}
                {card.graphic}

                {/* Checklist */}
                <ul className="space-y-1.5 my-2 pl-1 text-xs sm:text-sm font-bold z-10">
                  {card.checklist.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-white text-[#b21212] flex items-center justify-center shrink-0 shadow">
                        <Check className="w-3 h-3 stroke-[3.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA Button */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`mt-2 w-full ${card.buttonBg} font-black text-xs py-3 px-4 rounded-full shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-1.5 uppercase tracking-wider z-10 cursor-pointer`}
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3.5]" />
                  <span>{card.cta}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}