"use client";

import { ArrowUpRight } from "lucide-react";

const linkGroups = [
  { title: "Produto", links: ["Recursos", "Preços", "Documentação", "Changelog"] },
  { title: "Empresa", links: ["Sobre", "Blog", "Carreiras", "Imprensa"] },
  { title: "Legal", links: ["Privacidade", "Termos", "LGPD", "Segurança"] },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-1 mb-5 select-none">
              <span className="text-lg font-medium tracking-tight text-slate-900 dark:text-white opacity-80">Juris</span>
              <span className="text-[9px] font-bold tracking-wide text-white bg-blue-600 dark:bg-blue-500 px-1.5 py-0.5 rounded self-center leading-none opacity-80">IA</span>
            </div>
            <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400 max-w-[300px] mb-6">
              Gestão processual, IA generativa e jurimetria preditiva em uma plataforma feita para a advocacia brasileira.
            </p>
            <a href="mailto:contato@jurisia.com" className="group inline-flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              contato@jurisia.com
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
            </a>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="md:col-span-2 md:col-start-auto">
              <p className="text-[11px] font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-4">{group.title}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 dark:border-white/5 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-[12px] text-slate-400 dark:text-slate-500">© {year} JurisIA</p>
          <p className="text-[12px] text-slate-400 dark:text-slate-500">São Paulo, SP — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
