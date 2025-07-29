"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/backtotopbutton.css";

gsap.registerPlugin(ScrollTrigger);

export default function BackToTop() {
    const circleRef = useRef();

    useEffect(() => {
        const circle = circleRef.current;
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        gsap.to(circle, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });

        gsap.to(".back-to-top", {
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
                trigger: document.body,
                start: "top+=1000 top",
                toggleActions: "play none none reverse",
            },
        });

    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button onClick={scrollToTop} className="back-to-top">
            <svg className="progress-ring" width="40" height="40">
                <circle
                    ref={circleRef}
                    className="progress-ring__circle"
                    stroke="white"
                    strokeWidth="3"
                    fill="transparent"
                    r="18"
                    cx="20"
                    cy="20"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
                <polygon
                    className="progress-ring__polygon"
                    points="20,12 12,26 28,26"
                    fill="white"
                />
            </svg>
        </button>
    );
}
