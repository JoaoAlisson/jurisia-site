"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { assetUrl } from "@/lib/basePath";

const testimonials = [
  { quote: "Antes do JurisIA, minha equipe perdia quase 15 horas por semana apenas checando os andamentos no e-SAJ e PJe. Hoje, a IA nos avisa apenas do que importa. O Radar de Oportunidades já nos trouxe dois novos clientes este mês.", name: "Ricardo Mendes", title: "Sócio Fundador", org: "OAB/SP", avatar: "/avatar-1.png" },
  { quote: "A função de Análise de Peças Contrárias é assustadora de tão precisa. Eu subo a contestação da outra parte e em 5 minutos o sistema cruza com a jurisprudência e me dá os pontos fracos. Mudou a forma como preparamos as réplicas.", name: "Camila Torres", title: "Head de Contencioso", org: "OAB/RJ", avatar: "/avatar-2.png" },
  { quote: "O que mais me impressiona não é só a geração de documentos, mas a Jurimetria Preditiva. Conseguir alinhar a expectativa do cliente com dados reais sobre a vara e o juiz diminuiu nosso atrito e aumentou a conversão de contratos.", name: "Felipe Araújo", title: "Advogado Cível", org: "OAB/MG", avatar: "/avatar-3.png" },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-[#0F0F11]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tighter text-slate-900 dark:text-white max-w-[500px] leading-[1.1]">Quem usa, recomenda.</h2>
          <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 max-w-[320px]">Advogados e escritórios que transformaram sua rotina com inteligência artificial aplicada.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }} className="bg-white/60 dark:bg-[#141416]/60 backdrop-blur-xl border border-slate-200/70 dark:border-white/[0.08] rounded-2xl p-7 md:p-8 flex flex-col hover:border-slate-300/80 dark:hover:border-white/15 transition-all duration-300 group shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
              <div className="mb-6">
                <Quote className="w-5 h-5 text-slate-300 dark:text-white/15 group-hover:text-[#0A2540]/30 dark:group-hover:text-blue-400/30 transition-colors" strokeWidth={1.5} />
              </div>
              <p className="text-[15px] leading-[1.7] text-slate-600 dark:text-slate-300 flex-1 mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3.5 pt-6 border-t border-slate-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-white/10 shrink-0">
                  <Image src={assetUrl(t.avatar)} alt={t.name} width={48} height={48} className="object-cover w-full h-full" quality={90} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-slate-900 dark:text-white leading-tight">{t.name}</p>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">{t.title} · {t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
