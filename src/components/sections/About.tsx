"use client";

import { motion } from "motion/react";
import { Code2, Layers3, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    number: "01",
    title: "Clean Code",
    description:
      "Código organizado, legível e sustentável, priorizando clareza e boas práticas.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Arquitetura",
    description:
      "Soluções modulares, componentes reutilizáveis e estruturas pensadas para crescer.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Problem Solving",
    description: `Transformando problemas complexos em soluções funcionais, eficientes e documentadas.`,
  },
];

export function About() {
  return (
    <section id="about" className="container section-padding !pt-5 md:!pt-0">
      <div className="space-y-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <span className="font-mono text-sm gradient-text">01 / ABOUT ME</span>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Mais do que código.
            <br />
            <span className="gradient-text">Construindo soluções.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            Transformo ideias em aplicações funcionais, combinando lógica,
            arquitetura e tecnologia para construir experiências digitais que
            resolvem problemas reais.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-purple-500/40">
                <div className="flex items-center justify-between">
                  <Icon
                    size={24}
                    className="text-purple-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="font-mono text-sm text-[var(--text-muted)]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
