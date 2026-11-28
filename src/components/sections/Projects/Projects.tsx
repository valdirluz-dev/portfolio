"use client";

import { motion } from "motion/react";

import { projects } from "./projects.data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="container section-padding !pt-5 md:!pt-0">
      <div className="space-y-12">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center">
          <span className="font-mono text-sm gradient-text">PROJECTS</span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
            Projetos que representam minha experiência prática, aprendizado
            contínuo e aplicação de tecnologias no desenvolvimento de soluções.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
