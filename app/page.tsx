import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link" 
import PhilosophyAboutSection from "@/components/philosophy-about-section"
import VideoServicesSection from "@/components/video-services-section"
import HistorySection from "@/components/history-section"
import ContactTeamSection from "@/components/contact-team"
import ProfessionalFooter from "@/components/footer"

export default function HomePage() {
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
                className="text-lg leading-relaxed space-y-2"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                <p>創業25年、全国200以上の自治体との実績</p>
                <p>安心・安全なシステム構築をお約束します</p>
                <p>政府調達基準完全準拠・セキュリティ認証取得済み</p>
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
      <VideoServicesSection />
      <HistorySection />
      <ContactTeamSection />
      <ProfessionalFooter />

      {/* Footer */}

      {/* Mobile Navigation Menu */}
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
    </div>
  )
}
