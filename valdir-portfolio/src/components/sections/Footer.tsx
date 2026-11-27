"use client";

import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mt-6 border-t border-white/10 pt-10 pb-25 text-center">
      <p className="text-sm text-zinc-500">Valdir Luz · Olinda, PE</p>
      <p className="text-sm text-zinc-500">© 2026. All rights reserved.</p>
    </motion.div>
  );
}
