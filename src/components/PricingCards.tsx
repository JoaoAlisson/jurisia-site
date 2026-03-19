"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "149", credits: "100 créditos de IA / mês", description: "Para advogados autônomos que estão começando com IA.", features: ["Até 200 processos", "Monitoramento automático", "Resumo de processos por IA", "Controle de prazos", "Alertas via e-mail", "Suporte por e-mail"], cta: "Começar agora" },
  { name: "Pro", price: "299", credits: "500 créditos de IA / mês", description: "Toda a potência da IA para escalar a prática jurídica.", highlighted: true, features: ["Processos ilimitados", "Tudo do Starter", "Análise de peças contrárias", "Jurimetria preditiva", "Automação de petições", "Radar de oportunidades", "Alertas via WhatsApp", "Suporte prioritário"], cta: "Teste grátis 14 dias" },
  { name: "Escritório", price: "599", credits: "2.000 créditos de IA / mês", description: "Para equipes que precisam de escala e controle total.", features: ["Tudo do Pro", "Até 10 usuários", "Painel de produtividade", "Relatórios gerenciais", "API de integração", "Modelos customizados", "Onboarding dedicado", "Gerente de sucesso"], cta: "Falar com consultor" },
];

export default function PricingCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precos" className="py-24 md:py-32 bg-[#F7F9FC] dark:bg-[#0F0F11]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tighter text-slate-900 dark:text-white max-w-[500px] leading-[1.1]">Invista em horas devolvidas.</h2>
          <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 max-w-[320px]">Trial de 14 dias sem compromisso. Sem cartão de crédito. Compliance LGPD e uptime 99.9%.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => {
            const hi = plan.highlighted;
            return (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={`rounded-2xl p-7 md:p-8 flex flex-col transition-colors ${hi ? "bg-[#0A2540] dark:bg-blue-600 text-white" : "bg-white dark:bg-[#141416] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"}`}>
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`text-[15px] font-semibold ${hi ? "text-white" : "text-slate-900 dark:text-white"}`}>{plan.name}</h3>
                    {hi && <span className="text-[10px] font-medium tracking-wider uppercase text-white/60 px-2 py-0.5 rounded-md border border-white/20 bg-white/10">Popular</span>}
                  </div>
                  <p className={`text-[13px] ${hi ? "text-white/60" : "text-slate-500 dark:text-slate-400"}`}>{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-[12px] ${hi ? "text-white/40" : "text-slate-400 dark:text-slate-500"}`}>R$</span>
                  <span className={`text-4xl font-semibold tracking-tighter tabular-nums ${hi ? "text-white" : "text-slate-900 dark:text-white"}`}>{plan.price}</span>
                  <span className={`text-[12px] ${hi ? "text-white/40" : "text-slate-400 dark:text-slate-500"}`}>/mês</span>
                </div>
                <p className={`text-[12px] mb-7 ${hi ? "text-white/40" : "text-slate-400 dark:text-slate-500"}`}>{plan.credits}</p>
                <a href="#" className={`group flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium rounded-lg transition-colors mb-8 ${hi ? "bg-white text-[#0A2540] hover:bg-slate-100" : "border border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"}`}>
                  {plan.cta}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>
                <div className={`space-y-2.5 mt-auto pt-6 border-t ${hi ? "border-white/10" : "border-slate-100 dark:border-white/5"}`}>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${hi ? "text-white/40" : "text-slate-400 dark:text-slate-500"}`} strokeWidth={1.5} />
                      <span className={`text-[13px] ${hi ? "text-white/80" : "text-slate-600 dark:text-slate-300"}`}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
