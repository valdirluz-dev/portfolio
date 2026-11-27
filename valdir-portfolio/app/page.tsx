import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { About } from "@/src/components/sections/About";
import { Stack } from "@/src/components/sections/Stack";
import { Projects } from "@/src/components/sections/Projects/Projects";
import { Contact } from "@/src/components/sections/Contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}
