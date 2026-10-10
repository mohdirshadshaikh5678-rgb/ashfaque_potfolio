// "use client"
// import React, { useState } from 'react';
// import { motion, type Variants, type TargetAndTransition } from 'framer-motion';
// import type { ChangeEvent } from 'react';
// import { Upload } from 'lucide-react';

// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec3')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec3';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:ital,wght@1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
//   document.head.appendChild(link);
// }

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 25 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: custom * 0.1,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// const floatAnim = (duration = 4, yDistance = 6): { animate: TargetAndTransition } => ({
//   animate: {
//     y: [0, -yDistance, 0],
//     transition: {
//       duration,
//       repeat: Infinity,
//       ease: 'easeInOut',
//     },
//   },
// });


// // Brush Underline for Section Titles
// const TitleUnderline = () => (
//   <svg className="w-56 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//     <path d="M4 6 C60 10, 160 10, 236 4" />
//   </svg>
// );

// // Bottom-Left Curved Arrow pointing up to "Design Edit Create"
// const BottomLeftCurvedArrow = () => (
//   <svg className="w-12 h-16 text-[#1d63fe]" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M15 70 C 5 45, 15 20, 48 10" />
//     <path d="M36 8 L48 10 L44 24" />
//   </svg>
// );

// // Mid-Right Browser Window Doodle with </> Code
// const BrowserDoodle = () => (
//   <svg className="w-20 h-16 text-[#0d1b3e]" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     {/* Browser Card */}
//     <rect x="8" y="10" width="74" height="52" rx="6" fill="white" strokeWidth="2.5" />
//     <line x1="8" y1="22" x2="82" y2="22" strokeWidth="2" />
//     {/* Window Buttons */}
//     <circle cx="16" cy="16" r="1.5" fill="currentColor" />
//     <circle cx="22" cy="16" r="1.5" fill="currentColor" />
//     <circle cx="28" cy="16" r="1.5" fill="currentColor" />
//     {/* Code Tag */}
//     <path d="M30 40 L22 47 L30 54" strokeWidth="2.5" />
//     <path d="M38 56 L46 38" strokeWidth="2.5" />
//     <path d="M54 40 L62 47 L54 54" strokeWidth="2.5" />
//     {/* Sparkles around window */}
//     <line x1="4" y1="35" x2="1" y2="34" strokeWidth="2" />
//     <line x1="86" y1="18" x2="90" y2="15" strokeWidth="2" />
//     <line x1="85" y1="52" x2="88" y2="55" strokeWidth="2" />
//     <line x1="45" y1="4" x2="45" y2="1" strokeWidth="2" />
//   </svg>
// );

// export default function HomeSec3() {
//   const [characterImage, setCharacterImage] = useState<string | null>(null);

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setCharacterImage(URL.createObjectURL(file));
//     }
//   };

//   const experienceBullets = [
//     "Freelance Graphic Designer & Video Editor",
//     "2021 - 2024",
//     "Graphic Designer, Video Editor & AI Content Creation",
//     "ChallBox | 2024 - Present",
//   ];

//   const expertiseBullets = [
//     "Graphic Design & Visual Communication",
//     "Video Editing & Cinematic Content",
//     "Motion Graphics & Branding",
//     "Social Media & Digital Content",
//     "AI Image, Video & Audio Generation",
//     "AI Workflow",
//   ];

//   return (
//     <section id="homesec3" className="relative w-full min-h-screen bg-[#f0f6fd] text-[#0d1b3e] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-10 lg:py-14 flex items-center justify-center scroll-mt-16">
      
//       {/* Background Soft Paint/Watercolor Swirl under Character Slot */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] lg:w-[680px] h-[550px] lg:h-[680px] bg-gradient-to-l from-sky-200/80 via-blue-200/40 to-transparent rounded-full filter blur-2xl pointer-events-none -z-0" />

//       {/* Main Grid Layout */}
//       <div className="relative z-10 max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

//         {/* ================= LEFT COLUMN: EXPERIENCE & EXPERTISE TEXT ================= */}
//         <div className="lg:col-span-7 flex flex-col justify-center relative pr-0 lg:pr-6">
          
//           {/* SECTION 1: MY EXPERIENCE */}
//           <motion.div 
//             custom={0}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="mb-9"
//           >
//             {/* Title with Blue Bullet Dot */}
//             <div className="flex items-center gap-3 mb-1">
//               <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
//               <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
//                 MY EXPERIENCE
//               </h2>
//             </div>
//             <TitleUnderline />

