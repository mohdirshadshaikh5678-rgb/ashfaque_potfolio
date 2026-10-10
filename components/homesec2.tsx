
// "use client"
// import React, { useState } from 'react';
// import { motion, type Variants, type TargetAndTransition } from 'framer-motion';
// import type { ChangeEvent } from 'react';
// import { Upload } from 'lucide-react';

// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec2')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec2';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap';
//   document.head.appendChild(link);
// }

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
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


// // Top Right Code Bracket Doodle </>
// const CodeBracketDoodle = () => (
//   <svg className="w-16 h-16 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M30 35 L12 50 L30 65" />
//     <path d="M42 70 L58 30" strokeWidth="4" />
//     <path d="M70 35 L88 50 L70 65" />
//     {/* Radiating Spark Lines */}
//     <line x1="82" y1="28" x2="88" y2="20" strokeWidth="3" />
//     <line x1="90" y1="36" x2="98" y2="34" strokeWidth="3" />
//     <line x1="88" y1="46" x2="96" y2="48" strokeWidth="3" />
//   </svg>
// );

// // Curved Arrow & Lines pointing to "Build Better Web"
// const CurvedArrowBottomRight = () => (
//   <svg className="w-16 h-12 text-slate-700" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//     <path d="M10 45 Q35 42 50 15" />
//     <path d="M38 20 L50 15 L48 28" />
//   </svg>
// );

// // Underline accent for "Web Developer"
// const CursiveUnderline = () => (
//   <svg className="w-36 h-4 text-blue-600 -mt-1" viewBox="0 0 160 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//     <path d="M5 12 C40 18, 110 18, 155 8" />
//   </svg>
// );

// // SVG Tech Icons matching exact dark squircle boxes
// const ReactLogoIcon = () => (
//   <svg className="w-7 h-7 text-sky-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="7">
//     <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(0 50 50)" />
//     <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
//     <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
//     <circle cx="50" cy="50" r="8" fill="currentColor" />
//   </svg>
// );

// const TailwindLogoIcon = () => (
//   <svg className="w-7 h-7 text-sky-400" viewBox="0 0 100 100" fill="currentColor">
//     <path d="M26 32c5-10 15-13 25-8 7 3 11 10 15 15 5 6 10 8 18 5-5 10-15 13-25 8-7-3-11-10-15-15-5-6-10-8-18-5zM10 56c5-10 15-13 25-8 7 3 11 10 15 15 5 6 10 8 18 5-5 10-15 13-25 8-7-3-11-10-15-15-5-6-10-8-18-5z" />
//   </svg>
// );

// const NodeLogoIcon = () => (
//   <svg className="w-7 h-7 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
//     <path d="M50 10 L88 32 L88 76 L50 98 L12 76 L12 32 Z" fill="none" stroke="currentColor" strokeWidth="8" />
//     <text x="50" y="60" textAnchor="middle" fill="currentColor" fontSize="32" fontWeight="900" fontFamily="sans-serif">JS</text>
//   </svg>
// );

// const MongoLogoIcon = () => (
//   <svg className="w-7 h-7 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
//     <path d="M50 5 C50 5 80 35 80 65 C80 82 66 95 50 95 C34 95 20 82 20 65 C20 35 50 5 50 5 Z M50 5 L50 95" stroke="currentColor" strokeWidth="4" />
//   </svg>
// );

// const ExpressLogoIcon = () => (
//   <span className="text-slate-100 font-sans font-extralight text-2xl tracking-tighter select-none">
//     ex
//   </span>
// );

// const JSBadgeIcon = () => (
//   <div className="w-6 h-6 bg-amber-400 text-slate-950 font-black text-xs rounded-[3px] flex items-end justify-end p-[2px] leading-none">
//     JS
//   </div>
// );

// export default function HomeSec2() {
//   const [characterImage, setCharacterImage] = useState<string | null>(null);

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setCharacterImage(URL.createObjectURL(file));
//     }
//   };

