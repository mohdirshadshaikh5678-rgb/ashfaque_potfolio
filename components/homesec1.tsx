
// "use client";
// import React, { useState } from 'react';
// import { motion, type Variants, type TargetAndTransition } from 'framer-motion';
// import { Upload } from 'lucide-react';

// // Inject custom fonts (Oswald, Permanent Marker, Caveat, Plus Jakarta Sans)
// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec1')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec1';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Oswald:wght@700&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap';
//   document.head.appendChild(link);
// }

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 35 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       delay: custom * 0.12,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// const floatAnim = (duration = 4, yDistance = 8): { animate: TargetAndTransition } => ({
//   animate: {
//     y: [0, -yDistance, 0],
//     rotate: [0, 1, -1, 0],
//     transition: {
//       duration,
//       repeat: Infinity,
//       ease: 'easeInOut',
//     },
//   },
// });

// // Yellow masking tape strip
// const TapeStrip = ({ className = "" }) => (
//   <svg viewBox="0 0 100 30" className={`w-16 h-6 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
//     <path d="M3,4 L97,2 L94,26 L6,28 Z" />
//   </svg>
// );

// // Curved Sketch Arrow Left
// const CurvedArrowLeft = () => (
//   <svg className="w-16 h-14 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//     <motion.path 
//       d="M10,15 Q45,5 85,60" 
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 1, delay: 0.8 }}
//     />
//     <motion.path 
//       d="M68,55 L85,60 L80,42" 
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 0.4, delay: 1.7 }}
//     />
//   </svg>
// );

// // Curved Sketch Arrow Right
// const CurvedArrowRight = () => (
//   <svg className="w-16 h-14 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//     <motion.path 
//       d="M90,15 Q55,5 15,60" 
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 1, delay: 0.9 }}
//     />
//     <motion.path 
//       d="M32,42 L15,60 L32,55" 
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 0.4, delay: 1.8 }}
//     />
//   </svg>
// );

// // Spiderweb overlay on title letter 'O'
// const SpiderWebSvg = () => (
//   <svg className="w-10 h-10 text-slate-800/80" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
//     <path d="M0,0 L50,50 M50,0 L0,50 M25,0 L25,50 M0,25 L50,25" />
//     <path d="M15,15 Q25,20 35,15 Q40,25 35,35 Q25,30 15,35 Q10,25 15,15 Z" />
//     <path d="M8,8 Q25,14 42,8 Q46,25 42,42 Q25,36 8,42 Q4,25 8,8 Z" />
//   </svg>
// );

// // Cyan React Atom Logo
// const ReactAtomIcon = () => (
//   <svg className="w-10 h-10 text-sky-400 animate-[spin_16s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
//     <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(0 50 50)" />
//     <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(60 50 50)" />
//     <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(120 50 50)" />
//     <circle cx="50" cy="50" r="7" fill="currentColor" />
//   </svg>
// );

// // Sketchy Laptop Doodle SVG
// const LaptopDoodle = () => (
//   <svg className="w-16 h-12 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//     {/* Screen */}
//     <rect x="20" y="15" width="60" height="40" rx="3" fill="white" />
//     <path d="M35,35 L42,30 M35,35 L42,40 M50,42 L65,42" strokeWidth="2.5" />
//     {/* Base */}
//     <path d="M10,62 L90,62 L82,55 L18,55 Z" fill="#f8fafc" />
//     {/* Notch */}
//     <path d="M42,55 L58,55" strokeWidth="2" />
//   </svg>
// );

// // Flying Paper Airplane Doodle SVG
// const PaperAirplaneDoodle = () => (
//   <svg className="w-8 h-8 text-slate-800" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M5,25 L45,5 L30,45 L20,30 L5,25 Z" fill="white" />
//     <path d="M20,30 L45,5" />
//   </svg>
// );

// export default function HomeSec1() {
//   const [centerImage, setCenterImage] = useState<string | null>(null);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setCenterImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div id="homesec1" className="relative w-full min-h-screen bg-[#f4f4f3] text-slate-900 overflow-x-hidden selection:bg-amber-300 selection:text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] pt-6 pb-12 px-4 sm:px-8 flex flex-col justify-between scroll-mt-16">
      
//       {/* Background Subtle Paper Grid Texture */}
//       <div 
//         className="absolute inset-0 opacity-[0.25] pointer-events-none z-0" 
//         style={{
//           backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`,
//           backgroundSize: '22px 22px'
//         }}
//       />

//       {/* Main Container */}
//       <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col justify-between flex-grow">

//         {}
//         {/* HUGE "WEB DEVELOPER" TITLE */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative text-center w-full select-none mt-2"
//         >
//           <h1 className="text-[13.5vw] lg:text-[10.5rem] leading-[0.82] font-black tracking-tighter text-[#0b1329] font-['Oswald',sans-serif] uppercase flex justify-center items-center flex-wrap gap-x-3 sm:gap-x-6">
            
