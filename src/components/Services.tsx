/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileSearch, Calculator, GitMerge } from 'lucide-react';

const services = [
  {
    title: '第三方技术尽调报告',
    summary: '在交易签约前识别目标公司的代码资产质量、系统稳定性、技术债规模与关键单点风险。',
    highlights: ['代码资产健康度评估', '系统稳定性与可维护性判断', '隐藏技术债与爆雷点识别'],
    icon: FileSearch,
  },
  {
    title: '重构成本与接盘难度预估',
    summary: '不是只告诉你系统有问题，而是把问题折算成后续预算、周期与组织接盘压力。',
    highlights: ['重构工作量区间预估', '数据迁移与业务连续性风险', '关键模块替换难度判断'],
    icon: Calculator,
  },
  {
    title: '交割后技术整合建议',
    summary: '帮助投资并购方在交割后快速判断哪些系统该保留、哪些边界该隔离、哪些能力必须补位。',
    highlights: ['核心模块保留与隔离建议', '整合优先级与节奏判断', '团队能力补位提示'],
    icon: GitMerge,
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto" id="services">
      <div className="max-w-3xl space-y-4 mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-primary-gold block">
          Service Scope · 决策型服务交付
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight text-balance-cjk">
          你拿到的不是一堆技术术语，而是一份可用于决策的判断
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl text-balance-cjk">
          我交付的重点不是展示技术过程，而是帮助投资并购方在交易前后看清系统真实质量、接盘成本与整合顺序。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="glass-card rounded p-8 bg-dark-surface/70 border border-white/5 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded bg-primary-gold/10 border border-primary-gold/20 flex items-center justify-center mb-6">
                <Icon className="text-primary-gold" size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight text-balance-cjk">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed text-balance-cjk">
                {service.summary}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-gold flex-shrink-0" />
                    <span className="text-balance-cjk">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
