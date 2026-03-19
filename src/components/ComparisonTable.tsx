"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Minus } from "lucide-react";

interface FeatureRow {
  name: string;
  starter: boolean | string;
  pro: boolean | string;
  escritorio: boolean | string;
}

const categories: { category: string; features: FeatureRow[] }[] = [
  {
    category: "Gestão Processual",
    features: [
      { name: "Processos monitorados", starter: "Até 200", pro: "Ilimitados", escritorio: "Ilimitados" },
      { name: "Monitoramento automático", starter: true, pro: true, escritorio: true },
      { name: "Controle de prazos", starter: true, pro: true, escritorio: true },
      { name: "Resumo por IA", starter: true, pro: true, escritorio: true },
      { name: "Linha do tempo processual", starter: false, pro: true, escritorio: true },
    ],
  },
  {
    category: "Inteligência Artificial",
    features: [
      { name: "Créditos de IA / mês", starter: "100", pro: "500", escritorio: "2.000" },
      { name: "Análise de peças contrárias", starter: false, pro: true, escritorio: true },
      { name: "Jurimetria preditiva", starter: false, pro: true, escritorio: true },
      { name: "Automação de petições", starter: false, pro: true, escritorio: true },
      { name: "Radar de oportunidades", starter: false, pro: true, escritorio: true },
      { name: "Modelos customizados", starter: false, pro: false, escritorio: true },
    ],
  },
  {
    category: "Colaboração",
    features: [
      { name: "Usuários incluídos", starter: "1", pro: "3", escritorio: "10" },
      { name: "Painel de produtividade", starter: false, pro: false, escritorio: true },
      { name: "Relatórios gerenciais", starter: false, pro: false, escritorio: true },
      { name: "API de integração", starter: false, pro: false, escritorio: true },
    ],
  },
  {
    category: "Suporte e Comunicação",
    features: [
      { name: "Alertas via e-mail", starter: true, pro: true, escritorio: true },
      { name: "Alertas via WhatsApp", starter: false, pro: true, escritorio: true },
      { name: "Suporte por e-mail", starter: true, pro: true, escritorio: true },
      { name: "Suporte prioritário", starter: false, pro: true, escritorio: true },
      { name: "Onboarding dedicado", starter: false, pro: false, escritorio: true },
      { name: "Gerente de sucesso", starter: false, pro: false, escritorio: true },
    ],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-[13px] font-medium text-slate-900 dark:text-white tabular-nums">{value}</span>;
  }
  if (value) {
    return (
      <div className="w-5 h-5 rounded-full bg-[#0A2540]/10 dark:bg-blue-400/15 flex items-center justify-center">
        <Check className="w-3 h-3 text-[#0A2540] dark:text-blue-400" strokeWidth={2.5} />
      </div>
    );
  }
  return <Minus className="w-4 h-4 text-slate-300 dark:text-slate-600" strokeWidth={1.5} />;
}

export default function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tighter text-slate-900 dark:text-white max-w-[500px] leading-[1.1]">Compare os planos em detalhe.</h2>
          <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 max-w-[320px]">Todas as funcionalidades lado a lado. Escolha o plano ideal para o seu escritório.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#141416]">
          <div className="grid grid-cols-[1fr_100px_100px_100px] md:grid-cols-[1fr_140px_140px_140px] border-b border-slate-200 dark:border-white/10 bg-[#F7F9FC] dark:bg-[#0F0F11]">
            <div className="px-5 md:px-6 py-4">
              <span className="text-[12px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Funcionalidade</span>
            </div>
            <div className="px-3 md:px-4 py-4 text-center">
              <span className="text-[12px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Starter</span>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">R$ 149/mês</p>
            </div>
            <div className="px-3 md:px-4 py-4 text-center bg-[#0A2540] dark:bg-blue-600 rounded-t-xl relative">
              <span className="text-[12px] font-medium text-white/80 uppercase tracking-wider">Pro</span>
              <p className="text-[11px] text-white/50 mt-0.5">R$ 299/mês</p>
            </div>
            <div className="px-3 md:px-4 py-4 text-center">
              <span className="text-[12px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Escritório</span>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">R$ 599/mês</p>
            </div>
          </div>

          {categories.map((cat, ci) => (
            <div key={cat.category}>
              <div className="grid grid-cols-[1fr_100px_100px_100px] md:grid-cols-[1fr_140px_140px_140px] border-b border-slate-100 dark:border-white/5 bg-[#FAFBFC] dark:bg-[#0F0F11]">
                <div className="px-5 md:px-6 py-3">
                  <span className="text-[12px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{cat.category}</span>
                </div>
                <div />
                <div className="bg-[#0A2540]/3 dark:bg-blue-600/10" />
                <div />
              </div>

              {cat.features.map((feature, fi) => (
                <div key={feature.name} className={`grid grid-cols-[1fr_100px_100px_100px] md:grid-cols-[1fr_140px_140px_140px] border-b border-slate-100 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors ${ci === categories.length - 1 && fi === cat.features.length - 1 ? "border-b-0" : ""}`}>
                  <div className="px-5 md:px-6 py-3.5 flex items-center">
                    <span className="text-[13px] text-slate-600 dark:text-slate-300">{feature.name}</span>
                  </div>
                  <div className="px-3 md:px-4 py-3.5 flex items-center justify-center">
                    <CellValue value={feature.starter} />
                  </div>
                  <div className="px-3 md:px-4 py-3.5 flex items-center justify-center bg-[#0A2540]/2 dark:bg-blue-600/5">
                    <CellValue value={feature.pro} />
                  </div>
                  <div className="px-3 md:px-4 py-3.5 flex items-center justify-center">
                    <CellValue value={feature.escritorio} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
