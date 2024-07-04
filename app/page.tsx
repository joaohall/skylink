"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [pressed, setPressed] = useState<boolean>();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <AnimatePresence>
        {pressed && (
          <motion.div
            key={"menu"}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
          >
            <h1>teste</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setPressed(!pressed);
        }}
      >
        testebuttao
      </button>
    </main>
  );
}
