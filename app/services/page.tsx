import { Mail, Phone, Server, Shield, Cloud, Users, Database, Cog, ArrowRight, CheckCircle, Star, Clock, Headphones, Laptop, FileText, BarChart3 } from "lucide-react"
import Image from "next/image"
import ProfessionalFooter from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as other pages */}
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
            alt="Technology and government buildings"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white max-w-2xl">
              <div className="inline-block bg-[#F59E0B] px-4 py-2 rounded-full mb-4">
                <span className="text-white text-sm font-bold">SERVICES</span>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                サービス一覧
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                地方自治体のDX推進を支援する包括的なITソリューション
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              主要サービス
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-4"></div>
            <p
              className="text-lg text-[#6B7280] max-w-3xl mx-auto"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              25年間の実績と技術力で、地方自治体のあらゆるIT課題を解決いたします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "システム開発・構築",
                description: "自治体業務に特化したシステムの設計・開発・導入",
                features: ["住民情報システム", "財務会計システム", "文書管理システム", "議会システム"]
              },
              {
                icon: Cloud,
                title: "クラウドサービス",
                description: "安全で効率的なクラウド環境の提供と運用支援",
                features: ["自治体クラウド", "データバックアップ", "災害対策", "リモートアクセス"]
              },
              {
                icon: Shield,
                title: "セキュリティ対策",
                description: "政府基準に準拠した堅牢なセキュリティ体制の構築",
                features: ["情報セキュリティ監査", "脆弱性診断", "セキュリティ研修", "LGWAN対応"]
              },
              {
                icon: Headphones,
                title: "運用・保守サポート",
                description: "24時間365日の安心サポート体制",
                features: ["システム監視", "障害対応", "定期メンテナンス", "ヘルプデスク"]
              },
              {
                icon: Users,
                title: "DX推進コンサルティング",
                description: "デジタル変革の戦略立案から実行まで包括支援",
                features: ["業務プロセス改善", "デジタル化計画", "職員研修", "効果測定"]
              },
              {
                icon: BarChart3,
                title: "データ活用支援",
                description: "データドリブンな行政運営の実現をサポート",
                features: ["データ分析基盤", "BI構築", "統計処理", "可視化ツール"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#1E3A8A] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-[#1E3A8A] mb-3"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#6B7280] mb-4 leading-relaxed"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1E3A8A]" />
                      <span className="text-sm text-[#1E3A8A]">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-[#1E3A8A] hover:text-[#1E40AF] font-medium flex items-center gap-2 transition-colors">
                  詳細を見る
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              サービス提供プロセス
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "ヒアリング・課題分析",
                description: "現状の課題や要望を詳しくお聞きし、最適なソリューションを検討します。",
                icon: Users
              },
              {
                step: "02",
                title: "提案・設計",
                description: "お客様のニーズに合わせたシステム設計と詳細な提案書を作成します。",
                icon: FileText
              },
              {
                step: "03",
                title: "開発・構築",
                description: "経験豊富なエンジニアチームが確実にシステムを構築いたします。",
                icon: Cog
              },
              {
                step: "04",
                title: "運用・サポート",
                description: "導入後も継続的な運用サポートで安心してご利用いただけます。",
                icon: Headphones
              }
            ].map((process, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{process.step}</span>
                  </div>
                </div>
                <h3
                  className="text-lg font-bold text-[#1E3A8A] mb-3"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  {process.title}
                </h3>
                <p
                  className="text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              注目のソリューション
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=192&width=400"
                  alt="Digital transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-70 flex items-center justify-center">
                  <Laptop className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[#1E3A8A]" />
                  <span className="text-sm font-bold text-[#1E3A8A]">注目サービス</span>
                </div>
                <h3
                  className="text-xl font-bold text-[#1E3A8A] mb-3"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  統合型住民サービス基盤
                </h3>
                <p
                  className="text-[#6B7280] mb-4 leading-relaxed"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  住民票・戸籍・税務・国保など、住民に関わる全ての業務を統合管理できる次世代プラットフォームです。マイナンバー連携にも完全対応。
                </p>
                <div className="space-y-2 mb-4">
                  {["マイナンバー完全対応", "他システム連携機能", "24時間365日稼働", "高度セキュリティ"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1E3A8A]" />
                      <span className="text-sm text-[#1E3A8A]">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2 rounded font-medium transition-colors">
                  詳細資料ダウンロード
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=192&width=400"
                  alt="Cloud security"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-70 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-[#1E3A8A]" />
                  <span className="text-sm font-bold text-[#1E3A8A]">最新技術</span>
                </div>
                <h3
                  className="text-xl font-bold text-[#1E3A8A] mb-3"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  ゼロトラスト・セキュリティ
                </h3>
                <p
                  className="text-[#6B7280] mb-4 leading-relaxed"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  次世代のセキュリティモデル「ゼロトラスト」を自治体向けに最適化。リモートワークでも安全な業務環境を実現します。
                </p>
                <div className="space-y-2 mb-4">
                  {["多要素認証", "エンドポイント保護", "ネットワーク分離", "リアルタイム監視"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1E3A8A]" />
                      <span className="text-sm text-[#1E3A8A]">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2 rounded font-medium transition-colors">
                  セキュリティ診断申込
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Maintenance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl font-bold text-[#1E3A8A] mb-6"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                充実のサポート体制
              </h2>
              <p
                className="text-lg text-[#6B7280] mb-6 leading-relaxed"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                導入後も安心してご利用いただけるよう、専門スタッフによる手厚いサポートをご提供いたします。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] mb-2">24時間365日監視</h3>
                    <p className="text-[#6B7280] text-sm">システムの稼働状況を常時監視し、問題を早期発見・対応します。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] mb-2">専用ヘルプデスク</h3>
                    <p className="text-[#6B7280] text-sm">操作方法や設定変更など、日常的な疑問にお答えします。</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Cog className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A8A] mb-2">定期メンテナンス</h3>
                    <p className="text-[#6B7280] text-sm">システムの最適化とセキュリティアップデートを定期的に実施します。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E3A8A] p-8 rounded-lg text-white">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                サポート実績
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-sm">システム稼働率</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">5分</div>
                  <div className="text-sm">平均応答時間</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm">監視体制</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">200+</div>
                  <div className="text-sm">サポート自治体</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  25年間の運用実績により培われた、信頼できるサポート体制でお客様の業務を支えます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            お気軽にご相談ください
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            貴自治体のIT課題解決に向けて、最適なソリューションをご提案いたします。まずはお気軽にお問い合わせください。
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
              サービス資料請求
            </button>
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
      <ProfessionalFooter/>
    </div>
  )
}