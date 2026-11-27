import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valdir Luz | Full Stack Developer",
  description:
    "Portfolio of Valdir Luz — Full Stack Developer focused on Java, Spring Boot, React, cloud and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