//             {/* Paragraph Descriptions */}
//             <p className="mt-4 text-[#2d3a5c] text-base sm:text-[1.05rem] leading-relaxed font-medium max-w-2xl">
//               Creating engaging website, promotional videos, and social media content for brands, businesses, educational institutions, and digital marketing campaigns.
//             </p>
//             <p className="mt-3 text-[#2d3a5c] text-base sm:text-[1.05rem] font-medium max-w-2xl">
//               Delivered creative design and video projects across various niches
//             </p>

//             {/* Bullet Points */}
//             <ul className="mt-3 space-y-2 pl-1">
//               {experienceBullets.map((item, idx) => (
//                 <li key={idx} className="flex items-start gap-3 text-[#2d3a5c] text-sm sm:text-base font-semibold">
//                   <span className="w-2 h-2 rounded-full bg-[#1d63fe] mt-2 shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>


//           {/* SECTION 2: CREATIVE EXPERTISE */}
//           <motion.div 
//             custom={2}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="relative"
//           >
//             {/* Title with Blue Bullet Dot */}
//             <div className="flex items-center gap-3 mb-1">
//               <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
//               <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
//                 CREATIVE EXPERTISE
//               </h2>
//             </div>
//             <TitleUnderline />

//             {/* Bullet Points */}
//             <ul className="mt-4 space-y-2.5 pl-1">
//               {expertiseBullets.map((item, idx) => (
//                 <li key={idx} className="flex items-center gap-3 text-[#2d3a5c] text-sm sm:text-base font-semibold">
//                   <span className="w-2 h-2 rounded-full bg-[#1d63fe] shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>


//           {/* BOTTOM-LEFT HANDWRITTEN DOODLE: "Design Edit Create" */}
//           <motion.div 
//             {...floatAnim(5, 4)}
//             className="mt-8 lg:mt-12 flex items-start gap-3 pointer-events-none"
//           >
//             <BottomLeftCurvedArrow />
//             <div className="font-['Caveat',cursive] text-[#1d63fe] text-2xl font-bold leading-tight rotate-[-6deg]">
//               <p>Design</p>
//               <p className="pl-2">Edit&apos; <span className="inline-block translate-x-1 -translate-y-1 text-lg">/</span></p>
//               <p className="pl-4 underline decoration-[#1d63fe]">Create</p>
//             </div>
//           </motion.div>

//         </div>


//         {/* ================= RIGHT COLUMN: CHARACTER IMAGE & DOODLES ================= */}
//         <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[480px] lg:min-h-[580px]">
          
//           {/* TOP-RIGHT DOODLE: "Create' Edit' Grow" */}
//           <motion.div 
//             {...floatAnim(5.5, 5)}
//             className="absolute top-2 right-2 sm:right-6 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[6deg] pointer-events-none text-right"
//           >
//             <p>Create&apos;</p>
//             <p className="pr-3">Edit&apos;</p>
//             <p className="pr-6 underline decoration-[#1d63fe]">Grow</p>
//             {/* Sparkles */}
//             <span className="absolute -left-4 top-1 text-lg">`</span>
//             <span className="absolute -right-3 bottom-2 text-xl">/</span>
//           </motion.div>

//           {/* MID-RIGHT DOODLE: Browser Window </ > */}
//           <motion.div 
//             {...floatAnim(6, 6)}
//             className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
//           >
//             <BrowserDoodle />
//           </motion.div>

//           {/* BOTTOM-RIGHT DOODLE: "Ideas Into Reality" */}
//           <motion.div 
//             {...floatAnim(4.8, 5)}
//             className="absolute -bottom-2 right-2 sm:right-4 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[-8deg] pointer-events-none text-right"
//           >
//             <p>Ideas</p>
//             <p className="pr-2">` Into</p>
//             <p className="pr-4 underline decoration-[#1d63fe]">Reality</p>
//           </motion.div>


//           {/* CENTER/RIGHT CHARACTER SLOT (Interactive Image Placeholder) */}
//           <div className="relative w-full h-full flex flex-col items-center justify-end z-10">
//             {characterImage ? (
//               <motion.div 
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="relative z-10 flex flex-col items-center"
//               >
//                 <img 
//                   src={characterImage} 
//                   alt="Irshad Shaikh Character" 
//                   className="max-h-[520px] lg:max-h-[600px] w-auto object-contain drop-shadow-2xl"
//                 />
//                 <button 
//                   onClick={() => setCharacterImage(null)}
//                   className="mt-3 bg-[#0d1b3e] hover:bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow transition-colors"
//                 >
//                   Change Character
//                 </button>
//               </motion.div>
//             ) : (
//               /* Interactive Upload Dropzone */
//               <div className="relative z-10 w-full max-w-[340px] h-[460px] lg:h-[520px] rounded-3xl border-2 border-dashed border-[#1d63fe]/50 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center group hover:border-[#1d63fe] transition-all cursor-pointer shadow-sm">
                
