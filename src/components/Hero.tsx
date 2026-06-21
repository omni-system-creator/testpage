/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Sparkles, TrendingDown, ShieldAlert, ArrowDown } from 'lucide-react';
import { Metric } from '../types';

export default function Hero() {
  const metrics: Metric[] = [
    { value: '20年', label: '复杂系统判断与遗留资产识别经验' },
    { value: '并购前', label: '识别隐藏技术债、接盘难度与整合风险' },
    { value: '交割后', label: '辅助评估重构预算、接盘节奏与稳定性边界' },
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
            Superbrain Tech Due Diligence · 第三方技术尽调报告
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
            并购前，先看清这套系统到底值不值得接
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-on-surface-variant font-medium tracking-wide max-w-3xl mx-auto text-balance-cjk"
          >
            面向投资并购方的第三方技术尽调服务。在交易签约前识别代码资产质量、系统稳定性、历史技术债规模、后续重构成本与接盘风险，避免账面看起来能跑，接手后才发现底层全是隐性炸弹。
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:18180622357"
            className="group px-8 py-4 bg-primary-gold hover:bg-primary-gold-light text-black font-bold rounded shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,163,115,0.4)]"
          >
            <Phone size={18} className="group-hover:rotate-6 transition-transform" />
            电话沟通技术尽调需求
          </a>
          <a
            href="#cases"
            className="px-8 py-4 border border-primary-gold text-primary-gold hover:bg-primary-gold/10 font-bold rounded transition-all text-center flex items-center justify-center gap-2"
          >
            查看尽调判断案例
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
