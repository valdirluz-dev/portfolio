"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Copy, Mail, Check } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contacts = [
  {
    name: "GitHub",
    username: "@valdirluz-dev",
    description: "Check out my projects and code",
    href: "https://github.com/valdirluz-dev",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    username: "Let's connect",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/valdirluz-dev/",
    icon: FaLinkedinIn,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "valdirluz.dev@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:px-10 !pt-5 md:!pt-0">
      <div className="mx-auto max-w-6xl">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Contact
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let's work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
              together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Have an opportunity, a project, or just want to connect? My inbox is
            always open. Let's build something great.
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-7 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-zinc-500">Email me at</p>
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-lg font-medium text-white transition-colors hover:text-purple-400 sm:text-xl">
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-zinc-900 sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-400">
                    <Icon size={22} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                  />
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold text-white">
                    {contact.name}
                  </h3>

                  <p className="mt-1 text-sm text-purple-400">
                    {contact.username}
                  </p>

                  <p className="mt-3 text-sm text-zinc-500">
                    {contact.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            Designed & built with{" "}
            <span className="text-purple-400">passion</span> by Valdir Luz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