//   const techStack = [
//     { name: 'React', icon: <ReactLogoIcon /> },
//     { name: 'Tailwind CSS', icon: <TailwindLogoIcon /> },
//     { name: 'Node.js', icon: <NodeLogoIcon /> },
//     { name: 'MongoDB', icon: <MongoLogoIcon /> },
//     { name: 'Express', icon: <ExpressLogoIcon /> },
//     { name: 'JavaScript', icon: <JSBadgeIcon /> },
//   ];

//   return (
//     <section id="homesec2" className="relative w-full min-h-screen bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-12 lg:py-16 flex items-center justify-center scroll-mt-16">
      
//       {/* Background Subtle Gradient Accents */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

//       {/* Main Content Outer Frame */}
//       <div className="relative z-10 max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

//         {/* ================= LEFT COLUMN: AVATAR / CHARACTER SLOT ================= */}
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:col-span-4 relative flex flex-col items-center justify-center min-h-[460px] lg:min-h-[540px]"
//         >
//           {/* Top-Left Handwritten Cursive Text */}
//           <motion.div 
//             {...floatAnim(5, 5)}
//             className="absolute top-2 left-0 sm:-left-4 z-20 text-slate-800 font-['Caveat',cursive] text-xl sm:text-2xl font-bold leading-tight rotate-[-8deg] pointer-events-none"
//           >
//             <p>Code</p>
//             <p className="pl-2">Build</p>
//             <p className="pl-4">Create</p>
//           </motion.div>

//           {/* Light Blue Watercolor / Swirl Background Shape behind avatar */}
//           <div className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-gradient-to-tr from-sky-200/70 to-blue-200/50 rounded-full filter blur-md -z-10 transform scale-110" />

//           {/* Left Decorative Yellow/Blue Slash Lines */}
//           <div className="absolute left-2 bottom-20 flex flex-col gap-1 pointer-events-none opacity-80">
//             <span className="w-6 h-1 bg-amber-400 rotate-[-35deg] rounded-full" />
//             <span className="w-5 h-1 bg-blue-500 rotate-[-35deg] rounded-full" />
//           </div>

//           {/* Character Container / Upload Area */}
//           <div className="relative w-full h-full flex flex-col items-center justify-end">
//             {characterImage ? (
//               <motion.div 
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="relative z-10 flex flex-col items-center"
//               >
//                 <img 
//                   src={characterImage} 
//                   alt="Irshad Shaikh Character" 
//                   className="max-h-[500px] lg:max-h-[560px] w-auto object-contain drop-shadow-xl"
//                 />
//                 <button 
//                   onClick={() => setCharacterImage(null)}
//                   className="mt-3 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow transition-colors"
//                 >
//                   Change Character
//                 </button>
//               </motion.div>
//             ) : (
//               /* Default Interactive Placeholder Avatar Zone */
//               <div className="relative z-10 w-full max-w-[320px] h-[440px] rounded-3xl border-2 border-dashed border-blue-300 bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center group hover:border-blue-500 transition-all cursor-pointer">
                
//                 {/* Stylized Default Silhouette Icon */}
//                 <div className="w-24 h-24 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
//                   <Upload className="w-8 h-8 text-blue-600" />
//                 </div>

//                 <p className="text-slate-900 font-extrabold text-lg mb-1 font-['Plus_Jakarta_Sans',sans-serif]">
//                   Left Character Image
//                 </p>
//                 <p className="text-slate-600 text-xs font-medium mb-5 max-w-[220px]">
//                   Drop or select your dynamic PNG avatar here to complete the design
//                 </p>

//                 <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition-all flex items-center gap-2">
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
//         </motion.div>


//         {/* ================= RIGHT COLUMN: TEXT CONTENT & TECH STACK ================= */}
//         <div className="lg:col-span-8 relative flex flex-col justify-center pl-0 lg:pl-4">
          
//           {/* Top-Right Hand-Drawn Code Bracket Doodle </> */}
//           <motion.div 
//             {...floatAnim(6, 6)}
//             className="absolute top-0 right-2 sm:right-6 pointer-events-none z-10"
//           >
//             <CodeBracketDoodle />
//           </motion.div>

//           {/* "Hi, I'm" Label */}
//           <motion.p 
//             custom={0}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="text-slate-900 font-extrabold text-2xl sm:text-3xl tracking-tight mb-1"
//           >
// Hi, I&apos;m
//           </motion.p>

