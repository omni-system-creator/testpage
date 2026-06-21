/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Shield, FileText, Check, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  onOpenCallback: () => void;
}

export default function Footer({ onOpenCallback }: FooterProps) {
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);

  const handleLegalOpen = (type: 'terms' | 'privacy') => {
    setLegalModal(type);
  };

  return (
    <footer className="bg-dark-surface border-t border-white/5 py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Side: Brand branding */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="font-display text-xl md:text-2xl font-extrabold text-primary-gold tracking-tight select-all">
            超脑信息技术服务
          </h3>
          <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
            随时来电，免费技术会诊。让我们聊聊您当前的组件瓶颈与生命周期现状。
          </p>
        </div>

        {/* Right Side: Contact info & terms/agreements */}
        <div className="flex flex-col items-center md:items-end gap-5">
          <a
            href="tel:18180622357"
            className="flex items-center gap-3 bg-[#1d1c1c] border border-white/10 hover:border-primary-gold/50 px-6 py-3.5 rounded-lg transition-all group"
          >
            <Phone className="text-primary-gold group-hover:scale-110 transition-transform duration-300" size={18} />
            <span className="font-display text-lg md:text-2xl font-bold text-white group-hover:text-primary-gold-light transition-colors select-all">
              18180622357
            </span>
          </a>

          {/* Quick legal links */}
          <div className="flex gap-4 md:gap-5 text-xs text-on-surface-variant font-medium">
            <button
              onClick={onOpenCallback}
              className="hover:text-primary-gold transition-colors"
            >
              电话咨询
            </button>
            <span className="text-white/10 select-none">|</span>
            <button
              onClick={() => handleLegalOpen('terms')}
              className="hover:text-primary-gold transition-colors"
            >
              服务条款
            </button>
            <span className="text-white/10 select-none">|</span>
            <button
              onClick={() => handleLegalOpen('privacy')}
              className="hover:text-primary-gold transition-colors"
            >
              隐私政策
            </button>
          </div>
        </div>
      </div>

      {/* Copyright notes */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-on-surface-variant/50 font-medium">
        <p>© 2026 超脑信息技术服务 | 蜀ICP备2025172911号</p>
      </div>

      {/* Persistent Floating FAB for Mobile Quick Dialing */}
      <a
        href="tel:18180622357"
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-gold text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform z-30 md:hidden border border-white/20"
        aria-label="一键电话咨询"
      >
        <Phone size={22} className="text-black" />
      </a>

      {/* AnimatePresence for terms / privacy placeholder overlays */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="absolute inset-0 bg-[#000]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-md bg-[#131313] border border-white/10 rounded p-6 shadow-2xl z-10"
            >
              <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
                {legalModal === 'terms' ? (
                  <>
                    <FileText className="text-primary-gold" size={18} />
                    <h4 className="font-bold text-white font-display text-sm">《超脑技术 · 服务条款说明》</h4>
                  </>
                ) : (
                  <>
                    <Shield className="text-primary-gold" size={18} />
                    <h4 className="font-bold text-white font-display text-sm">《超脑技术 · 用户隐私保护政策》</h4>
                  </>
                )}
              </div>

              <div className="text-xs text-on-surface-variant leading-relaxed space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                {legalModal === 'terms' ? (
                  <>
                    <p>一、本条款旨在厘清超脑技术（统称“我方”）与申请进行遗留系统改造的企业（统称“客户方”）在技术评估时的权责关系。</p>
                    <p>二、所有通过本平台生成的自测或体检分数，皆系依据客户提交之表面代码体积、主观现象进行之初步风险推演，不等同于在硬件物理层面做出的严密测试论证，亦不构成我方的强制民事代偿约定。</p>
                    <p>三、具体改造与重构的收费标准，需由双方派员对特定代码段、历史系统架构开展精细化现场盘点并制定《定制化遗留改迁承包协议书》为准。</p>
                  </>
                ) : (
                  <>
                    <p>一、作为资深遗留代码拯救专家，我们深知核心系统逻辑对企业而言意味着难以估量的商业机密资产。因此对您的隐私信息给予极限级别保护是超脑技术的生存红线。</p>
                    <p>二、任何您在体检表单、回电预订栏种留存的公司名、姓名及联系电话，我们将采取严格的安全物理沙箱进行单独物理隔断存储，绝不用以此重构、会诊之外的第三方渠道，永不向外界分发无关推销骚扰。</p>
                    <p>三、若后续评估合作不达预期，您可随时下达指令要求我方一键永久粉碎并剔除包含电话信息在内的所有线上系统痕迹。</p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setLegalModal(null)}
                  className="px-4 py-1.5 bg-primary-gold hover:bg-primary-gold-light text-black font-semibold rounded text-xs transition-colors"
                >
                  已阅，返回页面
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
