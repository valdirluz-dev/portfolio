export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  status: "Concluído" | "Em andamento";
  technologies: string[];
  githubUrl?: string;
}
