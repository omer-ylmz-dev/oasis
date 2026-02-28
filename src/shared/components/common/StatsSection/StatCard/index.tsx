'use client'


import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from "../StatsSection.module.scss"
import { statCardVariants, statViewportConfig } from '../StatsSection.animation';

interface StatCardProps {
    value: string;
    label: string;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
    const match = value.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/)
    if (!match) return { prefix: '', number: 0, suffix: value }
    return {
        prefix: match[1],
        number: parseFloat(match[2].replace(',', '.')),
        suffix: match[3],
    }
}

export default function StatCard({ value, label }: StatCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const [count, setCount] = useState(0)
    const { prefix, number, suffix } = parseValue(value)

    useEffect(() => {
        if (!isInView) return

        const duration = 2000
        const steps = 60
        const increment = number / steps
        let current = 0
        let step = 0

        const timer = setInterval(() => {
            step++
            current = Math.min(increment * step, number)
            setCount(Math.round(current * 10) / 10)
            if (step >= steps) clearInterval(timer)
        }, duration / steps)

        return () => clearInterval(timer)
    }, [isInView, number])

    const displayValue = Number.isInteger(number)
        ? `${prefix}${Math.round(count)}${suffix}`
        : `${prefix}${count.toFixed(1)}${suffix}`

    return (
        <motion.div
            ref={ref}
            className={styles.stat}
            variants={statCardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={statViewportConfig}
        >
            <h1>{isInView ? displayValue : `${prefix}0${suffix}`}</h1>
            <hr />
            <p>{label}</p>
        </motion.div>
    )
}