//             {/* WEB word */}
//             <span className="relative inline-block">
//               WEB
//               {/* Floating taped code badge overlayed on letter E/B */}
//               <motion.div 
//                 {...floatAnim(5, 6)}
//                 className="absolute -top-4 -right-3 sm:-top-6 sm:-right-6 bg-white border-2 border-slate-900 rounded-md p-1.5 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rotate-[-12deg] z-20"
//               >
//                 <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-6deg] w-12 h-5" />
//                 <span className="font-mono text-sm sm:text-base font-bold text-slate-900">&lt;/&gt;</span>
//               </motion.div>
//             </span>

//             {/* DEVELOPER word */}
//             <span className="relative inline-block">
//               DEV
//               <span className="relative inline-block">E</span>
//               L
//               <span className="relative inline-block">
//                 O
//                 {/* Spider web doodle on O */}
//                 <span className="absolute -top-1 -right-1 pointer-events-none">
//                   <SpiderWebSvg />
//                 </span>
//               </span>
//               PER
//             </span>
//           </h1>

//           {/* Yellow Tape accent top right */}
//           <div className="absolute top-2 right-[5%] hidden md:block rotate-[22deg]">
//             <TapeStrip className="w-24 h-8" />
//           </div>
//         </motion.div>


//         {/* Connecting Doodle Wire behind the character */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" fill="none">
//           <motion.path 
//             d="M 180 410 Q 320 480 500 450 T 820 420" 
//             stroke="#eab308" 
//             strokeWidth="3.5" 
//             strokeDasharray="6 6"
//             fill="none"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 1.8, delay: 0.8 }}
//           />
//         </svg>


//         {}
//         {/* MAIN HERO GRID: Left Content | Center Avatar Space | Right Content */}
//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end mt-6 lg:-mt-12 mb-4">

//           {/* ================= LEFT COLUMN ================= */}
//           <div className="md:col-span-4 flex flex-col items-start gap-6 order-2 md:order-1">
            
//             {/* FRONTEND DEVELOPER Marker Box & Stack */}
//             <motion.div 
//               custom={1}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               className="relative max-w-sm w-full"
//             >
//               {/* Yellow Marker Highlight Banner */}
//               <div className="inline-block relative mb-3">
//                 <span className="absolute inset-0 bg-amber-300 -rotate-1 rounded-xs transform -skew-x-2"></span>
//                 <h2 className="relative text-slate-900 font-[900] tracking-wider text-xl sm:text-2xl px-3 py-1 font-['Permanent_Marker',cursive] uppercase">
//                   FRONTEND DEVELOPER
//                 </h2>
//               </div>

//               {/* Tech Stack Listing with Dots */}
//               <div className="space-y-1 text-slate-800 font-bold text-base sm:text-lg pl-1 font-['Plus_Jakarta_Sans',sans-serif]">
//                 <p className="flex items-center gap-2 flex-wrap">
//                   <span>React</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Next.js</span> <span className="text-amber-500 font-black">•</span>
//                   <span>JavaScript</span>
//                 </p>
//                 <p className="flex items-center gap-2 flex-wrap text-slate-700">
//                   <span>Tailwind CSS</span> <span className="text-amber-500 font-black">•</span>
//                   <span>HTML</span> <span className="text-amber-500 font-black">•</span>
//                   <span>CSS</span>
//                 </p>
//               </div>

//               {/* Curved sketch arrow pointing right to center */}
//               <div className="absolute -right-16 top-0 hidden lg:block pointer-events-none">
//                 <CurvedArrowLeft />
//               </div>
//             </motion.div>

//             {/* Left Icons Row: Code Bracket & Cyan React Logo */}
//             <div className="flex items-center gap-6 my-1 pl-2">
//               <span className="font-mono text-2xl font-black text-slate-800 tracking-tight">&lt;/&gt;</span>
//               <motion.div {...floatAnim(4.5, 6)}>
//                 <ReactAtomIcon />
//               </motion.div>
//             </div>

//             {/* Sticky Card Note: BUILDING MODERN WEB EXPERIENCES */}
//             <motion.div 
//               {...floatAnim(5.5, 6)}
//               className="relative bg-white border-2 border-slate-900 rounded-lg p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] max-w-xs w-full rotate-[-3deg] mt-2"
//             >
//               {/* Corner Tapes */}
//               <TapeStrip className="absolute -top-3 -left-3 rotate-[-28deg]" />
//               <TapeStrip className="absolute -top-3 -right-3 rotate-[28deg]" />

//               <h3 className="text-slate-900 font-black text-lg tracking-wide uppercase leading-tight font-['Oswald',sans-serif]">
//                 BUILDING <br />
//                 MODERN WEB <br />
//                 EXPERIENCES
//               </h3>

//               {/* Yellow Decorative Accent Corner Box */}
//               <div className="absolute -bottom-2 -left-2 w-6 h-10 bg-amber-400 -z-10 rounded-xs" />
              
