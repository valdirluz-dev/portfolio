"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Copy,
  Mail,
  Check,
  Send,
  Pencil,
  Zap,
  Sparkles,
  Users,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const email = "valdirluz.dev@gmail.com";

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
  {
    name: "WhatsApp",
    username: "Let's connect",
    description: "Connect with me professionally",
    href: "https://wa.me/558196193406",
    icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    username: "Let's connect",
    description: "Connect with me professionally",
    href: "https://www.instagram.com/valdirluz360/",
    icon: FaInstagram,
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Quick Response",
    description: "I reply as soon as possible.",
  },
  {
    icon: Sparkles,
    title: "Trusted Support",
    description: "Your questions and ideas matter.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Always open to new connections.",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const senderEmail = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:px-10 !pt-5 md:!pt-0">
      <div className="relative mx-auto max-w-6xl">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mb-14 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] gradient-text">
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

        {/* Main Cards */}
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* SEND A MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-zinc-900 sm:p-8">
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Card header */}
            <div className="relative mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/15">
                <Pencil size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Send a Message
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Let's start a conversation
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-1 flex-col gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-zinc-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                  minLength={10}
                  maxLength={5000}
                  className="min-h-[120px] w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <button
                type="submit"
                className="mt-auto flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-violet-700 px-5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] active:scale-[0.98]">
                Send Message
                <Send size={17} />
              </button>
            </form>
          </motion.div>

          {/* LET'S CONNECT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-zinc-900 sm:p-8">
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Card header */}
            <div className="relative mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:border-purple-500/40 group-hover:bg-purple-500/15">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Let's Connect
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Find me around the internet
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="relative mb-6 text-sm leading-7 text-zinc-400">
              I'm open to opportunities, collaborations, and interesting
              projects. Feel free to reach out or connect with me.
            </p>

            {/* Email */}
            <button
              onClick={copyEmail}
              className="relative flex w-full items-center justify-between gap-3 rounded-xl border border-purple-500/20 bg-purple-500/[0.06] px-4 py-4 text-left transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.1]">
              <div className="min-w-0">
                <span className="mb-1 block text-xs text-zinc-500">
                  Email address
                </span>
                <span className="block break-all text-sm font-medium text-white">
                  {email}
                </span>
              </div>

              <div className="shrink-0 text-purple-400">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </div>
            </button>

            <p className="relative mt-2 h-4 text-xs text-purple-400">
              {copied ? "Email copied to clipboard!" : ""}
            </p>

            {/* Social links */}
            <div className="relative mt-4 flex gap-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.name}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Highlights */}
            <div className="relative mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="min-w-0">
                    <Icon
                      size={19}
                      className="mb-3 text-purple-400 transition-transform duration-300 group-hover:scale-110"
                    />

                    <h4 className="text-xs font-semibold leading-5 text-white sm:text-sm">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-[11px] leading-5 text-zinc-500 sm:text-xs">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
