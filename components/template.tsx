"use client";

import React, { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  // Função de animação
  const anim = (
    variants: {
      initial: { top?: number; opacity?: number };
      enter: (i: number) => {
        top?: string;
        opacity?: number;
        transition: { duration: number; delay: number; ease: number[] };
        transitionEnd?: { height?: string; top?: string };
      };
      exit: (i: number) => {
        height?: string;
        opacity?: number;
        transition: { duration: number; delay: number; ease: number[] };
      };
    },
    custom: number | null = null
  ) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  // Definições de animação expand
  const expand = {
    initial: {
      top: 0,
    },
    enter: (i: number) => ({
      top: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
      transitionEnd: { height: "0", top: "0" },
    }),
    exit: (i: number) => ({
      height: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  // Definições de animação opacity
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
  };

  const nbOfColumns = 5;

  function Animation({ children }: PropsWithChildren) {
    return (
      <motion.div transition={{ ease: "easeInOut", duration: 0.75 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed w-full h-screen z-[200] pointer-events-none top-0 left-0"
        />

        <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-[200]">
          {Array.from({ length: nbOfColumns }).map((_, i) => (
            <motion.div
              key={i}
              className="relative h-full w-full bg-purple-700"
              {...anim(expand, nbOfColumns - i)}
            />
          ))}
        </div>
        {children}
      </motion.div>
    );
  }

  return <Animation>{children}</Animation>;
}
