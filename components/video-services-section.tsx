"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause } from "lucide-react"

interface Service {
  id: number
  number: string
  titleJp: string
  titleEn: string
  description: string
  stats: Array<{
    number: string
    label: string
  }>
  videoSegment: number // Video timestamp in seconds
}

const services: Service[] = [
  {
    id: 1,
    number: "SERVICE 01",
    titleJp: "デジタル変革コンサルティング",
    titleEn: "Digital Transformation Consulting",
    description:
      "地方自治体のデジタル戦略策定から実装まで、包括的なコンサルティングサービスを提供。行政手続きのデジタル化、業務効率化、市民サービス向上を実現します。",
    stats: [
      { number: "200+", label: "自治体支援" },
      { number: "10年", label: "の経験" },
      { number: "85%", label: "効率向上" },
    ],
    videoSegment: 0,
  },
  {
    id: 2,
    number: "SERVICE 02",
    titleJp: "システム統合・開発",
    titleEn: "System Integration & Development",
    description:
      "政府調達基準に準拠したカスタムシステム開発。既存システムとの統合、新規システム構築、クラウド移行まで一貫してサポートします。",
    stats: [
      { number: "50+", label: "システム構築" },
      { number: "99.9%", label: "稼働率" },
      { number: "30%", label: "コスト削減" },
    ],
    videoSegment: 60,
  },
  {
    id: 3,
    number: "SERVICE 03",
    titleJp: "データ管理・分析",
    titleEn: "Data Management & Analytics",
    description:
      "行政データの最適化と分析ソリューション。ビッグデータ活用による政策立案支援、予測分析、レポート自動化を実現します。",
    stats: [
      { number: "1TB+", label: "データ処理" },
      { number: "30%", label: "効率向上" },
      { number: "24時間", label: "リアルタイム分析" },
    ],
    videoSegment: 120,
  },
  {
    id: 4,
    number: "SERVICE 04",
    titleJp: "セキュリティソリューション",
    titleEn: "Security Solutions",
    description:
      "政府レベルのサイバーセキュリティ実装。多層防御システム、脅威監視、インシデント対応まで包括的なセキュリティ対策を提供します。",
    stats: [
      { number: "100%", label: "セキュリティ記録" },
      { number: "24/7", label: "監視体制" },
      { number: "0件", label: "重大インシデント" },
    ],
    videoSegment: 180,
  },
  {
    id: 5,
    number: "SERVICE 05",
    titleJp: "研修・サポート",
    titleEn: "Training & Support",
    description:
      "職員研修から継続的な技術サポートまで。システム導入後の定着支援、操作研修、ヘルプデスク運営を通じて長期的な成功を保証します。",
    stats: [
      { number: "500+", label: "職員研修" },
      { number: "2時間", label: "平均対応時間" },
      { number: "98%", label: "満足度" },
    ],
    videoSegment: 240,
  },
  {
    id: 6,
    number: "SERVICE 06",
    titleJp: "保守・運用管理",
    titleEn: "Maintenance & Operations",
    description:
      "長期的なシステム保守と運用最適化。予防保守、パフォーマンス監視、定期アップデートにより安定稼働を維持します。",
    stats: [
      { number: "95%", label: "予防保守成功" },
      { number: "5年+", label: "平均契約期間" },
      { number: "99.8%", label: "稼働率維持" },
    ],
    videoSegment: 300,
  },
]

export default function VideoServicesSection() {
  const [currentService, setCurrentService] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout>()

  // Auto-advance services
  useEffect(() => {
    if (!isHovered && isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentService((prev) => (prev + 1) % services.length)
      }, 8000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, isPlaying])

  // Sync video with service changes
  useEffect(() => {
    if (videoRef.current) {
      const targetTime = services[currentService].videoSegment
      videoRef.current.currentTime = targetTime
    }
  }, [currentService])

  const handleServiceClick = (index: number) => {
    setCurrentService(index)
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative h-screen bg-[#1E3A8A] overflow-hidden">
      {/* Section Title */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 pb-8">
        <div className="text-center">
          <h2
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            サービス案内
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto"></div>
        </div>
      </div>

      {/* Video Section - Left 60% */}
      <div className="absolute left-0 top-0 w-3/5 h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-12 h-12" />
              </div>
              <p className="text-lg">Video Loading...</p>
            </div>
          </div>
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1E3A8A] opacity-30"></div>

        {/* Video Controls */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-8 left-8 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </button>
      </div>

      {/* Content Section - Right 40% */}
      <div className="absolute right-0 top-0 w-2/5 h-full bg-[#1E3A8A] bg-opacity-90">
        <div
          className="h-full flex flex-col justify-center px-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Service Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <div className="text-[#60A5FA] text-base font-medium mb-2">{services[currentService].number}</div>
              <h3
                className="text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                {services[currentService].titleJp}
              </h3>
              <h4 className="text-xl font-semibold text-[#60A5FA] mb-8">{services[currentService].titleEn}</h4>
            </div>

            <div
              className="text-lg leading-relaxed text-[#E5E7EB] mb-12 max-w-[90%]"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              {services[currentService].description}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {services[currentService].stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#F59E0B] mb-1">{stat.number}</div>
                  <div
                    className="text-sm text-[#D1D5DB] font-medium"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="pb-8">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-600 rounded-full mb-6 overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-[#F59E0B] rounded-full transition-all duration-8000 ease-linear"
                style={{
                  width: `${((currentService + 1) / services.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Service Indicators */}
            <div className="flex justify-center space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentService ? "w-8 bg-[#F59E0B]" : "w-2 bg-[#6B7280] hover:bg-[#60A5FA]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Overlay */}
      <div className="lg:hidden absolute inset-0 bg-[#1E3A8A] flex flex-col">
        <div className="flex-1 relative">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/placeholder-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-6">
            <div className="text-[#60A5FA] text-sm font-medium mb-2">{services[currentService].number}</div>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              {services[currentService].titleJp}
            </h3>
            <h4 className="text-lg font-semibold text-[#60A5FA] mb-4">{services[currentService].titleEn}</h4>
          </div>

          <div
            className="text-base leading-relaxed text-[#E5E7EB] mb-6"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            {services[currentService].description}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {services[currentService].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-[#F59E0B] mb-1">{stat.number}</div>
                <div className="text-xs text-[#D1D5DB]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentService ? "w-6 bg-[#F59E0B]" : "w-2 bg-[#6B7280]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