//                 <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
//                   <Upload className="w-8 h-8 text-[#1d63fe]" />
//                 </div>

//                 <p className="text-[#0d1b3e] font-extrabold text-lg mb-1 font-['Plus_Jakarta_Sans',sans-serif]">
//                   Right Character Image
//                 </p>
//                 <p className="text-slate-600 text-xs font-medium mb-5 max-w-[220px]">
//                   Drop or select your dynamic PNG avatar here to complete the design
//                 </p>

//                 <label className="cursor-pointer bg-[#1d63fe] hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition-all flex items-center gap-2">
//                   <Upload className="w-4 h-4" />
//                   <span>Upload Character PNG</span>
//                   <input 
//                     type="file" 
//                     accept="image/*" 
//                     onChange={handleImageUpload} 
//                     className="hidden" 
//                   />
//                 </label>
//               </div>
//             )}
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


// "use client";
// import React from 'react';
// import { motion, type Variants, type TargetAndTransition } from 'framer-motion';

// // Import local character image
// import irshadImg from '../public/assest/05.png';

// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec3')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec3';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:ital,wght@1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
//   document.head.appendChild(link);
// }

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 25 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: custom * 0.1,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// const floatAnim = (duration = 4, yDistance = 6): { animate: TargetAndTransition } => ({
//   animate: {
//     y: [0, -yDistance, 0],
//     transition: {
//       duration,
//       repeat: Infinity,
//       ease: 'easeInOut',
//     },
//   },
// });

// // Brush Underline for Section Titles
// const TitleUnderline = () => (
//   <svg className="w-56 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//     <path d="M4 6 C60 10, 160 10, 236 4" />
//   </svg>
// );

// // Bottom-Left Curved Arrow pointing up to "Design Edit Create"
// const BottomLeftCurvedArrow = () => (
//   <svg className="w-12 h-16 text-[#1d63fe]" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M15 70 C 5 45, 15 20, 48 10" />
//     <path d="M36 8 L48 10 L44 24" />
//   </svg>
// );

// // Mid-Right Browser Window Doodle with </> Code
// const BrowserDoodle = () => (
//   <svg className="w-20 h-16 text-[#0d1b3e]" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     {/* Browser Card */}
//     <rect x="8" y="10" width="74" height="52" rx="6" fill="white" strokeWidth="2.5" />
//     <line x1="8" y1="22" x2="82" y2="22" strokeWidth="2" />
//     {/* Window Buttons */}
//     <circle cx="16" cy="16" r="1.5" fill="currentColor" />
//     <circle cx="22" cy="16" r="1.5" fill="currentColor" />
//     <circle cx="28" cy="16" r="1.5" fill="currentColor" />
//     {/* Code Tag */}
//     <path d="M30 40 L22 47 L30 54" strokeWidth="2.5" />
//     <path d="M38 56 L46 38" strokeWidth="2.5" />
//     <path d="M54 40 L62 47 L54 54" strokeWidth="2.5" />
//     {/* Sparkles around window */}
//     <line x1="4" y1="35" x2="1" y2="34" strokeWidth="2" />
//     <line x1="86" y1="18" x2="90" y2="15" strokeWidth="2" />
//     <line x1="85" y1="52" x2="88" y2="55" strokeWidth="2" />
//     <line x1="45" y1="4" x2="45" y2="1" strokeWidth="2" />
//   </svg>
// );

// export default function HomeSec3() {
//   const experienceBullets = [
//     "Freelance Graphic Designer & Video Editor",
//     "2021 - 2024",
//     "Graphic Designer, Video Editor & AI Content Creation",
//     "ChallBox | 2024 - Present",
//   ];

//   const expertiseBullets = [
//     "Graphic Design & Visual Communication",
//     "Video Editing & Cinematic Content",
//     "Motion Graphics & Branding",
//     "Social Media & Digital Content",
//     "AI Image, Video & Audio Generation",
//     "AI Workflow",
//   ];

//   return (
//     <section id="homesec3" className="relative w-full min-h-screen bg-[#f0f6fd] text-[#0d1b3e] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-10 lg:py-14 flex items-center justify-center scroll-mt-16">
      