//           {/* Main Title: "Irshad Shaikh" with "Web Developer" Cursive Badge */}
//           <motion.div 
//             custom={1}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="relative flex flex-wrap items-baseline gap-x-4 mb-3"
//           >
//             <h1 className="text-5xl sm:text-7xl lg:text-[5.2rem] font-black tracking-tight leading-none text-slate-900">
//               Irshad <span className="text-[#1d63fe]">Shaikh</span>
//             </h1>

//             {/* Cursive "Web Developer" Label above/next to title */}
//             <div className="relative inline-flex flex-col items-center -mt-8 sm:-mt-12 ml-2 sm:ml-4">
//               <span className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-blue-600 rotate-[-5deg] tracking-wide whitespace-nowrap">
//                 Web Developer
//               </span>
//               <CursiveUnderline />
//             </div>
//           </motion.div>

//           {/* Role Subtitle */}
//           <motion.p 
//             custom={2}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="text-slate-600 font-bold text-base sm:text-lg tracking-wide mb-6"
//           >
//             Frontend Developer &nbsp;|&nbsp; Backend Developer &nbsp;|&nbsp; MERN Stack
//           </motion.p>

//           {/* Description Paragraph */}
//           <motion.p 
//             custom={3}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mb-10"
//           >
//             I&apos;m a passionate web developer who loves turning ideas into real projects. 
//             I enjoy building clean, responsive, and user-friendly websites. With experience 
//             in both frontend and backend development, I work with modern technologies 
//             like React, Node.js, MongoDB, and more. I&apos;m always eager to learn new things, 
//             solve problems, and create better digital experiences.
//           </motion.p>

//           {/* Tech Stack Badges Row */}
//           <motion.div 
//             custom={4}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-5 max-w-2xl"
//           >
//             {techStack.map((tech) => (
//               <motion.div 
//                 key={tech.name}
//                 whileHover={{ y: -6, scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 18 }}
//                 className="flex flex-col items-center"
//               >
//                 {/* Dark Rounded Squircle Card */}
//                 <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#0b1329] rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/10 border border-slate-800 transition-all">
//                   {tech.icon}
//                 </div>
//                 {/* Label Underneath */}
//                 <span className="mt-2 text-xs font-semibold text-slate-700 text-center">
//                   {tech.name}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Bottom Right Handwritten Doodle: "Build Better Web" with Arrow */}
//           <div className="relative sm:absolute sm:bottom-0 sm:right-4 mt-8 sm:mt-0 flex items-center gap-2 self-end pointer-events-none">
//             <CurvedArrowBottomRight />
//             <div className="font-['Caveat',cursive] text-slate-800 text-xl font-bold leading-none rotate-[-4deg]">
//               <p>Build</p>
//               <p className="pl-2">Better</p>
//               <p className="pl-4 underline decoration-slate-800">Web</p>
//             </div>
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
// import irshadImg from '../public/assest/07.png';

// if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec2')) {
//   const link = document.createElement('link');
//   link.id = 'google-fonts-homesec2';
//   link.rel = 'stylesheet';
//   link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap';
//   document.head.appendChild(link);
// }

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
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

// // Top Right Code Bracket Doodle </>
// const CodeBracketDoodle = () => (
//   <svg className="w-16 h-16 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M30 35 L12 50 L30 65" />
//     <path d="M42 70 L58 30" strokeWidth="4" />
//     <path d="M70 35 L88 50 L70 65" />
//     <line x1="82" y1="28" x2="88" y2="20" strokeWidth="3" />
//     <line x1="90" y1="36" x2="98" y2="34" strokeWidth="3" />
//     <line x1="88" y1="46" x2="96" y2="48" strokeWidth="3" />
//   </svg>
// );

// // Curved Arrow & Lines pointing to "Build Better Web"
// const CurvedArrowBottomRight = () => (
//   <svg className="w-16 h-12 text-slate-700" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//     <path d="M10 45 Q35 42 50 15" />
//     <path d="M38 20 L50 15 L48 28" />
//   </svg>
// );

