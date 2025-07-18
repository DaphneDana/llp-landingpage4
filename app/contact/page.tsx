"use client"

import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, FileText, Calendar, Zap, Navigation, Globe, Shield, Award } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import ProfessionalFooter from "@/components/footer"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    agreeToTerms: false
  })

  const [activeOffice, setActiveOffice] = useState('headquarters')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('お問い合わせを受け付けました。3営業日以内にご連絡いたします。')
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: '',
      subject: '',
      message: '',
      budget: '',
      timeline: '',
      agreeToTerms: false
    })
  }

  const offices = [
    {
      id: 'headquarters',
      name: '本社',
      address: '〒501-3881 岐阜県関市元重町74-1',
      phone: '0575-28-3313',
      fax: '0575-28-3314',
      email: 'info@aegis-llp.co.jp',
      hours: '平日 8:10-17:30',
      access: 'JR高山本線「関駅」より徒歩15分\n東海北陸自動車道「関IC」より車で10分',
      image: '/placeholder.svg?height=300&width=400&text=AEGIS+Headquarters+Seki',
      managers: [
        { name: '田中 太郎', position: '代表取締役社長', phone: '0575-28-3313' },
        { name: '佐藤 花子', position: '営業部長', phone: '0575-28-3315' }
      ]
    },
    {
      id: 'tokyo',
      name: '東京支社',
      address: '〒100-0005 東京都千代田区丸の内1-1-1',
      phone: '03-1234-5678',
      fax: '03-1234-5679',
      email: 'tokyo@aegis-llp.co.jp',
      hours: '平日 9:00-18:00',
      access: 'JR「東京駅」丸の内中央口より徒歩3分\n地下鉄丸ノ内線「東京駅」より直結',
      image: '/placeholder.svg?height=300&width=400&text=AEGIS+Tokyo+Office',
      managers: [
        { name: '山田 次郎', position: '東京支社長', phone: '03-1234-5678' },
        { name: '鈴木 美咲', position: 'コンサルティング部長', phone: '03-1234-5680' }
      ]
    }
  ]

  const inquiryTypes = [
    { value: 'system-development', label: 'システム開発・構築' },
    { value: 'cloud-migration', label: 'クラウド移行' },
    { value: 'security-consulting', label: 'セキュリティコンサルティング' },
    { value: 'dx-support', label: 'DX推進支援'},
    { value: 'maintenance-support', label: '運用・保守',},
    { value: 'recruitment', label: '採用・人材'},
    { value: 'partnership', label: 'パートナーシップ' },
    { value: 'other', label: 'その他' }
  ]

  const quickContacts = [
    {
      title: '緊急時サポート',
      description: 'システム障害等の緊急時',
      phone: '0575-28-9999',
      availability: '24時間365日',
      icon: Zap,
      color: 'bg-red-500'
    },
    {
      title: '営業担当',
      description: '新規案件・提案依頼',
      phone: '0575-28-3315',
      availability: '平日 8:10-17:30',
      icon: Building,
      color: 'bg-blue-500'
    },
    {
      title: '採用担当',
      description: '求人・採用に関するお問い合わせ',
      phone: '0575-28-3316',
      availability: '平日 9:00-17:00',
      icon: User,
      color: 'bg-green-500'
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
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1280&text=Contact+Support+Team"
            alt="Contact support team"
            fill
            className="object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <div className="inline-block bg-[#F59E0B] px-4 py-2 rounded-full mb-4">
                <span className="text-white text-sm font-bold">CONTACT</span>
              </div>
              <h1
                className="text-5xl font-bold mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                お問い合わせ
              </h1>
              <p
                className="text-lg"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                お気軽にご相談ください。専門スタッフが丁寧にサポートいたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              緊急時・専門窓口
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickContacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1E3A8A] mb-2 text-center"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {contact.title}
                  </h3>
                  <p
                    className="text-[#6B7280] text-center mb-4"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {contact.description}
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F59E0B] mb-1">{contact.phone}</div>
                    <div className="text-sm text-[#6B7280]">{contact.availability}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              オフィス情報
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          {/* Office Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setActiveOffice(office.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeOffice === office.id
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-[#6B7280] hover:text-[#1E3A8A]'
                  }`}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>

          {/* Office Details */}
          {offices.map((office) => (
            <div
              key={office.id}
              className={`${activeOffice === office.id ? 'block' : 'hidden'} transition-all duration-500`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Image
                    src={office.image}
                    alt={office.name}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#1E3A8A] mb-4"
                      style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                    >
                      {office.name}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#F59E0B] mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#1E3A8A]">住所</div>
                          <div className="text-[#6B7280]">{office.address}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#F59E0B] mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#1E3A8A]">電話・FAX</div>
                          <div className="text-[#6B7280]">TEL: {office.phone}</div>
                          <div className="text-[#6B7280]">FAX: {office.fax}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#F59E0B] mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#1E3A8A]">メール</div>
                          <div className="text-[#6B7280]">{office.email}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#F59E0B] mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#1E3A8A]">営業時間</div>
                          <div className="text-[#6B7280]">{office.hours}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Navigation className="w-5 h-5 text-[#F59E0B] mt-0.5" />
                        <div>
                          <div className="font-semibold text-[#1E3A8A]">アクセス</div>
                          <div className="text-[#6B7280] whitespace-pre-line">{office.access}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Managers */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-[#1E3A8A] mb-4">担当者</h4>
                    <div className="space-y-4">
                      {office.managers.map((manager, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#1E3A8A]">{manager.name}</div>
                            <div className="text-sm text-[#6B7280]">{manager.position}</div>
                            <div className="text-sm text-[#F59E0B]">{manager.phone}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              お問い合わせフォーム
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-4"></div>
            <p
              className="text-[#6B7280]"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              以下のフォームからお気軽にお問い合わせください
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  会社名・団体名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                  placeholder="○○市役所"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                  placeholder="example@city.lg.jp"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                  placeholder="090-1234-5678"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <div className="grid md:grid-cols-4 gap-3">
                {inquiryTypes.map((type) => (
                  <label
                    key={type.value}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.inquiryType === type.value
                        ? 'bg-[#F59E0B] text-white border-[#F59E0B]'
                        : 'border-gray-300 hover:border-[#F59E0B]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="inquiryType"
                      value={type.value}
                      checked={formData.inquiryType === type.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    {/* <span className="mr-2">{type.icon}</span> */}
                    <span className="text-sm font-medium">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  予算規模
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="under-1m">100万円未満</option>
                  <option value="1m-5m">100万円 - 500万円</option>
                  <option value="5m-10m">500万円 - 1000万円</option>
                  <option value="10m-50m">1000万円 - 5000万円</option>
                  <option value="over-50m">5000万円以上</option>
                  <option value="undecided">未定</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  希望時期
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="urgent">至急（1ヶ月以内）</option>
                  <option value="3months">3ヶ月以内</option>
                  <option value="6months">6ヶ月以内</option>
                  <option value="1year">1年以内</option>
                  <option value="undecided">未定</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                件名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                placeholder="住民情報システムの更新について"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent resize-none"
                placeholder="具体的なご要望やご質問をお聞かせください"
              />
            </div>

            <div className="mt-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-[#F59E0B] border-gray-300 rounded focus:ring-[#F59E0B]"
                />
                <span className="text-sm text-[#6B7280]">
                  <span className="text-red-500">*</span>
                  個人情報の取り扱いについて同意します。
                  <a href="#" className="text-[#F59E0B] hover:underline ml-1">プライバシーポリシーを確認</a>
                </span>
              </label>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={!formData.agreeToTerms}
                className="bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
              >
                <Send className="w-5 h-5" />
                お問い合わせを送信
              </button>
              <p
                className="text-sm text-[#6B7280] mt-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                通常3営業日以内にご返答いたします
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              よくあるご質問
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
                  システム導入にかかる期間はどのくらいですか？
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  プロジェクトの規模によりますが、小規模なシステムで3-6ヶ月、大規模なシステムで12-18ヶ月程度が目安です。詳細な要件をお聞きした上で、正確なスケジュールをご提示いたします。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#F59E0B]" />
                  セキュリティ対策はどのようになっていますか？
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  政府推奨のセキュリティガイドラインに準拠し、ISO27001認証を取得しています。多層防御、暗号化、アクセス制御など、包括的なセキュリティ対策を実装します。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#F59E0B]" />
                  遠方の自治体でも対応可能ですか？
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  全国どちらでも対応いたします。リモート会議やクラウドサービスを活用し、効率的なプロジェクト進行を行います。必要に応じて現地での打ち合わせも実施します。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#F59E0B]" />
                  提案書の作成は無料ですか？
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  基本的なご提案は無料で作成いたします。詳細な要件定義や設計書が必要な場合は、有償での対応となる場合がございます。まずはお気軽にご相談ください。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F59E0B]" />
                  導入後のサポート体制について教えてください
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  24時間365日の監視体制で、システムの安定稼働をサポートします。専用ヘルプデスク、定期メンテナンス、緊急時対応など、包括的なサポートを提供します。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E3A8A] mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#F59E0B]" />
                  クラウド移行を検討していますが、何から始めればよいですか？
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  まず現状システムの調査・分析から始めます。移行計画の策定、リスク評価、コスト試算を行い、段階的な移行スケジュールをご提案いたします。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p
              className="text-[#6B7280] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              その他のご質問がございましたら、お気軽にお問い合わせください
            </p>
            <button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              詳細なFAQを見る
            </button>
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
            まずはお気軽にご相談ください
          </h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-8"></div>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            お客様のニーズに合わせた最適なソリューションをご提案いたします。専門スタッフが丁寧にサポートいたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center justify-center gap-3 bg-white bg-opacity-10 p-4 rounded-lg">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-bold text-xl">0575-28-3313</div>
                <div className="text-sm">【受付時間】平日8:10-17:30</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white bg-opacity-10 p-4 rounded-lg">
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-bold text-lg">info@aegis-llp.co.jp</div>
                <div className="text-sm">メールでのお問い合わせ</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F59E0B] mb-2">3営業日</div>
              <div className="text-sm">以内にご返答</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F59E0B] mb-2">無料</div>
              <div className="text-sm">初回ご相談</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F59E0B] mb-2">25年</div>
              <div className="text-sm">の実績とノウハウ</div>
            </div>
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