/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-28 bg-[#131313] border-y border-white/5 relative overflow-hidden" id="remedy-concept">
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
            “ AI能写代码，但
            <span className="text-primary-gold italic">写不出20年的架构判断力</span>
            。
            <br />
            架构的本质不是底层框架的简单堆砌，
            <br />
            而是在一片混乱与繁芜中，寻得最稳固的那根秩序准绳。 ”
          </p>
        </blockquote>

        {/* Signature Citation */}
        <div className="pt-4 flex flex-col items-center">
          <span className="h-0.5 w-12 bg-primary-gold/45 mb-4 rounded"></span>
          <cite className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold not-italic text-balance-cjk">
            — 饶荣 · 超脑信息技术服务 首席架构师
          </cite>
        </div>
      </div>
    </section>
  );
}
