"use client"; 

import React, { useState, useRef, forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  magnetic?: boolean
}

// Use forwardRef to properly type motion.button + TS
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className = '',
      magnetic = true,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return
      const { clientX, clientY } = e
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
      const x = (clientX - (left + width / 2)) * 0.2
      const y = (clientY - (top + height / 2)) * 0.2
      setPosition({ x, y })
    }

    const handleMouseLeave = () => {
      if (!magnetic) return
      setPosition({ x: 0, y: 0 })
    }

    const baseStyles =
      'relative inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-[0_4px_14px_0_rgba(43,46,131,0.39)] hover:shadow-[0_6px_20px_rgba(43,46,131,0.23)]',
      secondary:
        'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-[0_4px_14px_0_rgba(74,137,200,0.39)] hover:shadow-[0_6px_20px_rgba(74,137,200,0.23)]',
      accent:
        'bg-accent text-primary hover:bg-yellow-400 focus:ring-accent font-semibold shadow-[0_4px_14px_0_rgba(251,191,36,0.39)] hover:shadow-[0_6px_20px_rgba(251,191,36,0.23)] animate-pulse-glow',
      outline:
        'border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-200 bg-white shadow-sm',
      ghost:
        'text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-200',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <motion.button
        ref={(node) => {
          // attach both refs: forwardRef + local ref
          buttonRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as MotionProps)} // <-- cast props to MotionProps to avoid TS conflict
      >
        {(variant === 'primary' || variant === 'secondary' || variant === 'accent') && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </motion.button>
    )
  }
)

Button.displayName = 'Button' // important when using forwardRef