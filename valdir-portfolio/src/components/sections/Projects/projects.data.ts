import type { ProjectCardProps } from "./projects.types";

export const projects: ProjectCardProps[] = [
  {
    title: "Sistema Colégio",
    description:
      "Sistema para gerenciamento de informações escolares, desenvolvido explorando lógica de programação, persistência de dados e integração entre tecnologias.",
    image: "/projects/sistema-gestao-escolar.png",
    status: "Concluído",
    technologies: ["C", "Node.js", "SQLite", "Docker"],
    githubUrl: "https://github.com/valdirluz-dev/sistema-colegio-c",
  },
  {
    title: "FrotaSync",
    description:
      "Plataforma de gerenciamento de frotas com arquitetura moderna, integração entre frontend e backend e banco de dados relacional.",
    image: "/projects/frotasync.png",
    status: "Em andamento",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Tailwind", "Flyway"],
    githubUrl: "https://github.com/valdirluz-dev/frotasync",
  },
  {
    title: "Minhas Notas",
    description:
      "Aplicação web para criar, organizar e consultar anotações, com uma interface simples e funcional.",
    image: "/projects/minhas-notas.png",
    status: "Concluído",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/valdirluz-dev/minhas-notas",
  },
  {
    title: "Projeto ONG PET",
    description:
      "Sistema voltado para uma organização de proteção animal, integrando aplicação web, API backend e banco de dados.",
    image: "/projects/ong-pet.png",
    status: "Concluído",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "Flyway"],
  },
];
