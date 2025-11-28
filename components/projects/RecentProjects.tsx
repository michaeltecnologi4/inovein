"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
    {
        id: "01",
        title: "Flux CRM Experience",
        desc: "Cockpit completo para squads de vendas com dashboards dinâmicos, automação e assistente IA plugado no CRM.",
        tags: ["Product design", "Next.js", "Workflows"],
        stats: "+38% leads qualificados",
        image: "/hero1.png",
        palette: {
            border: "border-[#D3D3D3]",
            accent: "rgba(139,142,143,0.07)",
        },
    },
    {
        id: "02",
        title: "NovaPay Commerce",
        desc: "E-commerce modular com recomendações generativas, voice bot de suporte e checkout em 30 segundos.",
        tags: ["E-commerce", "IA generativa", "Chatbot"],
        stats: "+52% ticket médio",
        image: "/Ipad.png",
        palette: {
            border: "border-[#DEDEDE]",
            accent: "rgba(204,200,200,0.08)",
        },
    },
    {
        id: "03",
        title: "Pulse Banking Hub",
        desc: "Portal Fintech com microinterações, gráficos em tempo real e autenticação segura conectada ao core bancário.",
        tags: ["Fintech", "Motion", "Realtime"],
        stats: "NPS 92",
        image: "/hero1.png",
        palette: {
            border: "border-[#B0B0AC]",
            accent: "rgba(176,176,172,0.08)",
        },
    },
];

export default function RecentProjects() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

    return (
        <section ref={ref} className="relative w-full overflow-hidden py-28 bg-[#EDEDED]">

            {/* === BG SYSTEM — Matching BenefitsBanner === */}
            <div className="absolute inset-0 pointer-events-none">

                {/* Mesh gradient premium */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(circle at 25% 25%, #DEDEDE 0%, transparent 55%),
                            radial-gradient(circle at 75% 72%, #B0B0AC 0%, transparent 60%),
                            radial-gradient(circle at 50% 55%, #8B8E8F 0%, transparent 65%)
                        `,
                    }}
                />

                {/* Metallic diagonal lines — idênticas ao banner */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)",
                    }}
                />

                {/* Soft center glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[850px] h-[850px] rounded-full bg-white/25 blur-[180px]"
                    style={{ x: parallax1, y: parallax2 }}
                />
            </div>

            {/* === CONTENT === */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">

                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-[#3A3B3B]/70">
                            <span className="w-2 h-2 rounded-full bg-[#3A3B3B]" />
                            projetos recentes
                        </span>

                        <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight">
                            Resultados reais, experiências memoráveis.
                        </h2>

                        <p className="mt-4 text-gray-700 text-lg max-w-2xl">
                            Experiências digitais com profundidade, performance e microinterações sob medida.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-wrap gap-3"
                    >
                        {["Web", "Mobile", "SaaS", "IA"].map((pill) => (
                            <span
                                key={pill}
                                className="px-4 py-2 rounded-full border border-[#3A3B3B]/20 bg-white text-sm text-gray-700"
                            >
                                {pill}
                            </span>
                        ))}
                    </motion.div>

                </div>

                {/* Featured Case */}
                <motion.div
                    className="relative rounded-3xl bg-white shadow-xl border border-[#D0D0D0] overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

                        <div className="p-10 flex flex-col gap-7">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#CFCFCF] px-4 py-2 bg-white text-[#3A3B3B] font-semibold text-sm">
                                <span className="w-2 h-2 bg-[#3A3B3B] rounded-full" />
                                Case em destaque
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                                Dynamic Insights Hub
                            </h3>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                Dashboards em tempo real, gamificação e assistente cognitivo integrado.
                                Um portal completo para healthtechs modernas.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { label: "Prazo", value: "12 semanas" },
                                    { label: "Stack", value: "Next.js + Edge" },
                                    { label: "Resultado", value: "+64% uso diário" },
                                ].map((item) => (
                                    <div key={item.label} className="border bg-white/70 border-[#D8D8D8] rounded-2xl p-4">
                                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                                            {item.label}
                                        </p>
                                        <p className="mt-1 text-[#1A1A1A] font-semibold">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {["IA conversacional", "Motion system", "Data viz"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 rounded-full bg-[#F4F4F4] border border-[#D0D0D0] text-sm text-[#3A3B3B]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            className="relative bg-[#F2F2F2] flex items-center justify-center p-10"
                            animate={{ scale: [1, 1.015, 1], opacity: [1, 0.97, 1] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#DCDCDC] opacity-60"
                                animate={{ x: ["-6%", "6%", "-6%"] }}
                                transition={{ duration: 7, repeat: Infinity }}
                            />

                            <div className="relative w-full max-w-xl">
                                <motion.div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/Ipad.png"
                                        alt="Projeto destaque"
                                        width={900}
                                        height={700}
                                        className="w-full"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cards.map((project, idx) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`relative rounded-3xl border ${project.palette.border} bg-white overflow-hidden group shadow-lg`}
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-400"
                                style={{ background: project.palette.accent }}
                            />

                            <div className="relative z-10 p-6 h-full flex flex-col gap-5">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-[#3A3B3B] tracking-[0.4em] uppercase">
                                        {project.id}
                                    </p>
                                    <span className="text-xs uppercase tracking-[0.3em] text-gray-500">case</span>
                                </div>

                                <div className="rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src={project.image}
                                        width={600}
                                        height={400}
                                        className="h-44 w-full object-cover"
                                        alt={project.title}
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-[#1A1A1A]">{project.title}</h3>
                                <p className="text-gray-600">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-white border border-[#D6D6D6]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-[#ECECEC] text-[#3A3B3B] text-sm font-medium">
                                    <span>{project.stats}</span>
                                    <span className="flex items-center gap-2 text-[#1A1A1A]">
                                        Ver estudo →
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}
