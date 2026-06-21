/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, Sparkles, TrendingDown, ShieldAlert, ArrowDown } from 'lucide-react';
import { Metric } from '../types';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  const metrics: Metric[] = [
    { value: '30+', label: '企业核心系统改造经验' },
    { value: '40%', label: '平均系统维护及存储成本降幅' },
    { value: '100%', label: '核心业务数据零泄漏、平滑安全迁移' },
  ];

  return (
    <section className="relative pt-36 pb-20 min-h-[85vh] flex items-center justify-center overflow-hidden px-5 md:px-16">
      {/* Decorative Background Accents */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-primary-gold/15 via-transparent to-transparent opacity-45 pointer-events-none blur-[140px]" />
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        {/* Animated Sub-header Chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-surface-card border border-white/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-gold"></span>
          </span>
          <span className="font-mono text-xs text-on-surface-variant font-medium tracking-widest uppercase text-balance-cjk">
            超脑信息技术服务 · 20年架构重构沉淀
          </span>
        </motion.div>

        {/* Hero Headlines */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-7xl font-extrabold leading-tight text-white tracking-tight text-balance-cjk"
          >
            专治各类<span className="text-primary-gold text-glow select-all">“祖传代码”</span>顽疾
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-on-surface-variant font-medium tracking-wide max-w-3xl mx-auto text-balance-cjk"
          >
            本源重构拯救专家 | 业务不停机，0事故平滑迁移 | 打通企业老旧核心生命脉搏
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onOpenDiagnostic}
            className="group px-8 py-4 bg-primary-gold hover:bg-primary-gold-light text-black font-bold rounded shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,163,115,0.4)]"
          >
            <ClipboardCheck size={18} className="group-hover:rotate-6 transition-transform" />
            自测系统健康报告 (获取免费体检)
          </button>
          <a
            href="#cases"
            className="px-8 py-4 border border-primary-gold text-primary-gold hover:bg-primary-gold/10 font-bold rounded transition-all text-center flex items-center justify-center gap-2"
          >
            查看成功案例
            <ArrowDown size={16} />
          </a>
        </motion.div>

        {/* Core Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8"
        >
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded border border-white/5 bg-dark-surface-lowest flex flex-col justify-center items-center hover:border-primary-gold/10 transition-all group hover:bg-[#121212]"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-4xl md:text-5xl font-extrabold text-primary-gold tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {metric.value}
                </span>
                {idx === 0 && <Sparkles className="text-primary-gold/40" size={16} />}
                {idx === 1 && <TrendingDown className="text-accent-blue/45" size={16} />}
                {idx === 2 && <ShieldAlert className="text-emerald-500/40" size={16} />}
              </div>
              <span className="text-xs font-medium text-on-surface-variant tracking-wider uppercase mt-3">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