//       {/* Background Soft Paint/Watercolor Swirl under Character Slot */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] lg:w-[680px] h-[550px] lg:h-[680px] bg-gradient-to-l from-sky-200/80 via-blue-200/40 to-transparent rounded-full filter blur-2xl pointer-events-none -z-0" />

//       {/* Main Grid Layout */}
//       <div className="relative z-10 max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

//         {/* ================= LEFT COLUMN: EXPERIENCE & EXPERTISE TEXT ================= */}
//         <div className="lg:col-span-7 flex flex-col justify-center relative pr-0 lg:pr-6">
          
//           {/* SECTION 1: MY EXPERIENCE */}
//           <motion.div 
//             custom={0}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="mb-9"
//           >
//             {/* Title with Blue Bullet Dot */}
//             <div className="flex items-center gap-3 mb-1">
//               <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
//               <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
//                 MY EXPERIENCE
//               </h2>
//             </div>
//             <TitleUnderline />

//             {/* Paragraph Descriptions */}
//             <p className="mt-4 text-[#2d3a5c] text-base sm:text-[1.05rem] leading-relaxed font-medium max-w-2xl">
//               Creating engaging website, promotional videos, and social media content for brands, businesses, educational institutions, and digital marketing campaigns.
//             </p>
//             <p className="mt-3 text-[#2d3a5c] text-base sm:text-[1.05rem] font-medium max-w-2xl">
//               Delivered creative design and video projects across various niches
//             </p>

//             {/* Bullet Points */}
//             <ul className="mt-3 space-y-2 pl-1">
//               {experienceBullets.map((item, idx) => (
//                 <li key={idx} className="flex items-start gap-3 text-[#2d3a5c] text-sm sm:text-base font-semibold">
//                   <span className="w-2 h-2 rounded-full bg-[#1d63fe] mt-2 shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>


//           {/* SECTION 2: CREATIVE EXPERTISE */}
//           <motion.div 
//             custom={2}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="relative"
//           >
//             {/* Title with Blue Bullet Dot */}
//             <div className="flex items-center gap-3 mb-1">
//               <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
//               <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
//                 CREATIVE EXPERTISE
//               </h2>
//             </div>
//             <TitleUnderline />

//             {/* Bullet Points */}
//             <ul className="mt-4 space-y-2.5 pl-1">
//               {expertiseBullets.map((item, idx) => (
//                 <li key={idx} className="flex items-center gap-3 text-[#2d3a5c] text-sm sm:text-base font-semibold">
//                   <span className="w-2 h-2 rounded-full bg-[#1d63fe] shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>


//           {/* BOTTOM-LEFT HANDWRITTEN DOODLE: "Design Edit Create" */}
//           <motion.div 
//             {...floatAnim(5, 4)}
//             className="mt-8 lg:mt-12 flex items-start gap-3 pointer-events-none"
//           >
//             <BottomLeftCurvedArrow />
//             <div className="font-['Caveat',cursive] text-[#1d63fe] text-2xl font-bold leading-tight rotate-[-6deg]">
//               <p>Design</p>
//               <p className="pl-2">Edit&apos; <span className="inline-block translate-x-1 -translate-y-1 text-lg">/</span></p>
//               <p className="pl-4 underline decoration-[#1d63fe]">Create</p>
//             </div>
//           </motion.div>

//         </div>


//         {/* ================= RIGHT COLUMN: CHARACTER IMAGE & DOODLES ================= */}
//         <div className="lg:col-span-5 relative flex flex-col items-center justify-end self-end h-auto">
          
//           {/* TOP-RIGHT DOODLE: "Create' Edit' Grow" */}
//           <motion.div 
//             {...floatAnim(5.5, 5)}
//             className="absolute top-2 right-2 sm:right-6 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[6deg] pointer-events-none text-right"
//           >
//             <p>Create&apos;</p>
//             <p className="pr-3">Edit&apos;</p>
//             <p className="pr-6 underline decoration-[#1d63fe]">Grow</p>
//             {/* Sparkles */}
//             <span className="absolute -left-4 top-1 text-lg">`</span>
//             <span className="absolute -right-3 bottom-2 text-xl">/</span>
//           </motion.div>

//           {/* MID-RIGHT DOODLE: Browser Window </ > */}
//           <motion.div 
//             {...floatAnim(6, 6)}
//             className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
//           >
//             <BrowserDoodle />
//           </motion.div>

