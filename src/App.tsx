/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Cases from './components/Cases';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] selection:bg-primary-gold selection:text-black">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-0" />

      {/* Main Layout Navigation Sticky Header */}
      <Header />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Core Hero Screen */}
        <Hero />

        {/* Decision-driven service products */}
        <Services />

        {/* Bio Expert Showcase Section */}
        <About />

        {/* Case Studies Container Grid */}
        <Cases />

        {/* Visionary Philosophical Quote Section */}
        <Testimonial />
      </main>

      {/* Corporate Lead Contact Footer */}
      <Footer />
    </div>
  );
}
