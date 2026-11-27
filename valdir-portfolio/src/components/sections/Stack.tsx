"use client";

import { useState } from "react";
import { motion } from "motion/react";

const technologies = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  { name: "Spring Boot", logo: "springboot" },
  { name: "PostgreSQL", logo: "postgresql" },
  { name: "Flyway", logo: "flyway" },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  },
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "/projects/nextjs.ico" },
  { name: "Typescript", logo: "typescript" },
  { name: "Git", logo: "git" },
  { name: "GitHub", logo: "github" },
  { name: "Docker", logo: "docker" },
  { name: "Kubernetes", logo: "kubernetes" },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  { name: "Google Cloud", logo: "googlecloud" },
  { name: "Terraform", logo: "terraform" },
  { name: "GitHub Actions", logo: "githubactions" },
  { name: "Prometheus", logo: "prometheus" },
  { name: "Grafana", logo: "grafana" },
  { name: "OpenTelemetry", logo: "opentelemetry" },
];

function SkillCard({
  tech,
  index,
}: {
  tech: { name: string; logo: string };
  index: number;
}) {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    rotateX: 0,
    rotateY: 0,
    angle: 0,
    active: false,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const normalizedX = (x - 50) / 50;
    const normalizedY = (y - 50) / 50;

    const maxTilt = 1000;

    setMouse({
      x,
      y,
      rotateX: -normalizedY * maxTilt,
      rotateY: normalizedX * maxTilt,
      angle: 0,
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
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full"
      style={{
        perspective: "-1000px",
      }}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: index * 0.04,
        }}
        className="group relative flex min-h-[150px] h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-purple-500/30 bg-[var(--surface)] p-5 sm:min-h-[170px] sm:p-6"
        style={{
          transform: `rotateX(${mouse.rotateX}deg) rotateY(${mouse.rotateY}deg) scale3d(${mouse.active ? 1.03 : 1}, ${mouse.active ? 1.03 : 1}, 1)`,
          transformStyle: "preserve-3d",
          transition: mouse.active
            ? "transform 80ms ease-out, border-color 200ms ease"
            : "transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease",
          borderColor: mouse.active ? "rgba(168, 85, 247, 0.7)" : undefined,
        }}>
        {/* Cursor Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: mouse.active ? 1 : 0,
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(139,92,246,0.22), rgba(34,211,238,0.10) 20%, transparent 60%)`,
          }}
        />

        {/* Border Glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: mouse.active ? 1 : 0,
            boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.35)",
          }}
        />

        {/* Technology Logo */}
        <div
          className="relative z-10 flex h-14 w-14 items-center justify-center sm:h-[72px] sm:w-[72px]"
          style={{
            transform: "translateZ(35px)",
          }}>
          <img
            src={
              tech.logo.startsWith("https://") || tech.logo.startsWith("/")
                ? tech.logo
                : `https://cdn.simpleicons.org/${tech.logo}`
            }
            alt={tech.name}
            className={`h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 ${
              tech.name === "Next.js" ? "rounded-full ring-1 ring-white" : ""
            }`}
            style={{
              filter: tech.name === "GitHub" ? "invert(1)" : undefined,
            }}
            loading="lazy"
          />
        </div>

        {/* Technology Name */}
        <span
          className="relative z-10 text-center font-sans text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-purple-300 sm:text-base"
          style={{
            transform: "translateZ(20px)",
          }}>
          {tech.name}
        </span>
      </motion.div>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="container section-padding !pt-5 md:!pt-0">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center">
          <span className="font-mono text-sm gradient-text">
            02 / TECHNOLOGY STACK
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
            Tecnologias e ferramentas que utilizo para desenvolver aplicações,
            construir arquiteturas, automatizar processos e trabalhar com
            infraestrutura escalável.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4">
          {technologies.map((tech, index) => (
            <SkillCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
