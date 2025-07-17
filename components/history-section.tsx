"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Building2, Shield, Users, Award, Zap, Globe, Brain, Trophy } from "lucide-react"

interface Milestone {
  year: string
  titleJp: string
  titleEn: string
  description: string
  achievements?: Array<{
    number: string
    label: string
  }>
  icon: React.ReactNode
  side: "left" | "right"
}

const milestones: Milestone[] = [
  {
    year: "2010",
    titleJp: "会社設立",
    titleEn: "Foundation with Government Focus",
    description:
      "地方自治体のデジタル変革を支援するビジョンを掲げ、AEGIS LLPを設立。政府部門に特化した専門チームでスタートしました。",
    achievements: [
      { number: "5名", label: "創設メンバー" },
      { number: "1", label: "オフィス" },
    ],
    icon: <Building2 className="w-6 h-6" />,
    side: "left",
  },
  {
    year: "2012",
    titleJp: "初の自治体プロジェクト",
    titleEn: "Municipal Technology Pioneer",
    description: "初の地方自治体システム統合プロジェクトを成功裏に完了。住民サービスの向上と業務効率化を実現しました。",
    achievements: [
      { number: "3", label: "自治体" },
      { number: "100%", label: "成功率" },
    ],
    icon: <Users className="w-6 h-6" />,
    side: "right",
  },
  {
    year: "2015",
    titleJp: "事業拡張",
    titleEn: "Regional Growth Achievement",
    description:
      "5つの都道府県に事業を拡大。地域に根ざしたサービス提供体制を確立し、多数の政府プロジェクトを手がけました。",
    achievements: [
      { number: "50+", label: "プロジェクト完了" },
      { number: "5", label: "都道府県" },
    ],
    icon: <Globe className="w-6 h-6" />,
    side: "left",
  },
  {
    year: "2017",
    titleJp: "セキュリティ認証取得",
    titleEn: "Security Excellence Recognition",
    description:
      "政府レベルのセキュリティ認証を取得。ISO 27001認証により、最高水準の情報セキュリティ体制を確立しました。",
    achievements: [
      { number: "ISO 27001", label: "認証取得" },
      { number: "100%", label: "セキュリティ記録" },
    ],
    icon: <Shield className="w-6 h-6" />,
    side: "right",
  },
  {
    year: "2019",
    titleJp: "デジタル変革部門設立",
    titleEn: "Digital Innovation Leadership",
    description: "専門のDXコンサルティング部門を設立。自治体のデジタル変革を包括的に支援する体制を整備しました。",
    achievements: [
      { number: "100+", label: "DXプロジェクト" },
      { number: "85%", label: "効率向上" },
    ],
    icon: <Zap className="w-6 h-6" />,
    side: "left",
  },
  {
    year: "2021",
    titleJp: "COVID-19対応支援",
    titleEn: "Crisis Response Excellence",
    description: "パンデミック期間中、重要なデジタルインフラを提供。24時間体制での緊急サポートを実施しました。",
    achievements: [
      { number: "200+", label: "リモートシステム" },
      { number: "24/7", label: "緊急サポート" },
    ],
    icon: <Award className="w-6 h-6" />,
    side: "right",
  },
  {
    year: "2023",
    titleJp: "AI・データ分析サービス開始",
    titleEn: "AI Innovation Milestone",
    description: "先進的なAIとデータ分析サービスを開始。自治体の意思決定支援と業務自動化を実現しました。",
    achievements: [
      { number: "50+", label: "AI実装" },
      { number: "30%", label: "効率改善" },
    ],
    icon: <Brain className="w-6 h-6" />,
    side: "left",
  },
  {
    year: "2025",
    titleJp: "全国展開達成",
    titleEn: "National Excellence Network",
    description: "全国47都道府県での事業展開を達成。地域オフィスネットワークにより、全国の自治体をサポートしています。",
    achievements: [
      { number: "500+", label: "クライアント" },
      { number: "47", label: "都道府県" },
    ],
    icon: <Trophy className="w-6 h-6" />,
    side: "right",
  },
]

