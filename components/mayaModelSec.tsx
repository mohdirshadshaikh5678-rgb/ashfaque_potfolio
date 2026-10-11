// "use client";
// import React, { useState } from "react";
// import { motion, type Variants } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// type Group = { name: string; images: string[] };

// const groups: Group[] = [
//   {
//     name: "Game Environment",
//     images: [
//       "/assest/mayaimg/Game Environment 3D Modelling_ Texturing_ Lighting In Autodesk Maya _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _(.webp",
//       "/assest/mayaimg/Game Environment 3D Modelling_ Texturing_ Lighting In Autodesk Maya _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _1.webp",
//       "/assest/mayaimg/Game Environment 3D Modelling_ Texturing_ Lighting In Autodesk Maya _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _2.webp",
//     ],
//   },
//   {
//     name: "Ice Cream Cart",
//     images: [
//       "/assest/mayaimg/Ice Cream Cart 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinti_1.webp",
//       "/assest/mayaimg/Ice Cream Cart 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinti_2.webp",
//       "/assest/mayaimg/Ice Cream Cart 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprintin(.webp",
//     ],
//   },
//   {
//     name: "Kitchen",
//     images: [
//       "/assest/mayaimg/Kitchen 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _zbru(.webp",
//     ],
//   },
//   {
//     name: "Living Room",
//     images: [
//       "/assest/mayaimg/Living Room 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _(.webp",
//       "/assest/mayaimg/Living Room 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _1.webp",
//       "/assest/mayaimg/Living Room 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _2.webp",
//     ],
//   },
//   {
//     name: "Product Modelling",
//     images: [
//       "/assest/mayaimg/Product Modelling_ Texturing _ Lighting In Autodesk Maya _._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _zbrushsculpt (.webp",
//     ],
//   },
//   {
//     name: "School",
//     images: [
//       "/assest/mayaimg/School 3D Modeling _Texturing _lighting In Autodesk maya _._._._.__3dmodel _3dmodeling _3dart _3d _3ddesign _3dartist _3dprinter _3dprint _3dprinted _3dren(.webp",
//       "/assest/mayaimg/School 3D Modeling _Texturing _lighting In Autodesk maya _._._._.__3dmodel _3dmodeling _3dart _3d _3ddesign _3dartist _3dprinter _3dprint _3dprinted _3dre_1.webp",
//       "/assest/mayaimg/School 3D Modeling _Texturing _lighting In Autodesk maya _._._._.__3dmodel _3dmodeling _3dart _3d _3ddesign _3dartist _3dprinter _3dprint _3dprinted _3dre_2.webp",
//     ],
//   },
//   {
//     name: "Sword",
//     images: [
//       "/assest/mayaimg/Sword 3D Modeling In Autodesk Maya. _. _. _. _. _3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _zbrush (.webp",
//       "/assest/mayaimg/Sword 3D Modeling In Autodesk Maya. _. _. _. _. _3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _zbrush_2.webp",
//     ],
//   },
// ];

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: custom * 0.1, ease: [0.215, 0.61, 0.355, 1] },
//   }),
// };

// const TapeStrip = ({ className = "" }: { className?: string }) => (
//   <svg viewBox="0 0 100 30" className={`fill-amber-300/85 pointer-events-none ${className}`} preserveAspectRatio="none">
//     <path d="M3,4 L97,2 L94,26 L6,28 Z" />
//   </svg>
// );

// function Modal({ modal, onClose, onPrev, onNext }: {
//   modal: { group: Group; index: number };
//   onClose: () => void;
//   onPrev: () => void;
//   onNext: () => void;
// }) {
//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.92 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.22 }}
//         className="relative w-full max-w-4xl bg-white border-2 border-slate-900 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] overflow-hidden"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* header */}
//         <div className="flex items-center justify-between px-5 py-3.5 border-b-2 border-slate-900 bg-[#f4f4f3]">
//           <h3 className="font-black italic uppercase text-[#0b1329] font-['Oswald',sans-serif] text-xl sm:text-2xl">
//             {modal.group.name}
//           </h3>
//           <div className="flex items-center gap-3">
//             <span className="text-xs font-bold text-slate-500">
//               {modal.index + 1} / {modal.group.images.length}
//             </span>
//             <button
//               onClick={onClose}
//               className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 transition-colors"
//             >
//               <X className="w-4 h-4 text-white" />
//             </button>
//           </div>
//         </div>

