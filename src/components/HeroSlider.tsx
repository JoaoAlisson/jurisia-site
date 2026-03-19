"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, BarChart3, Radar } from "lucide-react";

const INTERVAL = 4500;

interface Slide {
  icon: typeof Scale;
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
}

const slides: Slide[] = [
  {
    icon: Scale,
    title: "Gestão Processual Inteligente",
    subtitle: "Mais de 20 automações para focar no que importa.",
    stats: [
      { label: "Automações ativas", value: "24" },
      { label: "Prazos monitorados", value: "1.847" },
      { label: "Tempo economizado", value: "92%" },
    ],
  },
  {
    icon: BarChart3,
    title: "Jurimetria Preditiva",
    subtitle: "Antecipe decisões e trace a melhor estratégia jurídica.",
    stats: [
      { label: "Decisões analisadas", value: "340K+" },
      { label: "Precisão preditiva", value: "97.8%" },
      { label: "Varas cobertas", value: "2.100" },
    ],
  },
  {
    icon: Radar,
    title: "Radar de Oportunidades",
    subtitle: "Captação passiva e monitoramento inteligente de DJe.",
    stats: [
      { label: "Publicações / dia", value: "12K+" },
      { label: "Matches relevantes", value: "87" },
      { label: "Tempo de alerta", value: "<3min" },
    ],
  },
];

const slideVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / INTERVAL, 1));
      if (elapsed < INTERVAL) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const current = slides[active];

  return (
    <div className="w-full max-w-[440px]">
      <div className="bg-white dark:bg-[#141416] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 md:p-7 min-h-[260px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 260, damping: 25, duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#F7F9FC] dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center">
                  <current.icon className="w-4 h-4 text-[#0A2540] dark:text-blue-400" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white mb-2">
                {current.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400 mb-6">
                {current.subtitle}
              </p>

              <div className="space-y-3">
                {current.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-2 border-t border-slate-100 dark:border-white/5">
                    <span className="text-[12px] text-slate-400 dark:text-slate-500">{stat.label}</span>
                    <span className="text-[13px] font-semibold text-slate-900 dark:text-white tabular-nums">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-1 px-6 pb-5">
          {slides.map((_, i) => (
            <div
              key={i}
              className="h-[2px] flex-1 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer"
              onClick={() => { setActive(i); setProgress(0); }}
            >
              <motion.div
                className="h-full bg-[#0A2540] dark:bg-blue-400 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: i === active ? progress : i < active ? 1 : 0 }}
                transition={i === active ? { duration: 0.05, ease: "linear" } : { duration: 0.3, ease: "easeOut" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