//           {/* BOTTOM-RIGHT DOODLE: "Ideas Into Reality" */}
//           <motion.div 
//             {...floatAnim(4.8, 5)}
//             className="absolute -bottom-2 right-2 sm:right-4 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[-8deg] pointer-events-none text-right"
//           >
//             <p>Ideas</p>
//             <p className="pr-2">` Into</p>
//             <p className="pr-4 underline decoration-[#1d63fe]">Reality</p>
//           </motion.div>


//           {/* CENTER/RIGHT CHARACTER SLOT */}
//           <div className="relative w-full flex flex-col items-center justify-end z-10">
//             <motion.div 
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative z-10 flex flex-col items-center justify-end w-full"
//             >
//               <img 
//                 src={typeof irshadImg === 'string' ? irshadImg : irshadImg.src} 
//                 alt="Irshad Shaikh Character" 
//                 className="h-[380px] sm:h-[460px] md:h-[520px] lg:h-[600px] w-auto max-w-none object-contain object-bottom drop-shadow-2xl"
//               />
//             </motion.div>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }



// "use client";
// import React from 'react';
// import { motion, type Variants, type TargetAndTransition } from 'framer-motion';

// // Import local character image
// import irshadImg from '../public/assest/05.png';
// // import parashiftLogo from '../public/assest/parashift.jpg';
// // import tekunikLogo from '../public/assest/tekunik.png';

// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec3')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec3';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:ital,wght@1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
//   document.head.appendChild(link);
// }

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 25 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: custom * 0.1,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// const floatAnim = (duration = 4, yDistance = 6): { animate: TargetAndTransition } => ({
//   animate: {
//     y: [0, -yDistance, 0],
//     transition: {
//       duration,
//       repeat: Infinity,
//       ease: 'easeInOut',
//     },
//   },
// });

// // Brush Underline for Section Titles
// const TitleUnderline = () => (
//   <svg className="w-56 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//     <path d="M4 6 C60 10, 160 10, 236 4" />
//   </svg>
// );

// // Bottom-Left Curved Arrow pointing up to "Design Edit Create"
// const BottomLeftCurvedArrow = () => (
//   <svg className="w-12 h-16 text-[#1d63fe]" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M15 70 C 5 45, 15 20, 48 10" />
//     <path d="M36 8 L48 10 L44 24" />
//   </svg>
// );

// // Mid-Right Browser Window Doodle with </> Code
// const BrowserDoodle = () => (
//   <svg className="w-20 h-16 text-[#0d1b3e]" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     {/* Browser Card */}
//     <rect x="8" y="10" width="74" height="52" rx="6" fill="white" strokeWidth="2.5" />
//     <line x1="8" y1="22" x2="82" y2="22" strokeWidth="2" />
//     {/* Window Buttons */}
//     <circle cx="16" cy="16" r="1.5" fill="currentColor" />
//     <circle cx="22" cy="16" r="1.5" fill="currentColor" />
//     <circle cx="28" cy="16" r="1.5" fill="currentColor" />
//     {/* Code Tag */}
//     <path d="M30 40 L22 47 L30 54" strokeWidth="2.5" />
//     <path d="M38 56 L46 38" strokeWidth="2.5" />
//     <path d="M54 40 L62 47 L54 54" strokeWidth="2.5" />
//     {/* Sparkles around window */}
//     <line x1="4" y1="35" x2="1" y2="34" strokeWidth="2" />
//     <line x1="86" y1="18" x2="90" y2="15" strokeWidth="2" />
//     <line x1="85" y1="52" x2="88" y2="55" strokeWidth="2" />
//     <line x1="45" y1="4" x2="45" y2="1" strokeWidth="2" />
//   </svg>
// );

// export default function HomeSec3() {
//   const experience = [
//               {
//                 name: "PARASHIFT",
//                 role: "3D Artist",
//                 desc: [
//                   "Created detailed 3D models and props optimized for clean topology.",
//                   "Applied UVs, materials and textures for realistic surface detail.",
//                   "Set up lighting and renders to meet client visualization needs.",
//                 ],
//               },
//               {
//                 name: "TEKUNIK",
//                 role: "3D Animator / Artist",
//                 desc: [
//                   "Modeled, textured, and lit hard-surface and organic assets in Autodesk Maya.",
//                   "Created presentation-ready renders with proper composition and lighting.",
//                   "Worked through asset pipeline from blockout to final polished render.",
//                 ],
//               },
//   ];

//   const expertiseBullets = [
//     "3D Modeling (Hard-Surface & Organic)",
//     "Texturing, Shading & Materials",
//     "Lighting & Scene Composition",
//     "Rendering & Look Development",
//     "UV Unwrapping & Topology",
//     "Asset Optimization for Presentation",
    
