import React from 'react';
import { Phone, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-white/5 py-16 px-6 md:px-16 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div className="space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-primary-gold block">
            Direct Contact · 决策沟通入口
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance-cjk">
            如果你正在评估一项交易，可以直接联系我
          </h3>
          <p className="text-base text-on-surface-variant max-w-2xl leading-relaxed text-balance-cjk">
            面向投资并购方、接盘企业与决策层的直接沟通入口。你可以直接电话说明项目背景，我会按技术资产质量、接盘风险与整合成本的视角来判断是否值得进一步尽调。
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="tel:18180622357"
              className="inline-flex items-center gap-2 bg-primary-gold text-black hover:bg-primary-gold-light px-6 py-3 rounded font-bold transition-all"
            >
              <Phone size={18} />
              立即电话联系
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded font-medium transition-all"
            >
              <FileText size={18} />
              查看尽调判断案例
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#151515] p-7 shadow-2xl space-y-5">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">
              Contact Line
            </div>
            <div className="font-display text-2xl md:text-3xl font-extrabold text-primary-gold">
              饶荣 / 超脑技术尽调
            </div>
          </div>

          <a
            href="tel:18180622357"
            className="flex items-center gap-3 bg-[#1d1c1c] border border-white/10 hover:border-primary-gold/50 px-5 py-4 rounded-lg transition-all group"
          >
            <Phone className="text-primary-gold group-hover:scale-110 transition-transform duration-300" size={18} />
            <span className="font-display text-lg md:text-2xl font-bold text-white group-hover:text-primary-gold-light transition-colors select-all">
              18180622357
            </span>
          </a>

          <div className="rounded-xl border border-white/5 bg-black/20 p-4 space-y-3">
            <div className="flex items-center gap-3 text-sm text-white">
              <Phone size={16} className="text-primary-gold flex-shrink-0" />
              <span className="text-on-surface-variant">电话 / 微信同号：</span>
              <span className="font-semibold select-all">18180622357</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white">
              <Mail size={16} className="text-primary-gold flex-shrink-0" />
              <span className="text-on-surface-variant">沟通方式：</span>
              <span className="font-semibold">建议先电话直联</span>
            </div>
            <div className="text-xs text-on-surface-variant leading-relaxed text-balance-cjk">
              适合沟通的事项：并购前技术尽调、代码资产评估、交割后技术接盘判断、重构成本预估。
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-on-surface-variant/50 font-medium">
        <p>© 2026 超脑技术尽调 | 饶荣 | 蜀ICP备2025172911号</p>
      </div>

      <a
        href="tel:18180622357"
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-gold text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform z-30 md:hidden border border-white/20"
        aria-label="一键电话咨询"
      >
        <Phone size={22} className="text-black" />
      </a>
    </footer>
  );
}
