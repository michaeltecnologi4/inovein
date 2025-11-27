"use client";
import { motion } from "framer-motion";

export default function TechCluster() {
    return (
        <motion.div
            className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] mx-auto"
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
            {/* Glow de fundo */}
            <motion.div
                className="absolute -inset-10 bg-[#485C11]/10 blur-3xl rounded-full"
                animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Núcleo central */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                           w-24 h-24 md:w-28 md:h-28 
                           rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
                animate={{
                    scale: [1, 1.03, 1],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Shapes orbitando */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-7 h-7 md:w-8 md:h-8 rounded-lg 
                               bg-gradient-to-br from-[#8E9C78]/40 to-[#485C11]/40 
                               border border-white/10 shadow-md backdrop-blur-lg"
                    style={{
                        left: ["10%", "80%", "70%", "20%"][i],
                        top: ["15%", "25%", "75%", "60%"][i],
                    }}
                    animate={{
                        y: [0, -14, 0],
                        rotate: [0, 8, -6, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Orbitais (pontos luminosos) */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-white/40"
                    style={{ left: "50%", top: "50%" }}
                    animate={{
                        x: [
                            Math.cos(i * 60 * (Math.PI / 180)) * 60,
                            Math.cos(i * 60 * (Math.PI / 180)) * 80,
                            Math.cos(i * 60 * (Math.PI / 180)) * 60,
                        ],
                        y: [
                            Math.sin(i * 60 * (Math.PI / 180)) * 60,
                            Math.sin(i * 60 * (Math.PI / 180)) * 80,
                            Math.sin(i * 60 * (Math.PI / 180)) * 60,
                        ],
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </motion.div>
    );
}
