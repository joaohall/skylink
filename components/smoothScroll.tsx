'use client';
import { PropsWithChildren, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({children}:PropsWithChildren) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        window.scrollTo(0,0);
        
        const lenis = new Lenis()
        
        function raf(time:any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return children
}