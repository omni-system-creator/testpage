/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, User } from 'lucide-react';

export default function About() {
  const avatarUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBqX1Oig6nywVYKwrqtwDnXH1fs_u1MWYcmXFBWqnmUpmXDh9nGv4_ZOTYT0kVwccTPx3UGEJaYKAhmMF9QsngXKG7QiJF6b5cq_kW1WqZSQcHX_kX2DSAT3uoF8II3XLyYZMcJtBmyfBMyQb6cPsIIgXV7lZbiBVZYpxOqikjRb_nMnLgwcXoreOUlqlasjNxkrAF2toYqWExhhfnswtaTyZUWSQC4422T0BmLVFRlTKohW7sIxGqdMOnUGQpFBrtXrqTeAW8H7iBQ";

  return (
    <section className="py-24 bg-dark-surface-lowest border-y border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-12 items-center">
        {/* Left Side: Photo Frame with badge below */}
        <div className="group flex flex-col items-center md:items-start">
          <div className="aspect-square relative max-w-sm w-full rounded p-1.5 border border-white/10 bg-dark-surface/60 overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover rounded transition-all duration-700 ease-in-out transform group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              src={avatarUrl}
              alt="高级软件架构师"
            />
          </div>

          <div className="mt-5 w-fit self-start md:ml-3 px-5 py-4 bg-primary-gold text-black rounded shadow-2xl flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform">
            <span className="font-display text-3xl font-extrabold leading-none">20+</span>
            <p className="text-[10px] tracking-wider uppercase font-mono font-bold text-black/80 whitespace-nowrap leading-none">
              Years of Judgment
            </p>
          </div>
        </div>

        {/* Right Side: Professional Biography */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-primary-gold font-mono block">
              Decision Credibility · 第三方判断依据
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
              <User size={28} className="text-primary-gold" />
              为什么这份判断值得信任
            </h2>
          </div>

          <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
            <p>
              我做这件事的价值，不在于比别人更会写代码，而在于我看过足够多复杂系统是如何在交付、增长、并购整合和团队交接中逐步失控的。二十多年的一线经历，让我能更早识别那些藏在表面可运行背后的
              <strong className="text-primary-gold-light">技术债、单点依赖、稳定性裂缝与接盘风险</strong>。
            </p>
            <p>
              对投资并购方来说，技术尽调最重要的不是知道系统“用了什么框架”，而是知道它到底能不能接、接下来要补多少钱、需要多长时间、会不会影响交割后的经营稳定。我擅长把这些技术问题翻译成
              <strong className="text-white font-bold">决策层听得懂、能用于判断交易价值</strong>
              的结论。
            </p>
            <p className="italic text-primary-gold bg-primary-gold/5 px-4 py-3 border-l-2 border-primary-gold rounded font-medium">
              “一份技术尽调报告的价值，不是指出代码写得差，而是提前暴露会影响估值、整合周期与后续投入的系统风险。”
            </p>
          </div>

          {/* Technical check bullets */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-white/90 whitespace-nowrap">
              <CheckCircle2 size={18} className="text-primary-gold flex-shrink-0" />
              <span className="text-sm font-semibold">识别隐藏技术债与单点风险</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 whitespace-nowrap">
              <CheckCircle2 size={18} className="text-primary-gold flex-shrink-0" />
              <span className="text-sm font-semibold">预估接盘难度与整合成本</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 whitespace-nowrap">
              <CheckCircle2 size={18} className="text-primary-gold flex-shrink-0" />
              <span className="text-sm font-semibold">把技术问题翻译成决策语言</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