//         {/* main image */}
//         <div className="relative bg-[#0b1329] flex items-center justify-center" style={{ minHeight: 340 }}>
//           <img
//             key={modal.index}
//             src={modal.group.images[modal.index]}
//             alt={`${modal.group.name} render ${modal.index + 1}`}
//             className="max-h-[60vh] w-auto max-w-full object-contain"
//           />
//           {modal.group.images.length > 1 && (
//             <>
//               <button
//                 onClick={onPrev}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border-2 border-slate-900 flex items-center justify-center hover:bg-amber-300 transition-colors shadow"
//               >
//                 <ChevronLeft className="w-5 h-5 text-slate-900" />
//               </button>
//               <button
//                 onClick={onNext}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border-2 border-slate-900 flex items-center justify-center hover:bg-amber-300 transition-colors shadow"
//               >
//                 <ChevronRight className="w-5 h-5 text-slate-900" />
//               </button>
//             </>
//           )}
//         </div>

//         {/* thumbnail strip */}
//         {modal.group.images.length > 1 && (
//           <div className="flex gap-2 p-3 bg-[#f4f4f3] border-t-2 border-slate-900 overflow-x-auto">
//             {modal.group.images.map((src, i) => (
//               <button
//                 key={i}
//                 onClick={() => {/* handled by parent */}}
//                 className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
//                   i === modal.index
//                     ? "border-[#1d63fe] shadow-[3px_3px_0px_0px_rgba(29,99,254,1)]"
//                     : "border-slate-300 hover:border-slate-900"
//                 }`}
//               >
//                 <img src={src} alt="" className="w-full h-full object-cover" />
//               </button>
//             ))}
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// // ─── Dark variant (home page) ────────────────────────────────────────────────
// function DarkLayout({ onOpen }: { onOpen: (g: Group) => void }) {
//   return (
//     <section id="maya-model" className="relative w-full bg-[#0b1329] py-16 px-4 sm:px-8 scroll-mt-16 overflow-hidden">
//       <div className="text-center mb-10">
//         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-wide text-white font-['Oswald',sans-serif] uppercase">
//           MAYA <span className="text-[#1d63fe]">MODEL</span>
//         </h2>
//         <p className="mt-3 text-slate-400 text-sm sm:text-base font-medium">
//           3D Modeling projects created with Autodesk Maya
//         </p>
//       </div>

//       <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: "thin", scrollbarColor: "#1d63fe #1e2a4a" }}>
//         <div className="flex gap-4 px-4 sm:px-8" style={{ width: "max-content" }}>
//           {groups.map((group) => (
//             <button
//               key={group.name}
//               onClick={() => onOpen(group)}
//               className="relative flex-shrink-0 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-[#1d63fe] transition-all group shadow-lg"
//               style={{ width: "calc((100vw - 4rem - 2 * 1rem) / 3)", height: "calc((100vw - 4rem - 2 * 1rem) / 3 * 0.72)" }}
//             >
//               <img
//                 src={group.images[0]}
//                 alt={group.name}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
//                 <p className="text-white font-black text-sm sm:text-base font-['Oswald',sans-serif] uppercase leading-tight">
//                   {group.name}
//                 </p>
//                 {group.images.length > 1 && (
//                   <p className="text-[#1d63fe] text-xs font-semibold mt-0.5">
//                     {group.images.length} images →
//                   </p>
//                 )}
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── White variant (projects page) ───────────────────────────────────────────
// function WhiteLayout({ onOpen }: { onOpen: (g: Group, idx: number) => void }) {
//   return (
//     <section
//       id="maya-model-projects"
//       className="relative w-full bg-white text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4 sm:px-8 lg:px-12 py-16 lg:py-20 scroll-mt-16"
//     >
//       {/* dot texture */}
//       <div
//         className="absolute inset-0 opacity-[0.18] pointer-events-none"
//         style={{ backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
//       />

//       <div className="relative z-10 max-w-[1300px] mx-auto">
//         {/* header */}
//         <motion.div
//           custom={0}
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mb-10 sm:mb-12"
//         >
//           <div className="flex items-center gap-3 mb-1">
//             <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-wide text-[#0b1329] font-['Oswald',sans-serif] uppercase">
//               MAYA <span className="text-[#1d63fe]">3D MODELS</span>
//             </h2>
//           </div>
//           <svg className="w-44 sm:w-64 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//             <path d="M4 6 C60 10, 160 10, 236 4" />
//           </svg>
//           <p className="mt-3 text-slate-500 text-sm sm:text-base font-medium max-w-xl">
//             3D modeling, texturing &amp; lighting projects built in Autodesk Maya. Click any card to view all renders.
//           </p>
//         </motion.div>

