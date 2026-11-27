interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  icon?: ReactNode;
  status: "Concluído" | "Em andamento";
  technologies: string[];
  githubUrl?: string;
}
