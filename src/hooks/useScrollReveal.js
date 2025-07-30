"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate a list of refs using gsap.from on scroll.
 * @param {Array} animations - array of objects { ref, options }
 */
export function useScrollReveal(animations) {
    useEffect(() => {
        animations.forEach(({ ref, options }) => {
            if (!ref?.current) return;

            gsap.from(ref.current, {
                ...options,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                    scroller: "body",
                    ...options?.scrollTrigger,
                },
            });
        });
    }, [animations]);
}
