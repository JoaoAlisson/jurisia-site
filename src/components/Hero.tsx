"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-14 overflow-hidden bg-white dark:bg-[#0A0A0A]">
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0A2540]/3 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[350px] bg-slate-200/30 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative max-w-[1200px] mx-auto px-5 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          <div className="flex-1 max-w-[620px]">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="text-[clamp(2.25rem,6vw,4.25rem)] font-semibold leading-[1.08] tracking-tighter text-slate-900 dark:text-white"
              >
                Devolvemos ao advogado
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="text-[clamp(2.25rem,6vw,4.25rem)] font-semibold leading-[1.08] tracking-tighter text-slate-400 dark:text-slate-500"
              >
                o recurso mais escasso.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <p className="text-[15px] leading-relaxed text-slate-500 dark:text-slate-400 max-w-[400px] mb-8">
                Gestão processual, IA generativa e jurimetria preditiva em um único
                SaaS. Economize mais de 25 horas semanais.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#precos"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium bg-[#0A2540] dark:bg-blue-600 text-white rounded-lg hover:bg-[#0D3050] dark:hover:bg-blue-500 transition-colors"
                >
                  Começar trial grátis
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
                <a
                  href="#produto"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-white/20 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  Ver produto
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:mt-2"
          >
            <HeroSlider />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center gap-x-10 gap-y-4"
        >
          {[
            { value: "25h+", label: "economizadas por semana" },
            { value: "97.8%", label: "de precisão da IA" },
            { value: "99.9%", label: "de uptime garantido" },
            { value: "LGPD", label: "compliance total" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-slate-900 dark:text-white tabular-nums">{stat.value}</span>
              <span className="text-[12px] text-slate-400 dark:text-slate-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
