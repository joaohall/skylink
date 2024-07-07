"use client";
import { getWindowSize } from "@/utils";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

//Types
import { image } from "@/utils/interfaces";

export function NavBar() {
  const links = {
    "/sobre": "Sobre",
    "/servicos": "Serviços",
    "/contatos": "Contato",
  };

  const navIcon: image = {
    source: "/icons/NavbarIcon.svg",
    alternativeText: undefined!,
    width: 100,
    height: 60,
  };
  const buttonIcon: image = {
    source: "/icons/menuIcon.svg",
    alternativeText: undefined!,
    width: 25,
    height: 25,
  };

  const [pressed, setPressed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setPressed(!pressed);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  };

  return (
    <header className="fixed w-screen z-50">
      <div className="fixed">
        <AnimatePresence mode="wait">
          {pressed ? (
            <motion.div
              key={"menu"}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              }}
              className={`flex flex-col fixed h-screen justify-end p-12 text-3xl gap-2 font-semibold w-screen bg-purple-950 bg-opacity-75`}
            >
              {Object.entries(links).map(([url, text], index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                    rotateX: 90,
                    translateY: 80,
                    translateX: -20,
                  }}
                  animate={{
                    opacity: 1,
                    rotateX: 0,
                    translateY: 0,
                    translateX: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.9, 0.2, 0.99],
                    delay: 0.5 + index * 0.1,
                  }}
                  key={text}
                >
                  <Link href={url} key={text}>
                    {text}
                  </Link>
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <span className="hidden"></span>
          )}
        </AnimatePresence>
      </div>
      <nav className="max-w-[1440px] flex flex-row justify-between p-12 m-auto">
        <Link href={"/"}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0, 0.9, 0.2, 0.99], delay: 0 }}
          >
            <Image
              alt={navIcon.alternativeText}
              src={navIcon.source}
              width={navIcon.width}
              height={navIcon.height}
            />
          </motion.div>
        </Link>
        <div className="hidden gap-12 text-xl md:flex">
          {Object.entries(links).map(([url, text], index) => (
            <motion.div
              className="font-semibold"
              key={text}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.9, 0.2, 0.99],
                delay: 0.3 + index * 0.2,
              }}
            >
              <Link href={url} key={text}>
                {text}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.9, 0.2, 0.99],
            delay: 0.3,
          }}
          key={"buttonMenu"}
          className={"relative z-50 flex md:hidden"}
          disabled={isDisabled}
          onClick={handleClick}
        >
          <Image
            src={buttonIcon.source}
            alt={buttonIcon.alternativeText}
            width={buttonIcon.width}
            height={buttonIcon.height}
          />
        </motion.button>
      </nav>
    </header>
  );
}
