"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
  {
    file: "Drone Final 3D Modelling In Maya _ Texturing In Substance Painter _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _zbr(.mp4",
    title: "Drone",
  },
  {
    file: "Ice cream Cart 3D Modelling In Autodesk Maya and Texture In Substance Painter _._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dar(.mp4",
    title: "Ice Cream Cart",
  },
  {
    file: "Machine Gun 3D Modelling in Maya and Texture In Substance Painter ._._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _zbr.mp4",
    title: "Machine Gun",
  },
  {
    file: "Refrigerator 3D modeling_ texturing_ lighting in Maya_. _. _. _. __shorts _tech _animation _3dtotalanimation _3d _3danimation _3dmodeling _instareels _viral .mp4",
    title: "Refrigerator",
  },
  {
    file: "Sword 3D Modelling In Maya _ Texturing in Substance Painter __3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _zbrushsculpt _comi.mp4",
    title: "Sword",
  },
  {
    file: "Time Machine 3D Modelling in Maya and Texture In Substance Painter _._._._.__3dmodelling _3dsculpting _3dwork _3dcharacter _3dmodel _3dartist _3dartwork _zb(.mp4",
    title: "Time Machine",
  },
].map(({ file, title }) => ({
  src: `/aimodelvid/${encodeURIComponent(file)}`,
  title,
}));

function VideoCard({ video }: { video: { src: string; title: string } }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const play = useCallback(() => {
    const videoElement = ref.current;
    if (!videoElement) return;

    void videoElement.play().then(
      () => setPlaying(true),
      (error: DOMException) => {
        setPlaying(false);
        if (error.name !== "AbortError") {
          console.error(`Unable to play video "${video.title}" from ${video.src}`, error);
        }
      },
    );
  }, [video.src, video.title]);
  const pause = useCallback(() => { ref.current?.pause(); setPlaying(false); }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playing ? pause() : play();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
    setMuted(ref.current.muted);
  };

  const onTimeUpdate = () => {
    const v = ref.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  return (
    <div
      className="relative flex-shrink-0 w-[72vw] sm:w-72 lg:w-80 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] bg-[#0b1329] group cursor-pointer"
      onMouseEnter={() => !isMobile && play()}
      onMouseLeave={() => !isMobile && pause()}
    >
      <video
        ref={ref}
        src={video.src}
        className="w-full aspect-[9/16] object-cover block"
        muted={muted}
        loop
        playsInline
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setPlaying(false)}
      />

      {/* play hint */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-violet-600/90 border-2 border-white flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      )}

      {/* controls — always visible on mobile, hover on desktop */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        {/* progress bar */}
        <div
          className="w-full h-1 bg-white/25 rounded-full cursor-pointer mb-2.5 hover:h-1.5 transition-all"
          onClick={seek}
        >
          <div className="h-full bg-violet-500 rounded-full" style={{ width: `${progress}%` }} />
        </div>

        {/* buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-violet-600 border border-white/20 flex items-center justify-center transition-colors"
          >
            {playing
              ? <Pause className="w-3.5 h-3.5 text-white fill-white" />
              : <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            }
          </button>

          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center transition-colors"
          >
            {muted
              ? <VolumeX className="w-3.5 h-3.5 text-white" />
              : <Volume2 className="w-3.5 h-3.5 text-white" />
            }
          </button>

          <span className="ml-auto text-white font-black text-[11px] font-['Oswald',sans-serif] uppercase tracking-wide truncate max-w-[120px]">
            {video.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AimodelvidSec() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollVideos = (direction: -1 | 1) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    scrollContainer.scrollBy({
      left: direction * Math.min(360, scrollContainer.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="ai-model-video"
      className="relative w-full bg-[#0b1329] overflow-hidden py-14 lg:py-20"
    >
      {/* dot texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-violet-500 shrink-0" />
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-center text-white font-['Oswald',sans-serif] uppercase">
              3D   <span className="text-violet-400">MODEL TURNAROUND</span>
            </h2>
          </div>
          <svg className="w-32 sm:w-44 h-3 mx-auto text-violet-500 mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 6 C60 10, 160 10, 236 4" />
          </svg>
          <p className="mt-3 text-center text-slate-400 text-sm sm:text-base font-medium mx-auto">
            AI-generated model videos & motion experiments. Hover to play.
          </p>
        </motion.div>
      </div>

      {/* horizontal scroll row */}
      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 pb-4">
        <style>{`
          #ai-model-video .video-scroll::-webkit-scrollbar {
            display: none;
          }
          #ai-model-video .video-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div
          ref={scrollRef}
          className="video-scroll flex gap-5 overflow-x-auto overscroll-x-contain touch-pan-x snap-x snap-mandatory scroll-smooth px-12 py-2"
        >
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              className="snap-start"
              initial={{ opacity: 0, y: 24, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <VideoCard video={v} />
            </motion.div>
          ))}
        </div>
        <button
            type="button"
            aria-label="Scroll to previous videos"
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 bg-white/15 border-2 border-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-violet-600 transition-colors z-20"
            onClick={() => scrollVideos(-1)}
          >
            <ChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
        </button>
        <button
            type="button"
            aria-label="Scroll to next videos"
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 bg-white/15 border-2 border-white/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-violet-600 transition-colors z-20"
            onClick={() => scrollVideos(1)}
          >
            <ChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}