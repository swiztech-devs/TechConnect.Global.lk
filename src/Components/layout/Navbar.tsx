'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight, Mail, Phone } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6'
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company Overview', path: '/company-overview' },
    { name: 'Our Services', path: '/service-details' },
    { name: 'Our Projects', path: '/our-projects' },
    { name: 'Our Clients', path: '/our-clients' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center pt-6 px-6 pointer-events-none">
      
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isScrolled ? -20 : 0, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-7xl flex justify-between items-center px-8 mb-4 pointer-events-auto"
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Mail className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors tracking-widest uppercase">pm@mediconnect.com.lk</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 group cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-[#4A89C8]" />
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors tracking-widest uppercase">+94 70 799 3375</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-[#4A89C8] hover:bg-white/10 transition-all">
            <FaFacebookF size={12} />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-[#4A89C8] hover:bg-white/10 transition-all">
            <FaLinkedinIn size={12} />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-[#4A89C8] hover:bg-white/10 transition-all">
            <FaInstagram size={12} />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-[#4A89C8] hover:bg-white/10 transition-all">
            <FaXTwitter size={12} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`relative pointer-events-auto w-full max-w-7xl rounded-[2.5rem] transition-all duration-500 border flex items-center h-20 ${
          isScrolled 
            ? 'bg-[#020314]/80 backdrop-blur-3xl border-white/10 px-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] translate-y-[-30px]' 
            : 'bg-white/5 backdrop-blur-md border-white/10 px-6'
        }`}
      >
        <div className="flex justify-between items-center w-full h-full">
          
          <Link href="/" className="flex items-center group h-12">
            <div className="relative h-full w-auto flex items-center justify-center overflow-hidden rounded-xl">
              <img 
                src="/img/Logo-1.jpeg" 
                alt="TechConnect Logo" 
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 shadow-2xl"
              />
              <div className="absolute inset-0 bg-[#4A89C8]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 h-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative px-5 h-full flex items-center text-[9px] font-black uppercase tracking-[0.2em] transition-all rounded-full overflow-hidden ${
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

          <div className="hidden md:flex items-center h-12">
            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-full px-10 h-full border-white/10 text-white bg-white/5 hover:bg-white hover:text-[#020314] transition-all text-[10px] font-black uppercase tracking-widest shadow-xl"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-3 rounded-full bg-white/5 border border-white/10 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 20 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="absolute top-full left-0 right-0 mt-4 bg-[#020314] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden pointer-events-auto"
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
                
                <div className="mt-4 flex flex-col gap-4 px-5">
                   <div className="flex items-center gap-3 text-slate-400">
                      <Mail size={14} className="text-[#4A89C8]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">pm@mediconnect.com.lk</span>
                   </div>
                   <div className="flex items-center gap-3 text-slate-400">
                      <Phone size={14} className="text-[#4A89C8]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">+94 70 799 3375</span>
                   </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <Link href="/contact" className="w-full">
                    <Button className="w-full rounded-2xl bg-[#2B2E83] hover:bg-white hover:text-[#020314] h-16 text-xs font-black uppercase tracking-widest transition-all">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}