//   ];

//   return (
//     <section id="homesec3" className="relative w-full min-h-screen bg-[#f0f6fd] text-[#0d1b3e] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 pt-10 lg:pt-14 flex items-stretch justify-center scroll-mt-16">
      
//       {/* Background Soft Paint/Watercolor Swirl under Character Slot */}
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] lg:w-[680px] h-[550px] lg:h-[680px] bg-gradient-to-l from-sky-200/80 via-blue-200/40 to-transparent rounded-full filter blur-2xl pointer-events-none -z-0" />

//       {/* Main Grid Layout */}
//       <div className="relative z-10 max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end">

//         {/* ================= LEFT COLUMN: EXPERIENCE & EXPERTISE TEXT ================= */}
//         <div className="lg:col-span-7 flex flex-col justify-center relative pr-0 lg:pr-6 self-center">
          
//           {/* SECTION 1: MY EXPERIENCE */}
//           <motion.div 
//             custom={0}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="mb-9"
//           >
//             {/* Title with Blue Bullet Dot */}
//             <div className="flex items-center gap-3 mb-1">
//               <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
//               <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
//                 EXPERIENCE
//               </h2>
//             </div>
//             <TitleUnderline />

//             {/* Paragraph Descriptions */}
//             <p className="mt-4 text-[#2d3a5c] text-base sm:text-[1.05rem] leading-relaxed font-medium max-w-2xl">
//               Creating high-quality 3D models, textures, lighting setups, and renders for product visualization, environments, props and assets using Autodesk Maya.
//             </p>

//             {/* Company Experience Cards */}
//             <div className="mt-6 space-y-5 max-w-2xl">
//               {experience.map((exp, idx) => (
//                 <motion.div
//                   key={exp.name}
//                   custom={idx + 1}
//                   variants={fadeInUp}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover={{ y: -4, rotate: 0 }}
//                   transition={{ type: "spring", stiffness: 260, damping: 18 }}
//                   className={`relative flex items-start gap-4 bg-white border-2 border-slate-900 rounded-2xl p-4 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] ${idx === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]"}`}
//                 >
//                   {/* Logo slot */}
//                   <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl border-2 border-slate-900 overflow-hidden bg-[#f0f6fd] flex items-center justify-center p-1.5">
//                     <div className="w-full h-full flex items-center justify-center font-black text-sm text-center text-[#0d1b3e] uppercase">
//                       {exp.name?.substring(0, 4)}
//                     </div>
//                   </div>

//                   {/* Company name + description */}
//                   <div className="flex-1">
//                     <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//                       <h3 className="text-lg sm:text-xl font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
//                         {exp.name}
//                       </h3>
//                       <span className="font-['Caveat',cursive] text-[#1d63fe] text-lg font-bold rotate-[-2deg]">
//                         {exp.role}
//                       </span>
//                     </div>
//                     <ul className="mt-2.5 space-y-1.5">
//                       {exp.desc.map((line, i) => (
//                         <li key={i} className="flex items-start gap-2.5 text-[#2d3a5c] text-sm sm:text-[0.95rem] font-medium leading-snug">
//                           <span className="w-2 h-2 rounded-full bg-[#1d63fe] mt-1.5 shrink-0" />
//                           <span>{line}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>


//           {/* SECTION 2: CREATIVE EXPERTISE */}
//           {/* <motion.div 
//             custom={2}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="relative"
//           >
//             <div className="flex items-center gap-3 mb-1">
//               <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
//               <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
//                 CREATIVE EXPERTISE
//               </h2>
//             </div>
//             <TitleUnderline />

//             <ul className="mt-4 space-y-2.5 pl-1">
//               {expertiseBullets.map((item, idx) => (
//                 <li key={idx} className="flex items-center gap-3 text-[#2d3a5c] text-sm sm:text-base font-semibold">
//                   <span className="w-2 h-2 rounded-full bg-[#1d63fe] shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div> */}


//           {/* BOTTOM-LEFT HANDWRITTEN DOODLE: "Design Edit Create" */}
//           {/* <motion.div 
//             {...floatAnim(5, 4)}
//             className="mt-8 lg:mt-12 flex items-start gap-3 pointer-events-none"
//           >
//             <BottomLeftCurvedArrow />
//             <div className="font-['Caveat',cursive] text-[#1d63fe] text-2xl font-bold leading-tight rotate-[-6deg]">
//               <p>Model</p>
//               <p className="pl-2">Light&apos; <span className="inline-block translate-x-1 -translate-y-1 text-lg">/</span></p>
//               <p className="pl-4 underline decoration-[#1d63fe]">Render</p>
//             </div>
//           </motion.div> */}

