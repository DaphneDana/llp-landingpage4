"use client"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: number
  nameJp: string
  nameEn: string
  position: string
  experience: string
  specialization: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    nameJp: "田中 太郎",
    nameEn: "Taro Tanaka",
    position: "代表取締役",
    experience: "15年の経験",
    specialization: "政府関係・経営戦略",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    nameJp: "佐藤 花子",
    nameEn: "Hanako Sato",
    position: "技術責任者",
    experience: "12年の経験",
    specialization: "システム設計・技術革新",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    nameJp: "鈴木 一郎",
    nameEn: "Ichiro Suzuki",
    position: "プロジェクトマネージャー",
    experience: "10年の経験",
    specialization: "政府プロジェクト管理",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    nameJp: "高橋 美咲",
    nameEn: "Misaki Takahashi",
    position: "システムエンジニア",
    experience: "8年の経験",
    specialization: "システム開発・実装",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    nameJp: "山田 健太",
    nameEn: "Kenta Yamada",
    position: "セキュリティ専門家",
    experience: "11年の経験",
    specialization: "サイバーセキュリティ",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    nameJp: "中村 由美",
    nameEn: "Yumi Nakamura",
    position: "UXデザイナー",
    experience: "7年の経験",
    specialization: "ユーザー体験設計",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function ContactTeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div>
      {/* Contact Call-to-Action Section */}
      <section className="relative bg-[#1E3A8A] overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
              <path d="M0,0 L400,0 L400,600 L100,600 Z" fill="rgba(37, 99, 235, 0.3)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-1/4 h-2/3">
            <svg className="w-full h-full" viewBox="0 0 300 400" preserveAspectRatio="none">
              <path d="M0,400 L300,400 L200,0 L0,100 Z" fill="rgba(245, 158, 11, 0.1)" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Main Content */}
            <div>
              <div className="mb-8">
                <div className="inline-block bg-[#F59E0B] text-[#1E3A8A] px-4 py-2 rounded font-bold text-sm mb-4">
                  CONTACT US
                </div>
                <h2
                  className="text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  お気軽に
                  <br />
                  ご相談ください
                </h2>
                <p
                  className="text-xl leading-relaxed text-[#E0F2FE] mb-8"
                  style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                >
                  政府・自治体向けITソリューションのご相談から
                  <br />
                  システム導入まで、専門チームが対応いたします。
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">お電話でのお問い合わせ</div>
                      <div className="text-[#E0F2FE] text-sm">平日 9:00-17:00</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">0575-28-3313</div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">メールでのお問い合わせ</div>
                      <div className="text-[#E0F2FE] text-sm">24時間受付</div>
                    </div>
                  </div>
                  <div className="text-lg text-white">info@aegis-llp.com</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#F59E0B] text-[#1E3A8A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#D97706] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  お問い合わせフォーム
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all duration-300">
                  資料ダウンロード
                </button>
              </div>
            </div>

            {/* Right Side - Contact Info Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#1E3A8A] mb-2"
                    style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
                  >
                    本社所在地
                  </h3>
                </div>

                <div className="space-y-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#1E3A8A] mb-1">AEGIS LLP</div>
                    <div
                      className="text-[#6B7280] leading-relaxed"
                      style={{
                        fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                      }}
                    >
                      〒501-3944
                      <br />
                      岐阜県関市山田1062番地の4
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-bold text-[#1E3A8A]">設立</div>
                        <div className="text-[#6B7280]">1999年</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#1E3A8A]">従業員数</div>
                        <div className="text-[#6B7280]">150名</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#1E3A8A]">実績</div>
                        <div className="text-[#6B7280]">500+ 自治体</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#1E3A8A]">対応地域</div>
                        <div className="text-[#6B7280]">全国47都道府県</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F59E0B] rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#06B6D4] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Carousel Section */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif" }}
            >
              チームメンバー
            </h2>
            <p className="text-xl font-medium text-[#6B7280]">Our Professional Team</p>
          </div>

          {/* Continuous Motion Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Carousel Track */}
            <div className="flex animate-scroll gap-8">
              {/* First set of team members */}
              {teamMembers.map((member) => (
                <div
                  key={`first-${member.id}`}
                  className="flex-shrink-0 w-80 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="relative overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.nameJp} - ${member.position}`}
                      width={300}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-[#1E3A8A] bg-opacity-90 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                        hoveredMember === member.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{
                          fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                        }}
                      >
                        {member.nameJp}
                      </h3>
                      <h4 className="text-lg font-medium text-[#E0F2FE] mb-2">{member.nameEn}</h4>
                      <div className="space-y-1 text-sm text-[#E0F2FE]">
                        <p className="font-medium">{member.position}</p>
                        <p>{member.experience}</p>
                        <p>{member.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {teamMembers.map((member) => (
                <div
                  key={`second-${member.id}`}
                  className="flex-shrink-0 w-80 relative group cursor-pointer"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="relative overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.nameJp} - ${member.position}`}
                      width={300}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-[#1E3A8A] bg-opacity-90 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                        hoveredMember === member.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{
                          fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                        }}
                      >
                        {member.nameJp}
                      </h3>
                      <h4 className="text-lg font-medium text-[#E0F2FE] mb-2">{member.nameEn}</h4>
                      <div className="space-y-1 text-sm text-[#E0F2FE]">
                        <p className="font-medium">{member.position}</p>
                        <p>{member.experience}</p>
                        <p>{member.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Mobile Carousel - Keep existing mobile implementation */}
        <div className="lg:hidden max-w-sm mx-auto px-4 mt-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className="flex-shrink-0 w-full px-2">
                  <div className="relative overflow-hidden shadow-xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.nameJp} - ${member.position}`}
                      width={300}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{
                          fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', serif",
                        }}
                      >
                        {member.nameJp}
                      </h3>
                      <p className="text-sm opacity-90">{member.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}