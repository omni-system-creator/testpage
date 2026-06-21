/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, Clipboard, Award, ShieldAlert, Zap, Clock, ShieldCheck, RefreshCw, Phone } from 'lucide-react';
import { DiagnosisReport } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    age: '5-10',
    lines: '100k-500k',
    symptom: 'nobody-knows',
    impact: 'revenue-loss',
    contactName: '',
    contactPhone: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  // Calculate diagnosis score on the fly
  const calculateDiagnosis = (): DiagnosisReport => {
    let score = 25; // base score

    if (answers.age === '10+') score += 25;
    else if (answers.age === '5-10') score += 18;
    else if (answers.age === '3-5') score += 10;

    if (answers.lines === 'above-2m') score += 25;
    else if (answers.lines === '500k-2m') score += 18;
    else if (answers.lines === '100k-500k') score += 10;

    if (answers.symptom === 'nobody-knows') score += 25;
    else if (answers.symptom === 'deploy-hours') score += 20;
    else if (answers.symptom === 'cpu-lock') score += 18;
    else if (answers.symptom === 'no-tests') score += 12;

    if (answers.impact === 'reputation') score += 25;
    else if (answers.impact === 'revenue-loss') score += 20;
    else if (answers.impact === 'secondary-loss') score += 10;

    // Constrain score
    score = Math.min(100, Math.max(10, score));

    let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW';
    let status = '正常运行 (良好)';
    let primaryRisk = '暂无重大架构硬伤，属于常规维护期。';

    if (score >= 80) {
      riskLevel = 'CRITICAL';
      status = '生命垂危 (极高风险)';
      primaryRisk = '业务逻辑严重流失，核心技术债务极深。部署、扩容已经出现瓶颈，随时有雪崩或大范围离线风险。';
    } else if (score >= 60) {
      riskLevel = 'HIGH';
      status = '高危状态 (高风险)';
      primaryRisk = '系统模块严重耦合，存在多个数据孤岛，日常维护易牵一发动全身，属于“祖传代码”典型病灶。';
    } else if (score >= 35) {
      riskLevel = 'MEDIUM';
      status = '亚健康状态 (重度负债)';
      primaryRisk = '局部开始积压重构债务，发布较为笨重，若缺乏精准的绞杀和重构将持续恶化。';
    }

    // Build adaptive remedies based on symptoms
    const remedyRoadmap = ['遗留代码结构与逻辑脉络「微创探测」诊疗'];
    if (answers.symptom === 'nobody-knows') {
      remedyRoadmap.push('绞杀者模式 (Strangler Fig Pattern) 分层逻辑剥离');
      remedyRoadmap.push('建立黑盒边界契约测试防线 (Anti-Corruption Layer)');
    } else if (answers.symptom === 'deploy-hours') {
      remedyRoadmap.push('实现弹性云原生容器集群改造 + 现代 CI/CD 极速部署流');
      remedyRoadmap.push('热点逻辑微断裂分离，支持零停机滚动更新');
    } else if (answers.symptom === 'cpu-lock') {
      remedyRoadmap.push('数据库读写高性能平滑分离 + 湖仓一体化治理');
      remedyRoadmap.push('热点高频主干路径加设高性能二级缓存防护墙');
    } else {
      remedyRoadmap.push('代码库精准渐进式微解耦治理（Domain-Driven 拆分）');
    }
    remedyRoadmap.push('20年资深专家线下亲授架构落地实施路线');

    return {
      score,
      riskLevel,
      status,
      primaryRisk,
      remedyRoadmap,
      estimatedTimeline: score >= 80 ? '3~6 个月（周期解耦）' : '1~3 个月（微重构）',
      estimatedCostSaving: score >= 60 ? '45% 运维与硬件开销节省' : '25% 团队研发心智负担降低',
    };
  };

  const report = calculateDiagnosis();

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.contactName || !answers.contactPhone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsBooked(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#000]/80 backdrop-blur-md"
      />

      {/* Modal Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative w-full max-w-2xl bg-[#131313] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        id="diagnostic-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#181818]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-gold animate-ping"></span>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-gold font-display">
              系统深度健康自测 & 专家诊疗方案
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1"
            aria-label="关闭"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-6 flex-1 bg-[#101010]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-white font-display">步骤 1/3：评估您的系统规格</h3>
                  <p className="text-sm text-on-surface-variant mt-1">
                    基本物理指标决定了历史积怨的深度和结构。
                  </p>
                </div>

                <div className="space-y-5">
                  {/* System Age Field */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-white/80">1. 系统生产服役时长 (从初代上线算起)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { val: '1-3', label: '1 - 3年 (偶现耦合)' },
                        { val: '3-5', label: '3 - 5年 (中度债务)' },
                        { val: '5-10', label: '5 - 10年 (深度混杂)' },
                        { val: '10+', label: '10年以上 (高位骨灰级)' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setAnswers({ ...answers, age: opt.val })}
                          className={`px-4 py-3 text-left rounded text-sm transition-all border ${
                            answers.age === opt.val
                              ? 'bg-primary-gold/10 border-primary-gold text-primary-gold font-medium'
                              : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-white/70'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Code Line Count Field */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-white/80">2. 预估核心逻辑总代码量 (LOC)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { val: 'under-100k', label: '小于 10万行' },
                        { val: '100k-500k', label: '10万 - 50万行' },
                        { val: '500k-2m', label: '50万 - 200万行' },
                        { val: 'above-2m', label: '超过 200万行 (泥潭系统)' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setAnswers({ ...answers, lines: opt.val })}
                          className={`px-4 py-3 text-left rounded text-sm transition-all border ${
                            answers.lines === opt.val
                              ? 'bg-primary-gold/10 border-primary-gold text-primary-gold font-medium'
                              : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-white/70'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary-gold hover:bg-primary-gold-light text-black font-semibold rounded text-sm transition-all hover:shadow-[0_0_15px_rgba(212,163,115,0.3)]"
                  >
                    下一步
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-white font-display">步骤 2/3：选择最棘手「顽疾症状」</h3>
                  <p className="text-sm text-on-surface-variant mt-1">
                    不同的临床症状，对应着截然不同的重构解法与微创战法。
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Key Symptom */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-white/80">3. 系统当前最难容忍的问题核心</label>
                    <div className="space-y-2.5">
                      {[
                        { val: 'nobody-knows', label: '无人敢动：文档缺失，原班人马全部流失，修改核心代码全凭运气', desc: '需要：建立防腐边界并实施绞杀者解耦' },
                        { val: 'deploy-hours', label: '部署漫长：停机发布时间极长（数小时），发布一次如同历劫', desc: '需要：热滚动平滑更新与弹性微服务分解' },
                        { val: 'cpu-lock', label: '大促死锁：高并发时CPU爆满、数据库频繁发生锁死，原架构触碰瓶颈', desc: '需要：读写分离、主从同步与分布式分流设计' },
                        { val: 'no-tests', label: '零自动化测试：没有自动化保障，回归测试效率低下，全靠人肉排雷', desc: '需要：静态代码边界围栏与集成自动化插装' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setAnswers({ ...answers, symptom: opt.val })}
                          className={`w-full p-4 text-left rounded text-sm transition-all border block ${
                            answers.symptom === opt.val
                              ? 'bg-primary-gold/10 border-primary-gold text-primary-gold'
                              : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-white/70'
                          }`}
                        >
                          <div className="font-semibold">{opt.label}</div>
                          <div className="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue inline-block"></span>
                            {opt.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact Field */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-white/80">4. 若系统因历史隐患停机 1 小时，业务蒙受的损失</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { val: 'secondary-loss', label: '轻微扰动但能接受' },
                        { val: 'revenue-loss', label: '中重度直接收益与流失' },
                        { val: 'reputation', label: '遭受天价罚款 / 全行公关危机' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setAnswers({ ...answers, impact: opt.val })}
                          className={`px-3 py-3 text-left rounded text-sm transition-all border ${
                            answers.impact === opt.val
                              ? 'bg-primary-gold/10 border-primary-gold text-primary-gold font-medium'
                              : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10 text-white/70'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 border border-white/10 hover:bg-white/5 text-white/70 rounded text-sm transition-all"
                  >
                    返回
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary-gold hover:bg-primary-gold-light text-black font-semibold rounded text-sm transition-all hover:shadow-[0_0_15px_rgba(212,163,115,0.3)]"
                  >
                    生成诊疗报告
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Score Summary Billboard */}
                <div className="p-6 bg-[#161616] border border-white/5 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-center md:border-r md:border-white/10 py-2">
                    <span className="text-xs text-on-surface-variant uppercase tracking-widest block font-display">遗留系统系统险度指数</span>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className={`text-4xl font-extrabold font-display leading-none ${
                        report.score >= 80 ? 'text-red-400' : report.score >= 55 ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {report.score}
                      </span>
                      <span className="text-white/40 text-xl font-light">/ 100</span>
                    </div>
                  </div>

                  <div className="col-span-2 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-white">评诊等级:</span>
                      <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                        report.riskLevel === 'CRITICAL'
                          ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                          : report.riskLevel === 'HIGH'
                          ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                          : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <span className="text-primary-gold-light font-medium">病变研判：</span>
                      {report.primaryRisk}
                    </p>
                  </div>
                </div>

                {/* Treatment details */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display flex items-center gap-1.5">
                    <Clipboard size={16} className="text-primary-gold" />
                    定制改造重构诊疗方案 (微创降解路线)
                  </h4>
                  <div className="bg-[#1c1b1b] p-4 rounded-lg space-y-3.5 border border-white/5">
                    {report.remedyRoadmap.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-gold/10 text-primary-gold text-xs flex items-center justify-center font-bold font-display mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-white/90 leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational outcomes */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-[#161616] border border-white/5 rounded">
                      <div className="text-xs text-on-surface-variant flex items-center gap-1">
                        <Clock size={12} className="text-accent-blue" />
                        预估实施窗口
                      </div>
                      <div className="text-sm font-semibold text-white mt-1">{report.estimatedTimeline}</div>
                    </div>
                    <div className="p-3 bg-[#161616] border border-white/5 rounded">
                      <div className="text-xs text-on-surface-variant flex items-center gap-1">
                        <Zap size={12} className="text-primary-gold" />
                        长远运维损耗降幅
                      </div>
                      <div className="text-sm font-semibold text-white mt-1">{report.estimatedCostSaving}</div>
                    </div>
                  </div>
                </div>

                {/* Submit Form Block */}
                {!isBooked ? (
                  <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                    <div className="text-center space-y-1">
                      <h4 className="text-base font-bold text-white font-display">保留此体检诊疗方案 & 预约 20分钟 免费电话会诊</h4>
                      <p className="text-xs text-on-surface-variant">专家饶荣承诺：决不泄露代码细节，直接提供脱敏的技术病灶指引。</p>
                    </div>

                    <form onSubmit={handleBook} className="space-y-4 bg-[#141414] p-4 rounded border border-white/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">您的贵姓/称呼</label>
                          <input
                            type="text"
                            required
                            placeholder="如：张经理 / 李工"
                            value={answers.contactName}
                            onChange={(e) => setAnswers({ ...answers, contactName: e.target.value })}
                            className="w-full px-3 py-2 bg-black border border-white/10 rounded focus:border-primary-gold focus:outline-none text-sm text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">联系电话 / 微信同号</label>
                          <input
                            type="tel"
                            required
                            placeholder="如：13800000000"
                            value={answers.contactPhone}
                            onChange={(e) => setAnswers({ ...answers, contactPhone: e.target.value })}
                            className="w-full px-3 py-2 bg-black border border-white/10 rounded focus:border-primary-gold focus:outline-none text-sm text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">系统简述或附言 (可选)</label>
                        <textarea
                          placeholder="例如系统开发语言，或更具体的系统问题..."
                          rows={2}
                          value={answers.notes}
                          onChange={(e) => setAnswers({ ...answers, notes: e.target.value })}
                          className="w-full px-3 py-2 bg-black border border-white/10 rounded focus:border-primary-gold focus:outline-none text-sm text-white resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-2.5 bg-primary-gold hover:bg-primary-gold-light text-black font-semibold rounded text-sm transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(212,163,115,0.4)] disabled:opacity-50"
                      >
                        {submitting ? (
                          <>
                            <RefreshCw size={14} className="animate-spin" />
                            提交申请中...
                          </>
                        ) : (
                          <>
                            <Phone size={14} />
                            确认提交，预约诊疗回电
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 bg-primary-gold/10 border border-primary-gold/30 rounded text-center space-y-2.5 mt-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-gold/20 text-primary-gold flex items-center justify-center mx-auto">
                      <Check size={20} />
                    </div>
                    <h5 className="font-bold text-primary-gold font-display text-base">您的电话诊疗方案预约成功！</h5>
                    <p className="text-xs text-white/80 leading-relaxed max-w-md mx-auto">
                      主架构师 <span className="font-bold text-white">饶荣</span> 将会在 48 小时内与您电联（{answers.contactPhone}），在正式通话前，您已受保脱敏与安全承诺。
                    </p>
                  </motion.div>
                )}

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2 border border-white/10 hover:bg-white/5 text-white/70 rounded text-sm transition-all"
                  >
                    返回症状评估
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded text-sm transition-all"
                  >
                    关闭窗口
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