//         {/* 3-per-row grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {groups.map((group, idx) => (
//             <motion.div
//               key={group.name}
//               custom={idx}
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               transition={{ type: "spring", stiffness: 280, damping: 18 }}
//               onClick={() => onOpen(group, 0)}
//               className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] overflow-hidden cursor-pointer group"
//             >
//               {/* tape */}
//               <TapeStrip className={`absolute -top-2.5 ${idx % 2 === 0 ? "left-6 -rotate-[6deg]" : "right-6 rotate-[6deg]"} w-14 h-5 z-10`} />

//               {/* image */}
//               <div className="relative h-52 sm:h-56 overflow-hidden">
//                 <img
//                   src={group.images[0]}
//                   alt={group.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {group.images.length > 1 && (
//                   <span className="absolute top-3 right-3 bg-[#1d63fe] text-white text-[10px] font-black px-2.5 py-1 rounded-full border border-white shadow">
//                     +{group.images.length} renders
//                   </span>
//                 )}
//               </div>

//               {/* card body */}
//               <div className="p-4 sm:p-5">
//                 <div className="flex items-start justify-between gap-2">
//                   <h3 className="text-lg sm:text-xl font-black italic uppercase text-[#0b1329] font-['Oswald',sans-serif] leading-tight">
//                     {group.name}
//                   </h3>
//                   <span className="shrink-0 w-8 h-8 rounded-full bg-[#0b1329] flex items-center justify-center group-hover:bg-[#1d63fe] transition-colors">
//                     <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
//                     </svg>
//                   </span>
//                 </div>
//                 <div className="mt-2 flex flex-wrap gap-1.5">
//                   {["Autodesk Maya", "3D Modeling", "Texturing"].map((tag) => (
//                     <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Main export ─────────────────────────────────────────────────────────────
// export default function MayaModelSec({ variant = "dark" }: { variant?: "dark" | "white" }) {
//   const [modal, setModal] = useState<{ group: Group; index: number } | null>(null);

//   const openDark = (group: Group) => setModal({ group, index: 0 });
//   const openWhite = (group: Group, index: number) => setModal({ group, index });
//   const close = () => setModal(null);
//   const prev = () => modal && setModal({ ...modal, index: (modal.index - 1 + modal.group.images.length) % modal.group.images.length });
//   const next = () => modal && setModal({ ...modal, index: (modal.index + 1) % modal.group.images.length });

//   return (
//     <>
//       {variant === "dark" ? (
//         <DarkLayout onOpen={openDark} />
//       ) : (
//         <WhiteLayout onOpen={openWhite} />
//       )}

//       {modal && (
//         <Modal modal={modal} onClose={close} onPrev={prev} onNext={next} />
//       )}
//     </>
//   );
// }



"use client";
import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Group = { name: string; images: string[] };

