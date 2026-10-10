"use client";
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
  {
    src: "/assest/aftereffectvid/3D Camera Tracking In After Effect _. _. _. _. __aftereffects _3dsmax _cinema4d _c4d _element3d _motiongraphics _cgi _cg _dailyanimation _vfx _mograph _expla.mp4",
    title: "3D Camera Tracking",
  },
  {
    src: "/assest/aftereffectvid/Chhatrapati Shivaji Maharaj Motion Graphic In After Effect _. _. _. _. __aftereffects _3dsmax _cinema4d _c4d _element3d _motiongraphics _cgi _cg _dailyanimat.mp4",
    title: "Shivaji Motion Graphic",
  },
    {
    src: "/assest/aftereffectvid/Instagram Real Product Animation In After Effect _. _. _. _. _aftereffects _3dsmax _cinema4d _c4d _element3d _motiongraphics _cgi _cg _dailyanimation _vfx _m.mp4",
    title: "Product Animation",
  },
  {
    src: "/assest/aftereffectvid/poster Animation in After Effects 😄😄 _._._.__aftereffects _aftereffectsedit _motiongraphics _ae _motiondesign _mograph _motionlovers _adobeaftereffects.mp4",
    title: "Poster Animation",
  },
  {
    src: "/assest/aftereffectvid/InShot_20261010_103446154.mp4",
    title: "Motion Short #1",
  },
  {
    src: "/assest/aftereffectvid/InShot_20261010_103651650.mp4",
    title: "Motion Short #2",
  },
  {
    src: "/assest/aftereffectvid/InShot_20261010_103754975.mp4",
    title: "Motion Short #3",
  },
  {
    src: "/assest/aftereffectvid/InShot_20261010_103934745.mp4",
    title: "Motion Short #4",
  },

];

function VideoCard({ video }: { video: { src: string; title: string } }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const play = useCallback(() => {
    ref.current?.play();
    setPlaying(true);
  }, []);

  const pause = useCallback(() => {
    ref.current?.pause();
    setPlaying(false);
  }, []);

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
      className="relative flex-shrink-0 w-[72vw] sm:w-72 lg:w-80 rounded-2xl overflow-hidden border-2 border-slate-900 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] bg-[#0b1329] group cursor-pointer"
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

      {/* play hint — shown when not playing */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-[#1d63fe]/90 border-2 border-white flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      )}

      {/* controls — always visible on mobile, hover on desktop */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        {/* progress */}
        <div
          className="w-full h-1 bg-white/25 rounded-full cursor-pointer mb-2.5 hover:h-1.5 transition-all"
          onClick={seek}
        >
          <div
            className="h-full bg-[#1d63fe] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#1d63fe] border border-white/20 flex items-center justify-center transition-colors"
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

export default function AfterEffectSec() {
  return (
    <section
      id="after-effect"
      className="relative w-full bg-[#f4f4f3] overflow-hidden scroll-mt-16 py-14 lg:py-20"
    >
      {/* dot texture */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#64748b 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
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
            <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-wide text-[#0b1329] font-['Oswald',sans-serif] uppercase">
              AFTER EFFECT <span className="text-[#1d63fe]">VIDEO</span>
            </h2>
          </div>
          <svg className="w-52 sm:w-72 h-3 text-[#1d63fe] mt-1" viewBox="0 0 240 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 6 C60 10, 160 10, 236 4" />
          </svg>
          <p className="mt-3 text-slate-500 text-sm sm:text-base font-medium">
            Motion graphics &amp; VFX shorts made in Adobe After Effects. Hover to play.
          </p>
        </motion.div>
      </div>

      {/* horizontal scroll row */}
      <div
        className="relative z-10 overflow-x-auto pb-4 px-4 sm:px-8 lg:px-12"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#1d63fe #e2e8f0" }}
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