//         </div>


//         {/* ================= RIGHT COLUMN: CHARACTER IMAGE & DOODLES ================= */}
//         <div className="lg:col-span-5 relative flex flex-col items-center justify-end self-stretch -mb-10 lg:-mb-14">
          
//           {/* TOP-RIGHT DOODLE: "Create' Edit' Grow" */}
//           <motion.div 
//             {...floatAnim(5.5, 5)}
//             className="absolute top-2 right-2 sm:right-6 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[6deg] pointer-events-none text-right"
//           >
//             <p>Model&apos;</p>
//             <p className="pr-3">Shade&apos;</p>
//             <p className="pr-6 underline decoration-[#1d63fe]">Render</p>
//             {/* Sparkles */}
//             <span className="absolute -left-4 top-1 text-lg">`</span>
//             <span className="absolute -right-3 bottom-2 text-xl">/</span>
//           </motion.div>

//           {/* MID-RIGHT DOODLE: Browser Window </ > */}
//           <motion.div 
//             {...floatAnim(6, 6)}
//             className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
//           >
//             <BrowserDoodle />
//           </motion.div>

//           {/* BOTTOM-RIGHT DOODLE: "Ideas Into Reality" */}
//           {/* <motion.div 
//             {...floatAnim(4.8, 5)}
//             className="absolute bottom-12 right-2 sm:right-4 z-20 font-['Caveat',cursive] text-[#1d63fe] text-2xl sm:text-3xl font-bold leading-tight rotate-[-8deg] pointer-events-none text-right"
//           >
//             <p>Ideas</p>
//             <p className="pr-2">` Into</p>
//             <p className="pr-4 underline decoration-[#1d63fe]">3D</p>
//           </motion.div> */}


//           {/* CENTER/RIGHT CHARACTER SLOT */}
//           <div className="relative w-full flex-1 flex flex-col items-center justify-end z-10 leading-none">
//             <motion.div 
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative z-10 flex flex-col items-center justify-end w-full leading-none"
//             >
//               <img 
//                 src={typeof irshadImg === 'string' ? irshadImg : irshadImg.src} 
//                 alt="Irshad Shaikh Character" 
//                 className="h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] xl:h-[620px] w-auto max-w-none object-contain object-bottom block align-bottom drop-shadow-2xl"
//               />
//             </motion.div>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";
import React from 'react';
import { motion, type Variants, type TargetAndTransition } from 'framer-motion';

// Import local character image
import irshadImg from '../public/assest/05.png';

