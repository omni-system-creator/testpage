/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  iconName: 'warning' | 'database' | 'cloud_upload';
  title: string;
  finding: string;
  impact: string;
  action: string;
  badgeLabel: string;
  badgeColor: 'error' | 'primary' | 'secondary';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
    description: string;
  }[];
}

export interface DiagnosisReport {
  score: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: string;
  primaryRisk: string;
  remedyRoadmap: string[];
  estimatedTimeline: string;
  estimatedCostSaving: string;
}
