"use client";

import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/valdirluz-dev",
    icon: FaLinkedin,
    color: "bg-[#0A66C2]",
  },
  {
    label: "GMAIL",
    href: "mailto:valdirluz.dev@gmail.com",
    icon: Mail,
    color: "bg-[#EA4335]",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="container section-padding min-h-[85vh] flex items-center">
      <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* LADO ESQUERDO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          {/* IDENTIFICAÇÃO */}
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <span className="h-px w-8 bg-purple-500" />
            <span>Olinda, PE</span>
            <span className="text-purple-400">•</span>
            <span>Full Stack Developer</span>
          </div>

          {/* TÍTULO */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Construindo
            <br />
            <span className="gradient-text">soluções</span>
            <br />
            digitais que
            <br />
            fazem sentido.
          </h1>

          {/* DESCRIÇÃO */}
          <p className="mt-8 max-w-xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
            Desenvolvo aplicações modernas, sistemas escaláveis e experiências
            digitais combinando tecnologia, arquitetura e lógica desde a
            concepção do produto até as operações em nuvem.
          </p>

          {/* LINKS */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm transition-all hover:border-purple-400/50 hover:bg-purple-500/10">
                  <Icon size={16} />
                  {social.label}
                  <ArrowUpRight size={14} />
                </a>
              );
            })}

            <a
              href="/documents/curriculo_valdir.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium">
              Currículo
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* LADO DIREITO - IMAGEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[420px]">
          {/* DECORAÇÃO */}
          <div className="absolute -inset-4 rounded-3xl border border-purple-500/10" />

          {/* CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm">
            {/* IMAGEM PLACEHOLDER */}
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900"
              style={{
                backgroundImage: "url('/perfil.png')",
                // "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}>
              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-transparent to-transparent" />

              {/* IDENTIFICAÇÃO */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
                <p className="text-sm font-medium">Valdir Luz</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* ELEMENTO FLUTUANTE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-5 -top-5 rounded-xl border border-purple-500/20 bg-[#0d0a16] px-4 py-3 shadow-xl">
            <span className="font-mono text-xs text-purple-400">
              &lt; building /&gt;
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
