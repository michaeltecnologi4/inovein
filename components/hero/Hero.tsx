"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SiteShowcase from "./SiteShowcase";

// Fundo com grade animada + entrada
const AnimatedGridBackground = () => (
    <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        {/* Grade */}
        <motion.div
            className="absolute inset-0"
            style={{
                backgroundImage:
                    "linear-gradient(to right, rgba(224,224,224,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(224,224,224,0.25) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
        >
            {/* Aurora */}
            <motion.div
                className="absolute w-[250%] h-[250%] -top-[60%] -left-[60%]"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(72,92,17,0.12) 0%, rgba(142,156,120,0.1) 40%, transparent 70%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3 }}
                animate={{
                    x: ["0%", "6%", "0%"],
                    y: ["0%", "6%", "0%"],
                    rotate: [0, 180, 360],
                }}
            />
        </motion.div>

        {/* Partículas */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#485C11]/20"
                style={{
                    left: `${15 + i * 12}%`,
                    top: `${25 + (i % 3) * 18}%`,
                }}
                initial={{ opacity: 0, scale: 0, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileInView={{
                    y: [0, -25, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.4, 1],
                }}
            />
        ))}

        {/* camada branca */}
        <motion.div
            className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
        />
    </motion.div>
);

// Texto animado
const AnimatedText = ({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
        >
            {children}
        </motion.span>
    );
};

export default function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 md:pt-32 pb-20 overflow-hidden bg-white">
            <AnimatedGridBackground />

            {/* TITULO */}
            <motion.div
                className="max-w-5xl mx-auto px-4 text-center z-10"
                style={{ opacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
            >
                <motion.h1
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    <AnimatedText delay={0.3}>Transformando</AnimatedText>{" "}
                    <motion.span
                        className="relative inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                    >
                        <span className="relative z-10">ideias</span>
                        <motion.span
                            className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-[#485C11]/20 z-0"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            style={{ transformOrigin: "left" }}
                        />
                    </motion.span>
                    <AnimatedText delay={0.8}>.</AnimatedText>
                </motion.h1>

                {/* SUBTITULO */}
                <motion.p
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                >
                    Cada site nasce para ser único. Unimos criatividade,
                    autenticidade e estratégias inteligentes para levar marcas além,
                    alcançando mais pessoas e resultados melhores.
                </motion.p>
            </motion.div>

            {/* MOCKUP / SHOWCASE */}
            <motion.div
                className="relative mt-10 sm:mt-14 w-full max-w-6xl px-4 z-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
            >
                <motion.div
                    className="rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 15px 35px rgba(0,0,0,0.15)",
                                "0 25px 55px rgba(72, 92, 17, 0.25)",
                                "0 15px 35px rgba(0,0,0,0.15)",
                            ],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="relative w-full mx-auto p-2 sm:p-4">
                            <div className="relative rounded-2xl sm:rounded-[30px] bg-gray-100 border border-gray-300 shadow-xl overflow-hidden">
                                <motion.div
                                    className="relative p-3 sm:p-5 bg-[#333] rounded-xl overflow-hidden"
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.45 }}
                                >
                                    <SiteShowcase />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* BASE ANIMADA */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-[6vh] w-[90%] max-w-6xl h-[80px] sm:h-[140px] md:h-[240px] rounded-[26px] sm:rounded-[32px] md:rounded-[40px] z-10 shadow-xl"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(139,142,143,1) 0%, rgba(204,200,200,1) 24%, rgba(222,222,222,1) 80%, rgba(176,176,172,1) 100%)",
                }}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.9 }}
            >
                <motion.div
                    className="absolute inset-0 rounded-[26px] sm:rounded-[32px] md:rounded-[40px] bg-linear-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </section>
    );
}
