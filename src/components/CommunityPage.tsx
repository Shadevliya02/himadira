import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, BookOpen, Users, Code, Award, Heart, Lightbulb, Zap } from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

export function CommunityPage({ onNavigate }: CommunityPageProps) {
  const resources = [
    {
      icon: <Github className="w-10 h-10 text-[#00C2E0]" />,
      title: 'Github Basic Knowledge',
      description: 'Pelajari dasar-dasar Git dan GitHub untuk version control yang efektif',
      link: 'Workshop & Tutorial',
    },
    {
      icon: <Code className="w-10 h-10 text-[#00C2E0]" />,
      title: 'Coding Challenge',
      description: 'Latihan coding dengan berbagai tingkat kesulitan untuk meningkatkan skill',
      link: 'Lihat Challenge',
    },
    {
      icon: <BookOpen className="w-10 h-10 text-[#00C2E0]" />,
      title: 'Learning Resources',
      description: 'Kumpulan materi pembelajaran, tutorial, dan referensi untuk mahasiswa RPL',
      link: 'Akses Materi',
    },
    {
      icon: <Users className="w-10 h-10 text-[#00C2E0]" />,
      title: 'Study Group',
      description: 'Bergabung dengan kelompok belajar untuk diskusi dan kolaborasi',
      link: 'Join Group',
    },
  ];

  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#4A90E2]" />,
      title: 'Pengembangan Skill',
      description: 'Akses ke berbagai workshop, training, dan mentoring untuk meningkatkan kemampuan teknis',
    },
    {
      icon: <Users className="w-8 h-8 text-[#4A90E2]" />,
      title: 'Networking',
      description: 'Membangun koneksi dengan mahasiswa, alumni, dan profesional industri teknologi',
    },
    {
      icon: <Award className="w-8 h-8 text-[#4A90E2]" />,
      title: 'Kompetisi & Sertifikat',
      description: 'Kesempatan mengikuti berbagai kompetisi dan mendapatkan sertifikat kegiatan',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#4A90E2]" />,
      title: 'Project Collaboration',
      description: 'Berkolaborasi dalam project nyata dan membangun portofolio',
    },
    {
      icon: <Heart className="w-8 h-8 text-[#4A90E2]" />,
      title: 'Supportive Community',
      description: 'Menjadi bagian dari keluarga besar yang saling mendukung dan memotivasi',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#4A90E2]" />,
      title: 'Akses Materi Eksklusif',
      description: 'Mendapatkan akses ke materi pembelajaran dan resources eksklusif untuk anggota',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-5xl mb-4">Komunitas</h1>
          <p className="text-white/90 text-xl">
            Belajar, Berkembang, dan Berkolaborasi Bersama
          </p>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-[#0B2D6C] text-4xl mb-4 text-center">Sumber Daya Belajar</h2>
        <p className="text-center text-[#333333] mb-12 max-w-2xl mx-auto leading-relaxed">
          Berbagai resource dan program untuk mendukung perjalanan belajarmu di bidang software engineering
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
              <div className="flex justify-center mb-4">{resource.icon}</div>
              <h3 className="text-[#0B2D6C] mb-3">{resource.title}</h3>
              <p className="text-[#333333] text-sm mb-4 leading-relaxed">{resource.description}</p>
              <button className="text-[#4A90E2] hover:text-[#00C2E0] transition-colors">
                {resource.link} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Community Image Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageWithFallback 
              src="https://scontent-cgk1-2.cdninstagram.com/v/t51.75761-15/506293897_18465826006073952_4642750675664785562_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzY1NjM0MjM3NDkyODIyNjg4OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=TgmybnG2CIQQ7kNvwEzOHxm&_nc_oc=AdmIRcZ0nwp2YyWc0QqtBv7vpEjORZKDtkw7aq21QAUsSRdJdh_kua8CKZKJumGcZIY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=VzGS19OV5wz0gwRCf8cgTg&oh=00_AfgLiWGfOP40Zb0rQmD8hSBhSZKuVVjnNHXYDtjHzuLxDQ&oe=690FBC40"
              alt="Community Activity"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              style={{ objectPosition: 'center 66%' }}
            />
            <ImageWithFallback 
              src="https://scontent-cgk2-2.cdninstagram.com/v/t51.75761-15/505150596_18465423433073952_7551389349064214037_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzY1NDY3MjEyMDg3NTM5OTA5NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=v8-k3RCJjRgQ7kNvwGXLdvX&_nc_oc=Adl96Bwpcki7kfWZq5PgTKvxrARHXMlvK3ubTrVlVTUgofkLTeQpFzT93Wn6qktetik&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk2-2.cdninstagram.com&_nc_gid=VzGS19OV5wz0gwRCf8cgTg&oh=00_AfiHBIfBFbbuXGHuGMA04y5yo4eiLlbpJY8OQltD3g5B2w&oe=690FA4B9"
              alt="Learning Together"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              style={{ objectPosition: 'center 66%' }}
            />
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-[#0B2D6C] text-4xl mb-4 text-center">Manfaat Bergabung</h2>
        <p className="text-center text-[#333333] mb-12 max-w-2xl mx-auto leading-relaxed">
          Menjadi bagian dari HIMADIRA memberikan banyak keuntungan untuk pengembangan diri dan karir
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-[#0B2D6C] mb-3">{benefit.title}</h3>
              <p className="text-[#333333] text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl mb-4">Bergabung Bersama Kami</h2>
          <p className="text-white/90 mb-8 leading-relaxed text-lg">
            Mari menjadi bagian dari komunitas mahasiswa RPL yang solid dan berkembang bersama. 
            HIMADIRA terbuka untuk semua mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi yang ingin berkontribusi dan belajar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#0B2D6C] px-8 py-3 rounded hover:bg-[#00C2E0] hover:text-white transition-colors"
            >
              Hubungi Kami
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-[#0B2D6C] transition-colors"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-[#4A90E2] text-5xl mb-2">250+</div>
            <p className="text-[#333333]">Anggota Aktif</p>
          </div>
          <div className="p-6">
            <div className="text-[#4A90E2] text-5xl mb-2">50+</div>
            <p className="text-[#333333]">Acara per Tahun</p>
          </div>
          <div className="p-6">
            <div className="text-[#4A90E2] text-5xl mb-2">200+</div>
            <p className="text-[#333333]">Mitra Industri</p>
          </div>
          <div className="p-6">
            <div className="text-[#4A90E2] text-5xl mb-2">100%</div>
            <p className="text-[#333333]">Komitmen</p>
          </div>
        </div>
      </section>
    </div>
  );
}
