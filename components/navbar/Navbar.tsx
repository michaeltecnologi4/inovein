"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const navLinks = ["Início", "Serviços", "Projetos", "Sobre", "Contato"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Cor de fundo do botão
    const buttonBgColor = "bg-[#485C11]"; // Cor #485C11

    return (
        // 1. Fundo branco, sem blur. Borda inferior preta
        <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Branding (Lado Esquerdo) */}
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
                        {/* Cor da linha inferior do branding mudada para preta */}
                        <motion.span
                            className="absolute left-0 bottom-[-2px] h-[2px] bg-black"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.55, duration: 0.4 }}
                        />
                    </motion.span>
                </motion.h1>

                {/* Desktop Menu (Centralizado) */}
                {/* 2. e 3. Alteração para centralizar os links e colocar o botão à direita */}
                <div className="hidden md:flex flex-1 justify-center mx-10"> {/* flex-1 para ocupar o espaço */}
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <motion.span
                                key={link}
                                // Texto em preto. Cor da linha inferior mudada para preta
                                className="relative text-black font-medium cursor-pointer hover:text-gray-700 transition"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {link}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 hover:w-full" />
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Botão (Lado Direito) */}
                <div className="hidden md:flex">
                    <Button
                        // 4. Cor de fundo do botão para #485C11
                        className={`${buttonBgColor} text-white hover:bg-[#394B0D] border border-transparent px-5 py-2 rounded-xl shadow-sm`}
                    >
                        Fale Conosco
                    </Button>
                </div>


                {/* Mobile Menu Icon (Ícone em preto) */}
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
                        // 5. Cor de fundo do menu mobile alterada para combinar com o botão. Texto em branco.
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

                        {/* Botão no Mobile (Fundo branco para destaque) */}
                        <Button className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100 border border-white/50 rounded-xl">
                            Fale Conosco
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}