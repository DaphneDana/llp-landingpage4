"use client"

import { Mail, Phone, MapPin, Clock, Users, Award, Heart, Coffee, GraduationCap, TrendingUp, FileText, Send, User, Building, Briefcase, Calendar, DollarSign, Zap, Cloud, BarChart2, Shield } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import ProfessionalFooter from "@/components/footer"

type Job = {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  icon: React.ReactElement
  color: string
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [formData, setFormData] = useState<{
    name: string
    email: string
    phone: string
    position: string
    experience: string
    resume: File | null
    motivation: string
    availability: string
  }>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    motivation: '',
    availability: ''
  })

  const jobs = [
    {
      id: 1,
      title: 'シニアシステムエンジニア',
      department: '開発部',
      location: '岐阜県関市（本社）',
      type: '正社員',
      experience: '5年以上',
      salary: '年収 600-900万円',
      description: '地方自治体向けシステムの設計・開発をリードするポジションです。要件定義から運用まで、プロジェクト全体を担当していただきます。',
      requirements: [
        'システム開発経験5年以上',
        'Java, C#, または.NET Core の実務経験',
        'データベース設計・構築経験',
        'プロジェクトリーダー経験歓迎',
        '自治体業務知識歓迎'
      ],
      benefits: [
        '年収600-900万円（経験・能力による）',
        '昇給年1回、賞与年2回',
        '各種社会保険完備',
        '退職金制度',
        '資格取得支援制度'
      ],
      icon: <Briefcase className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'クラウドインフラエンジニア',
      department: 'インフラ部',
      location: '岐阜県関市・リモート併用',
      type: '正社員',
      experience: '3年以上',
      salary: '年収 500-800万円',
      description: 'AWS・Azure等のクラウド基盤構築・運用を担当。自治体向けクラウドサービスの設計から構築まで幅広く手がけます。',
      requirements: [
        'クラウド基盤構築経験3年以上',
        'AWS または Azure の認定資格',
        'Docker, Kubernetes の実務経験',
        'セキュリティ対策の知識',
        '24時間365日運用体制への理解'
      ],
      benefits: [
        '年収500-800万円',
        'リモートワーク制度',
        '資格取得費用全額支給',
        'AWS・Azure トレーニング参加',
        'フレックスタイム制'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'サイバーセキュリティスペシャリスト',
      department: 'セキュリティ部',
      location: '岐阜県関市・東京支社',
      type: '正社員',
      experience: '3年以上',
      salary: '年収 550-850万円',
      description: '自治体システムのセキュリティ強化を担当。脆弱性診断、セキュリティ監査、インシデント対応などを行います。',
      requirements: [
        'セキュリティ分野での実務経験3年以上',
        'CISSP, CEH等の資格歓迎',
        'ペネトレーションテスト経験',
        '政府系システムのセキュリティ知識',
        'インシデント対応経験'
      ],
      benefits: [
        '年収550-850万円',
        'セキュリティ関連資格取得支援',
        '海外研修制度',
        '勤務地選択可能（関市・東京）',
        '専門書籍購入支援'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'bg-red-500'
    },
    {
      id: 4,
      title: 'プロジェクトマネージャー',
      department: 'PM室',
      location: '岐阜県関市・全国出張あり',
      type: '正社員',
      experience: '7年以上',
      salary: '年収 700-1000万円',
      description: '大規模な自治体システム導入プロジェクトの責任者として、企画から運用開始まで全体を統括します。',
      requirements: [
        'システム開発PM経験5年以上',
        'PMP資格または同等の知識',
        '自治体との折衝経験',
        '50名以上のチーム管理経験',
        'プロジェクト予算管理経験'
      ],
      benefits: [
        '年収700-1000万円',
        '出張手当・交通費全額支給',
        '成果連動賞与',
        '管理職手当',
        'マネジメント研修受講'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'ITコンサルタント',
      department: 'コンサルティング部',
      location: 'リモート中心・顧客先出張',
      type: '正社員',
      experience: '5年以上',
      salary: '年収 650-950万円',
      description: '自治体のDX推進を支援するコンサルタント。業務分析から最適なITソリューション提案まで担当します。',
      requirements: [
        'ITコンサルティング経験3年以上',
        '自治体業務の深い理解',
        'DX推進プロジェクト経験',
        '提案書作成・プレゼン能力',
        '中小企業診断士資格歓迎'
      ],
      benefits: [
        '年収650-950万円',
        '成功報酬制度',
        '全国出張（新幹線・飛行機利用）',
        'コンサルティングスキル研修',
        '学会・セミナー参加支援'
      ],
      icon: <BarChart2 className="w-8 h-8" />,
      color: 'bg-indigo-500'
    },
    {
      id: 6,
      title: '新卒エンジニア',
      department: '開発部・各部署',
      location: '岐阜県関市',
      type: '正社員（新卒）',
      experience: '未経験可',
      salary: '年収 350-450万円',
      description: '未経験から自治体システム開発のプロフェッショナルを目指す新卒採用枠。充実した研修制度でしっかりサポートします。',
      requirements: [
        '2025年3月大学・大学院卒業予定',
        '情報系学科卒業または同等の知識',
        'プログラミング経験（言語不問）',
        '向学心・成長意欲',
        'チームワークを重視する方'
      ],
      benefits: [
        '年収350-450万円（昇給制度あり）',
        '6ヶ月間の充実した新人研修',
        'メンター制度',
        '資格取得奨励金',
        '若手社員との交流会'
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'bg-orange-500'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: '競争力のある給与',
      description: '業界水準を上回る給与体系。成果に応じた昇給・賞与制度で頑張りを正当に評価します。'
    },
    {
      icon: Clock,
      title: 'ワークライフバランス',
      description: 'フレックスタイム制・リモートワーク制度で、効率的で柔軟な働き方を実現できます。'
    },
    {
      icon: GraduationCap,
      title: '成長支援制度',
      description: '資格取得支援・社外研修参加・技術書籍購入支援など、継続的なスキルアップをサポートします。'
    },
    {
      icon: Heart,
      title: '充実した福利厚生',
      description: '各種社会保険・退職金制度・健康診断・社員旅行など、安心して長く働ける環境を提供します。'
    },
    {
      icon: Users,
      title: 'チームワーク重視',
      description: '風通しの良い職場環境で、チーム一丸となってプロジェクトを成功に導きます。'
    },
    {
      icon: TrendingUp,
      title: 'キャリア成長',
      description: '多様なプロジェクトへの参加機会と明確なキャリアパスで、着実なキャリアアップが可能です。'
    }
  ]

  const applicationSteps = [
    {
      step: '01',
      title: 'エントリー',
      description: '応募フォームまたはメールにて必要書類をご提出ください。',
      icon: FileText
    },
    {
      step: '02',
      title: '書類選考',
      description: '履歴書・職務経歴書を基に選考を行います。結果は1週間以内にご連絡します。',
      icon: User
    },
    {
      step: '03',
      title: '一次面接',
      description: '人事担当者による面接を実施。経験やスキル、志望動機についてお聞きします。',
      icon: Users
    },
    {
      step: '04',
      title: '技術面接',
      description: '技術責任者による専門的な面接。実際の業務に関する質問や技術的な議論を行います。',
      icon: Briefcase
    },
    {
      step: '05',
      title: '最終面接',
      description: '役員面接にて、当社への適性や将来のビジョンについて確認させていただきます。',
      icon: Award
    },
    {
      step: '06',
      title: '内定・入社',
      description: '内定通知後、入社日の調整を行います。入社前研修もご用意しています。',
      icon: Building
    }
  ]

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: value
  }))
}

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData(prev => ({
    ...prev,
    resume: e.target.files?.[0] || null
  }))
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // Handle form submission
  console.log('Application submitted:', formData)
  alert('応募が完了しました。ありがとうございます！')
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
      <section className="relative h-96 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1280&text=Team+Office+Environment"
            alt="Office environment"
            fill
            className="object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <div className="inline-block bg-[#F59E0B] px-4 py-2 rounded-full mb-4">
                <span className="text-white text-sm font-bold">RECRUIT</span>
              </div>
              <h1
                className="text-5xl font-bold mb-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                採用情報
              </h1>
              <p
                className="text-lg"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                共に地方自治体の未来を創る仲間を募集しています
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl font-bold text-[#1E3A8A] mb-6"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                代表からのメッセージ
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  私たちAEGIS LLPは、25年間にわたり地方自治体のIT化を支援してきました。この間、技術は飛躍的に進歩し、住民の皆様のニーズも多様化しています。
                </p>
                <p
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  私たちが求めているのは、単に技術力があるだけでなく、地方自治体の課題を理解し、住民の皆様の生活をより良くしたいという熱意を持った方々です。
                </p>
                <p
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  当社では一人ひとりの成長を大切にし、チーム一丸となってプロジェクトを成功に導く文化があります。あなたの技術力と情熱で、一緒に日本の地方自治体の未来を創造しませんか。
                </p>
              </div>
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E3A8A] text-lg">田中 太郎</div>
                    <div className="text-[#6B7280]">代表取締役社長</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=CEO+Office+Photo"
                alt="CEO office"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              募集中のポジション
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <h3
                        className="text-lg font-bold text-[#1E3A8A]"
                        style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                      >
                        {job.title}
                      </h3>
                      <p className="text-sm text-[#6B7280]">{job.department}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <Briefcase className="w-4 h-4" />
                      {job.type} • {job.experience}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#1E3A8A] font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>
                  
                  <p
                    className="text-sm text-[#6B7280] mb-4 leading-relaxed"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {job.description}
                  </p>
                  
                  <button className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white py-2 px-4 rounded font-medium transition-colors">
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              働くメリット・福利厚生
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1E3A8A] mb-3"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              応募から入社までの流れ
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-shadow"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{step.step}</span>
                    </div>
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1E3A8A] mb-3"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white" id="application-form">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              応募フォーム
            </h2>
            <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-4"></div>
            <p
              className="text-[#6B7280]"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              以下のフォームにご記入いただき、応募してください
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                  placeholder="山田 太郎"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                  placeholder="example@email.com"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  希望職種 <span className="text-red-500">*</span>
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  経験年数
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="未経験">未経験</option>
                  <option value="1-2年">1-2年</option>
                  <option value="3-5年">3-5年</option>
                  <option value="6-10年">6-10年</option>
                  <option value="10年以上">10年以上</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                  入社可能時期
                </label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                  placeholder="即日、2024年4月、要相談 など"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                履歴書・職務経歴書 <span className="text-blue-500">*</span>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
              />
              <p className="text-sm text-[#6B7280] mt-1">PDF、Word形式（最大5MB）</p>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#1E3A8A] mb-2">
                志望動機・自己PR <span className="text-red-500">*</span>
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent resize-none"
                placeholder="志望動機や自己PRをご記入ください（500文字以内）"
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
              >
                <Send className="w-5 h-5" />
                応募する
              </button>
              <p
                className="text-sm text-[#6B7280] mt-4"
                style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
              >
                ご応募いただいた内容は、採用選考以外の目的では使用いたしません
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            採用に関するお問い合わせ
          </h2>
          <div className="w-20 h-1 bg-[#F59E0B] mx-auto mb-8"></div>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
          >
            採用に関するご質問やご相談がございましたら、お気軽にお問い合わせください
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
              採用担当者にメール
            </button>
          </div>

          <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-bold mb-2">採用担当</h3>
            <p className="text-sm">人事部 採用チーム</p>
            <p className="text-sm">recruit@aegis-llp.co.jp</p>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${selectedJob.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                    {selectedJob.icon}
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#1E3A8A]"
                      style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                    >
                      {selectedJob.title}
                    </h3>
                    <p className="text-[#6B7280]">{selectedJob.department}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-[#6B7280] hover:text-[#1E3A8A] text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-4">職務概要</h4>
                  <p
                    className="text-[#6B7280] mb-6 leading-relaxed"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    {selectedJob.description}
                  </p>

                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-4">応募要件</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-[#1E3A8A] mt-0.5 flex-shrink-0" />
                        <span className="text-[#6B7280] text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#1E3A8A] mb-4">待遇・福利厚生</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-[#1E3A8A] mt-0.5 flex-shrink-0" />
                        <span className="text-[#6B7280] text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1E3A8A] mb-2">募集要項</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#6B7280]">勤務地:</span>
                        <span className="text-[#1E3A8A]">{selectedJob.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7280]">雇用形態:</span>
                        <span className="text-[#1E3A8A]">{selectedJob.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7280]">経験:</span>
                        <span className="text-[#1E3A8A]">{selectedJob.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B7280]">給与:</span>
                        <span className="text-[#1E3A8A] font-semibold">{selectedJob.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setSelectedJob(null)
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  この職種に応募する
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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