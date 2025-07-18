import { Mail, Phone, Users, Building, Award, Target, Shield, MapPin, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import ProfessionalFooter from "@/components/footer"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as landing page */}
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
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1280"
            alt="Office building background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-80"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <div className="inline-block bg-[#F59E0B] px-4 py-2 rounded-full mb-4">
                <span className="text-white text-sm font-bold">COMPANY</span>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                会社概要
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                信頼と実績で築く、持続可能な地方自治体向けITソリューション
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              会社プロフィール
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <Building className="w-5 h-5 text-[#1E3A8A]" />
                    <h3 className="text-lg font-bold text-[#1E3A8A]">会社概要</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="w-24 text-sm text-[#6B7280] font-medium">会社名</span>
                      <span className="text-sm text-[#1E3A8A] font-bold">AEGIS LLP</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-sm text-[#6B7280] font-medium">設立</span>
                      <span className="text-sm text-[#1E3A8A]">2000年4月</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-sm text-[#6B7280] font-medium">資本金</span>
                      <span className="text-sm text-[#1E3A8A]">5,000万円</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-sm text-[#6B7280] font-medium">従業員数</span>
                      <span className="text-sm text-[#1E3A8A]">120名</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-sm text-[#6B7280] font-medium">本社</span>
                      <span className="text-sm text-[#1E3A8A]">岐阜県関市</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <Target className="w-5 h-5 text-[#1E3A8A]" />
                    <h3 className="text-lg font-bold text-[#1E3A8A]">事業内容</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#F59E0B] mt-0.5" />
                      <span className="text-sm text-[#1E3A8A]">地方自治体向けシステム開発・運用</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#F59E0B] mt-0.5" />
                      <span className="text-sm text-[#1E3A8A]">行政システムコンサルティング</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#F59E0B] mt-0.5" />
                      <span className="text-sm text-[#1E3A8A]">セキュリティソリューション</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#F59E0B] mt-0.5" />
                      <span className="text-sm text-[#1E3A8A]">クラウドサービス提供</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3
                  className="text-xl font-bold text-[#1E3A8A] mb-4"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  私たちの使命
                </h3>
                <p
                  className="text-[#6B7280] leading-relaxed mb-4"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  地方自治体が抱える課題をITの力で解決し、住民サービスの向上と行政効率化を実現することが私たちの使命です。
                </p>
                <p
                  className="text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  25年間で培った実績と信頼を基に、安全で持続可能なシステムを提供し続けます。
                </p>
              </div>

              <div className="bg-[#1E3A8A] p-8 rounded-lg text-white">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  実績数値
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F59E0B]">200+</div>
                    <div className="text-sm">導入自治体</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F59E0B]">25</div>
                    <div className="text-sm">年の実績</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F59E0B]">99.9%</div>
                    <div className="text-sm">システム稼働率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F59E0B]">24/7</div>
                    <div className="text-sm">サポート体制</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              沿革
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "2000年", event: "AEGIS LLP設立、地方自治体向けシステム開発事業開始" },
                { year: "2005年", event: "ISO 27001認証取得、セキュリティ体制強化" },
                { year: "2010年", event: "クラウドサービス事業開始、全国展開本格化" },
                { year: "2015年", event: "導入自治体数100を突破、東京支社開設" },
                { year: "2020年", event: "DX推進支援サービス開始、リモートワーク対応強化" },
                { year: "2025年", event: "導入自治体数200突破、次世代システム開発プロジェクト始動" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-[#F59E0B] rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-2">
                    <div className="text-lg font-bold text-[#1E3A8A] mb-2">{item.year}</div>
                    <div
                      className="text-[#6B7280] leading-relaxed"
                      style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                    >
                      {item.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              企業理念・価値観
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-xl font-bold text-[#1E3A8A] mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                信頼性
              </h3>
              <p
                className="text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                25年間で培った実績と技術力により、確実で安全なシステムを提供します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-xl font-bold text-[#1E3A8A] mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                パートナーシップ
              </h3>
              <p
                className="text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                お客様との長期的なパートナーシップを築き、共に成長し続けます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-xl font-bold text-[#1E3A8A] mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                品質向上
              </h3>
              <p
                className="text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                常に最新の技術を取り入れ、より良いサービスを提供するため改善に取り組みます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              認証・資格
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "ISO 27001認証取得",
              "プライバシーマーク取得",
              "政府調達基準適合",
              "セキュリティ監査合格"
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div
                  className="text-[#1E3A8A] font-medium"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  {cert}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              お問い合わせ
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              地方自治体向けITソリューションに関するご相談は、お気軽にお問い合わせください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center gap-3 bg-white bg-opacity-10 p-4 rounded-lg">
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-bold text-lg">0575-28-3313</div>
                  <div className="text-sm">【受付時間】平日8:10-17:30</div>
                </div>
              </div>
              
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                メールでお問い合わせ
              </button>
            </div>
          </div>
        </div>
      </section>

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
      <ProfessionalFooter />
    </div>
  )
}