//               {/* Doodle Spark Lines */}
//               <div className="absolute -right-6 top-1/3 text-slate-800 text-xs font-mono font-bold">
//                 \\\\
//               </div>
//             </motion.div>

//           </div>


//           {/* ================= CENTER COLUMN (RESERVED AVATAR / IMAGE SPACE) ================= */}
//           <div className="md:col-span-4 flex flex-col items-center justify-end relative order-1 md:order-2 min-h-[360px] sm:min-h-[440px]">
            
//             <div className="relative w-full h-full flex flex-col items-center justify-end">

//               {centerImage ? (
//                 /* Uploaded Character PNG Image */
//                 <motion.div 
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   className="relative z-20 flex flex-col items-center"
//                 >
//                   <img 
//                     src={centerImage} 
//                     alt="Developer Character" 
//                     className="max-h-[440px] w-auto object-contain drop-shadow-2xl"
//                   />
//                   {/* Remove button */}
//                   <button 
//                     onClick={() => setCenterImage(null)}
//                     className="mt-2 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow transition-colors"
//                   >
//                     Remove Image
//                   </button>
//                 </motion.div>
//               ) : (
//                 /* Empty Reserved Area for Avatar with Upload Option */
//                 <div className="relative z-10 w-full max-w-[340px] h-[380px] sm:h-[430px] rounded-3xl border-2 border-dashed border-amber-400 bg-amber-300/10 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center group transition-all hover:bg-amber-300/20 cursor-pointer">
                  
//                   <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-900 shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                     <Upload className="w-8 h-8 text-slate-800" />
//                   </div>

//                   <p className="text-slate-900 font-extrabold text-lg mb-1 font-['Oswald',sans-serif] uppercase tracking-wide">
//                     Center Image Space
//                   </p>
//                   <p className="text-slate-600 text-xs font-semibold mb-4 max-w-[200px]">
//                     Drop or select your transparent character PNG image here
//                   </p>

//                   <label className="cursor-pointer bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs px-5 py-2.5 rounded-full shadow-md border-2 border-slate-900/10 transition-all flex items-center gap-2">
//                     <Upload className="w-4 h-4" />
//                     <span>Upload PNG Image</span>
//                     <input 
//                       type="file" 
//                       accept="image/*" 
//                       onChange={handleImageUpload} 
//                       className="hidden" 
//                     />
//                   </label>
//                 </div>
//               )}

//               {/* Ground Shadow ellipse */}
//               <div className="w-4/5 h-6 bg-slate-900/15 rounded-[100%] blur-sm -mt-2 pointer-events-none" />
//             </div>

//           </div>


//           {/* ================= RIGHT COLUMN ================= */}
//           <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6 order-3">
            
//             {/* BACKEND DEVELOPER Marker Box & Stack */}
//             <motion.div 
//               custom={3}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               className="relative max-w-sm w-full md:text-right"
//             >
//               {/* Yellow Marker Highlight Banner */}
//               <div className="inline-block relative mb-3">
//                 <span className="absolute inset-0 bg-amber-300 rotate-1 rounded-xs transform skew-x-2"></span>
//                 <h2 className="relative text-slate-900 font-[900] tracking-wider text-xl sm:text-2xl px-3 py-1 font-['Permanent_Marker',cursive] uppercase">
//                   BACKEND DEVELOPER
//                 </h2>
//               </div>

//               {/* Tech Stack Listing with Dots */}
//               <div className="space-y-1 text-slate-800 font-bold text-base sm:text-lg pl-1 font-['Plus_Jakarta_Sans',sans-serif]">
//                 <p className="flex items-center gap-2 flex-wrap md:justify-end">
//                   <span>Node.js</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Express.js</span> <span className="text-amber-500 font-black">•</span>
//                   <span>MongoDB</span>
//                 </p>
//                 <p className="flex items-center gap-2 flex-wrap text-slate-700 md:justify-end">
//                   <span>MySQL</span> <span className="text-amber-500 font-black">•</span>
//                   <span>REST APIs</span> <span className="text-amber-500 font-black">•</span>
//                   <span>JWT</span>
//                 </p>
//               </div>

//               {/* Curved sketch arrow pointing left to center */}
//               <div className="absolute -left-16 top-0 hidden lg:block pointer-events-none">
//                 <CurvedArrowRight />
//               </div>
//             </motion.div>

//             {/* Right Tech Icons Row */}
//             <motion.div 
//               custom={4}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               className="flex items-center gap-3 my-1 self-start md:self-end"
//             >
//               {/* JS Green Badge */}
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center font-black text-emerald-600 text-sm">
//                 JS
//               </div>
//               {/* Node Leaf Badge */}
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center text-emerald-500 text-lg">
//                 🍃
//               </div>
//               {/* Database Cylinder Icon */}
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center text-sky-600 font-bold">
//                 🛢️
//               </div>
//               {/* Server Box Icon */}
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center text-slate-800 font-bold">
//                 🖥️
//               </div>
//             </motion.div>

