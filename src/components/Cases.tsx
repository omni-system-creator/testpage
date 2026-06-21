/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Database, CloudLightning, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { CaseStudy } from '../types';

export default function Cases() {
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);

  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      iconName: 'warning',
      title: '并购前发现核心账务系统高度耦合，后续重构成本远超预期',
      finding: '目标公司核心账务系统运行多年但缺少清晰边界，发布仍依赖停机窗口，关键知识被少数老员工掌握。',
      impact: '如果按原估值完成交易，收购方在交割后将承担额外的重构预算，并面临核心业务连续性与人员交接风险。',
      action: '建议在交易条款中增加技术整合成本预留，并将账务主链路纳入交割后优先隔离计划。',
      badgeLabel: '高耦合账务系统',
      badgeColor: 'error',
    },
    {
      id: 'case-2',
      iconName: 'database',
      title: '目标公司数据架构分裂，交割后整合风险被严重低估',
      finding: '多个地区库表标准不一，异构数据库长期并存，数据对账依赖人工补单与本地经验，管理层看不到真实的数据一致性成本。',
      impact: '并购后若直接推进集团级整合，将快速暴露数据冲突、对账延迟与跨团队协同成本，影响经营看板可信度。',
      action: '建议在交易前完成数据资产分层盘点，并将统一口径与同步链路建设列为整合预算的独立项目。',
      badgeLabel: '数据整合风险',
      badgeColor: 'primary',
    },
    {
      id: 'case-3',
      iconName: 'cloud_upload',
      title: '业务仍在增长，但底层架构已影响持续经营稳定性',
      finding: '高并发期间 CPU 与数据库锁冲突集中爆发，现有单体架构无法支撑业务峰值，核心支付路径缺少弹性冗余。',
      impact: '如果收购后继续按原业务规划扩张，平台将在高峰节点持续暴露可用性风险，拖累营收兑现与品牌信任。',
      action: '建议在估值与整合方案中纳入容量治理与热点链路改造成本，并设定交割后首阶段稳定性提升目标。',
      badgeLabel: '持续经营风险',
      badgeColor: 'secondary',
    },
  ];

  const processDetails: Record<string, { riskLevel: string; reviewFocus: string[]; recommendation: string; timing: string }> = {
    'case-1': {
      riskLevel: '高风险：影响交割后核心业务连续性与知识交接。',
      reviewFocus: [
        '核查发布是否依赖停机、人工脚本或口口相传的隐性流程。',
        '梳理账务主链路的耦合边界，判断是否存在无法拆分的核心单点。',
        '确认关键岗位是否存在单人掌控核心知识的组织锁定风险。',
      ],
      recommendation: '建议在交易条款中预留重构预算，并要求卖方配合完成关键系统交接清单与过渡期支持。',
      timing: '适合在 LOI 后、交割前的技术深度核查阶段开展。',
    },
    'case-2': {
      riskLevel: '中高风险：影响整合效率、经营分析口径与协同成本。',
      reviewFocus: [
        '确认历史库表、同步方式与地区系统之间是否存在隐含口径冲突。',
        '判断数据资产是否具备统一清洗与整合的现实基础。',
        '评估整合后对管理报表、财务对账与供应链协同的影响范围。',
      ],
      recommendation: '建议在交易完成前先定义数据资产主线与过渡策略，避免交割后因口径不一拖慢整合。',
      timing: '适合在尽调中后段，与业务、财务与技术负责人联合评审。',
    },
    'case-3': {
      riskLevel: '高风险：影响业务扩张、峰值收入兑现与品牌稳定性。',
      reviewFocus: [
        '识别峰值场景下的热点链路与数据库锁冲突来源。',
        '评估现有架构是否还能支撑未来业务规划与营销节点。',
        '测算容量治理、弹性改造与故障隔离的必要投入区间。',
      ],
      recommendation: '建议在估值模型中计入平台稳定性补课成本，并将核心高峰链路纳入交割后首阶段整治计划。',
      timing: '适合在增长预期较高的收购项目中，作为估值折价与整合节奏判断依据。',
    },
  };

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto" id="cases">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9bcbff]">
          Due Diligence Cases · 决策判断样本
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          我关注的不是系统写得漂不漂亮，而是它会不会在你接手后吞掉预算、时间和团队
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">
          每个案例都围绕交易前后最关键的判断问题展开：隐藏风险在哪里、会影响什么、应该如何进入决策动作。
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cases.map((cs) => {
          const detail = processDetails[cs.id];
          const isActive = activeCaseId === cs.id;

          return (
            <div
              key={cs.id}
              className={`glass-card p-8 rounded flex flex-col justify-between h-full border ${
                isActive ? 'border-primary-gold bg-[#141414]' : 'border-white/5 bg-dark-surface/60'
              }`}
            >
              <div className="space-y-6">
                {/* Header Icon */}
                <div className="flex items-center justify-between">
                  {cs.iconName === 'warning' && (
                    <div className="w-12 h-12 rounded bg-red-500/10 flex items-center justify-center border border-red-500/20">
                      <AlertTriangle className="text-red-400" size={24} />
                    </div>
                  )}
                  {cs.iconName === 'database' && (
                    <div className="w-12 h-12 rounded bg-primary-gold/10 flex items-center justify-center border border-primary-gold/20">
                      <Database className="text-primary-gold" size={24} />
                    </div>
                  )}
                  {cs.iconName === 'cloud_upload' && (
                    <div className="w-12 h-12 rounded bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                      <CloudLightning className="text-accent-blue" size={24} />
                    </div>
                  )}

                  <span
                    className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border font-semibold ${
                      cs.badgeColor === 'error'
                        ? 'border-red-500/10 bg-red-500/5 text-red-400'
                        : cs.badgeColor === 'primary'
                        ? 'border-primary-gold/10 bg-primary-gold/5 text-primary-gold'
                        : 'border-[#9bcbff]/10 bg-[#9bcbff]/5 text-[#9bcbff]'
                    }`}
                  >
                    {cs.badgeLabel}
                  </span>
                </div>

                {/* Project Title & Short Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white font-display text-balance-cjk">{cs.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
                    {cs.finding}
                  </p>
                </div>

                <div className="py-4 border-t border-white/5 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-primary-gold block mb-1">
                      业务影响
                    </span>
                    <p className="text-sm font-semibold text-white text-balance-cjk">{cs.impact}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-accent-blue block mb-1">
                      建议动作
                    </span>
                    <p className="text-sm text-on-surface-variant leading-relaxed text-balance-cjk">{cs.action}</p>
                  </div>
                </div>
              </div>

              {/* Expander Button inside the card to keep layout aligned */}
              <div className="pt-4 border-t border-white/5 mt-auto">
                <button
                  onClick={() => setActiveCaseId(isActive ? null : cs.id)}
                  className="w-full flex items-center justify-between text-xs text-primary-gold-light hover:text-primary-gold transition-colors font-medium py-1"
                >
                  <span className="flex items-center gap-1">
                    <Layers size={12} />
                    {isActive ? '收起尽调结论' : '展开查看尽调重点'}
                  </span>
                  {isActive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {/* Animated Details */}
                <AnimatePresence>
                  {isActive && detail && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden text-xs space-y-4 pt-4 mt-2 border-t border-white/5"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-red-400 block font-bold">
                          风险等级
                        </span>
                        <p className="text-[#e2e2e2] leading-relaxed italic pr-2 text-balance-cjk">{detail.riskLevel}</p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#9bcbff] block font-bold">
                          尽调重点
                        </span>
                        <div className="space-y-1.5 pl-1">
                          {detail.reviewFocus.map((st, i) => (
                            <div key={i} className="flex gap-2 text-on-surface-variant leading-normal">
                              <span className="text-primary-gold font-bold">{i + 1}.</span>
                              <span className="text-balance-cjk">{st}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#d1d1d1] block font-bold">
                          建议结论
                        </span>
                        <p className="text-on-surface-variant leading-relaxed text-balance-cjk">{detail.recommendation}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-primary-gold block font-bold">
                          适用阶段
                        </span>
                        <p className="text-on-surface-variant leading-relaxed text-balance-cjk">{detail.timing}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
