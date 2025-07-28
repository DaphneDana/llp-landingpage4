import { Mail, Phone, ArrowRight, Calendar, Users, Building, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link" 
import PhilosophyAboutSection from "@/components/philosophy-about-section"
import VideoServicesSection from "@/components/video-services-section"
import HistorySection from "@/components/history-section"
import ContactTeamSection from "@/components/contact-team"
import ProfessionalFooter from "@/components/footer"

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: '岐阜県関市 統合住民システム',
      location: '岐阜県関市',
      population: '9万人',
      date: '2024年3月',
      // category: 'システム開発',
      description: '住民票・戸籍・税務を統合した次世代住民サービス基盤を構築。マイナンバー対応済み。',
      image: '/placeholder.svg?height=200&width=400&text=Seki+City+System',
      categoryColor: 'bg-blue-500'
    },
    {
      id: 2,
      title: '愛知県豊田市 自治体クラウド移行',
      location: '愛知県豊田市',
      population: '42万人',
      date: '2024年1月',
      category: 'クラウド構築',
      description: 'オンプレミスからクラウドへの完全移行。BCP対応とコスト削減を実現。',
      image: '/placeholder.svg?height=200&width=400&text=Toyota+Cloud+Migration',
      categoryColor: 'bg-green-500'
    },
    {
      id: 3,
      title: '静岡県浜松市 スマート窓口導入',
      location: '静岡県浜松市',
      population: '79万人',
      date: '2023年9月',
      category: 'DX推進',
      description: 'AI・RPA活用による窓口業務の完全デジタル化。待ち時間50%削減を実現。',
      image: '/placeholder.svg?height=200&width=400&text=Hamamatsu+Smart+Office',
      categoryColor: 'bg-purple-500'
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
              { jp: "プロジェクト", en: "PROJECTS", href: "/projects" },
              { jp: "について", en: "ABOUT", href: "/about" },
              { jp: "キャリア", en: "CAREERS", href: "/careers" },
              { jp: "テクノロジー", en: "TECHNOLOGY", href: "/technology" },
              { jp: "ニュース", en: "NEWS", href: "/news" }
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
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1280"
            alt="Government building background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Blue Diagonal Accent */}
        <div className="absolute top-0 left-0 w-1/3 h-full">
          <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
            <path d="M0,0 L400,0 L300,600 L0,600 Z" fill="rgba(30, 58, 138, 0.8)" />
          </svg>
        </div>

        {/* Left Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-lg text-white">
              {/* Top Taglines */}
              <div className="mb-6 space-y-2">
                <div className="inline-block">
                  <span className="text-[#06B6D4] italic text-lg font-medium">Trusted Government Solutions</span>
                </div>
                <div className="inline-block bg-black bg-opacity-50 px-3 py-1 rounded">
                  <span
                    className="text-white text-sm"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    地方自治体向けITソリューション
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1
                className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                信頼と実績で支える
                <br />
                次世代の
                <br />
                行政システム
              </h1>

              {/* Description */}
              <div
                className="text-lg leading-relaxed space-y-2 mb-8"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                <p>創業25年、全国200以上の自治体との実績</p>
                <p>安心・安全なシステム構築をお約束します</p>
                <p>政府調達基準完全準拠・セキュリティ認証取得済み</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    サービス詳細
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2">
                    無料相談
                    <Mail className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Circular Images */}
        <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-16 right-0 w-32 h-32 rounded-full border-4 border-[#F59E0B] overflow-hidden">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Government building 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 w-40 h-40 rounded-full border-4 border-[#F59E0B] overflow-hidden">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Government building 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-32 right-16 w-32 h-32 rounded-full border-4 border-[#F59E0B] overflow-hidden">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Government building 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-4 right-4 transform rotate-90 origin-bottom-right">
          <span className="text-white text-xs">© 2025 AEGIS LLP. All rights reserved.</span>
        </div>
      </section>

      <PhilosophyAboutSection />

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              主要導入実績
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-4"></div>
            <p
              className="text-lg text-[#6B7280] max-w-3xl mx-auto"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              全国の自治体で選ばれ続けるAEGISの実績をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className={`absolute top-4 right-4 ${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {project.category}
                  </div> */}
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-bold text-[#1E3A8A] mb-3 group-hover:text-[#F59E0B] transition-colors"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#6B7280] text-sm mb-4 leading-relaxed"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        人口: {project.population}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects CTA */}
          <div className="text-center">
            <Link href="/projects">
              <button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                すべての実績を見る
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <VideoServicesSection />

      {/* Services CTA Section */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            お客様のニーズに合わせたソリューション
          </h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-8"></div>
          <p
            className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            システム開発からクラウド移行、セキュリティ対策まで、地方自治体のあらゆるIT課題を解決いたします
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                サービス一覧
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center gap-2">
                お問い合わせ
                <Mail className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <HistorySection />

      {/* Careers CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold text-[#1E3A8A] mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                共に地方自治体の未来を創る仲間を募集
              </h2>
              <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-6"></div>
              <p
                className="text-lg text-[#6B7280] mb-8 leading-relaxed"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                経験豊富なエンジニアから新卒まで、様々なポジションで人材を募集しています。あなたの技術力で日本の地方自治体の未来を支えませんか？
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    採用情報
                    <Building className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center gap-2">
                    会社について
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactTeamSection />
      <ProfessionalFooter />

      {/* Mobile Navigation Menu */}
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
    </div>
  )
}