// // Underline accent for "Web Developer"
// const CursiveUnderline = () => (
//   <svg className="w-36 h-4 text-blue-600 -mt-1" viewBox="0 0 160 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//     <path d="M5 12 C40 18, 110 18, 155 8" />
//   </svg>
// );

// // SVG Tech Icons
// const ReactLogoIcon = () => (
//   <svg className="w-7 h-7 text-sky-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="7">
//     <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(0 50 50)" />
//     <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
//     <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
//     <circle cx="50" cy="50" r="8" fill="currentColor" />
//   </svg>
// );

// const TailwindLogoIcon = () => (
//   <svg className="w-7 h-7 text-sky-400" viewBox="0 0 100 100" fill="currentColor">
//     <path d="M26 32c5-10 15-13 25-8 7 3 11 10 15 15 5 6 10 8 18 5-5 10-15 13-25 8-7-3-11-10-15-15-5-6-10-8-18-5zM10 56c5-10 15-13 25-8 7 3 11 10 15 15 5 6 10 8 18 5-5 10-15 13-25 8-7-3-11-10-15-15-5-6-10-8-18-5z" />
//   </svg>
// );

// const NodeLogoIcon = () => (
//   <svg className="w-7 h-7 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
//     <path d="M50 10 L88 32 L88 76 L50 98 L12 76 L12 32 Z" fill="none" stroke="currentColor" strokeWidth="8" />
//     <text x="50" y="60" textAnchor="middle" fill="currentColor" fontSize="32" fontWeight="900" fontFamily="sans-serif">JS</text>
//   </svg>
// );

// const MongoLogoIcon = () => (
//   <svg className="w-7 h-7 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
//     <path d="M50 5 C50 5 80 35 80 65 C80 82 66 95 50 95 C34 95 20 82 20 65 C20 35 50 5 50 5 Z M50 5 L50 95" stroke="currentColor" strokeWidth="4" />
//   </svg>
// );

// const ExpressLogoIcon = () => (
//   <span className="text-slate-100 font-sans font-extralight text-2xl tracking-tighter select-none">
//     ex
//   </span>
// );

// const JSBadgeIcon = () => (
//   <div className="w-6 h-6 bg-amber-400 text-slate-950 font-black text-xs rounded-[3px] flex items-end justify-end p-[2px] leading-none">
//     JS
//   </div>
// );

// export default function HomeSec2() {
//   const techStack = [
//     { name: 'Autodesk Maya', icon: <ReactLogoIcon /> },
//     { name: '3D Modeling', icon: <TailwindLogoIcon /> },
//     { name: 'Texturing', icon: <NodeLogoIcon /> },
//     { name: 'Lighting', icon: <MongoLogoIcon /> },
//     { name: 'Arnold Render', icon: <ExpressLogoIcon /> },
//     { name: 'UV Mapping', icon: <JSBadgeIcon /> },
//   ];

//   return (
//     <section id="homesec2" className="relative w-full min-h-screen bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-6 py-12 lg:py-16 flex items-center justify-center scroll-mt-16">
      
//       {/* Background Subtle Gradient Accents */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

//       {/* Main Content Outer Frame */}
//       <div className="relative z-10 max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

//         {/* ================= LEFT COLUMN: AVATAR / CHARACTER ================= */}
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:col-span-4 relative flex flex-col items-center justify-end h-auto self-end"
//         >
//           {/* Top-Left Handwritten Cursive Text */}
//           <motion.div 
//             {...floatAnim(5, 5)}
//             className="absolute top-2 left-0 sm:-left-4 z-20 text-slate-800 font-['Caveat',cursive] text-xl sm:text-2xl font-bold leading-tight rotate-[-8deg] pointer-events-none"
//           >
//             <p>Model</p>
//             <p className="pl-2">Shade</p>
//             <p className="pl-4">Render</p>
//           </motion.div>

//           {/* Light Blue Watercolor / Swirl Background Shape behind avatar */}
//           <div className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-gradient-to-tr from-sky-200/70 to-blue-200/50 rounded-full filter blur-md -z-10 transform scale-110" />

