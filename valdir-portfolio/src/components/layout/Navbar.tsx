"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 z-50 w-full px-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight">
          VALDIR<span className="gradient-text">LUZ</span>
          <span className="ml-2 text-xs font-normal text-[var(--text-muted)]">
            .dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Desktop */}
        <a
          href="https://wa.me/558196193406"
          target="_blank"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 md:flex">
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-lg border border-[var(--border)] p-2 md:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