//             {/* Sticky Card Note: CLEAN CODE / FAST PERFORMANCE / GREAT UX */}
//             <motion.div 
//               {...floatAnim(5, 5)}
//               className="relative bg-white border-2 border-slate-900 rounded-lg p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] max-w-xs w-full rotate-[2deg]"
//             >
//               {/* Top Tape */}
//               <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />

//               <div className="space-y-1 text-slate-900 font-black text-base tracking-wide uppercase font-['Oswald',sans-serif]">
//                 <p>CLEAN CODE</p>
//                 <p className="text-slate-800">FAST PERFORMANCE</p>
//                 <div className="relative inline-block">
//                   <p>GREAT UX</p>
//                   {/* Underline Marker */}
//                   <span className="absolute left-0 bottom-0.5 w-full h-1.5 bg-amber-400 -z-10 rounded" />
//                 </div>
//               </div>
//             </motion.div>

//             {/* Bottom Right Doodles: Laptop & Paper Airplane */}
//             <div className="flex items-center gap-4 self-start md:self-end pt-1">
//               <motion.div {...floatAnim(4, 6)}>
//                 <LaptopDoodle />
//               </motion.div>
//               <motion.div 
//                 animate={{
//                   x: [0, 6, 0],
//                   y: [0, -6, 0],
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <PaperAirplaneDoodle />
//               </motion.div>
//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////

// "use client";
// import React from 'react';
// import { motion, type Variants, type TargetAndTransition } from 'framer-motion';

// // Importing assets
// import irshadImg from '../public/assest/01.png';

// // Inject custom fonts (Oswald, Permanent Marker, Caveat, Plus Jakarta Sans)
// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec1')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec1';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Oswald:wght@700&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap';
//   document.head.appendChild(link);
// }

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 35 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       delay: custom * 0.12,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// const floatAnim = (duration = 4, yDistance = 8): { animate: TargetAndTransition } => ({
//   animate: {
//     y: [0, -yDistance, 0],
//     rotate: [0, 1, -1, 0],
//     transition: {
//       duration,
//       repeat: Infinity,
//       ease: 'easeInOut',
//     },
//   },
// });

// // Yellow masking tape strip
// const TapeStrip = ({ className = "" }: { className?: string }) => (
//   <svg viewBox="0 0 100 30" className={`w-16 h-6 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
//     <path d="M3,4 L97,2 L94,26 L6,28 Z" />
//   </svg>
// );

// // Curved Sketch Arrow Left
// const CurvedArrowLeft = () => (
//   <svg className="w-16 h-14 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//     <motion.path
//       d="M10,15 Q45,5 85,60"
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 1, delay: 0.8 }}
//     />
//     <motion.path
//       d="M68,55 L85,60 L80,42"
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 0.4, delay: 1.7 }}
//     />
//   </svg>
// );

// // Curved Sketch Arrow Right
// const CurvedArrowRight = () => (
//   <svg className="w-16 h-14 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
//     <motion.path
//       d="M90,15 Q55,5 15,60"
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 1, delay: 0.9 }}
//     />
//     <motion.path
//       d="M32,42 L15,60 L32,55"
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{ duration: 0.4, delay: 1.8 }}
//     />
//   </svg>
// );

// // Spiderweb overlay on title letter 'O'
// const SpiderWebSvg = () => (
//   <svg className="w-10 h-10 text-slate-800/80" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
//     <path d="M0,0 L50,50 M50,0 L0,50 M25,0 L25,50 M0,25 L50,25" />
//     <path d="M15,15 Q25,20 35,15 Q40,25 35,35 Q25,30 15,35 Q10,25 15,15 Z" />
//     <path d="M8,8 Q25,14 42,8 Q46,25 42,42 Q25,36 8,42 Q4,25 8,8 Z" />
//   </svg>
// );

// // Cyan React Atom Logo
// const ReactAtomIcon = () => (
//   <svg className="w-10 h-10 text-sky-400 animate-[spin_16s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
//     <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(0 50 50)" />
//     <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(60 50 50)" />
//     <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(120 50 50)" />
//     <circle cx="50" cy="50" r="7" fill="currentColor" />
//   </svg>
// );

// // Sketchy Laptop Doodle SVG
// const LaptopDoodle = () => (
//   <svg className="w-16 h-12 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="20" y="15" width="60" height="40" rx="3" fill="white" />
//     <path d="M35,35 L42,30 M35,35 L42,40 M50,42 L65,42" strokeWidth="2.5" />
//     <path d="M10,62 L90,62 L82,55 L18,55 Z" fill="#f8fafc" />
//     <path d="M42,55 L58,55" strokeWidth="2" />
//   </svg>
// );

// // Flying Paper Airplane Doodle SVG
// const PaperAirplaneDoodle = () => (
//   <svg className="w-8 h-8 text-slate-800" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M5,25 L45,5 L30,45 L20,30 L5,25 Z" fill="white" />
//     <path d="M20,30 L45,5" />
//   </svg>
// );

