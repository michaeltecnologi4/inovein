"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import FeatureShowcase from "@/components/feature/FeatureShowcase";
import RecentProjects from "@/components/projects/RecentProjects";
import BenefitsBanner from "@/components/benefits/BenefitsBanner";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

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
          {/* Banner */}
          <motion.div
            className="mt-16 md:mt-24 lg:mt-32 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <BenefitsBanner />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeatureShowcase />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <RecentProjects />
        </motion.div>
      </main>
    </div>
  );
}