export default function HistorySection() {
  const [visibleMilestones, setVisibleMilestones] = useState<Set<number>>(new Set())
  const [timelineProgress, setTimelineProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleMilestones((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 },
    )

    const milestoneElements = document.querySelectorAll("[data-milestone]")
    milestoneElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight)))

      setTimelineProgress(scrollProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-25 bg-gradient-to-b from-[#F8F9FA] to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231E3A8A' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-[#1E3A8A] mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            会社沿革
          </h2>
          <p className="text-xl font-medium text-[#6B7280] mb-6">Our Journey of Excellence</p>
          <div className="w-20 h-0.5 bg-[#F59E0B] mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Spine */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-[#1E3A8A] to-transparent h-full">
            <div
              ref={timelineRef}
              className="w-full bg-[#F59E0B] transition-all duration-1000 ease-out"
              style={{ height: `${timelineProgress * 100}%` }}
            ></div>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-32">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                data-milestone
                data-index={index}
                className="relative flex items-center justify-center"
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-[#1E3A8A] rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-500 ${
                    visibleMilestones.has(index) ? "scale-110 border-[#F59E0B]" : ""
                  }`}
                >
                  <span className="text-sm font-bold text-[#1E3A8A]">{milestone.year.slice(-2)}</span>
                </div>

                {/* Milestone Card */}
                <div
                  className={`w-5/12 ${
                    milestone.side === "left" ? "mr-auto pr-16" : "ml-auto pl-16"
                  } transition-all duration-700 ${
                    visibleMilestones.has(index)
                      ? "opacity-100 translate-y-0"
                      : `opacity-0 ${milestone.side === "left" ? "translate-x-8" : "-translate-x-8"} translate-y-4`
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-[#E5E7EB] p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Year Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#F59E0B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#F59E0B]">
                        {milestone.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#F59E0B]">{milestone.year}</div>
                      </div>
                    </div>

                    {/* Milestone Title */}
                    <h3
                      className="text-2xl font-bold text-[#1E3A8A] mb-2"
                      style={{
                        fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                      }}
                    >
                      {milestone.titleJp}
                    </h3>
                    <h4 className="text-lg font-medium text-[#6B7280] italic mb-4">{milestone.titleEn}</h4>

                    {/* Description */}
                    <p
                      className="text-base leading-relaxed text-[#374151] mb-6"
                      style={{
                        fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                      }}
                    >
                      {milestone.description}
                    </p>

                    {/* Achievements */}
                    {milestone.achievements && (
                      <div className="bg-[#EFF6FF] border-l-4 border-[#1E3A8A] p-4 rounded-r-lg">
                        <div className="flex gap-6">
                          {milestone.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="text-center">
                              <div className="text-xl font-bold text-[#1E3A8A] mb-1">{achievement.number}</div>
                              <div
                                className="text-sm text-[#6B7280] font-medium"
                                style={{
                                  fontFamily:
                                    "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                                }}
                              >
                                {achievement.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
          <div className="w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="w-full bg-[#F59E0B] transition-all duration-300 ease-out"
              style={{ height: `${timelineProgress * 100}%` }}
            ></div>
          </div>
          <div className="text-xs text-[#6B7280] mt-2 text-center">{Math.round(timelineProgress * 100)}%</div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden max-w-4xl mx-auto px-4 mt-16">
        <div className="relative">
          <div className="absolute left-8 top-0 w-0.5 bg-[#1E3A8A] h-full"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                data-milestone
                data-index={index}
                className={`relative pl-20 transition-all duration-700 ${
                  visibleMilestones.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="absolute left-6 w-4 h-4 bg-white border-2 border-[#1E3A8A] rounded-full transform -translate-x-1/2"></div>
                <div className="bg-white rounded-lg shadow-lg border border-[#E5E7EB] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#F59E0B] bg-opacity-10 rounded-lg flex items-center justify-center text-[#F59E0B]">
                      {milestone.icon}
                    </div>
                    <div className="text-lg font-bold text-[#F59E0B]">{milestone.year}</div>
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1E3A8A] mb-1"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {milestone.titleJp}
                  </h3>
                  <h4 className="text-sm font-medium text-[#6B7280] italic mb-3">{milestone.titleEn}</h4>
                  <p
                    className="text-sm leading-relaxed text-[#374151] mb-4"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {milestone.description}
                  </p>
                  {milestone.achievements && (
                    <div className="bg-[#EFF6FF] border-l-2 border-[#1E3A8A] p-3 rounded-r">
                      <div className="flex gap-4">
                        {milestone.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="text-center">
                            <div className="text-base font-bold text-[#1E3A8A]">{achievement.number}</div>
                            <div className="text-xs text-[#6B7280]">{achievement.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
