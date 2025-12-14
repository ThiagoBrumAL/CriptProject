import type { ReactNode } from "react"
import { motion, type HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode
}

export function ButtonRoot ({ children, ...rest }: ButtonProps) {
    return (
        <motion.button 
            whileHover={{ scale: 1.01 }}
            animate={{ animationDuration: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className='bg-indigo-700 py-3 px-4 rounded-lg flex gap-3 items-center justify-center'
            { ...rest }
            >
                { children }
        </motion.button>
    )
}