"use client";
import { motion } from "framer-motion";
import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="grow w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>

        {/* Benefits Section com transição suave */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Benefits />
        </motion.div>
      </main>
    </div>
  );
}