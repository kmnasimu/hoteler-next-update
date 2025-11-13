'use client';

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
    end: number;
    duration: number;
}

export default function Counter({ end, duration }: CounterProps) {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLSpanElement>(null)
    const increment = end / duration
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [started])

    useEffect(() => {
        if (!started) return;

        const interval = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + increment
                if (newCount >= end) {
                    clearInterval(interval)
                    return end
                } else {
                    return newCount
                }
            })
        }, 1000 / duration)

        return () => {
            clearInterval(interval)
        }
    }, [end, increment, duration, started])

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    )
}


