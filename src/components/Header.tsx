"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Produto", href: "#produto" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#" className="select-none">
              <span className="text-[20px] font-semibold tracking-tight text-slate-900 dark:text-white">juris</span><span className="text-[20px] font-semibold tracking-tight text-blue-600 dark:text-blue-400">ia</span>
            </a>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="#"
                className="hidden md:inline-flex text-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Entrar
              </a>
              <a
                href="#precos"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium bg-[#0A2540] dark:bg-blue-600 text-white rounded-lg hover:bg-[#0D3050] dark:hover:bg-blue-500 transition-colors"
              >
                Começar
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-14 z-40 bg-white dark:bg-[#0A0A0A] md:hidden"
          >
            <nav className="flex flex-col p-5 gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-3 text-[15px] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-slate-100 dark:border-white/10 my-3" />
              <a href="#" className="py-3 px-3 text-[15px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg">
                Entrar
              </a>
              <a
                href="#precos"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium bg-[#0A2540] dark:bg-blue-600 text-white rounded-lg"
              >
                Começar agora
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
