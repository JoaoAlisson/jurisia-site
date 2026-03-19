"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, FileText, Search, AlertTriangle } from "lucide-react";

const metrics = [
  { icon: Search, hours: "8–12h", title: "Verificação de tribunais", description: "Acesso manual a múltiplos sites de tribunais, conferência de movimentações e prazos processuais." },
  { icon: FileText, hours: "8–15h", title: "Redação de peças", description: "Produção repetitiva de petições e recursos que poderiam ser gerados por IA treinada." },
  { icon: Clock, hours: "5–8h", title: "Gestão de prazos", description: "Monitoramento manual de prazos processuais e administrativos em planilhas desatualizadas." },
  { icon: AlertTriangle, hours: "4–6h", title: "Pesquisa jurisprudencial", description: "Busca fragmentada por precedentes em bases desorganizadas, sem análise estatística." },
];

export default function PainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-[#F7F9FC] dark:bg-[#0F0F11]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tighter text-slate-900 dark:text-white max-w-[600px] leading-[1.1]">
            Advogados perdem mais de 25 horas por semana em tarefas operacionais.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="bg-white dark:bg-[#141416] border border-slate-200 dark:border-white/10 rounded-2xl p-6 group hover:border-slate-300 dark:hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#F7F9FC] dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-colors">
                  <metric.icon className="w-4 h-4 text-[#0A2540] dark:text-blue-400" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] uppercase tracking-wider font-medium text-slate-400 dark:text-slate-500">/semana</span>
              </div>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2 tabular-nums">{metric.hours}</p>
              <p className="text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">{metric.title}</p>
              <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
