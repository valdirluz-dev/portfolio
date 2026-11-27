"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { Code2, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import type { ProjectCardProps } from "./projects.types";

export function ProjectCard({
  title,
  description,
  image,
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
      <article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "800px",
          position: "relative",
          zIndex: mouse.active ? 10 : 1,
        }}
        className="relative h-full">
        <div
          className="
            group relative flex h-full min-h-[380px] flex-col
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
          {/* Spotlight */}
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
            className="pointer-events-none absolute inset-0 z-0 rounded-[22px] p-[1.5px]"
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
            <div className="h-full w-full rounded-[20px] bg-[var(--surface)]" />
          </div>

          {/* Glow */}
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
            {/* Imagem + Status */}
            <div className="relative -mx-7 -mt-7 mb-6 h-[180px] overflow-hidden rounded-t-[21px]">
              {image ? (
                <img
                  src={image}
                  alt={`Preview do projeto ${title}`}
                  className="
                    h-full w-full object-contain
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              ) : (
                <div
                  className="
                    flex h-full w-full items-center justify-center
                    bg-gradient-to-br from-purple-500/20
                    via-[var(--surface)] to-cyan-500/20
                  ">
                  <Code2 size={42} className="text-purple-300/60" />
                </div>
              )}

              {/* Overlay da imagem */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-black/50
                  via-transparent to-black/10
                "
              />

              {/* Badge de status */}
              <span
                className={`
                  absolute right-3 top-3 inline-flex items-center gap-1.5
                  rounded-full border backdrop-blur-md
                  px-3 py-1
                  text-[11px] font-medium whitespace-nowrap
                  ${
                    isCompleted
                      ? "border-emerald-500/25 bg-emerald-500/15 text-emerald-400"
                      : "border-amber-500/25 bg-amber-500/15 text-amber-400"
                  }
                `}>
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
