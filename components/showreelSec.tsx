"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const VIDEO_SRC = "/assest/showreel/vidssave.com Ashfaque Ali Shaikh 3D Modeling, Texturing and Lighting Showreel In Autodesk Maya 1080P.mp4";

export default function ShowreelSec() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); setStarted(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  const fullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const duration = videoRef.current?.duration || 0;
  const currentTime = videoRef.current?.currentTime || 0;

  return (
    <section
      id="showreel"
      className="relative w-full bg-[#0b1329] overflow-hidden scroll-mt-16"
    >
      {/* dot texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />

      {/* section label */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-12 pt-12 pb-6 max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-[#1d63fe] shrink-0" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-wide text-white font-['Oswald',sans-serif] uppercase">
            3D  <span className="text-[#1d63fe]">SHOWREEL</span>
          </h2>
        </motion.div>
        <p className="mt-2 ml-6 text-slate-400 text-sm sm:text-base font-medium">
          3D Modeling, Texturing &amp; Lighting — Autodesk Maya
        </p>
      </div>

      {/* video wrapper — full width */}
      <div className="relative z-10 w-full h-screen group">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="w-full block"
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setPlaying(false)}
          playsInline
        />

        {/* big play overlay — only before first play */}
        {!started && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
            onClick={toggle}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1d63fe] border-4 border-white flex items-center justify-center shadow-2xl"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
            </motion.div>
          </div>
        )}

        {/* controls bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-4 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* progress bar */}
          <div
            className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 hover:h-2.5 transition-all"
            onClick={seek}
          >
            <div
              className="h-full bg-[#1d63fe] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>

          {/* buttons row */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1d63fe] border border-white/20 flex items-center justify-center transition-colors"
            >
              {playing
                ? <Pause className="w-4 h-4 text-white fill-white" />
                : <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              }
            </button>

            <button
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              {muted
                ? <VolumeX className="w-4 h-4 text-white" />
                : <Volume2 className="w-4 h-4 text-white" />
              }
            </button>

            <span className="text-white/70 text-xs font-mono ml-1">
              {fmt(currentTime)} / {fmt(duration)}
            </span>

            <button
              onClick={fullscreen}
              className="ml-auto w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              <Maximize className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* bottom padding */}
      <div className="h-10" />
    </section>
  );
}