// export default function HomeSec1() {
//   return (
//     <div id="homesec1" className="relative w-full min-h-screen bg-[#f4f4f3] text-slate-900 overflow-hidden selection:bg-amber-300 selection:text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] pt-6 pb-0 px-4 sm:px-8 flex flex-col justify-between">
//       {/* Background Grid Pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.25] pointer-events-none z-0" 
//         style={{
//           backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`,
//           backgroundSize: '22px 22px'
//         }}
//       />

//       {/* Main Container */}
//       <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col justify-between flex-grow pb-0">

//         {/* TITLE */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative text-center w-full select-none mt-2 z-10"
//         >
//           <h1 className="text-[13.5vw] lg:text-[10.5rem] leading-[0.82] font-black tracking-tighter text-[#0b1329] font-['Oswald',sans-serif] uppercase flex justify-center items-center flex-wrap gap-x-3 sm:gap-x-6">
//             <span className="relative inline-block">
//               3D
//               <motion.div 
//                 {...floatAnim(5, 6)}
//                 className="absolute -top-4 -right-3 sm:-top-6 sm:-right-6 bg-white border-2 border-slate-900 rounded-md p-1.5 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rotate-[-12deg] z-20"
//               >
//                 <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-6deg] w-12 h-5" />
//                 <span className="font-mono text-sm sm:text-base font-bold text-slate-900">MAYA</span>
//               </motion.div>
//             </span>

//             <span className="relative inline-block">
//               ANIM
//               <span className="relative inline-block">A</span>
//               T
//               <span className="relative inline-block">
//                 O
//                 <span className="absolute -top-1 -right-1 pointer-events-none">
//                   <SpiderWebSvg />
//                 </span>
//               </span>
//               R
//             </span>
//           </h1>

//           <div className="absolute top-2 right-[5%] hidden md:block rotate-[22deg]">
//             <TapeStrip className="w-24 h-8" />
//           </div>
//         </motion.div>

//         {/* Connecting Wire */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" fill="none">
//           <motion.path 
//             d="M 180 410 Q 320 480 500 450 T 820 420" 
//             stroke="#eab308" 
//             strokeWidth="3.5" 
//             strokeDasharray="6 6"
//             fill="none"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 1.8, delay: 0.8 }}
//           />
//         </svg>

//         {/* HERO CONTENT GRID */}
//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end mt-6 lg:-mt-12">

//           {/* LEFT COLUMN */}
//           <div className="md:col-span-4 flex flex-col items-start gap-6 order-2 md:order-1 mb-8">
//             <motion.div 
//               custom={1}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               className="relative max-w-sm w-full"
//             >
//               <div className="inline-block relative mb-3">
//                 <span className="absolute inset-0 bg-amber-300 -rotate-1 rounded-xs transform -skew-x-2"></span>
//                 <h2 className="relative text-slate-900 font-[900] tracking-wider text-xl sm:text-2xl px-3 py-1 font-['Permanent_Marker',cursive] uppercase">
//                   3D MODELING
//                 </h2>
//               </div>

//               <div className="space-y-1 text-slate-800 font-bold text-base sm:text-lg pl-1">
//                 <p className="flex items-center gap-2 flex-wrap">
//                   <span>Hard-Surface</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Organic</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Props</span>
//                 </p>
//                 <p className="flex items-center gap-2 flex-wrap text-slate-700">
//                   <span>Characters</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Low Poly</span> <span className="text-amber-500 font-black">•</span>
//                   <span>High Poly</span>
//                 </p>
//               </div>

//               <div className="absolute -right-16 top-0 hidden lg:block pointer-events-none">
//                 <CurvedArrowLeft />
//               </div>
//             </motion.div>

//             <div className="flex items-center gap-6 my-1 pl-2">
//               <span className="font-mono text-2xl font-black text-slate-800 tracking-tight">&lt;/&gt;</span>
//               <motion.div {...floatAnim(4.5, 6)}>
//                 <ReactAtomIcon />
//               </motion.div>
//             </div>

//             <motion.div 
//               {...floatAnim(5.5, 6)}
//               className="relative bg-white border-2 border-slate-900 rounded-lg p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] max-w-xs w-full rotate-[-3deg]"
//             >
//               <TapeStrip className="absolute -top-3 -left-3 rotate-[-28deg]" />
//               <TapeStrip className="absolute -top-3 -right-3 rotate-[28deg]" />

//                 <h3 className="text-slate-900 font-black text-lg tracking-wide uppercase leading-tight font-['Oswald',sans-serif]">
//                 CREATING <br />
//                 REALISTIC 3D <br />
//                 ASSETS
//               </h3>

//               <div className="absolute -bottom-2 -left-2 w-6 h-10 bg-amber-400 -z-10 rounded-xs" />
//             </motion.div>
//           </div>

