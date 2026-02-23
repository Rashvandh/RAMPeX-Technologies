import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, useMotionValueEvent } from "framer-motion";

interface CounterProps {
    value: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
}

export default function Counter({
    value,
    direction = "up",
    delay = 0,
    duration = 2,
    className,
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const displayValue = useTransform(springValue, (latest) =>
        Math.round(latest).toLocaleString()
    );
    useMotionValueEvent(displayValue, "change", (latest) => {
        if (ref.current) {
            ref.current.textContent = latest;
        }
    });

    useEffect(() => {
        if (isInView) {
            const timeoutId = setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [motionValue, isInView, delay, value, direction]);

    return <span ref={ref} className={className}>{direction === "down" ? value.toLocaleString() : "0"}</span>;
}
