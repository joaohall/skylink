import { useState, useEffect, PropsWithChildren } from "react";

// Types
import { sizes } from "./interfaces";


export function getWindowSize(debug?: boolean): sizes {
    'use client';
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [windowSize, setWindowSize] = useState<sizes>({
        height: undefined!,
        width: undefined!,
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            });
            if (debug) {
                console.log({
                    height: window.innerHeight,
                    width: window.innerWidth,
                });
            }
        };

        handleWindowResize(); // Set initial size
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [debug]);

    return windowSize;
}


