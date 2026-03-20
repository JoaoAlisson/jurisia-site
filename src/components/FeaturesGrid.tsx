"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FileSearch, Brain, BarChart3, Radar, Zap, Shield } from "lucide-react";
import { assetUrl } from "@/lib/basePath";

const features = [
  { icon: FileSearch, title: "Análise de Peças Contrárias", description: "IA analisa peças contrárias, identifica argumentos frágeis e sugere contra-argumentações com base em jurisprudência dos tribunais superiores.", tag: "RAG", span: "md:col-span-2", hasMockup: false },
  { icon: Brain, title: "Resumo Inteligente", description: "Processos de 500+ páginas destilados em sumários executivos com extração de pontos-chave e linha do tempo processual.", tag: "IA Generativa", span: "", hasMockup: false },
  { icon: BarChart3, title: "Jurimetria Preditiva", description: "Análise estatística de milhares de decisões para estimar probabilidade de êxito, faixas de condenação e tendências por vara e relator.", tag: "Predição", span: "", hasMockup: true },
  { icon: Radar, title: "Radar de Oportunidades", description: "Monitora publicações no DJe em tempo real e identifica oportunidades de captação alinhadas ao perfil do escritório.", tag: "Prospecção", span: "md:col-span-2", hasMockup: false },
  { icon: Zap, title: "Automação de Petições", description: "Gere petições iniciais, contestações e recursos a partir de modelos treinados com jurisprudência real brasileira.", tag: "Automação", span: "", hasMockup: false },
  { icon: Shield, title: "Compliance LGPD Nativo", description: "Criptografia ponta-a-ponta, infraestrutura no Brasil, logs de auditoria completos e controle granular de permissões.", tag: "Segurança", span: "", hasMockup: false },
];

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produto" className="py-24 md:py-32 bg-white dark:bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15] pointer-events-none">
        <Image src={assetUrl("/bento-bg.png")} alt="" fill className="object-cover" quality={80} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tighter text-slate-900 dark:text-white max-w-[500px] leading-[1.1]">
              Seis módulos construídos para a prática jurídica.
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 max-w-[320px]">
            Cada módulo é treinado especificamente com dados da legislação e jurisprudência brasileira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className={`bg-white/60 dark:bg-[#141416]/60 backdrop-blur-xl border border-slate-200/70 dark:border-white/[0.08] rounded-2xl overflow-hidden group hover:border-slate-300/80 dark:hover:border-white/15 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_4px_16px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3)] ${feature.span}`}
            >
              {feature.hasMockup && (
                <div className="relative w-full h-[180px] overflow-hidden border-b border-slate-100 dark:border-white/5">
                  <Image src={assetUrl("/dashboard-jurimetria.png")} alt="Dashboard de Jurimetria Preditiva" fill className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700" quality={90} />
                  <div className="absolute inset-0 bg-linear-to-t from-white dark:from-[#141416] via-white/30 dark:via-[#141416]/30 to-transparent" />
                </div>
              )}

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F9FC] dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-colors">
                    <feature.icon className="w-4 h-4 text-[#0A2540] dark:text-blue-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 bg-[#F7F9FC] dark:bg-white/5">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white mb-2.5 tracking-tight">{feature.title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