const groups: Group[] = [
  {
    name: "Game Environment",
    images: [
      "/assest/mayaimg/Game Environment 3D Modelling_ Texturing_ Lighting In Autodesk Maya _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _(.webp",
      "/assest/mayaimg/Game Environment 3D Modelling_ Texturing_ Lighting In Autodesk Maya _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _1.webp",
      "/assest/mayaimg/Game Environment 3D Modelling_ Texturing_ Lighting In Autodesk Maya _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _2.webp",
    ],
  },
  {
    name: "Ice Cream Cart",
    images: [
        "/assest/mayaimg/Ice Cream Cart 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprintin(.webp",
        "/assest/mayaimg/Ice Cream Cart 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinti_1.webp",
        "/assest/mayaimg/Ice Cream Cart 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinti_2.webp",
    
      
    ],
  },
  {
    name: "Kitchen",
    images: [
      "/assest/mayaimg/Kitchen 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _zbru(.webp",
    ],
  },
  {
    name: "Living Room",
    images: [
      "/assest/mayaimg/Living Room 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _(.webp",
      "/assest/mayaimg/Living Room 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _1.webp",
      "/assest/mayaimg/Living Room 3D Modeling In Autodesk Maya. _. _. _. _. __3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _2.webp",
    ],
  },
  {
    name: "Product Modelling",
    images: [
      "/assest/mayaimg/Product Modelling_ Texturing _ Lighting In Autodesk Maya _._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _zbrushsculpt (.webp",
    ],
  },
  {
    name: "School",
    images: [
      "/assest/mayaimg/School 3D Modeling _Texturing _lighting In Autodesk maya _._._._.__3dmodel _3dmodeling _3dart _3d _3ddesign _3dartist _3dprinter _3dprint _3dprinted _3dren(.webp",
      "/assest/mayaimg/School 3D Modeling _Texturing _lighting In Autodesk maya _._._._.__3dmodel _3dmodeling _3dart _3d _3ddesign _3dartist _3dprinter _3dprint _3dprinted _3dre_1.webp",
      "/assest/mayaimg/School 3D Modeling _Texturing _lighting In Autodesk maya _._._._.__3dmodel _3dmodeling _3dart _3d _3ddesign _3dartist _3dprinter _3dprint _3dprinted _3dre_2.webp",
    ],
  },
  {
    name: "Sword",
    images: [
      "/assest/mayaimg/Sword 3D Modeling In Autodesk Maya. _. _. _. _. _3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _zbrush (.webp",
      "/assest/mayaimg/Sword 3D Modeling In Autodesk Maya. _. _. _. _. _3dmodeling _3dmodel _3dart _3d _3dartist _3drender _3ddesign _blender3d _blender _b3d _3dprinting _zbrush_2.webp",
    ],
  },
    {
    name: "Artistroom",
    images: [
      "/assest/mayaimg/artistroomf(2).jpeg",
      "/assest/mayaimg/artistroomao(3).jpeg",
      "/assest/mayaimg/artistroomw (1).jpeg",

    ],
    
  },
     {
    name: "CAR GARAGE",
    images: [
      "/assest/mayaimg/car final image.png",
      "/assest/mayaimg/Car ao.png",

    ],
    
  },
      {
    name: "LIVING ROOM",
    images: [
      "/assest/mayaimg/IMG-20230911-WA0000.jpg.jpeg",
      "/assest/mayaimg/Interior Room 3D Modeling In Autodesk Maya ___shorts _tech _animation _3dtotalanimation _3d _3danimation _3dmodeling _instareels _viral _techreels _reels(_1.webp",
      "/assest/mayaimg/Interior Room 3D Modeling In Autodesk Maya ___shorts _tech _animation _3dtotalanimation _3d _3danimation _3dmodeling _instareels _viral _techreels _reels(_2.webp",


    ],
    
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const TapeStrip = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" className={`fill-amber-300/85 pointer-events-none ${className}`} preserveAspectRatio="none">
    <path d="M3,4 L97,2 L94,26 L6,28 Z" />
  </svg>
);

function Modal({
  modal,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}: {
  modal: { group: Group; index: number };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-4xl bg-white border-2 border-slate-900 rounded-2xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b-2 border-slate-900 bg-[#f4f4f3]">
          <h3 className="font-black italic uppercase text-[#0b1329] font-['Oswald',sans-serif] text-xl sm:text-2xl truncate pr-4">
            {modal.group.name}
          </h3>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-slate-500 font-mono">
              {String(modal.index + 1).padStart(2, "0")} / {String(modal.group.images.length).padStart(2, "0")}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* main image */}
        <div className="relative bg-[#0b1329] flex items-center justify-center p-2 sm:p-4" style={{ height: "60vh", minHeight: "300px" }}>
          <img
            key={modal.index}
            src={modal.group.images[modal.index]}
            alt={`${modal.group.name} render ${modal.index + 1}`}
            className="max-h-full w-auto max-w-full object-contain shadow-2xl"
          />
          {modal.group.images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border-2 border-slate-900 flex items-center justify-center hover:bg-amber-300 transition-colors shadow-xl z-10"
              >
                <ChevronLeft className="w-6 h-6 text-slate-900" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border-2 border-slate-900 flex items-center justify-center hover:bg-amber-300 transition-colors shadow-xl z-10"
              >
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>
            </>
          )}
        </div>

        {/* thumbnail strip */}
        {modal.group.images.length > 1 && (
          <div className="flex gap-2.5 p-3.5 bg-[#f4f4f3] border-t-2 border-slate-900 overflow-x-auto">
            {modal.group.images.map((src, i) => (
              <button
                key={i}
                onClick={() => onSelectIndex(i)}
                className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  i === modal.index
                    ? "border-[#1d63fe] shadow-[4px_4px_0px_0px_rgba(29,99,254,0.7)] scale-105"
                    : "border-slate-300 hover:border-slate-900"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ─── Shared Horizontal Scrollable Row Component ─────────────────────────────
function ScrollableCardRow({ onOpen, variant }: { onOpen: (g: Group) => void; variant: "dark" | "white" }) {
  const isDark = variant === "dark";

  return (
    <div
      className="w-full overflow-x-auto pb-6 pt-2 px-4 sm:px-8 lg:px-12 scrollbar-thin"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: isDark ? "#1d63fe #1e2a4a" : "#cbd5e1 #f1f5f9",
      }}
    >
      <div className="flex gap-6 items-stretch" style={{ width: "max-content" }}>
        {groups.map((group, idx) => (
          <motion.button
            key={group.name}
            custom={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            onClick={() => onOpen(group)}
            className={`relative flex flex-col rounded-2xl overflow-hidden border-2 transition-all group shadow-xl cursor-pointer text-left shrink-0
              w-[85vw] sm:w-[350px] lg:w-[380px]
              ${
                isDark
                  ? "bg-[#111c38] border-slate-700 hover:border-[#1d63fe]"
                  : "bg-white border-slate-900 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]"
              }
            `}
          >
            {!isDark && (
              <TapeStrip
                className={`absolute -top-2.5 ${
                  idx % 2 === 0 ? "left-6 -rotate-[6deg]" : "right-6 rotate-[6deg]"
                } w-14 h-5 z-10`}
              />
            )}

            {/* Image Box */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden shrink-0">
              <img
                src={group.images[0]}
                alt={group.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {group.images.length > 1 && (
                <span className="absolute top-3 right-3 bg-[#1d63fe] text-white text-[11px] font-black px-2.5 py-1 rounded-full border border-white shadow">
                  +{group.images.length} renders
                </span>
              )}
            </div>

            {/* Card Body */}
            {isDark ? (
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-[#0b1329]">
                <h3 className="text-lg sm:text-xl font-black italic uppercase text-white font-['Oswald',sans-serif] leading-tight">
                  {group.name}
                </h3>
                <p className="text-[#1d63fe] text-xs font-bold mt-2 inline-flex items-center gap-1">
                  View Renders <ChevronRight className="w-3.5 h-3.5" />
                </p>
              </div>
            ) : (
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-white">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-black italic uppercase text-[#0b1329] font-['Oswald',sans-serif] leading-tight">
                    {group.name}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#0b1329] flex items-center justify-center group-hover:bg-[#1d63fe] transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
                    </svg>
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Autodesk Maya", "3D Modeling", "Texturing"].map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Dark variant (home page) ────────────────────────────────────────────────
function DarkLayout({ onOpen }: { onOpen: (g: Group) => void }) {
  return (
    <section id="maya-model" className="relative w-full bg-[#0b1329] py-16 lg:py-20 scroll-mt-16 overflow-hidden">
      <div className="max-w-[1300px] mx-auto text-center mb-10 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-wide text-white font-['Oswald',sans-serif] uppercase">
          MAYA <span className="text-[#1d63fe]">MODEL</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-medium">
          3D Modeling projects created with Autodesk Maya
        </p>
      </div>

      <ScrollableCardRow onOpen={onOpen} variant="dark" />
    </section>
  );
}

// ─── White variant (projects page) ───────────────────────────────────────────
function WhiteLayout({ onOpen }: { onOpen: (g: Group) => void }) {
  return (
    <section
      id="maya-model-projects"
      className="relative w-full bg-white text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] py-16 lg:py-20 scroll-mt-16"
    >
      {/* dot texture */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 mb-8">
        {/* header */}
        <motion.div
          custom={0}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-wide text-[#0b1329] font-['Oswald',sans-serif] uppercase">
              MAYA <span className="text-[#1d63fe]">3D MODELS</span>
            </h2>
          </div>
          <svg className="w-44 sm:w-64 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 6 C60 10, 160 10, 236 4" />
          </svg>
          <p className="mt-3 text-slate-500 text-sm sm:text-base font-medium max-w-xl">
            3D modeling, texturing &amp; lighting projects built in Autodesk Maya. Click any card to view all renders.
          </p>
        </motion.div>
      </div>

      <ScrollableCardRow onOpen={onOpen} variant="white" />
    </section>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function MayaModelSec({ variant = "dark" }: { variant?: "dark" | "white" }) {
  const [modal, setModal] = useState<{ group: Group; index: number } | null>(null);

  const openModal = (group: Group) => setModal({ group, index: 0 });
  const close = () => setModal(null);
  const prev = () => modal && setModal({ ...modal, index: (modal.index - 1 + modal.group.images.length) % modal.group.images.length });
  const next = () => modal && setModal({ ...modal, index: (modal.index + 1) % modal.group.images.length });
  const selectIndex = (index: number) => modal && setModal({ ...modal, index });

  return (
    <>
      {variant === "dark" ? (
        <DarkLayout onOpen={openModal} />
      ) : (
        <WhiteLayout onOpen={openModal} />
      )}

      {modal && (
        <Modal modal={modal} onClose={close} onPrev={prev} onNext={next} onSelectIndex={selectIndex} />
      )}
    </>
  );
}

export { MayaModelSec };