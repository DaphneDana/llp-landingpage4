"use client"

import { Mail, Phone, ArrowRight, Calendar, Users, User } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import ProfessionalFooter from "@/components/footer"

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [counters, setCounters] = useState({ projects: 0, years: 0, uptime: 0, total: 0 })
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
    const targets = { projects: 200, years: 25, uptime: 99, total: 500 }
    const duration = 2000
    const steps = 50
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress),
        uptime: Math.floor(targets.uptime * progress),
        total: Math.floor(targets.total * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const projects = [
    {
      id: 1,
      category: 'system',
      title: '岐阜県関市 統合住民システム',
      description: '住民票・戸籍・税務を統合した次世代住民サービス基盤を構築。マイナンバー対応済み。',
      date: '2024年3月',
      population: '9万人',
      image: '/placeholder.svg?height=200&width=400&text=Government+Building+Seki',
      tag: 'システム開発',
      tagColor: 'bg-blue-500'
    },
    {
      id: 2,
      category: 'cloud',
      title: '愛知県豊田市 自治体クラウド移行',
      description: 'オンプレミスからクラウドへの完全移行。BCP対応とコスト削減を実現。',
      date: '2024年1月',
      population: '42万人',
      image: '/placeholder.svg?height=200&width=400&text=Cloud+Infrastructure+Toyota',
      tag: 'クラウド構築',
      tagColor: 'bg-green-500'
    },
    {
      id: 3,
      category: 'security',
      title: '三重県四日市市 ゼロトラスト導入',
      description: '次世代セキュリティモデルによるリモートワーク環境の安全性向上。',
      date: '2023年11月',
      population: '31万人',
      image: '/placeholder.svg?height=200&width=400&text=Security+Center+Yokkaichi',
      tag: 'セキュリティ',
      tagColor: 'bg-red-500'
    },
    {
      id: 4,
      category: 'dx',
      title: '静岡県浜松市 スマート窓口導入',
      description: 'AI・RPA活用による窓口業務の完全デジタル化。待ち時間50%削減を実現。',
      date: '2023年9月',
      population: '79万人',
      image: '/placeholder.svg?height=200&width=400&text=Smart+Office+Hamamatsu',
      tag: 'DX推進',
      tagColor: 'bg-purple-500'
    },
    {
      id: 5,
      category: 'system',
      title: '石川県金沢市 財務会計システム更新',
      description: '予算編成から決算まで一元管理する次世代財務システムを構築。',
      date: '2023年7月',
      population: '46万人',
      image: '/placeholder.svg?height=200&width=400&text=Finance+System+Kanazawa',
      tag: 'システム開発',
      tagColor: 'bg-indigo-500'
    },
    {
      id: 6,
      category: 'cloud',
      title: '福井県福井市 災害対策クラウド基盤',
      description: '災害時でも継続稼働する堅牢なクラウドインフラを構築。',
      date: '2023年5月',
      population: '26万人',
      image: '/placeholder.svg?height=200&width=400&text=Disaster+Recovery+Fukui',
      tag: 'クラウド構築',
      tagColor: 'bg-teal-500'
    }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter)

  const testimonials = [
    {
      name: '関市 情報管理課',
      position: '課長',
      text: 'システム導入後、住民サービスの質が大幅に向上しました。職員の作業効率も飛躍的に改善されています。'
    },
    {
      name: '豊田市 DX推進室',
      position: '室長',
      text: 'クラウド移行により運用コストを30%削減。災害時の業務継続性も大幅に向上しました。'
    },
    {
      name: '浜松市 市民部',
      position: '部長',
      text: 'AIを活用した窓口業務により、市民の待ち時間が大幅に短縮。満足度調査でも高評価を得ています。'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="h-20 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo Section */}
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

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { jp: "ホーム", en: "HOME", href: "/" },
              { jp: "サービス", en: "SERVICE", href: "/services" },
              { jp: "事業内容", en: "BUSINESS", href: "/business" },
              { jp: "実績", en: "WORKS", href: "/projects" },
              { jp: "会社概要", en: "COMPANY", href: "/about" },
              { jp: "採用情報", en: "RECRUIT", href: "/careers" },
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

          {/* Contact Info & Buttons */}
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
      <section className="relative h-96 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#F59E0B] rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <div 
                className="inline-block bg-[#F59E0B] px-4 py-2 rounded-full mb-4 transform transition-all duration-700 hover:scale-110"
                data-animate="true"
                data-delay="0"
                id="hero-badge"
              >
                <span className="text-white text-sm font-bold">WORKS</span>
              </div>
              <h1
                className={`text-5xl font-bold mb-4 transition-all duration-1000 ${
                  visibleElements.has('hero-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                data-animate="true"
                data-delay="2"
                id="hero-title"
              >
                実績紹介
              </h1>
              <p
                className={`text-lg transition-all duration-1000 delay-500 ${
                  visibleElements.has('hero-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                data-animate="true"
                data-delay="4"
                id="hero-subtitle"
              >
                全国200以上の自治体で選ばれ続ける、信頼の実績
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.projects}+</div>
              <div className="text-[#6B7280]">導入自治体数</div>
            </div>
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.years}</div>
              <div className="text-[#6B7280]">年の実績</div>
            </div>
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.uptime}.9%</div>
              <div className="text-[#6B7280]">システム稼働率</div>
            </div>
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="text-4xl font-bold text-[#F59E0B] mb-2">{counters.total}+</div>
              <div className="text-[#6B7280]">累計プロジェクト数</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'すべて' },
              { key: 'system', label: 'システム開発' },
              { key: 'cloud', label: 'クラウド構築' },
              { key: 'security', label: 'セキュリティ' },
              { key: 'dx', label: 'DX推進' }
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === filterOption.key
                    ? 'bg-[#1E3A8A] text-white shadow-lg'
                    : 'bg-gray-200 text-[#6B7280] hover:bg-gray-300'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-sm transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                    visibleElements.has(`project-${project.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-animate="true"
                  data-delay={index}
                  id={`project-${project.id}`}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/90 to-[#F59E0B]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ArrowRight className="w-8 h-8 mx-auto mb-2 animate-pulse" />
                        <p className="font-semibold">詳細を見る</p>
                      </div>
                    </div>
                    <div className={`absolute top-4 right-4 ${project.tagColor} text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm bg-opacity-90`}>
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-[#1E3A8A] mb-2"
                      style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[#6B7280] mb-4 leading-relaxed"
                      style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        人口: {project.population}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              お客様の声
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white bg-opacity-10 p-6 rounded-lg transform transition-all duration-700 hover:scale-105 ${
                  visibleElements.has(`testimonial-${index}`) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-animate="true"
                data-delay={index * 2}
                id={`testimonial-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.position}</div>
                  </div>
                </div>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-[#1E3A8A] mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            貴自治体でも同様の成果を
          </h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-8"></div>
          <p
            className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            25年間の実績とノウハウで、貴自治体のIT課題を解決いたします。まずはお気軽にご相談ください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-3 bg-[#1E3A8A] text-white p-4 rounded-lg">
              <Phone className="w-5 h-5" />
              <div>
                <div className="font-bold text-lg">0575-28-3313</div>
                <div className="text-sm">【受付時間】平日8:10-17:30</div>
              </div>
            </div>
            
            <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              実績資料ダウンロード
            </button>
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
          <button className="flex flex-col items-center text-xs text-[#1E3A8A]">
            <Phone className="w-6 h-6 mb-1" />
            電話
          </button>
          <button className="flex flex-col items-center text-xs text-[#1E3A8A]">
            <Mail className="w-6 h-6 mb-1" />
            問合せ
          </button>
        </div>
      </div>
        <ProfessionalFooter />
    </div>
  )
}