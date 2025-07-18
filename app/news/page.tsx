"use client"

import { Mail, Phone, Calendar, Tag, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import ProfessionalFooter from "@/components/footer"
import Link from "next/link"

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'すべて', count: 24 },
    { id: 'announcement', name: 'お知らせ', count: 8 },
    { id: 'product', name: '製品情報', count: 6 },
    { id: 'case-study', name: '導入事例', count: 5 },
    { id: 'company', name: '会社情報', count: 3 },
    { id: 'media', name: 'メディア掲載', count: 2 }
  ]

  const newsItems = [
    {
      id: 1,
      category: 'announcement',
      date: '2025-01-15',
      title: '年末年始休業のお知らせ',
      excerpt: '2024年12月29日（金）から2025年1月3日（水）まで年末年始休業とさせていただきます。',
      content: '平素は格別のご高配を賜り、厚く御礼申し上げます。誠に勝手ながら、下記の期間を年末年始休業とさせていただきます。',
      image: '/placeholder.svg?height=200&width=400&text=Year+End+Notice',
      featured: false,
      tags: ['休業', 'お知らせ']
    },
    {
      id: 2,
      category: 'product',
      date: '2025-01-10',
      title: '統合住民サービス基盤 Ver.3.0 リリース',
      excerpt: 'マイナンバーカード完全対応とAI機能搭載により、住民サービスの利便性が大幅に向上しました。',
      content: '弊社の主力製品である統合住民サービス基盤の最新版をリリースいたしました。今回のアップデートでは、マイナンバーカードとの完全連携機能を実装し、住民の皆様により便利で安全なサービスをご提供できるようになりました。',
      image: '/placeholder.svg?height=200&width=400&text=System+Ver3.0+Release',
      featured: true,
      tags: ['製品リリース', 'マイナンバー', 'AI']
    },
    {
      id: 3,
      category: 'case-study',
      date: '2025-01-08',
      title: '愛知県豊田市様 クラウド移行プロジェクト完了',
      excerpt: '2年間にわたるクラウド移行プロジェクトが完了し、運用コスト30%削減を実現しました。',
      content: '愛知県豊田市様との大規模クラウド移行プロジェクトが無事完了いたしました。従来のオンプレミスシステムから最新のクラウド基盤への移行により、システムの安定性向上と大幅なコスト削減を実現いたしました。',
      image: '/placeholder.svg?height=200&width=400&text=Toyota+Cloud+Migration',
      featured: true,
      tags: ['導入事例', 'クラウド', '豊田市']
    },
    {
      id: 4,
      category: 'company',
      date: '2025-01-05',
      title: '東京支社移転のお知らせ',
      excerpt: '1月20日より東京支社を新オフィスに移転いたします。',
      content: '業務拡大に伴い、東京支社を下記住所に移転することとなりました。',
      image: '/placeholder.svg?height=200&width=400&text=Tokyo+Office+Relocation',
      featured: false,
      tags: ['移転', '東京支社']
    },
    {
      id: 5,
      category: 'announcement',
      date: '2024-12-25',
      title: 'セキュリティ監査ISO27001更新完了',
      excerpt: '情報セキュリティマネジメントシステムの認証を更新いたしました。',
      content: 'ISO27001:2013の認証更新審査に合格し、情報セキュリティマネジメントシステムの認証を更新いたしました。',
      image: '/placeholder.svg?height=200&width=400&text=ISO27001+Certification',
      featured: false,
      tags: ['セキュリティ', '認証']
    },
    {
      id: 6,
      category: 'media',
      date: '2024-12-20',
      title: '日経コンピュータに掲載されました',
      excerpt: '自治体DX推進の取り組みについて日経コンピュータ12月号で紹介されました。',
      content: '弊社の自治体向けDX推進支援サービスが、日経コンピュータ12月号の特集記事「地方自治体のDX最前線」で紹介されました。',
      image: '/placeholder.svg?height=200&width=400&text=Nikkei+Computer+Feature',
      featured: false,
      tags: ['メディア', 'DX', '日経']
    },
    {
      id: 7,
      category: 'case-study',
      date: '2024-12-15',
      title: '石川県金沢市様 財務会計システム導入',
      excerpt: '次世代財務会計システムの導入により、予算編成作業の効率化を実現しました。',
      content: '石川県金沢市様に弊社の次世代財務会計システムを導入いたしました。新システムにより、予算編成から決算まで一元管理が可能となり、作業効率が大幅に向上いたしました。',
      image: '/placeholder.svg?height=200&width=400&text=Kanazawa+Finance+System',
      featured: false,
      tags: ['導入事例', '財務会計', '金沢市']
    },
    {
      id: 8,
      category: 'product',
      date: '2024-12-10',
      title: 'ゼロトラスト・セキュリティ新サービス開始',
      excerpt: '次世代セキュリティモデル「ゼロトラスト」を自治体向けに最適化したサービスを開始します。',
      content: 'リモートワークの普及に対応し、ゼロトラストセキュリティモデルを自治体業務に最適化した新サービスの提供を開始いたします。',
      image: '/placeholder.svg?height=200&width=400&text=Zero+Trust+Security',
      featured: false,
      tags: ['セキュリティ', 'ゼロトラスト', 'リモートワーク']
    }
  ]

  // Filter news items based on category and search
  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredNews = newsItems.filter(item => item.featured)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.name : categoryId
  }

  const getCategoryColor = (categoryId: string) => {
    const colors = {
      'announcement': 'bg-blue-100 text-blue-800',
      'product': 'bg-green-100 text-green-800',
      'case-study': 'bg-purple-100 text-purple-800',
      'company': 'bg-orange-100 text-orange-800',
      'media': 'bg-pink-100 text-pink-800'
    }
    return colors[categoryId as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

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
      <section className="relative h-80 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/90 to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=320&width=1280&text=News+Updates"
            alt="News and updates"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <div className="inline-block bg-[#F59E0B] px-4 py-2 rounded-full mb-4">
                <span className="text-white text-sm font-bold">NEWS</span>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                ニュース
              </h1>
              <p
                className="text-lg"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                最新の製品情報、導入事例、会社の取り組みをお届けします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold text-[#1E3A8A] mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                注目ニュース
              </h2>
              <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                        {getCategoryName(item.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.date)}
                    </div>
                    <h3
                      className="text-xl font-bold text-[#1E3A8A] mb-3 group-hover:text-[#F59E0B] transition-colors"
                      style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#6B7280] leading-relaxed mb-4"
                      style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                    >
                      {item.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-5 h-5" />
              <input
                type="text"
                placeholder="ニュースを検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#1E3A8A] text-white'
                      : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p
                className="text-lg text-[#6B7280]"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                該当するニュースが見つかりませんでした。
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                          {getCategoryName(item.category)}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                          <Calendar className="w-4 h-4" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                      <h3
                        className="text-xl font-bold text-[#1E3A8A] mb-3 group-hover:text-[#F59E0B] transition-colors"
                        style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#6B7280] leading-relaxed mb-4"
                        style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                      >
                        {item.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-[#F59E0B] hover:text-[#D97706] font-medium transition-colors">
                        続きを読む →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-[#6B7280] hover:bg-gray-50 transition-colors">
                  前へ
                </button>
                <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-[#6B7280] hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-[#6B7280] hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-[#6B7280] hover:bg-gray-50 transition-colors">
                  次へ
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            最新情報をお届け
          </h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-8"></div>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            製品の最新情報や導入事例、セミナー情報などをメールでお届けします
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 px-4 py-3 rounded-lg text-[#1E3A8A] border-0 focus:ring-2 focus:ring-[#F59E0B]"
              />
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-lg font-bold transition-colors">
                登録
              </button>
            </div>
            <p className="text-sm mt-4 opacity-80">
              登録されたメールアドレスは、ニュースレター配信以外の目的では使用いたしません
            </p>
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
      <ProfessionalFooter/>
    </div>
  )
}