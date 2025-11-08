"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { funnel } from "@/lib/font";
import { ideas, placeholders } from "@/lib/constant";

export default function TypeIdeaSection() {
  const [index, setIndex] = useState(0);

  // rotate placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-neutral relative flex h-84 flex-1 flex-col items-center justify-around rounded-xl border bg-white p-4 shadow-sm">
      <div className="relative flex h-[400px] w-full flex-col gap-6 overflow-hidden mask-t-from-80% mask-b-from-80% p-2">
        <div className="flex w-full flex-col gap-6">
          <div className="animate-marquee-vertical flex w-full flex-col gap-y-6">
            {ideas.map((e, i) => (
              <div
                className="flex w-full flex-row items-center justify-start gap-x-1 rounded-md border border-neutral-200 bg-neutral-50 p-2"
                key={i}
              >
                <DevicePhoneMobileIcon width={12} />
                <p className={`${funnel.className} text-xs`}>{e}</p>
              </div>
            ))}
          </div>

          <div className="animate-marquee-vertical flex w-full flex-col gap-y-6">
            {ideas.map((e, i) => (
              <div
                className="flex w-full flex-row items-center justify-start gap-x-1 rounded-md border border-neutral-200 bg-neutral-50 p-2"
                key={i}
              >
                <DevicePhoneMobileIcon width={12} />
                <p className={`${funnel.className} text-xs`}>{e}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="focus-within:ring-accent relative flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-white/70 px-4 py-2 shadow-md">
        <input
          type="text"
          className={`${funnel.className} w-full bg-transparent text-lg font-medium text-neutral-800 placeholder-transparent focus:outline-none`}
          placeholder={placeholders[index]}
        />
        <div className="absolute text-neutral-400">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -10, rotateX: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`${funnel.className} pointer-events-none text-neutral-400 select-none`}
            >
              {placeholders[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