//           {/* CENTER COLUMN (LARGER CHARACTER OVERLAPPING WEB DEVELOPER TEXT) */}
//           <div className="md:col-span-4 flex flex-col items-center justify-end relative order-1 md:order-2 self-end h-[420px] sm:h-[500px]">
//             <motion.div 
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] sm:w-[150%] max-w-[620px] flex items-end justify-center z-30 pointer-events-none"
//             >
//               <img 
//                 src={typeof irshadImg === 'string' ? irshadImg : irshadImg.src} 
//                 alt="Irshad - Web Developer" 
//                 className="h-[520px] sm:h-[450px]  lg:h-[510px] w-auto max-w-none object-contain object-bottom drop-shadow-2xl"
//               />
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6 order-3 mb-8">
//             <motion.div 
//               custom={3}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               className="relative max-w-sm w-full md:text-right"
//             >
//               <div className="inline-block relative mb-3">
//                 <span className="absolute inset-0 bg-amber-300 rotate-1 rounded-xs transform skew-x-2"></span>
//                 <h2 className="relative text-slate-900 font-[900] tracking-wider text-xl sm:text-2xl px-3 py-1 font-['Permanent_Marker',cursive] uppercase">
//                   TEXTURING & LIGHTING
//                 </h2>
//               </div>

//               <div className="space-y-1 text-slate-800 font-bold text-base sm:text-lg pl-1">
//                 <p className="flex items-center gap-2 flex-wrap md:justify-end">
//                   <span>UV Mapping</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Texturing</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Shading</span>
//                 </p>
//                 <p className="flex items-center gap-2 flex-wrap text-slate-700 md:justify-end">
//                   <span>Lighting</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Render</span> <span className="text-amber-500 font-black">•</span>
//                   <span>Arnold/Standard</span>
//                 </p>
//               </div>

//               <div className="absolute -left-16 top-0 hidden lg:block pointer-events-none">
//                 <CurvedArrowRight />
//               </div>
//             </motion.div>

//             <motion.div 
//               custom={4}
//               variants={fadeInUp}
//               initial="hidden"
//               animate="visible"
//               className="flex items-center gap-3 my-1 self-start md:self-end"
//             >
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center font-black text-emerald-600 text-sm">JS</div>
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center text-emerald-500 text-lg">🍃</div>
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center text-sky-600 font-bold">🛢️</div>
//               <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-800 shadow-md flex items-center justify-center text-slate-800 font-bold">🖥️</div>
//             </motion.div>

//             <motion.div 
//               {...floatAnim(5, 5)}
//               className="relative bg-white border-2 border-slate-900 rounded-lg p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] max-w-xs w-full rotate-[2deg]"
//             >
//               <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />

//               <div className="space-y-1 text-slate-900 font-black text-base tracking-wide uppercase font-['Oswald',sans-serif]">
//                 <p>PRECISE MODELING</p>
//                 <p className="text-slate-800">REALISTIC TEXTURES</p>
//                 <div className="relative inline-block">
//                   <p>CINEMATIC LIGHTING</p>
//                   <span className="absolute left-0 bottom-0.5 w-full h-1.5 bg-amber-400 -z-10 rounded" />
//                 </div>
//               </div>
//             </motion.div>

//             <div className="flex items-center gap-4 self-start md:self-end pt-1">
//               <motion.div {...floatAnim(4, 6)}>
//                 <LaptopDoodle />
//               </motion.div>
//               <motion.div 
//                 animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
//                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <PaperAirplaneDoodle />
//               </motion.div>
//             </div>
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }


"use client";
import React from 'react';
import { motion, type Variants, type TargetAndTransition } from 'framer-motion';

// Importing assets
import irshadImg from '../public/assest/01.png';

// Inject custom fonts (Oswald, Permanent Marker, Caveat, Plus Jakarta Sans)
if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec1')) {
  const link = document.createElement('link');
  link.id = 'google-fonts-homesec1';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Oswald:wght@700&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap';
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.12,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const floatAnim = (duration = 4, yDistance = 8): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});

