/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Terminal, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 bg-[#131313]/80 backdrop-blur-xl border-b border-white/10 h-20">
      <nav className="flex justify-between items-center px-4 md:px-16 max-w-7xl mx-auto h-full">
        {/* Core Branding */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded border border-primary-gold/30 flex items-center justify-center bg-primary-gold/5 group-hover:border-primary-gold transition-colors duration-300">
            <Terminal className="text-primary-gold" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base md:text-lg font-bold tracking-tight text-white leading-tight whitespace-nowrap">
              超脑技术尽调
            </span>
            <span className="text-[10px] text-on-surface-variant font-mono tracking-widest leading-none whitespace-nowrap">
              SUPERBRAIN TECH DUE DILIGENCE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-sm text-on-surface-variant hover:text-white transition-colors duration-200 nav-underline font-medium"
            href="#services"
          >
            尽调服务
          </a>
          <a
            className="text-sm text-on-surface-variant hover:text-white transition-colors duration-200 nav-underline font-medium"
            href="#cases"
          >
            案例判断
          </a>
          <a
            className="text-sm text-on-surface-variant hover:text-white transition-colors duration-200 nav-underline font-medium"
            href="#about"
          >
            专家判断
          </a>
          <a
            className="text-sm text-on-surface-variant hover:text-white transition-colors duration-200 nav-underline font-medium"
            href="#contact"
          >
            直接联系
          </a>
          <a
            href="tel:18180622357"
            className="bg-primary-gold/15 text-primary-gold border border-primary-gold/30 hover:border-primary-gold hover:bg-primary-gold/25 px-5 py-2 rounded text-sm transition-all font-semibold active:scale-98 relative overflow-hidden"
          >
            电话沟通
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white hover:bg-white/5 p-1.5 rounded border border-white/10"
          aria-label="菜单"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-[#131313] border-b border-white/10 flex flex-col p-6 space-y-4 md:hidden shadow-2xl z-50 overflow-hidden"
          >
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white text-base py-1 border-b border-white/5 font-medium"
            >
              尽调服务
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white text-base py-1 border-b border-white/5 font-medium"
            >
              案例判断
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-white text-base py-1 border-b border-white/5 font-medium"
            >
              专家判断
            </a>
            <a
              href="tel:18180622357"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-gold-light text-base py-1 border-b border-white/5 flex items-center gap-1 font-medium"
            >
              <Phone size={14} className="text-primary-gold" />
              18180622357
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:18180622357"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-primary-gold text-black hover:bg-primary-gold-light py-2.5 rounded font-bold text-sm tracking-wide shadow"
              >
                电话沟通技术尽调需求
              </a>
              <a
                href="#cases"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2.5 rounded text-sm font-medium"
              >
                查看尽调判断案例
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
