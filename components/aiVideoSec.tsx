"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
  { src: "/assest/aivid/Coffee_Motion_Timing_Preview.mp4", title: "Coffee Motion" },
  { src: "/assest/aivid/Glass_Cards_Silent_Preview.mp4", title: "Glass Cards" },
  { src: "/assest/aivid/_cutaway_1080p_20261010113307.mp4", title: "Cutaway" },
  { src: "/assest/aivid/_genzmodel_1080p_20261010112926.mp4", title: "Gen Z Model" },
  { src: "/assest/aivid/_tv_ads_1080p_20260923125142.mp4", title: "TV Ads #1" },
  { src: "/assest/aivid/_tv_ads_1080p_20260923130211.mp4", title: "TV Ads #2" },
  { src: "/assest/aivid/_ui-kit_1080p_20261010113544.mp4", title: "UI Kit" },
];

function VideoCard({ video }: { video: { src: string; title: string } }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const play = useCallback(() => { ref.current?.play(); setPlaying(true); }, []);
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

export default function AiVideoSec() {
  return (
    <section
      id="ai-video"
      className="relative w-full bg-[#0b1329] overflow-hidden scroll-mt-16 py-14 lg:py-20"
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
          className="mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="w-3.5 h-3.5 rounded-full bg-violet-500 shrink-0" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-wide text-white font-['Oswald',sans-serif] uppercase">
              AI <span className="text-violet-400">VIDEO</span>
            </h2>
          </div>
          <svg className="w-32 sm:w-44 h-3 text-violet-500 mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 6 C60 10, 160 10, 236 4" />
          </svg>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-medium">
            AI-generated video content &amp; motion experiments. Hover to play.
          </p>
        </motion.div>
      </div>

      {/* horizontal scroll row */}
      <div
        className="relative z-10 overflow-x-auto pb-4 px-4 sm:px-8 lg:px-12"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#7c3aed #1e2a4a" }}
      >
        <div className="flex gap-5 w-max">
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <VideoCard video={v} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
