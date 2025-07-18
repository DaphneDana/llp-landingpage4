"use client"

import { Mail, Phone, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import ProfessionalFooter from "@/components/footer"

export default function TechnologyDXPage() {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [counters, setCounters] = useState({ projects: 0, reduction: 0, efficiency: 0, satisfaction: 0 })
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Animation observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseInt((entry.target as HTMLElement).dataset.delay || '0')
            setTimeout(() => {
              setVisibleElements(prev => new Set(prev).add(entry.target.id))
            }, delay * 200)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe all animated elements
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  // Counter animation
  useEffect(() => {
    const targets = { projects: 150, reduction: 40, efficiency: 65, satisfaction: 95 }
    const duration = 2000
    const steps = 50
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        projects: Math.floor(targets.projects * progress),
        reduction: Math.floor(targets.reduction * progress),
        efficiency: Math.floor(targets.efficiency * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const technologies = [
    {
      name: 'AI・機械学習',
      description: '業務効率化と意思決定支援のためのAI活用',
      applications: ['文書自動分類', 'チャットボット', '予測分析', '画像認識'],
      image: '/placeholder.svg?height=300&width=400&text=AI+Machine+Learning'
    },
    {
      name: 'クラウドファースト',
      description: 'スケーラブルで安全なクラウド基盤の構築',
      applications: ['AWS/Azure', 'マイクロサービス', 'DevOps', 'コンテナ化'],
      image: '/placeholder.svg?height=300&width=400&text=Cloud+First+Architecture'
    },
    {
      name: 'データ分析・BI',
      description: 'データドリブンな行政運営の実現',
      applications: ['ダッシュボード', 'リアルタイム分析', '予測モデル', 'レポート自動化'],
      image: '/placeholder.svg?height=300&width=400&text=Data+Analytics+BI'
    },
    {
      name: 'IoT・センサー',
      description: 'スマートシティ実現のためのIoT活用',
      applications: ['環境監視', '交通制御', '設備管理', 'エネルギー最適化'],
      image: '/placeholder.svg?height=300&width=400&text=IoT+Smart+City'
    }
  ]

  const dxSteps = [
    {
      phase: 'Phase 1',
      title: '現状分析・戦略立案',
      duration: '1-2ヶ月',
      description: '既存業務プロセスの詳細分析を行い、DX推進のロードマップを策定します。',
      deliverables: ['現状分析レポート', 'DX戦略書', 'ROI試算', 'リスク評価'],
      image: '/placeholder.svg?height=200&width=300&text=Strategy+Planning'
    },
    {
      phase: 'Phase 2',
      title: 'システム設計・開発',
      duration: '3-6ヶ月',
      description: '最適なテクノロジーを選定し、段階的なシステム開発を実施します。',
      deliverables: ['システム設計書', 'プロトタイプ', 'テスト計画', 'セキュリティ設計'],
      image: '/placeholder.svg?height=200&width=300&text=System+Development'
    },
    {
      phase: 'Phase 3',
      title: '導入・トレーニング',
      duration: '2-4ヶ月',
      description: '段階的な導入とユーザートレーニングにより、スムーズな移行を実現します。',
      deliverables: ['導入計画', 'ユーザーマニュアル', '研修プログラム', 'サポート体制'],
      image: '/placeholder.svg?height=200&width=300&text=Training+Implementation'
    },
    {
      phase: 'Phase 4',
      title: '運用・最適化',
      duration: '継続',
      description: '継続的な監視と改善により、DXの効果を最大化します。',
      deliverables: ['運用手順書', 'パフォーマンス監視', '改善提案', '効果測定'],
      image: '/placeholder.svg?height=200&width=300&text=Operations+Optimization'
    }
  ]

  const successStories = [
    {
      title: 'AI活用による窓口業務効率化',
      client: '中部地区 A市',
      challenge: '窓口での問い合わせ対応に多くの時間を要していた',
      solution: 'AIチャットボットと音声認識システムの導入',
      results: ['待ち時間50%削減', '職員負荷30%軽減', '住民満足度向上'],
      image: '/placeholder.svg?height=250&width=400&text=AI+Chatbot+Success'
    },
    {
      title: 'データ統合による意思決定支援',
      client: '関東地区 B市',
      challenge: '各部署のデータが分散し、統合的な分析ができなかった',
      solution: 'データ統合基盤とBIツールの構築',
      results: ['レポート作成時間80%短縮', '予算精度向上', '政策立案の迅速化'],
      image: '/placeholder.svg?height=250&width=400&text=Data+Integration+Success'
    },
    {
      title: 'クラウド移行による業務継続性向上',
      client: '九州地区 C市',
      challenge: '災害時のシステム継続稼働に課題があった',
      solution: 'マルチリージョンクラウド基盤への移行',
      results: ['稼働率99.9%達成', 'BCP体制強化', '運用コスト25%削減'],
      image: '/placeholder.svg?height=250&width=400&text=Cloud+Migration+Success'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="h-20 bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1E3A8A] rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm"></div>
            </div>
            <div
              className="text-xl font-bold text-[#1E3A8A]"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              AEGIS LLP
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { jp: "ホーム", en: "HOME", href: "/" },
              { jp: "サービス", en: "SERVICE", href: "/services" },
              { jp: "プロジェクト", en: "PROJECTS", href: "/projects" },
              { jp: "について", en: "ABOUT", href: "/about" },
              { jp: "キャリア", en: "CAREERS", href: "/careers" },
              { jp: "テクノロジー", en: "TECHNOLOGY", href: "/technology" }, // IGNORE
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div
                  className="text-sm text-[#6B7280]"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  {item.jp}
                </div>
                <div
                  className="text-sm font-bold text-[#1E3A8A]"
                  style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
                >
                  {item.en}
                </div>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <div className="text-lg font-bold text-[#1E3A8A] flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0575-28-3313
              </div>
              <div className="text-xs text-[#6B7280]">【受付時間】平日8:10-17:30</div>
            </div>
            <Link href="/careers">
              <button className="w-16 h-12 bg-[#F59E0B] text-white text-xs font-bold rounded hover:bg-[#D97706] transition-colors">
                <div>採用</div>
                <div className="italic">Entry</div>
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-32 h-12 bg-[#1E3A8A] text-white text-sm font-bold rounded hover:bg-[#1E40AF] transition-colors flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                お問い合わせ
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=500&width=1280&text=Digital+Transformation+Future"
            alt="Digital transformation future"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 via-[#1E3A8A]/70 to-[#1E3A8A]/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white max-w-3xl">
              <div className="inline-block bg-[#F59E0B] px-4 py-2 rounded-full mb-6 transform transition-all duration-700 hover:scale-110">
                <span className="text-white text-sm font-bold">TECHNOLOGY & DX</span>
              </div>
              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                デジタル変革で
                <br />
                <span className="text-[#F59E0B]">未来の自治体</span>を創造
              </h1>
              <p
                className="text-xl leading-relaxed mb-8"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                最新テクノロジーとDX戦略で、地方自治体の業務効率化と住民サービス向上を実現します
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    DX相談を始める
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center gap-2">
                    事例を見る
                    <TrendingUp className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div 
              className="transform transition-all duration-700 hover:scale-105"
              data-animate="true"
              data-delay="0"
              id="stat-1"
            >
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.projects}+</div>
              <div className="text-[#6B7280] font-medium">DXプロジェクト</div>
            </div>
            <div 
              className="transform transition-all duration-700 hover:scale-105"
              data-animate="true"
              data-delay="1"
              id="stat-2"
            >
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.reduction}%</div>
              <div className="text-[#6B7280] font-medium">業務時間削減</div>
            </div>
            <div 
              className="transform transition-all duration-700 hover:scale-105"
              data-animate="true"
              data-delay="2"
              id="stat-3"
            >
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.efficiency}%</div>
              <div className="text-[#6B7280] font-medium">効率化達成</div>
            </div>
            <div 
              className="transform transition-all duration-700 hover:scale-105"
              data-animate="true"
              data-delay="3"
              id="stat-4"
            >
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.satisfaction}%</div>
              <div className="text-[#6B7280] font-medium">満足度向上</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              コアテクノロジー
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-6"></div>
            <p
              className="text-lg text-[#6B7280] max-w-3xl mx-auto"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              先進技術を活用して、自治体の課題解決と住民サービス向上を実現します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group ${
                  visibleElements.has(`tech-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-animate="true"
                data-delay={index}
                id={`tech-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p
                    className="text-[#6B7280] mb-6 leading-relaxed"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {tech.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {tech.applications.map((app, appIndex) => (
                      <div
                        key={appIndex}
                        className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-[#1E3A8A] font-medium text-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300"
                      >
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DX Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              DX推進プロセス
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-6"></div>
            <p
              className="text-lg text-[#6B7280] max-w-3xl mx-auto"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              段階的なアプローチで確実にデジタル変革を実現します
            </p>
          </div>

          <div className="space-y-12">
            {dxSteps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                } ${
                  visibleElements.has(`step-${index}`) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                data-animate="true"
                data-delay={index * 2}
                id={`step-${index}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={400}
                    height={250}
                    className="rounded-lg shadow-lg w-full transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-[#F59E0B] text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                    {step.phase}
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#1E3A8A] mb-4"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {step.title}
                  </h3>
                  <div className="text-sm text-[#F59E0B] font-semibold mb-4">期間: {step.duration}</div>
                  <p
                    className="text-[#6B7280] mb-6 leading-relaxed"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {step.description}
                  </p>
                  <div>
                    <h4 className="font-bold text-[#1E3A8A] mb-3">主な成果物</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, dIndex) => (
                        <div
                          key={dIndex}
                          className="bg-gray-50 px-3 py-2 rounded text-sm text-[#1E3A8A] text-center"
                        >
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              成功事例
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-6"></div>
            <p
              className="text-lg max-w-3xl mx-auto opacity-90"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              具体的な成果をもたらしたDXプロジェクトをご紹介します
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-500 ${
                  visibleElements.has(`story-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-animate="true"
                data-delay={index * 2}
                id={`story-${index}`}
              >
                <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  {story.title}
                </h3>
                <div className="text-[#F59E0B] font-semibold mb-4">{story.client}</div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold">課題: </span>
                    <span className="opacity-90">{story.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold">解決策: </span>
                    <span className="opacity-90">{story.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold">成果: </span>
                    <div className="mt-2 space-y-1">
                      {story.results.map((result, rIndex) => (
                        <div key={rIndex} className="bg-[#F59E0B] bg-opacity-20 px-3 py-1 rounded text-xs">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold text-[#1E3A8A] mb-6"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            DXの第一歩を踏み出しませんか？
          </h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-8"></div>
          <p
            className="text-lg text-[#6B7280] mb-12 leading-relaxed"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            貴自治体のDX戦略策定から実装まで、経験豊富な専門チームが包括的にサポートいたします。
            まずは無料相談で、現在の課題と目標をお聞かせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                無料DX診断を申し込む
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 flex items-center gap-2">
                サービス詳細を見る
                <TrendingUp className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center text-xs text-[#1E3A8A]">
            <div className="w-6 h-6 bg-[#1E3A8A] rounded mb-1"></div>
            メニュー
          </button>
          <Link href="tel:0575-28-3313" className="flex flex-col items-center text-xs text-[#1E3A8A]">
            <Phone className="w-6 h-6 mb-1" />
            電話
          </Link>
          <Link href="/contact" className="flex flex-col items-center text-xs text-[#1E3A8A]">
            <Mail className="w-6 h-6 mb-1" />
            問合せ
          </Link>
        </div>
      </div>
        <ProfessionalFooter />
    </div>
  )
}