//           {/* Left Decorative Yellow/Blue Slash Lines */}
//           <div className="absolute left-2 bottom-20 flex flex-col gap-1 pointer-events-none opacity-80 z-20">
//             <span className="w-6 h-1 bg-amber-400 rotate-[-35deg] rounded-full" />
//             <span className="w-5 h-1 bg-blue-500 rotate-[-35deg] rounded-full" />
//           </div>

//           {/* Character Image Container */}
//           <div className="relative w-full flex flex-col items-center justify-end">
//             <motion.div 
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative z-10 flex flex-col items-center justify-end w-full"
//             >
//               <img 
//                 src={typeof irshadImg === 'string' ? irshadImg : irshadImg.src} 
//                 alt="Irshad Shaikh Character" 
//                 className="h-[180px] sm:h-[200px] md:h-[290px] lg:h-[560px] w-auto max-w-none object-contain object-bottom drop-shadow-xl"
//               />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* ================= RIGHT COLUMN: TEXT CONTENT & TECH STACK ================= */}
//         <div className="lg:col-span-8 relative flex flex-col justify-center pl-0 lg:pl-4">
          
//           {/* Top-Right Hand-Drawn Code Bracket Doodle </> */}
//           <motion.div 
//             {...floatAnim(6, 6)}
//             className="absolute top-0 right-2 sm:right-6 pointer-events-none z-10"
//           >
//             <CodeBracketDoodle />
//           </motion.div>

//           {/* "Hi, I'm" Label */}
//           <motion.p 
//             custom={0}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="text-slate-900 font-extrabold text-2xl sm:text-3xl tracking-tight mb-1"
//           >
//             Hi, I&apos;m
//           </motion.p>

//           {/* Main Title: "Irshad Shaikh" with "Web Developer" Cursive Badge */}
//           <motion.div 
//             custom={1}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="relative flex flex-wrap items-baseline gap-x-4 mb-3"
//           >
//             <h1 className="text-5xl sm:text-7xl lg:text-[5.2rem] font-black tracking-tight leading-none text-slate-900">
//               ASHFAQUE <span className="text-[#1d63fe]">SHAIKH</span>
//             </h1>

//             {/* Cursive "3D Animator" Label next to title */}
//             <div className="relative inline-flex flex-col items-center -mt-8 sm:-mt-12 ml-2 sm:ml-4">
//               <span className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-blue-600 rotate-[-5deg] tracking-wide whitespace-nowrap">
//                 3D Animator
//               </span>
//               <CursiveUnderline />
//             </div>
//           </motion.div>

//           {/* Role Subtitle */}
//           <motion.p 
//             custom={2}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="text-slate-600 font-bold text-base sm:text-lg tracking-wide mb-6"
//           >
//             3D Animator &nbsp;|&nbsp; 3D Modeling &nbsp;|&nbsp; Texturing, Lighting & Rendering (Autodesk Maya)
//           </motion.p>

//           {/* Description Paragraph */}
//           <motion.p 
//             custom={3}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mb-10"
//           >
//             I&apos;m Ashfaque Shaikh, a 3D Animator specializing in 3D modeling, texturing, lighting, and rendering using Autodesk Maya. 
//             I create realistic, production-ready 3D assets and scenes with clean topology, accurate materials, and cinematic lighting to bring ideas to life.
//           </motion.p>

//           {/* Tech Stack Badges Row */}
//           <motion.div 
//             custom={4}
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-5 max-w-2xl"
//           >
//             {techStack.map((tech) => (
//               <motion.div 
//                 key={tech.name}
//                 whileHover={{ y: -6, scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 18 }}
//                 className="flex flex-col items-center"
//               >
//                 {/* Dark Rounded Squircle Card */}
//                 <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#0b1329] rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/10 border border-slate-800 transition-all">
//                   {tech.icon}
//                 </div>
//                 {/* Label Underneath */}
//                 <span className="mt-2 text-xs font-semibold text-slate-700 text-center">
//                   {tech.name}
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Bottom Right Handwritten Doodle: "Build Better Web" with Arrow */}
//           <div className="relative sm:absolute sm:bottom-0 sm:right-4 mt-8 sm:mt-0 flex items-center gap-2 self-end pointer-events-none">
//             <CurvedArrowBottomRight />
//             <div className="font-['Caveat',cursive] text-slate-800 text-xl font-bold leading-none rotate-[-4deg]">
//               <p>Model</p>
//               <p className="pl-2">Render</p>
//               <p className="pl-4 underline decoration-slate-800">Animate</p>
//             </div>
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
import irshadImg from '../public/assest/07.png';

