"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Componente para o Fundo de Grade Animada
const AnimatedGridBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Camada da Grade */}
        <motion.div
            className="absolute inset-0"
            style={{
                backgroundImage: 'linear-gradient(to right, rgba(224, 224, 224, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(224, 224, 224, 0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}
            animate={{
                backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {/* Efeito de Aurora/Luz Sutil */}
            <motion.div
                className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(72, 92, 17, 0.15) 0%, rgba(142, 156, 120, 0.1) 50%, rgba(255, 255, 255, 0) 70%)',
                }}
                animate={{
                    x: ["0%", "5%", "0%"],
                    y: ["0%", "5%", "0%"],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>

        {/* Partículas flutuantes */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#485C11]/20"
                style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                }}
            />
        ))}

        {/* Camada de Fundo Principal */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
    </div>
);

// Componente de texto animado
const AnimatedText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
        >
            {children}
        </motion.span>
    );
};

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-white">
            {/* Fundo de Grade Animada */}
            <AnimatedGridBackground />

            {/* Título com animação de palavras */}
            <motion.div
                className="max-w-5xl mx-auto px-4 md:px-6 text-center z-10"
                style={{ opacity }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <AnimatedText delay={0.1}>Transformando</AnimatedText>{" "}
                    <motion.span
                        className="relative inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="relative z-10">ideias</span>
                        <motion.span
                            className="absolute bottom-2 left-0 right-0 h-3 bg-[#485C11]/20 -z-0"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            style={{ transformOrigin: "left" }}
                        />
                    </motion.span>
                    <AnimatedText delay={0.5}>.</AnimatedText>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    className="mt-6 md:mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    Criamos experiências digitais que conectam, inspiram e transformam.
                </motion.p>
            </motion.div>

            {/* Imagem com parallax */}
            <motion.div
                className="relative mt-12 md:mt-16 w-full max-w-6xl px-4 md:px-6 z-20"
                style={{ y }}
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    className="rounded-2xl md:rounded-3xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                "0 35px 60px -12px rgba(72, 92, 17, 0.3)",
                                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/Ipad.png"
                            alt="Mockup"
                            width={1600}
                            height={900}
                            className="rounded-2xl md:rounded-3xl w-full h-auto"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Base estilizada animada */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[7vh] w-[85%] md:w-[90%] max-w-7xl h-[100px] md:h-[300px] bg-[#8E9C78] rounded-[30px] md:rounded-[40px] z-10 shadow-xl"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    className="absolute inset-0 rounded-[30px] md:rounded-[40px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}