if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec3')) {
  const link = document.createElement('link');
  link.id = 'google-fonts-homesec3';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700;800&family=Oswald:ital,wght@1,700;1,800;1,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
  document.head.appendChild(link);
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const floatAnim = (duration = 4, yDistance = 6): { animate: TargetAndTransition } => ({
  animate: {
    y: [0, -yDistance, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});

// Brush Underline for Section Titles
const TitleUnderline = () => (
  <svg className="w-44 sm:w-56 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M4 6 C60 10, 160 10, 236 4" />
  </svg>
);

// Mid-Right Browser Window Doodle with 3D/Maya Symbol
const BrowserDoodle = () => (
  <svg className="w-16 h-12 sm:w-20 sm:h-16 text-[#0d1b3e]" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Browser Card */}
    <rect x="8" y="10" width="74" height="52" rx="6" fill="white" strokeWidth="2.5" />
    <line x1="8" y1="22" x2="82" y2="22" strokeWidth="2" />
    {/* Window Buttons */}
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    <circle cx="22" cy="16" r="1.5" fill="currentColor" />
    <circle cx="28" cy="16" r="1.5" fill="currentColor" />
    {/* 3D Cube Tag */}
    <path d="M45 28 L60 35 L45 42 L30 35 Z" strokeWidth="2" />
    <path d="M30 35 L30 52 L45 58 L45 42" strokeWidth="2" />
    <path d="M60 35 L60 52 L45 58" strokeWidth="2" />
    {/* Sparkles around window */}
    <line x1="4" y1="35" x2="1" y2="34" strokeWidth="2" />
    <line x1="86" y1="18" x2="90" y2="15" strokeWidth="2" />
    <line x1="85" y1="52" x2="88" y2="55" strokeWidth="2" />
    <line x1="45" y1="4" x2="45" y2="1" strokeWidth="2" />
  </svg>
);

export function HomeSec3() {
  const experience = [
    {
      name: "SUNITA PRODUCTION",
      role: "3D Animator / Artist",
      desc: [
        "Created detailed 3D hard-surface and organic models optimized for animation and clean topology.",
        "Applied accurate UV mapping, custom materials, and photorealistic textures in Autodesk Maya & Substance Painter.",
        "Designed cinematic lighting setups and rendered production-ready assets and animation scenes.",
      ],
    },
  ];

  return (
    <section id="homesec3" className="relative w-full min-h-screen bg-[#f0f6fd] text-[#0d1b3e] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4 sm:px-6 lg:px-12 pt-10 lg:pt-16 pb-0 flex items-end justify-center scroll-mt-16">
      
      {/* Background Soft Paint/Watercolor Swirl */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[680px] h-[350px] sm:h-[550px] lg:h-[680px] bg-gradient-to-l from-sky-200/80 via-blue-200/40 to-transparent rounded-full filter blur-2xl pointer-events-none -z-0" />

      {/* Main Grid Layout */}
      <div className="relative z-10 max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">

        {/* ================= LEFT COLUMN: EXPERIENCE TEXT ================= */}
        <div className="lg:col-span-7 flex flex-col justify-center relative pr-0 lg:pr-6 order-1 pb-10 lg:pb-16">
          
          {/* SECTION: MY EXPERIENCE */}
          <motion.div 
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-6 sm:mb-8"
          >
            {/* Title with Blue Bullet Dot */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-1">
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
                EXPERIENCE
              </h2>
            </div>
            <TitleUnderline />

            {/* Paragraph Description */}
            <p className="mt-3 sm:mt-4 text-[#2d3a5c] text-sm sm:text-base lg:text-[1.05rem] leading-relaxed font-medium max-w-2xl">
              Delivering high-quality 3D modeling, texturing, lighting setups, and renders for animation pipelines, props, environments, and product visualization using Autodesk Maya.
            </p>

            {/* Company Experience Card */}
            <div className="mt-5 sm:mt-6 max-w-2xl">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.name}
                  custom={idx + 1}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 bg-white border-2 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]"
                >
                  {/* Logo Slot */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 rounded-xl border-2 border-slate-900 overflow-hidden bg-[#f0f6fd] flex items-center justify-center p-1.5">
                    <div className="w-full h-full flex items-center justify-center font-black text-xs sm:text-sm text-center text-[#0d1b3e] uppercase leading-tight">
                      SUNITA<br/>PROD
                    </div>
                  </div>

                  {/* Company Name + Description */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg sm:text-xl font-black italic tracking-wide text-[#0d1b3e] font-['Oswald',sans-serif] uppercase">
                        {exp.name}
                      </h3>
                      <span className="font-['Caveat',cursive] text-[#1d63fe] text-base sm:text-lg font-bold rotate-[-2deg]">
                        {exp.role}
                      </span>
                    </div>

                    <ul className="mt-2.5 space-y-2">
                      {exp.desc.map((line, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#2d3a5c] text-xs sm:text-sm lg:text-[0.95rem] font-medium leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1d63fe] mt-1.5 shrink-0" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN: CHARACTER IMAGE & DOODLES ================= */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-end order-2 self-end h-full">
          
          {/* TOP-RIGHT DOODLE */}
          <motion.div 
            {...floatAnim(5.5, 5)}
            className="absolute top-0 right-2 sm:right-6 z-20 font-['Caveat',cursive] text-[#1d63fe] text-xl sm:text-2xl lg:text-3xl font-bold leading-tight rotate-[6deg] pointer-events-none text-right"
          >
            <p>Model&apos;</p>
            <p className="pr-2 sm:pr-3">Shade&apos;</p>
            <p className="pr-4 sm:pr-6 underline decoration-[#1d63fe]">Render</p>
          </motion.div>

          {/* MID-RIGHT DOODLE: Browser Window */}
          <motion.div 
            {...floatAnim(6, 6)}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden sm:block"
          >
            <BrowserDoodle />
          </motion.div>

          {/* CHARACTER IMAGE TOUCHING BOTTOM */}
          <div className="relative w-full flex flex-col items-center justify-end z-10 leading-none">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center justify-end w-full leading-none"
            >
              <img 
                src={typeof irshadImg === 'string' ? irshadImg : irshadImg.src} 
                alt="Ashfaque Shaikh - Sunita Production 3D Animator" 
                className="h-[340px] sm:h-[440px] lg:h-[560px] xl:h-[620px] w-auto max-w-none object-contain object-bottom block align-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HomeSec3;