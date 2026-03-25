'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Intelligence', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-8 px-6 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`pointer-events-auto w-full max-w-7xl rounded-[2.5rem] transition-all duration-500 border flex items-center ${
          isScrolled 
            ? 'bg-[#020314]/70 backdrop-blur-3xl border-white/10 py-4 px-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent py-4 px-6'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          
          {/* --- LOGO ONLY SECTION --- */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-auto flex items-center justify-center">
              <img 
                src="/img/Logo-1.jpeg" 
                alt="TechConnect Logo" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl shadow-2xl"
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
              <div className="absolute inset-0 bg-[#4A89C8]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-7 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] transition-all rounded-full overflow-hidden ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#2B2E83] shadow-[0_0_20px_rgba(43,46,131,0.4)]" 
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* --- ACTION BUTTON --- */}
          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button
                variant="outline"
                // Added hover:text-[#020314] to ensure text is visible when bg turns white
                className="rounded-full px-10 h-12 border-white/10 text-white bg-white/5 hover:bg-white hover:text-[#020314] transition-all text-[10px] font-black uppercase tracking-widest shadow-xl"
              >
                Launch Console
              </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-3 rounded-full bg-white/5 border border-white/10 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="lg:hidden absolute top-32 left-6 right-6 bg-[#020314]/98 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/5 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-[#2B2E83] transition-all group"
                >
                  {link.name}
                  <ChevronRight size={18} className="text-[#4A89C8] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-white/5">
                <Button className="w-full rounded-2xl bg-[#2B2E83] hover:bg-white hover:text-[#020314] h-16 text-xs font-black uppercase tracking-widest transition-all">
                  Initialize Session
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}