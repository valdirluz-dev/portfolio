"use client";

import { useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { motion } from "motion/react";
import { Code2, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  status: "Concluído" | "Em andamento";
  technologies: string[];
  githubUrl?: string;
}

function ProjectCard({
  title,
  description,
  icon = <Code2 size={22} />,
  status,
  technologies,
  githubUrl,
}: ProjectCardProps) {
  const isCompleted = status === "Concluído";

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    rotateX: 0,
    rotateY: 0,
    angle: 0,
    active: false,
  });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const normalizedX = (x - 50) / 50;
    const normalizedY = (y - 50) / 50;

    const maxTilt = 20;

    const angle =
      Math.atan2(
        e.clientY - rect.top - rect.height / 2,
        e.clientX - rect.left - rect.width / 2,
      ) *
      (180 / Math.PI);

    setMouse({
      x,
      y,
      rotateX: -normalizedY * maxTilt,
      rotateY: normalizedX * maxTilt,
      angle,
      active: true,
    });
  }

  function handleMouseLeave() {
    setMouse({
      x: 50,
      y: 50,
      rotateX: 0,
      rotateY: 0,
      angle: 0,
      active: false,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="h-full">
      {/* Card com captura do mouse e perspectiva */}
      <article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "800px" }}
        className="relative h-full">
        {/* Tilt wrapper: controla exclusivamente o efeito 3D */}
        <div
          className="
            group relative flex h-full min-h-[280px] flex-col
            overflow-hidden rounded-[22px]
            border border-purple-500/20
            bg-[var(--surface)]
            p-7
          "
          style={{
            transform: `
              rotateX(${mouse.rotateX}deg)
              rotateY(${mouse.rotateY}deg)
              scale3d(
                 ${mouse.active ? 1.025 : 1},
                 ${mouse.active ? 1.025 : 1},
                 1
              )
            `,
            transformStyle: "preserve-3d",
            transition: mouse.active
              ? "transform 50ms linear"
              : "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
          {/* Spotlight cursor */}
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[22px]"
            style={{
              opacity: mouse.active ? 1 : 0,
              transition: "opacity 250ms ease",
              background: `radial-gradient(
                350px circle at ${mouse.x}% ${mouse.y}%,
                rgba(139,92,246,0.24),
                rgba(34,211,238,0.14) 30%,
                rgba(139,92,246,0.06) 55%,
                transparent 75%
              )`,
            }}
          />

          {/* Borda dinâmica */}
          <div
            className="
              pointer-events-none absolute inset-0 z-0
              rounded-[22px] p-[1.5px]
              transition-opacity duration-300
            "
            style={{
              opacity: mouse.active ? 1 : 0,
              background: `conic-gradient(
                from ${mouse.angle - 45}deg,
                transparent 0deg,
                transparent 275deg,
                rgba(139,92,246,0.15) 310deg,
                rgba(139,92,246,0.95) 330deg,
                rgba(34,211,238,1) 350deg,
                transparent 360deg
              )`,
            }}>
            {/* Interior da borda */}
            <div className="h-full w-full rounded-[20px] bg-[var(--surface)]" />
          </div>

          {/* Glow ambiente */}
          <div
            className="
              pointer-events-none absolute -right-16 -top-16 z-0
              h-40 w-40 rounded-full
              bg-fuchsia-500/[0.07]
              blur-3xl opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
          />

          {/* Conteúdo */}
          <div
            className="relative z-20 flex h-full flex-col"
            style={{ transform: "translateZ(20px)" }}>
            {/* Cabeçalho */}
            <div className="relative mb-5 flex items-center justify-between gap-3">
              <div
                className="
                  flex h-[46px] w-[46px] shrink-0 items-center justify-center
                  rounded-xl border border-purple-500/20
                  bg-purple-500/10 text-purple-300
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:border-cyan-400/30
                  group-hover:text-cyan-300
                ">
                {icon}
              </div>

              <span
                className="
                  inline-flex items-center gap-1.5
                  rounded-full border border-emerald-500/20
                  bg-emerald-500/10
                  px-3 py-1
                  text-[11px] font-medium text-emerald-400
                  whitespace-nowrap
                ">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isCompleted ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                {status}
              </span>
            </div>

            {/* Título e descrição */}
            <div className="relative">
              <h3
                className="
                  mb-3 text-base font-semibold tracking-tight
                  text-white/90
                  transition-colors duration-300
                  group-hover:text-cyan-200
                ">
                {title}
              </h3>

              <p className="text-[13px] leading-[1.75] text-[var(--text-muted)]">
                {description}
              </p>
            </div>

            {/* Tecnologias */}
            <div className="relative mt-5 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-md border border-purple-500/15
                    bg-purple-500/[0.05]
                    px-2.5 py-1
                    text-[11px] text-purple-200/70
                    transition-colors duration-300
                    group-hover:border-purple-400/25
                  ">
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub */}
            {githubUrl && (
              <div className="relative mt-auto pt-6">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/github inline-flex items-center gap-2.5
                    text-[13px] font-semibold text-cyan-300
                    transition-colors duration-300
                    hover:text-white
                  ">
                  {/* Ícone quadrado */}
                  <span
                    className="
                      flex h-8 w-8 items-center justify-center
                      rounded-lg border border-white/10
                      bg-white/[0.03]
                      transition-all duration-300
                      group-hover/github:border-cyan-400/40
                      group-hover/github:bg-cyan-400/10
                      group-hover/github:shadow-[0_0_12px_rgba(34,211,238,0.12)]
                    ">
                    <FaGithub size={15} />
                  </span>

                  <span className="flex items-center gap-1">
                    GitHub
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform duration-300
                        group-hover/github:translate-x-0.5
                        group-hover/github:-translate-y-0.5
                      "
                    />
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}

/* Dados dos projetos */
const projects: ProjectCardProps[] = [
  {
    title: "Sistema Colégio",
    description:
      "Sistema para gerenciamento de informações escolares, desenvolvido explorando lógica de programação, persistência de dados e integração entre tecnologias.",
    icon: <span className="text-xl">🎓</span>,
    status: "Concluído",
    technologies: ["C", "Node.js", "SQLite", "Docker"],
    githubUrl: "https://github.com/valdirluz-dev/sistema-colegio-c",
  },
  {
    title: "FrotaSync",
    description:
      "Plataforma de gerenciamento de frotas com arquitetura moderna, integração entre frontend e backend e banco de dados relacional.",
    icon: <span className="text-xl">🚛</span>,
    status: "Em andamento",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Tailwind", "Flyway"],
    githubUrl: "https://github.com/valdirluz-dev/frotasync",
  },
  {
    title: "Minhas Notas",
    description:
      "Aplicação web para criar, organizar e consultar anotações, com uma interface simples e funcional.",
    icon: <span className="text-xl">📝</span>,
    status: "Concluído",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/valdirluz-dev/minhas-notas",
  },
  {
    title: "Projeto ONG PET",
    description:
      "Sistema voltado para uma organização de proteção animal, integrando aplicação web, API backend e banco de dados.",
    icon: <span className="text-xl">🐾</span>,
    status: "Concluído",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "Flyway"],
    githubUrl: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container section-padding">
      <div className="space-y-12">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center">
          <span className="font-mono text-sm gradient-text">03 / PROJECTS</span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
            Projetos que representam minha experiência prática, aprendizado
            contínuo e aplicação de tecnologias no desenvolvimento de soluções.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
