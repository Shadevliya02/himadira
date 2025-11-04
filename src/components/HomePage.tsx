import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trophy, Users, Github, Calendar, Award, Target } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const programs = [
    {
      icon: <Trophy className="w-12 h-12 text-[#00C2E0]" />,
      title: 'Info Lomba & Coding Challenge',
      description: 'Informasi terkini tentang kompetisi coding, hackathon, dan berbagai perlombaan teknologi untuk mengasah kemampuan programming.',
    },
    {
      icon: <Users className="w-12 h-12 text-[#00C2E0]" />,
      title: 'RPLA Industry',
      description: 'Program pengenalan industri dan kolaborasi dengan perusahaan teknologi untuk mempersiapkan mahasiswa memasuki dunia kerja.',
    },
    {
      icon: <Github className="w-12 h-12 text-[#00C2E0]" />,
      title: 'Lead Your Tech Project',
      description: 'Workshop dan pelatihan dasar untuk meningkatkan pemahaman digital masyarakat atau pelajar tentang teknologi dan keamanan.',
    },
  ];

  const events = [
    {
      image: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.82787-15/567143895_18488135167073952_5365018590186022283_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc1NzYzODQ1OTExODAwNzY4OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=FSrmsxlPbb0Q7kNvwEPC9U-&_nc_oc=Adnu6JpkCZ296j5mGz8arMZ2vh8wJAyecNr5BYwwz2eVMyT4rWo81SLv3RCSQL6wku8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_gid=jSIhOFXxP9ytE6i8GO6Pew&oh=00_AfibWCLamFzKUqL48Xl2jPCFJ1btptR98sPdx9wB9dZUrQ&oe=690FA103',
      title: 'Coding Challenge 2025',
      date: '3 November 2025',
      url: 'https://www.instagram.com/p/DQl0EekE4oF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA'
    },
    {
      image: 'https://scontent-cgk2-1.cdninstagram.com/v/t51.82787-15/571447298_18487997887073952_4529723892421394710_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc1NjkzNTg1MjM3MjIxNTMxNg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=b-aa2VRtrKIQ7kNvwGdVGwP&_nc_oc=Adko48vGnpJe5GTLAFASEZ-CZa-Hk4RwjFGPo-pQgBVHmu0q6zzNLC5kB0RxmhpwRk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk2-1.cdninstagram.com&_nc_gid=jSIhOFXxP9ytE6i8GO6Pew&oh=00_AfiGzJv7uSo8pogIM7DGQco4Oub5lx38huM2r3pIWTyGDA&oe=690FB901',
      title: 'Polemik Trans7 dan Pesantren',
      date: '2 November 2025',
      url: 'https://www.instagram.com/p/DQjUURWE1vt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA'
    },
    {
      image: 'https://scontent-cgk2-1.cdninstagram.com/v/t51.82787-15/567171541_18487396420073952_8586327340526974791_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzc1Mzk3ODYzNjA5ODgxNTc1NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=LwOEBJl9jMgQ7kNvwGPPn8p&_nc_oc=Adl5SHi2DtkWLypTsZKr6Jht30_4rAl4qNC28CcIdY2H0un_R-RAzhoHW-YEIdFykjY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk2-1.cdninstagram.com&_nc_gid=hgCy6ZEudhtvY30Z62C2gA&oh=00_Afh93EQhUuOAn8xM86duS52hQszop2Tz1i1u3DevxHOUVA&oe=690FF68E',
      title: 'Open Mind – Chevalier Lab 2025',
      date: '29 Oktober 2025',
      url: 'https://www.instagram.com/p/DQYz6_yE9Bv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2]">
          <ImageWithFallback 
            src="https://himadira.orgs.telkomuniversity.ac.id/wp-content/uploads/sites/138/2021/08/danau-tekno-telkom-university-1.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">

          <h1 className="text-4xl md:text-5xl mb-4 tracking-wide">
            INOVASI • KOLABORASI • KREASI
            </h1>

          <h2 className="text-2xl md:text-3xl mb-8 text-[#00C2E0]">
            UNTUK MASA DEPAN TEKNOLOGI RPLA
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Himpunan Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi Telkom University
          </p>
          <button 
            onClick={() => onNavigate('about')}
            className="bg-[#00C2E0] text-white px-8 py-3 rounded hover:bg-[#0099b3] transition-colors"
          >
            PELAJARI LEBIH LANJUT
          </button>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-[#0B2D6C] text-4xl mb-12">Fokus Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col min-h-[400px]">
              <div>
                <div className="flex justify-center mb-4">{program.icon}</div>
                <h3 className="text-[#0B2D6C] text-center mb-4">{program.title}</h3>
                <p className="text-[#333333] text-center mb-6 leading-relaxed">{program.description}</p>
              </div>
              <div className="mt-auto pt-4">
                <button 
                  onClick={() => onNavigate('events')}
                  className="w-full border-2 border-[#4A90E2] text-[#4A90E2] py-2 rounded hover:bg-[#4A90E2] hover:text-white transition-colors"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#0B2D6C] text-4xl mb-12">Berita & Acara Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[#0B2D6C] mb-2">{event.title}</h3>
                  <p className="text-[#333333] text-sm mb-4">{event.date}</p>
                  <a 
                    href={event.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#4A90E2] hover:text-[#00C2E0] transition-colors inline-block"
                  >
                    Selengkapnya →
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Partner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-[#0B2D6C] text-4xl mb-12">Jelajahi Unit Kami</h2>
        
        {/* First Row - 3 Partners */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          {[
            { 
              name: 'BINA DESA', 
              img: '/src/assets/desa.png', 
              url: 'https://www.instagram.com/binadesa.himadira' 
            },
            { 
              name: 'DIES NATALIS', 
              img: '/src/assets/diesnatalis.jpg', 
              url: 'https://www.instagram.com/diesnatalis_d3rpla' 
            },
            { 
              name: 'DIRA BERKARYA', 
              img: '/src/assets/berkarya.png', 
              url: 'https://www.instagram.com/dira_berkarya' 
            },
          ].map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:scale-105"
            >
              <ImageWithFallback
                src={partner.img}
                alt={partner.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-gray-600 text-xs md:text-sm text-center leading-tight">
                {partner.name}
              </p>
            </a>
          ))}
        </div>

        {/* Second Row - 2 Partners */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {[
            { 
              name: 'ONION', 
              img: '/src/assets/onion.jpg', 
              url: 'https://www.instagram.com/onion.himadira' 
            },
            { 
              name: 'SE COMPETITION', 
              img: '/src/assets/secomp.jpg', 
              url: 'https://www.instagram.com/secomp25' 
            },
          ].map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:scale-105"
            >
              <ImageWithFallback
                src={partner.img}
                alt={partner.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-gray-600 text-xs md:text-sm text-center leading-tight">
                {partner.name}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white text-3xl mb-4">Bergabung Bersama Kami</h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Mari menjadi bagian dari keluarga besar HIMADIRA dan kembangkan potensimu di bidang teknologi
          </p>
          <button 
            onClick={() => onNavigate('community')}
            className="bg-white text-[#0B2D6C] px-8 py-3 rounded hover:bg-[#00C2E0] hover:text-white transition-colors"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>
    </div>
  );
}
