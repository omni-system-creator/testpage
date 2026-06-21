/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, PhoneCall, ShieldCheck, Clock, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferTime: 'afternoon',
    topic: 'microservices',
    customNotes: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);

    // Simulate database write / trigger callback sequence
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#000]/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-md bg-[#131313] border border-white/10 rounded overflow-hidden shadow-2xl z-10"
        id="callback-modal"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#181818]">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-gold font-display flex items-center gap-1.5">
            <PhoneCall size={14} />
            预约架构专家面对面闭门回电
          </span>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 bg-[#101010]">
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-on-surface-variant leading-relaxed">
                请填写贵司遗留业务的大致诉求，饶老师会在约定时段拨冗致电，深度分析技术瓶颈。
              </p>

              {/* Name field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">您的姓名 / 尊称</label>
                <input
                  type="text"
                  required
                  placeholder="如：刘主管"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-white/10 rounded focus:border-primary-gold focus:outline-none text-sm text-white"
                />
              </div>

              {/* Phone field */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">直连电话号码</label>
                <input
                  type="tel"
                  required
                  placeholder="如：13551252357"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-white/10 rounded focus:border-primary-gold focus:outline-none text-sm text-white"
                />
              </div>

              {/* Category selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">主要重构方向</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-white/10 rounded focus:border-primary-gold focus:outline-none text-sm text-white"
                >
                  <option value="microservices">微服务化拆分 & 代码解耦</option>
                  <option value="migration">大量老旧异构数据库安全平滑迁移</option>
                  <option value="performance">高并发大促负载下的系统死锁解决</option>
                  <option value="other">其他历史遗留代码全盘拯救</option>
                </select>
              </div>

              {/* Prefer timing */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">期望专家致电时间</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {[
                    { val: 'morning', label: '工作日上午 09:00 - 12:00', icon: Clock },
                    { val: 'afternoon', label: '工作日下午 14:00 - 18:00', icon: Clock },
                  ].map((time) => {
                    const IconComp = time.icon;
                    return (
                      <button
                        key={time.val}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferTime: time.val })}
                        className={`p-3 text-left rounded text-xs transition-all border flex flex-col ${
                          formData.preferTime === time.val
                            ? 'bg-primary-gold/10 border-primary-gold text-primary-gold font-medium'
                            : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-white/70'
                        }`}
                      >
                        <div className="font-semibold flex items-center gap-1">
                          <IconComp size={12} />
                          {time.val === 'morning' ? '早间段' : '午后段'}
                        </div>
                        <div className="text-[10px] text-on-surface-variant mt-1 leading-none">{time.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Note / Append */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">特殊说明 (可选)</label>
                <textarea
                  placeholder="可简述当前的框架版本或并发痛点..."
                  rows={2}
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-white/10 rounded focus:border-primary-gold focus:outline-none text-xs text-white resize-none"
                />
              </div>

              {/* Secure note badge */}
              <div className="p-2.5 bg-emerald-500/5 rounded border border-emerald-500/10 flex items-start gap-2">
                <ShieldCheck className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
                <span className="text-[10px] text-emerald-400/80 leading-relaxed">
                  安全承诺：我们严格坚守脱敏红线协议。在签署正规意向之前，不会收集任何涉及账户秘钥、核心源代码与核心机密业务细节。
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary-gold hover:bg-primary-gold-light text-black font-extrabold flex items-center justify-center gap-2 rounded text-sm transition-all shadow hover:shadow-[0_0_15px_rgba(212,163,115,0.4)] disabled:opacity-50"
                >
                  {loading ? '回电数据封包中...' : '提交回电，接单派发'}
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check size={24} />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-white text-base font-display">专属电话会诊已预约成功！</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  系统已将您的联系信息和重构需求派发至主架构师饶荣处。会有专员或者饶荣老师在您期望的
                  <span className="text-primary-gold font-bold">
                    {formData.preferTime === 'morning' ? '上午时段' : '下午时段'}
                  </span>
                  与您取得联系（{formData.phone}），请保持网络畅通。
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2 bg-white/5 border border-white/10 text-white rounded text-xs hover:bg-white/10 transition-all font-semibold"
              >
                确定，关闭窗口
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
