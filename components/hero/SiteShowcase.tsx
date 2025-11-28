"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
    "/sites/site1.jpg",
    "/sites/site2.jpg",
    "/sites/site3.jpg",
    "/sites/site4.jpg",
    "/sites/site5.jpg",
];

export default function SiteShowcase() {
    const [index, setIndex] = useState(0);
    const [prev, setPrev] = useState(0);
    const [direction, setDirection] = useState(1);

    // autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 4500);
        return () => clearInterval(interval);
    }, [index]);

    const goToNext = () => {
        setPrev(index);
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (i: number) => {
        setPrev(index);
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    };

    return (
        <div className="relative w-full h-[480px] overflow-hidden rounded-2xl shadow-xl bg-white">
            <div className="relative w-full h-full">

                {/* Slide anterior (fica por baixo) */}
                <motion.div
                    key={prev}
                    className="absolute inset-0"
                    initial={{ x: 0 }}
                    animate={{ x: direction === 1 ? "-100%" : "100%" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={slides[prev]}
                        alt="previous-slide"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Slide atual (entra por cima) */}
                <motion.div
                    key={index + "-current"}
                    className="absolute inset-0"
                    initial={{ x: direction === 1 ? "100%" : "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={slides[index]}
                        alt="current-slide"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Bullets */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`
                w-3 h-3 rounded-full transition-all
                ${i === index ? "bg-[#ffff] scale-125" : "bg-gray-400/40"}
              `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
