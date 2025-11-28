"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const navLinks = ["Início", "Serviços", "Projetos", "Sobre", "Contato"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Nova cor do botão dentro da paleta
    const buttonBgColor = "bg-[#3A3B3B]";
    const buttonHover = "hover:bg-[#2A2B2B]";

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Branding */}
                <motion.h1
                    className="text-xl md:text-2xl font-semibold uppercase tracking-wider text-black select-none flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    Inove
                    <motion.span
                        className="ml-1 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        in
                        <motion.span
                            className="absolute left-0 bottom-[-2px] h-[2px] bg-black"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.55, duration: 0.4 }}
                        />
                    </motion.span>
                </motion.h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center mx-10">
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <motion.span
                                key={link}
                                className="relative text-black font-medium cursor-pointer transition hover:text-gray-600"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {link}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 hover:w-full" />
                            </motion.span>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group"
                >
                    <Button
                        className={`${buttonBgColor} text-white ${buttonHover} px-5 py-2 rounded-xl shadow-sm relative overflow-hidden`}
                    >
                        {/* Texto */}
                        <span className="relative z-20">Fale Conosco</span>

                        {/* GRADIENTE EM MOVIMENTO */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.5,
                                ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                        />

                        {/* LUXO */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />

                        {/* GLOW INTERNO */}
                        <motion.div
                            className="absolute inset-0 rounded-xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.4 }}
                        />
                    </Button>

                    {/* Glow externo */}
                    <motion.div
                        className="absolute inset-0 rounded-xl bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                        transition={{ duration: 0.4 }}
                    />
                </motion.div>



                {/* Ícone Mobile */}
                <button
                    className="md:hidden text-black text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className={`${buttonBgColor} px-6 py-6 border-t border-white/20 md:hidden`}
                    >
                        <ul className="flex flex-col space-y-6 text-white text-lg">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    {link}
                                </motion.li>
                            ))}
                        </ul>

                        <Button className="w-full mt-6 bg-white text-gray-900 cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-xl">
                            Fale Conosco
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
