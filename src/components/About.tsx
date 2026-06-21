/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, User, Award, Shield } from 'lucide-react';

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
              Years of Architecture
            </p>
          </div>
        </div>

        {/* Right Side: Professional Biography */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-primary-gold font-mono block">
              EXPERTISE PROFILE · 首席重构专家
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
              <User size={28} className="text-primary-gold" />
              关于我
            </h2>
          </div>

          <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
            <p>
              作为拥有
              <span className="text-white font-bold">20年一线实战经验</span>
              的高级软件架构师，我曾执掌与见证了多轮技术浪潮的更迭。在资本与行业疯狂“追逐新技术”的浮躁时代，我却选择扎根于那些支撑着大型企业核心命脉、却在时光洗礼下愈发笨重的
              <strong className="text-primary-gold-light">“历史遗留系统”</strong>。
            </p>
            <p>
              我深信遗留系统的生命力在于平滑而持久的演进，而不是野蛮的彻底推倒重来。我最擅长的是为复杂庞杂的主线系统开展
              <strong className="text-white font-bold">“微创手术”</strong>
              式的改造。在确保最关键核心业务连续不中断的前提下，精准割离不合理的耦合结构、层层驯化脏乱的烂账代码、并有序升级老化的数据网络。
            </p>
            <p className="italic text-primary-gold bg-primary-gold/5 px-4 py-3 border-l-2 border-primary-gold rounded font-medium">
              “对于企业最核心的生产数据资产，稳定压倒一切。”
            </p>
          </div>

          {/* Technical check bullets */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-white/90 whitespace-nowrap">
              <CheckCircle2 size={18} className="text-primary-gold flex-shrink-0" />
              <span className="text-sm font-semibold">微服务高可靠渐进解耦</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 whitespace-nowrap">
              <CheckCircle2 size={18} className="text-primary-gold flex-shrink-0" />
              <span className="text-sm font-semibold">海量异构数据库平滑迁移</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 whitespace-nowrap">
              <CheckCircle2 size={18} className="text-primary-gold flex-shrink-0" />
              <span className="text-sm font-semibold">黑盒业务高防度重构测试</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
