/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Database, CloudLightning, ArrowRight, CheckCircle, ChevronDown, ChevronUp, Layers, HelpCircle, Activity } from 'lucide-react';
import { CaseStudy } from '../types';

export default function Cases() {
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);

  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      iconName: 'warning',
      title: '痛点：泥潭系统',
      description: '某金融平台10年历史核心系统。底层代码总量200万行，缺乏任何原班文档支撑，发布部署甚至需要全行断网停机4小时。代码环绕极其重叠，团队缺乏在不中断线上账务的前提下进行重写和更改的勇气。',
      solution: '绞杀者模式 (Strangler Fig Pattern) 分层解耦',
      result: '在原先凌乱的老代码外围增设「防腐防护网（Anti-Corruption Area）」，使用网关路由拦截外部分流，并将老系统以毫秒级的粒度切割至新开发的微服务中。最终实现0停机全透明滚动升级发布，发布停摆由原来的4小时缩短至10分钟。',
      badgeColor: 'error',
    },
    {
      id: 'case-2',
      iconName: 'database',
      title: '痛点：数据孤岛',
      description: '某知名传统重工集团。旗下运作着30多个分散在全国各地的冷门异构数据库。日常由于网络抖动和底层契约差异，各中心数据迟迟不能对账整合。对账时间延迟多达24小时，管理层根本无法得知实时的成品进出存损状况。',
      solution: '异构归并 · 统一湖仓架构集成治理',
      result: '架设轻量级主从同步路由，对全国分散的库表通过高可用管道流对账合并。重构表结构事务并解决对齐冲突，使得资金流对账由原来的24小时直降为秒级对口，全线系统运维所需的人力消耗直降60%。',
      badgeColor: 'primary',
    },
    {
      id: 'case-3',
      iconName: 'cloud_upload',
      title: '痛点：架构失速',
      description: '头部综合电商平台。在节假大促等重大高并发节点期间，其核心系统的 CPU 占用率常态化暴涨至 100%，数据库发生大规模互锁闪退，原有单体老化架构无力承载陡增的消费支付流。',
      solution: '弹性云原生容器集群化改造与热路分离',
      result: '将高频只读与支付热路径进行「断骨式」降级切分。重写慢sql并设立高并发队列哨兵，将系统全线上云容器化弹性应对。完工后支撑了10倍于平日峰值的高压流量洗脑式冲淋，年化可用性达到了极高的 99.99%。',
      badgeColor: 'secondary',
    },
  ];

  // Specific procedural details for expanded analytics
  const processDetails: Record<string, { steps: string[]; techStack: string[]; difficulty: string }> = {
    'case-1': {
      difficulty: '不许中断核心全行对公支付结算流，如同「在时速120公里的卡车上更换引擎」。',
      steps: [
        '第一步：外围部署反向路由，对账务流加装旁路监听。',
        '第二步：在历史泥潭外布设防腐层契约，隔离新老服务实体。',
        '第三步：利用绞杀者（Strangler Pattern）分步剥离核心余额模块。',
        '第四步：实施老数据库到新微服务集群数据流的秒级双写并联。',
      ],
      techStack: ['Spring Boot 3', 'K8s Service Mesh', 'Apache APISIX', 'MySQL Binlog Sync'],
    },
    'case-2': {
      difficulty: '30多个库包含Oracle/SQL Server/PostgreSQL/以及历史私有库，表字段标准杂乱，网络丢包严重。',
      steps: [
        '第一步：基于变更捕获（CDC）和自定义映射引擎，清洗离群表。',
        '第二步：采用湖仓一体化方案进行宽表聚合，减少嵌套链路。',
        '第三步：对主干库表增加分布式时间戳对齐，平滑解决分布式死锁。',
        '第四步：设计高容灾离线队列，处理远程数据库网络闪退的重连补单。',
      ],
      techStack: ['Apache Flink', 'StarRocks', 'CDC Connectors', 'Redis Sentinel'],
    },
    'case-3': {
      difficulty: '大促销期间单点扣减逻辑发生深层互锁，写冲突导致线程池大量爆满溢出。',
      steps: [
        '第一步：核心抢购路径实行无状态削峰及防抖降级设计。',
        '第二步：单体数据库读写合并表进行细粒度拆分，实施秒级只读同步。',
        '第三步：对热点SQL全面消除嵌套JOIN，改为高速缓存旁路查表。',
        '第四步：引入熔断隔离阻尼器，确保底层数据库锁表不向上传递拖垮网关。',
      ],
      techStack: ['Go GIN 微内核', 'Redis Single-Thread Lock', 'Docker Swarm', 'Sentinel Flow Control'],
    },
  };

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto" id="cases">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9bcbff]">
          SITUATIONAL CRISIS SAVIOR · 实战战绩
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          典型险情处理
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">
          老重构如生死时速，每一次精准的改动都是在最混乱的系统中重新裁出秩序。
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
                    {cs.badgeColor === 'error' ? '危重系统' : cs.badgeColor === 'primary' ? '数据混乱' : '架构失效'}
                  </span>
                </div>

                {/* Project Title & Short Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white font-display">{cs.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
                    {cs.description}
                  </p>
                </div>

                <div className="py-4 border-t border-white/5 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-primary-gold block mb-1">
                      首要解法
                    </span>
                    <p className="text-sm font-semibold text-white">{cs.solution}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-accent-blue block mb-1">
                      拯救结果
                    </span>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{cs.result}</p>
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
                    {isActive ? '收起深度病理剖析' : '见证手术细节 (查看实操步骤)'}
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
                          最大攻关难点 (Hardest Part)
                        </span>
                        <p className="text-[#e2e2e2] leading-relaxed italic pr-2">{detail.difficulty}</p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#9bcbff] block font-bold">
                          重构实施阶段
                        </span>
                        <div className="space-y-1.5 pl-1">
                          {detail.steps.map((st, i) => (
                            <div key={i} className="flex gap-2 text-on-surface-variant leading-normal">
                              <span className="text-primary-gold font-bold">{i+1}.</span>
                              <span>{st}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#d1d1d1] block font-bold">
                          实战技术栈
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {detail.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-white/80 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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
