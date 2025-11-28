"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Image from "next/image";
import { useRef } from "react";

export default function FeatureShowcase() {
    const benefits = [
        "Aumenta a eficiência do seu fluxo",
        "Reduz custos operacionais",
        "Melhora a experiência do usuário",
        "Escala de forma inteligente",
    ];

    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

    return (
        <section ref={ref} className="relative w-full py-24 md:py-32 bg-white overflow-hidden">

            {/* Background parallax sutil */}
            <div className="absolute inset-0 pointer-events-none">

                {/* Grid muito sutil — agora cinza metálico */}
                <motion.div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(58,59,59,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(58,59,59,1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Blobs cinza premium */}
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl bg-[#8B8E8F]/20"
                    style={{ y: y1, opacity }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl bg-[#3A3B3B]/15"
                    style={{ y: y2, opacity }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                        Soluções feitas para{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">crescer</span>
                            <motion.span
                                className="absolute bottom-1 left-0 right-0 h-3 bg-[#3A3B3B]/20"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                            />
                        </span>
                        .
                    </h2>

                    <p className="mt-4 md:mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
                        Transformamos desafios em soluções digitais eficientes,
                        escaláveis e com design que realmente funciona.
                    </p>

                    {/* BENEFITS LIST */}
                    <ul className="mt-6 md:mt-8 space-y-4">
                        {benefits.map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-3 text-gray-700 text-base md:text-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                            >
                                <div className="w-6 h-6 rounded-md bg-[#3A3B3B]/10 flex items-center justify-center border border-[#3A3B3B]/25">
                                    <FiCheck className="text-[#3A3B3B]" />
                                </div>
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    {/* BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-8 px-6 py-3 bg-[#3A3B3B] text-white font-semibold rounded-xl shadow-md hover:bg-[#2A2B2B] transition"
                    >
                        Fale com a gente
                    </motion.button>
                </motion.div>

                {/* RIGHT SIDE – IMAGE */}
                <motion.div
                    className="relative w-full"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/Ipad.png"
                            alt="Imagem ilustrativa"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
