export default function ProfessionalFooter() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Company Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-15 h-15 bg-[#1E3A8A] rounded flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-sm"></div>
              </div>
              <div
                className="text-xl font-bold text-[#1E3A8A]"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                AEGIS LLP
              </div>
            </div>

            <div
              className="text-sm leading-relaxed text-[#6B7280] space-y-2"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              <p>〒501-3944</p>
              <p>岐阜県関市山田1062番地の4</p>
              <p>TEL.0575-28-3313</p>
              <p>FAX.03-1234-5679</p>
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#1E3A8A] mb-4">サービス</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    ホーム
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    私たちの仕事
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    施工実績
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    ニュース情報
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1E3A8A] mb-4">採用情報</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    職種紹介
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    募集要項
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    先輩社員インタビュー
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                    エントリーフォーム
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Legal & Additional Links */}
          <div>
            <h4 className="font-bold text-[#1E3A8A] mb-4">その他</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                  サイトマップ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#F3F4F6] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-[#6B7280]">©2025 AEGIS LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}