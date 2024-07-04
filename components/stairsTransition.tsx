"use client"

import React, { PropsWithChildren } from 'react'
import { motion } from 'framer-motion';

export default function Layout({children}: PropsWithChildren, backgroundColor:string) {

    const anim = (variants: { initial: { top: number; } | { opacity: number; }; enter: ((i: number) => { top: string; transition: { duration: number; delay: number; ease: number[]; }; transitionEnd: { height: string; top: string; }; }) | { opacity: number; }; exit: ((i: any) => { height: string; transition: { duration: number; delay: number; ease: number[]; }; }) | { opacity: number; }; }, custom=null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

     const expand = {
        initial: {
          top: 0,
        },
        enter: (i:number) => ({
          top: "100vh",
          transition: {
            duration: 0.4,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1],
          },
          transitionEnd: { height: "0", top: "0" },
        }),
        exit: (i:number) => ({
          height: "100vh",
          transition: {
            duration: 0.4,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1],
          },
        }),
      };
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
    const nbOfColumns = 5
    return (
        <div className='' style={{ backgroundColor }}>
        <motion.div {...anim(opacity)} className='fixed w-full h-screen bg-neutral-600 z-[200] pointer-events-none top-0 left-0' />
        <div className='fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-[200]'>
          {
            [...Array(nbOfColumns)].map((_, i) => {
              return (
                <motion.div className='relative h-full w-full bg-purple-700' key={i} {...anim(expand, nbOfColumns - i)} />
              );
            })
          }
        </div>
        {children}
      </div>
    )
}