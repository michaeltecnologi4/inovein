"use client";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export function BenefitCard({ title, desc, delay = 0 }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group h-full"
        >
            {/* Container da borda animada */}
            <div className="relative p-[1.5px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#8B8E8F]/20 via-[#CCC8C8]/30 to-[#8B8E8F]/20 h-full">

                {/* Borda animada */}
                <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 3,
                    }}
                    style={{
                        background: `conic-gradient(
                            from 0deg,
                            #8B8E8F 0deg,
                            #8B8E8F 45deg,
                            #CCC8C8 90deg,
                            #CCC8C8 135deg,
                            #8B8E8F 180deg,
                            #8B8E8F 225deg,
                            #CCC8C8 270deg,
                            #CCC8C8 315deg,
                            #8B8E8F 360deg
                        )`,
                        opacity: 0.4,
                    }}
                />

                {/* Conteúdo */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                    {/* Glow no hover */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: "radial-gradient(circle at 50% 0%, rgba(58,59,59,0.05) 0%, transparent 70%)",
                        }}
                    />

                    {/* Ícone */}
                    <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.07, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 260 }}
                    >
                        <div className="relative">

                            {/* Glow animado */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3A3B3B] to-[#8B8E8F] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Ícone container */}
                            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3A3B3B]/10 via-[#CCC8C8]/15 to-[#3A3B3B]/10 flex items-center justify-center border border-[#3A3B3B]/20 group-hover:border-[#3A3B3B]/40 transition-all duration-300">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                >
                                    <FiCheck className="text-2xl text-[#3A3B3B] transition-colors duration-300" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Título */}
                    <motion.h3
                        className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#3A3B3B] transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: delay + 0.1 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h3>

                    {/* Descrição */}
                    <motion.p
                        className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300 flex-grow"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: delay + 0.2 }}
                        viewport={{ once: true }}
                    >
                        {desc}
                    </motion.p>

                </div>
            </div>
        </motion.div>
    );
}
