"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-12 md:mb-16">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tighter text-slate-900 dark:text-white max-w-[500px] mx-auto leading-[1.1]">
            Uma plataforma projetada para clareza.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto max-w-[960px]"
        >
          <div className="absolute -inset-4 md:-inset-8 bg-[#0A2540]/4 dark:bg-blue-500/5 rounded-3xl blur-2xl pointer-events-none" />

          <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-[#141416]">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-100 dark:border-white/5 bg-[#F7F9FC] dark:bg-[#0F0F11]">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-white/10" />
              <div className="flex-1 mx-3 h-5 rounded-md bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center">
                <span className="text-[10px] text-slate-400 dark:text-slate-500">app.jurisia.com/jurimetria</span>
              </div>
            </div>

            <div className="relative aspect-16/10">
              <Image src="/dashboard-jurimetria.png" alt="Dashboard de Jurimetria Preditiva — JurisIA" fill className="object-cover object-top" quality={95} />
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 }} className="absolute -left-3 md:-left-4 top-1/3 bg-white dark:bg-[#141416] border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 hidden lg:block">
            <p className="text-[10px] font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-0.5">Precisão</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white tabular-nums">97.8%</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.8 }} className="absolute -right-3 md:-right-4 top-1/2 bg-white dark:bg-[#141416] border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 hidden lg:block">
            <p className="text-[10px] font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-0.5">Processos</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white tabular-nums">1.847</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
