import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function PhilosophyAboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-[#1E3A8A] mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            企業理念・会社概要
          </h2>
          <div className="w-16 h-0.5 bg-[#1E3A8A] mx-auto"></div>
        </div>

        {/* Philosophy Subsection - Image Right Layout */}
        <div className="mb-30">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Text Content Area - Left Side */}
            <div className="lg:col-span-3 flex gap-8">
              {/* Vertical Japanese Title */}
              <div className="hidden lg:block">
                <h3
                  className="text-2xl font-bold text-[#1E3A8A] writing-mode-vertical-rl"
                  style={{
                    fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  企業理念
                </h3>
              </div>

              {/* Mobile Horizontal Title */}
              <div className="lg:hidden mb-6">
                <h3
                  className="text-2xl font-bold text-[#1E3A8A]"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  企業理念
                </h3>
              </div>

              {/* Main Content Block */}
              <div className="flex-1 bg-[#F8F9FA] p-10 rounded-lg border border-gray-100 relative">
                <div
                  className="text-lg leading-relaxed text-[#374151] space-y-6"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  <p>
                    私たちは創業以来25年間、地方自治体のデジタル変革を支援し続けてまいりました。
                    公共サービスの向上と市民の皆様の利便性向上を第一に考え、
                    信頼性の高いシステム構築に取り組んでおります。
                  </p>
                  <p>
                    技術革新と伝統的な日本の価値観を融合させ、 持続可能で安全な社会基盤の構築を目指しています。
                    お客様との長期的なパートナーシップを大切にし、 常に最高品質のサービス提供をお約束いたします。
                  </p>
                  <p>
                    全国200以上の自治体様との実績を基に、 地域に根ざしたきめ細やかなサポートを提供し、
                    日本の行政システムの発展に貢献してまいります。
                  </p>
                </div>

                {/* Read More Link */}
                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] hover:text-[#1E40AF] transition-colors group">
                    <span>詳しく見る</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Area - Right Side */}
            <div className="lg:col-span-2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="企業理念を表現する職場風景"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                {/* Geometric Overlay - Matching reference design */}
                <div className="absolute top-0 right-0 w-40 h-32 bg-gray-200 opacity-90 rounded-bl-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Subsection - Image Left Layout */}
        <div className="mt-30">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Image Area - Left Side */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="会社概要を表現するオフィス環境"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                {/* Geometric Overlay - Different position for variety */}
                <div className="absolute bottom-0 left-0 w-36 h-28 bg-gray-200 opacity-90 rounded-tr-lg"></div>
              </div>
            </div>

            {/* Text Content Area - Right Side */}
            <div className="lg:col-span-3 flex gap-8 order-1 lg:order-2">
              {/* Main Content Block */}
              <div className="flex-1 bg-[#F8F9FA] p-10 rounded-lg border border-gray-100 relative">
                <div
                  className="text-lg leading-relaxed text-[#374151] space-y-6"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  <p>
                    <strong className="text-[#1E3A8A]">株式会社テクノソリューション</strong>は1999年の創業以来、
                    地方自治体向けITソリューションの専門企業として成長を続けております。
                    本社を東京に構え、全国47都道府県にサービスを展開しています。
                  </p>
                  <p>
                    <strong className="text-[#1E3A8A]">主要事業領域：</strong>
                    <br />• 行政システム開発・運用保守
                    <br />• 電子申請・電子決裁システム
                    <br />• 住民情報システム構築
                    <br />• セキュリティソリューション
                    <br />• クラウド移行支援サービス
                  </p>
                  <p>
                    従業員数150名、うち80%が政府調達案件の経験を有する技術者です。
                    ISO27001認証取得済みで、政府情報システムの統一基準に完全準拠した
                    セキュアな開発環境を整備しております。
                  </p>
                </div>

                {/* Read More Link */}
                <div className="absolute bottom-6 right-6">
                  <button className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] hover:text-[#1E40AF] transition-colors group">
                    <span>会社情報</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Vertical Japanese Title */}
              <div className="hidden lg:block">
                <h3
                  className="text-2xl font-bold text-[#1E3A8A] writing-mode-vertical-rl"
                  style={{
                    fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  会社概要
                </h3>
              </div>

              {/* Mobile Horizontal Title */}
              <div className="lg:hidden mb-6 order-0">
                <h3
                  className="text-2xl font-bold text-[#1E3A8A]"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  会社概要
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
