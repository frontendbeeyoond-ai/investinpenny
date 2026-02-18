'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
  const Icons = {

    Shield: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  };
export const Navigation = () => {
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  const navLinks = [
    { name: 'Analysis', href: '/#analysis' },
    { name: 'Sentiment', href: '/#sentiment' },
    { name: 'Community', href: '/#community' },
    { name: 'Experts', href: '/#experts' },
    { name: 'Blog', href: '/#blog' },
    { name: 'About Us', href: '/about' },
  ]

  const handleHashScroll = (e, href) => {
    if (href.startsWith('#') && pathname === '/') {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold">
            <Icons.Shield />
          </div>
          <Link href="/" className="text-lg md:text-[15px]  gap-3 lg:text-[15px] font-bold gradient-text">
            Invest in Penny
          </Link>
        </div>

        {/* CENTER: Desktop Nav */}
        <div className="hidden text-[10px] md:ml-2 md:text-[12px] lg:text-[14px] md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 md:gap-4 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashScroll(e, link.href)}
                className={`transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* RIGHT: Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 transition-all duration-500 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="mx-4 rounded-2xl bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleHashScroll(e, link.href)
                    setOpen(false)
                  }}
                  className="text-gray-300 hover:text-white transition text-lg"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white transition text-lg"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