// Yellow masking tape strip
const TapeStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={`w-16 h-6 fill-amber-300/85 drop-shadow-xs pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

// Curved Sketch Arrow Left
const CurvedArrowLeft = () => (
  <svg className="w-14 h-12 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <motion.path
      d="M10,15 Q45,5 85,60"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    />
    <motion.path
      d="M68,55 L85,60 L80,42"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 1.7 }}
    />
  </svg>
);

// Curved Sketch Arrow Right
const CurvedArrowRight = () => (
  <svg className="w-14 h-12 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <motion.path
      d="M90,15 Q55,5 15,60"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
    />
    <motion.path
      d="M32,42 L15,60 L32,55"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 1.8 }}
    />
  </svg>
);

// Spiderweb overlay on title letter 'O'
const SpiderWebSvg = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-slate-800/80" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M0,0 L50,50 M50,0 L0,50 M25,0 L25,50 M0,25 L50,25" />
    <path d="M15,15 Q25,20 35,15 Q40,25 35,35 Q25,30 15,35 Q10,25 15,15 Z" />
    <path d="M8,8 Q25,14 42,8 Q46,25 42,42 Q25,36 8,42 Q4,25 8,8 Z" />
  </svg>
);

// 3D Cube Icon Doodle
const CubeIcon = () => (
  <svg className="w-9 h-9 text-indigo-600 animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

// Sketchy Laptop Doodle SVG
const LaptopDoodle = () => (
  <svg className="w-16 h-12 text-slate-800" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="20" y="15" width="60" height="40" rx="3" fill="white" />
    <path d="M35,35 L42,30 M35,35 L42,40 M50,42 L65,42" strokeWidth="2.5" />
    <path d="M10,62 L90,62 L82,55 L18,55 Z" fill="#f8fafc" />
    <path d="M42,55 L58,55" strokeWidth="2" />
  </svg>
);

// Flying Paper Airplane Doodle SVG
const PaperAirplaneDoodle = () => (
  <svg className="w-8 h-8 text-slate-800" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5,25 L45,5 L30,45 L20,30 L5,25 Z" fill="white" />
    <path d="M20,30 L45,5" />
  </svg>
);

export function HomeSec1() {
  return (
    <div id="homesec1" className="relative w-full min-h-screen bg-[#f4f4f3] text-slate-900 overflow-hidden selection:bg-amber-300 selection:text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] pt-6 pb-8 px-4 sm:px-6 lg:px-12 flex flex-col justify-between">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none z-0" 
        style={{
          backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`,
          backgroundSize: '22px 22px'
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col justify-between flex-grow">

        {/* TITLE */}
        {/* <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center w-full select-none mt-2 z-10"
        >
          <h1 className="text-[14vw] sm:text-[13vw] lg:text-[10.5rem] leading-[0.85] font-black tracking-tighter text-[#0b1329] font-['Oswald',sans-serif] uppercase flex justify-center items-center flex-wrap gap-x-2 sm:gap-x-6">
            <span className="relative inline-block">
              3D
              
            </span>

            <span className="relative inline-block">
              MOD
              <span className="relative inline-block"></span>
              ELI
              <span className="relative inline-block">
                N
                <span className="absolute -top-1 -right-1 pointer-events-none">
                  <SpiderWebSvg />
                </span>
              </span>
              G
            </span>
          </h1>

          <div className="absolute top-2 right-[5%] hidden md:block rotate-[22deg]">
            <TapeStrip className="w-24 h-8" />
          </div>
        </motion.div> */}
        <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative text-center w-full select-none mt-2 z-10"
  >
    <h1 className="text-[14vw] sm:text-[13vw] lg:text-[10.5rem] leading-[0.85] font-black tracking-tighter text-white font-['Oswald',sans-serif] uppercase flex justify-center items-center flex-wrap gap-x-2 sm:gap-x-6 [text-shadow:_2px_2px_0px_#7c3aed,_0_6px_15px_rgba(0,0,0,0.9)] sm:[text-shadow:_3px_3px_0px_#7c3aed,_6px_6px_0px_#5b21b6,_0_10px_25px_rgba(0,0,0,0.9)]">
      <span className="relative inline-block">
        3D
      </span>

      <span className="relative inline-block">
        MOD
        <span className="relative inline-block"></span>
        ELI
        <span className="relative inline-block">
          N
          <span className="absolute -top-1 -right-1 pointer-events-none">
            {/* <SpiderWebSvg /> */}
          </span>
        </span>
        G
      </span>
    </h1>

    <div className="absolute top-2 right-[5%] hidden md:block rotate-[22deg]">
      <TapeStrip className="w-24 h-8" />
    </div>
  </motion.div>

        {/* Connecting Wire (Desktop Only) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" viewBox="0 0 1000 600" fill="none">
          <motion.path 
            d="M 180 410 Q 320 480 500 450 T 820 420" 
            stroke="#eab308" 
            strokeWidth="3.5" 
            strokeDasharray="6 6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.8 }}
          />
        </svg>

        {/* HERO CONTENT GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end mt-8 lg:mt-0">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6 order-2 lg:order-1 text-center lg:text-left">
            <motion.div 
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="relative max-w-sm w-full"
            >
              <div className="inline-block relative mb-3">
                <span className="absolute inset-0 bg-amber-300 -rotate-1 rounded-xs transform -skew-x-2"></span>
                <h2 className="relative text-slate-900 font-[900] tracking-wider text-xl sm:text-2xl px-3 py-1 font-['Permanent_Marker',cursive] uppercase">
                  3D MODELING
                </h2>
              </div>

              <div className="space-y-1 text-slate-800 font-bold text-sm sm:text-base lg:text-lg px-2 lg:pl-1">
                <p className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <span>Hard-Surface</span> <span className="text-amber-500 font-black">•</span>
                  <span>Organic</span> <span className="text-amber-500 font-black">•</span>
                  <span>Props</span>
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2 flex-wrap text-slate-700">
                  <span>Characters</span> <span className="text-amber-500 font-black">•</span>
                  <span>Low Poly</span> <span className="text-amber-500 font-black">•</span>
                  <span>High Poly</span>
                </p>
              </div>

              <div className="absolute -right-16 top-0 hidden xl:block pointer-events-none">
                <CurvedArrowLeft />
              </div>
            </motion.div>

            <div className="flex items-center justify-center lg:justify-start gap-6 my-1 lg:pl-2">
              <span className="font-mono text-2xl font-black text-slate-800 tracking-tight">&lt;3D/&gt;</span>
              <motion.div {...floatAnim(4.5, 6)}>
                <CubeIcon />
              </motion.div>
            </div>

            <motion.div 
              {...floatAnim(5.5, 6)}
              className="relative bg-white border-2 border-slate-900 rounded-lg p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] max-w-xs w-full rotate-[-3deg]"
            >
              <TapeStrip className="absolute -top-3 -left-3 rotate-[-28deg]" />
              <TapeStrip className="absolute -top-3 -right-3 rotate-[28deg]" />

              <h3 className="text-slate-900 font-black text-lg tracking-wide uppercase leading-tight font-['Oswald',sans-serif]">
                CREATING <br />
                REALISTIC 3D <br />
                ASSETS & ENVIRONMENT
              </h3>

              <div className="absolute -bottom-2 -left-2 w-6 h-10 bg-amber-400 -z-10 rounded-xs" />
            </motion.div>
          </div>

          {/* CENTER COLUMN (CHARACTER IMAGE) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-end relative order-1 lg:order-2 h-[380px] sm:h-[460px] lg:h-[500px]">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] flex items-end justify-center z-30 pointer-events-none"
            >
              <img 
                src={typeof irshadImg === 'string' ? irshadImg : irshadImg.src} 
                alt="Irshad - 3D modeling  & Modeler" 
                className="h-[380px] sm:h-[440px] lg:h-[490px] w-auto max-w-none object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6 order-3 text-center lg:text-right">
            <motion.div 
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="relative max-w-sm w-full"
            >
              <div className="inline-block relative mb-3">
                <span className="absolute inset-0 bg-amber-300 rotate-1 rounded-xs transform skew-x-2"></span>
                <h2 className="relative text-slate-900 font-[900] tracking-wider text-xl sm:text-2xl px-3 py-1 font-['Permanent_Marker',cursive] uppercase">
                  TEXTURING & LIGHTING
                </h2>
              </div>

              <div className="space-y-1 text-slate-800 font-bold text-sm sm:text-base lg:text-lg px-2 lg:pr-1">
                <p className="flex items-center justify-center lg:justify-end gap-2 flex-wrap">
                  <span>UV Mapping</span> <span className="text-amber-500 font-black">•</span>
                  <span>Texturing</span> <span className="text-amber-500 font-black">•</span>
                  <span>Shading</span>
                </p>
                <p className="flex items-center justify-center lg:justify-end gap-2 flex-wrap text-slate-700">
                  <span>Lighting</span> <span className="text-amber-500 font-black">•</span>
                  <span>Arnold/Render</span> <span className="text-amber-500 font-black"></span>
                  {/* <span>Arnold / Cycles</span> */}
                </p>
              </div>

              <div className="absolute -left-16 top-0 hidden xl:block pointer-events-none">
                <CurvedArrowRight />
              </div>
            </motion.div>

            {/* 3D Software & Tools Badges */}
            <motion.div 
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center lg:justify-end gap-3 my-1 flex-wrap"
            >
              <div className="px-3 py-1.5 rounded-xl bg-white border-2 border-slate-800 shadow-md font-bold text-xs text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Maya
              </div>
              {/* <div className="px-3 py-1.5 rounded-xl bg-white border-2 border-slate-800 shadow-md font-bold text-xs text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span> Blender
              </div> */}
              <div className="px-3 py-1.5 rounded-xl bg-white border-2 border-slate-800 shadow-md font-bold text-xs text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> AFTER EFFECT
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white border-2 border-slate-800 shadow-md font-bold text-xs text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span> Substance
              </div>
            </motion.div>

            <motion.div 
              {...floatAnim(5, 5)}
              className="relative bg-white border-2 border-slate-900 rounded-lg p-5 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] max-w-xs w-full rotate-[2deg]"
            >
              <TapeStrip className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />

              <div className="space-y-1 text-slate-900 font-black text-sm sm:text-base tracking-wide uppercase font-['Oswald',sans-serif]">
                <p>PRECISE MODELING</p>
                <p className="text-slate-800">REALISTIC TEXTURES</p>
                <div className="relative inline-block">
                  <p>CINEMATIC LIGHTING</p>
                  <span className="absolute left-0 bottom-0.5 w-full h-1.5 bg-amber-400 -z-10 rounded" />
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center lg:justify-end gap-4 pt-1">
              <motion.div {...floatAnim(4, 6)}>
                <LaptopDoodle />
              </motion.div>
              <motion.div 
                animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <PaperAirplaneDoodle />
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// Ensure both default and named export are supported to prevent import errors in wrappers
export default HomeSec1;