if (typeof document !== 'undefined' && !document.getElementById('google-fonts-homesec2')) {
  const link = document.createElement('link');
  link.id = 'google-fonts-homesec2';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap';
  document.head.appendChild(link);
}

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

// Top Right Code Bracket Doodle </>
const CodeBracketDoodle = () => (
  <svg className="w-14 h-14 sm:w-16 sm:h-16 text-blue-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 35 L12 50 L30 65" />
    <path d="M42 70 L58 30" strokeWidth="4" />
    <path d="M70 35 L88 50 L70 65" />
    <line x1="82" y1="28" x2="88" y2="20" strokeWidth="3" />
    <line x1="90" y1="36" x2="98" y2="34" strokeWidth="3" />
    <line x1="88" y1="46" x2="96" y2="48" strokeWidth="3" />
  </svg>
);

// Curved Arrow & Lines pointing to "Model Render Animate"
const CurvedArrowBottomRight = () => (
  <svg className="w-14 h-10 sm:w-16 sm:h-12 text-slate-700" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M10 45 Q35 42 50 15" />
    <path d="M38 20 L50 15 L48 28" />
  </svg>
);

// Underline accent for title
const CursiveUnderline = () => (
  <svg className="w-32 sm:w-36 h-4 text-blue-600 -mt-1" viewBox="0 0 160 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M5 12 C40 18, 110 18, 155 8" />
  </svg>
);

// 3D Software Custom Icon SVGs
const MayaLogoIcon = () => (
  <span className="text-blue-400 font-black text-lg sm:text-xl font-mono tracking-tighter select-none">
    MAYA
  </span>
);

const SubstanceLogoIcon = () => (
  <span className="text-amber-500 font-black text-base sm:text-lg font-mono tracking-tighter select-none">
    SUB
  </span>
);

const ZBrushLogoIcon = () => (
  <span className="text-red-500 font-black text-lg sm:text-xl font-mono tracking-tighter select-none">
    ZBR
  </span>
);

const BlenderLogoIcon = () => (
  <span className="text-orange-400 font-black text-lg sm:text-xl font-mono tracking-tighter select-none">
    BLN
  </span>
);

const ArnoldLogoIcon = () => (
  <span className="text-emerald-400 font-black text-base sm:text-lg font-mono tracking-tighter select-none">
    ARN
  </span>
);

const PhotoshopLogoIcon = () => (
  <span className="text-sky-400 font-black text-base sm:text-lg font-mono tracking-tighter select-none">
    PS
  </span>
);

