"use client";
import React from "react";
import { motion } from "framer-motion";
import { BenefitCard } from "./BenefitCard";
import BenefitsBanner from "./BenefitsBanner";

const benefits = [
    {
        title: "Processos Otimizados",
        desc: "Eliminamos gargalos com soluções inteligentes que aceleram resultados.",
    },
    {
        title: "Design Intuitivo",
        desc: "Experiências fluidas que encantam usuários desde o primeiro clique.",
    },
    {
        title: "Tecnologia Escalável",
        desc: "Construímos bases sólidas para acompanhar o seu crescimento.",
    },
    {
        title: "Entrega de Alto Impacto",
        desc: "Resultados que transformam marcas e fortalecem a presença digital.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function Benefits() {
    return (
        <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
            {/* Background decorativo */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-[#485C11]/5 rounded-full blur-3xl -z-0"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-[#8E9C78]/5 rounded-full blur-3xl -z-0"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                {/* Header */}
                <motion.div
                    className="max-w-4xl mb-16 md:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                            },
                        }}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Benefícios que{" "}
                            <motion.span
                                className="relative inline-block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <span className="relative z-10">elevam</span>
                                <motion.span
                                    className="absolute bottom-2 left-0 right-0 h-3 bg-[#485C11]/20 -z-0"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </motion.span>{" "}
                            o seu projeto.
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Uma abordagem focada em simplicidade, impacto e eficiência real.
                    </motion.p>
                </motion.div>

                {/* Grid dos cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {benefits.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        delay: i * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                },
                            }}
                        >
                            <BenefitCard
                                title={item.title}
                                desc={item.desc}
                                delay={i * 0.15}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
