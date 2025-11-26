"use client";
import { motion } from "framer-motion";

export default function BenefitsBanner() {
    return (
        <motion.section
            className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#485C11]/80 via-[#8E9C78]/60 to-[#485C11]/90 text-white py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-14 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >

            {/* Soft Glow Blobs */}
            <motion.div
                className="absolute top-[-120px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[#8E9C78]/35 blur-[100px]"
                animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] rounded-full bg-[#485C11]/35 blur-[120px]"
                animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Thin Tech Lines */}
            <motion.div
                className="absolute right-16 top-12 w-32 h-[2px] bg-white/20"
                animate={{ width: ["30px", "90px", "60px", "30px"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute left-10 bottom-14 h-28 w-[2px] bg-white/10"
                animate={{ height: ["40px", "120px", "80px", "40px"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">

                {/* TEXT SIDE */}
                <motion.div
                    className="max-w-3xl"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Inovação com{" "}
                        <motion.span
                            className="relative inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="relative z-10">propósito</span>
                            <motion.span
                                className="absolute bottom-2 left-0 right-0 h-3 bg-white/30 -z-0"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                            />
                        </motion.span>
                        .
                    </motion.h2>

                    <motion.p
                        className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Soluções digitais criadas com inteligência e autenticidade.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-[#485C11] font-semibold shadow-lg hover:shadow-2xl transition-all text-sm md:text-base relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="relative z-10">Conversar agora</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#485C11]/10 to-[#8E9C78]/10 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </motion.div>

                {/* RIGHT SIDE – Minimal Interactive Cluster */}
                <motion.div
                    className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] mx-auto"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >

                    {/* Caixa central */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 w-20 h-20 md:w-24 md:h-24 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
                        whileHover={{
                            rotate: [0, 6, -6, 0],
                            scale: 1.08,
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Shapes flutuando */}
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-[#8E9C78]/40 to-[#485C11]/40 border border-white/10 backdrop-blur-lg shadow-md"
                            style={{
                                left: [20, 170, 110, 160][i],
                                top: [20, 60, 160, 20][i],
                            }}
                            animate={{
                                y: [0, -14, 0],
                                rotate: [0, 10, -8, 0],
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Orbitais */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2.5 h-2.5 rounded-full bg-white/30"
                            style={{
                                left: "50%",
                                top: "50%",
                            }}
                            animate={{
                                x: [
                                    Math.cos(i * 72 * (Math.PI / 180)) * 55,
                                    Math.cos(i * 72 * (Math.PI / 180)) * 75,
                                    Math.cos(i * 72 * (Math.PI / 180)) * 55,
                                ],
                                y: [
                                    Math.sin(i * 72 * (Math.PI / 180)) * 55,
                                    Math.sin(i * 72 * (Math.PI / 180)) * 75,
                                    Math.sin(i * 72 * (Math.PI / 180)) * 55,
                                ],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 6 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