export function HomeSec2() {
  const techStack = [
    { name: 'Autodesk Maya', icon: <MayaLogoIcon /> },
    { name: 'Substance Painter', icon: <SubstanceLogoIcon /> },
    { name: 'ZBrush', icon: <ZBrushLogoIcon /> },
    { name: 'Blender', icon: <BlenderLogoIcon /> },
    { name: 'Arnold Render', icon: <ArnoldLogoIcon /> },
    { name: 'Photoshop', icon: <PhotoshopLogoIcon /> },
  ];

  return (
    <section id="homesec2" className="relative w-full min-h-screen bg-[#f3f8fe] text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4 sm:px-6 lg:px-12 py-12 lg:py-16 flex items-center justify-center scroll-mt-16">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Outer Frame */}
      <div className="relative z-10 max-w-[1320px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* ================= LEFT COLUMN: AVATAR / CHARACTER ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 relative flex flex-col items-center justify-end h-auto order-2 lg:order-1 mt-6 lg:mt-0"
        >
          {/* Top-Left Handwritten Cursive Text */}
          <motion.div 
            {...floatAnim(5, 5)}
            className="absolute top-2 left-2 sm:left-0 z-20 text-slate-800 font-['Caveat',cursive] text-xl sm:text-2xl font-bold leading-tight rotate-[-8deg] pointer-events-none"
          >
            <p>Model</p>
            <p className="pl-2">Shade</p>
            <p className="pl-4">Render</p>
          </motion.div>

          {/* Light Blue Watercolor Background Shape behind avatar */}
          <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-gradient-to-tr from-sky-200/70 to-blue-200/50 rounded-full filter blur-md -z-10 transform scale-110" />

          {/* Left Decorative Yellow/Blue Slash Lines */}
          <div className="absolute left-2 bottom-16 sm:bottom-20 flex flex-col gap-1 pointer-events-none opacity-80 z-20">
            <span className="w-6 h-1 bg-amber-400 rotate-[-35deg] rounded-full" />
            <span className="w-5 h-1 bg-blue-500 rotate-[-35deg] rounded-full" />
          </div>

          {/* Character Image Container */}
          <div className="relative w-full flex flex-col items-center justify-end">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center justify-end w-full"
            >
              <img 
                src={typeof irshadImg === 'string' ? irshadImg : irshadImg.src} 
                alt="Ashfaque Shaikh - 3D Animator" 
                className="h-[320px] sm:h-[420px] lg:h-[540px] w-auto max-w-none object-contain object-bottom drop-shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: TEXT CONTENT & TECH STACK ================= */}
        <div className="lg:col-span-8 relative flex flex-col justify-center order-1 lg:order-2 px-2 sm:px-0">
          
          {/* Top-Right Hand-Drawn Code Bracket Doodle </> */}
          <motion.div 
            {...floatAnim(6, 6)}
            className="absolute top-0 right-0 sm:right-6 pointer-events-none z-10"
          >
            <CodeBracketDoodle />
          </motion.div>

          {/* "Hi, I'm" Label */}
          <motion.p 
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-slate-900 font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight mb-1"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Main Title Container: Ashfaque Shaikh + Non-overlapping Cursive Badge */}
          <motion.div 
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[5.2rem] font-black tracking-tight leading-tight text-slate-900">
              ASHFAQUE <span className="text-[#1d63fe]">SHAIKH</span>
            </h1>

            {/* Cursive "3D Animator" Badge next to title */}
            <div className="inline-flex flex-col items-start sm:items-center mt-1 sm:mt-0">
              <span className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-blue-600 rotate-[-5deg] tracking-wide whitespace-nowrap">
                3D Animator
              </span>
              <CursiveUnderline />
            </div>
          </motion.div>

          {/* Role Subtitle */}
          <motion.p 
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-slate-600 font-bold text-sm sm:text-base lg:text-lg tracking-wide mb-4 sm:mb-6"
          >
            3D Animator &nbsp;|&nbsp; 3D Modeling &nbsp;|&nbsp; Texturing, Lighting & Rendering (Autodesk Maya)
          </motion.p>

          {/* Description Paragraph */}
          <motion.p 
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl mb-8 sm:mb-10"
          >
            I&apos;m Ashfaque Shaikh, a 3D Animator specializing in 3D modeling, texturing, lighting, and rendering using Autodesk Maya. 
            I create realistic, production-ready 3D assets and scenes with clean topology, accurate materials, and cinematic lighting to bring ideas to life.
          </motion.p>

          {/* Tech Stack Badges Row */}
          <motion.div 
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-5 max-w-2xl"
          >
            {techStack.map((tech) => (
              <motion.div 
                key={tech.name}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex flex-col items-center"
              >
                {/* Dark Rounded Squircle Card */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#0b1329] rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/10 border border-slate-800 transition-all">
                  {tech.icon}
                </div>
                {/* Label Underneath */}
                <span className="mt-2 text-xs font-semibold text-slate-700 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Right Handwritten Doodle */}
          <div className="relative sm:absolute sm:bottom-0 sm:right-4 mt-8 sm:mt-0 flex items-center gap-2 self-start sm:self-end pointer-events-none">
            <CurvedArrowBottomRight />
            <div className="font-['Caveat',cursive] text-slate-800 text-lg sm:text-xl font-bold leading-none rotate-[-4deg]">
              <p>Model</p>
              <p className="pl-2">Render</p>
              <p className="pl-4 underline decoration-slate-800">Animate</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HomeSec2;