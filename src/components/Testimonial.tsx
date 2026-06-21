/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-28 bg-[#131313] border-y border-white/5 relative overflow-hidden">
      {/* Subtle Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        {/* Floating Quote Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-gold/10 border border-primary-gold/20 text-primary-gold mb-2">
          <Quote size={24} />
        </div>

        {/* Core quote statement */}
        <blockquote className="space-y-4">
          <p className="font-display text-2xl md:text-4xl font-extrabold leading-relaxed text-white tracking-tight text-glow text-balance-cjk">
            “ 技术尽调不是判断代码写得漂不漂亮，
            <br />
            而是判断这套系统在交易完成之后，
            <br />
            会不会持续吞掉预算、时间和团队。 ”
          </p>
        </blockquote>

        {/* Signature Citation */}
        <div className="pt-4 flex flex-col items-center">
          <span className="h-0.5 w-12 bg-primary-gold/45 mb-4 rounded"></span>
          <cite className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold not-italic text-balance-cjk">
            — 饶荣 · 超脑技术尽调报告
          </cite>
        </div>
      </div>
    </section>
  );
}
