import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Users, Trophy, Code, Briefcase } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const upcomingEvents = [
    {
      image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.82787-15/560811656_18485904580073952_2361844886539337424_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzc0Njg3MjgwMDUyODU0NDU1NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=JtQMhZI8iGwQ7kNvwFfEcT9&_nc_oc=Admo7GZoKgOSm78mCrk7IKXrwjdPqNUJxXEQW9agKYHjBNWxHVnBzrjfMvnyeAvhkDY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=vPN8QLjg_k2FRAS0G4BrKQ&oh=00_AfjjKxxTMQUw-0HkPIQq_Uto3QrIga5DfH_41JE5WMNTLQ&oe=690FA2E8',
      title: 'Info Lomba Tech Competition 2025',
      date: '19 oktober 2025',
      time: '09:00 WIB',
      location: 'Online',
      category: 'Competition',
      icon: <Trophy className="w-5 h-5" />,
      description: 'Informasi tentang kompetisi seru yang bisa kamu ikuti untuk mengasah skill dan menambah pengalaman teknologi dan programming di tahun 2025',
      link: 'https://forms.gle/D3CkMx5JZf6JURGp7'
    },
    {
      image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.82787-15/534312300_18476137693073952_1773463138963387063_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzcwNDA1MTAzNDk5NTE0NTMwOQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=k6SmEU7nZNsQ7kNvwHRKmiZ&_nc_oc=Adl6RjrLkL9Z-84xU9yu4sdy4e7rxcmTqSPG_l4Dx6PP28dPJ-hdu0QxPBrKyM8XXVE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=g-6T3yz_rf4WYGs-pIxK_A&oh=00_AfjB2hqnzDJYt6HxAN0tt5jvCgG0snjY_zyAC6PU_mkm1nQ&oe=690FA2D2',
      title: 'Program Inkubasi Bisnis Bandung Techno Park',
      date: '22 Agustus 2025',
      time: '09.00 - 11.00 WIB',
      location: 'Bandung Techno Park Universitas Telkom',
      category: 'Workshop',
      icon: <Code className="w-5 h-5" />,
      description: 'Sosialisasi program pengembangan ide bisnis hingga menjadi startup yang siap bersaing - Inkubasi Bisnis BTP 2025.',
      link: 'https://telkomuniversity-ac-id.zoom.us/j/92646784069'
    },
    {
      image: 'https://scontent-cgk2-1.cdninstagram.com/v/t51.82787-15/532981855_18475416328073952_9200295809124542302_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzcwMDUzOTAxMzcxMjQ5Mzc4Mw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=7DnbsNqVs00Q7kNvwF53767&_nc_oc=AdmRZR9n9KP9FO80JmcrMoWTlk6K_FwPxObGjODJRywjeYxTTcibpb7Z2LDOQHPW8GQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk2-1.cdninstagram.com&_nc_gid=g-6T3yz_rf4WYGs-pIxK_A&oh=00_AfgjeMYCarXmG9nlSB5Q1IKGLYubRXAYVuigZqrK2t27HQ&oe=690FA4D2',
      title: 'RPLA Industry Talk',
      date: '21 Agustus 2025',
      time: '13.30 WIB - selesai',
      location: 'Zoom Meeting',
      category: 'Seminar',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'Sesi berbagi pengalaman  untuk era baru pengembangan software yang lebih cerdas dan kolaboratif',
      link: 'https://forms.gle/xHYZgAZBUCSdGhKJ8'
    },
  ];

  const pastEvents = [
    {
      image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.82787-15/561594320_18484182463073952_6280314863180179585_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzczOTM0Njk5NjY1NTQ5NDAzNg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=MYrbsLZZnSsQ7kNvwH83NEm&_nc_oc=AdlR6og9ShuMSDnD0nWD9q0qZJ35XXLrqp4UCmFjVrEXpnlzeZ72G-mjpaP-JIbMxGw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=SpQWkhl4RFn4rqQ6F5kcDw&oh=00_AfiW4pDFRwucqx82aCuCHR3ju65OVBeKudz2gy8lc8yO_A&oe=690FE2C5',
      title: 'Dira Membiru ',
      date: 'Oktober 2025',
    },
    {
      image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.82787-15/552180110_18481501078073952_3811927159051696911_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzcyODMyNjQ0NTU4OTc5MzQ0NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hB98umr0LQ4Q7kNvwGAM7Fu&_nc_oc=Adm4_W9wS6gKZqw-mBYbz8L3Zsghe3yx387AbrLY1cqT_9DxZMw4-5xa5VGXxLLIhY0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=lqjNErrVm5bbW29XFiF8kA&oh=00_AfhyIyJuXIjokLhh_bCtAxu-f5I3l8f7Y4b06SMHMs52QA&oe=690FB367',
      title: 'Welcoming Party RPLA Angkatan 2025',
      date: 'September 2025',
    },
    {
      image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.82787-15/558344491_18482941387073952_4626021487517884088_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzczNDIxODA3NjkxMDIzMTMxNQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=K4qgZzN7zCQQ7kNvwHuxmkO&_nc_oc=AdnDf5vk7Dk25qwrHHGLSpb3t4BsbdqQHmawu4smJVV6hUenuY_-ACFO0nj8XvSzaIw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=a7oGJOHk39Ayczc3c3jEYg&oh=00_AfhPYepMsrJw6YC7-FTCF1K0Hsq3BBJ1eoKSvmNceKpuXQ&oe=690E6E59',
      title: 'Dira Membiru',
      date: 'September 2025',
    },
    {
      image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.75761-15/500617332_18462307246073952_6502626874770564032_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzY0MTQ1OTczMjc4OTQ2Nzc5Nw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=iNJoB9qImyYQ7kNvwF_IiGb&_nc_oc=Adl3g2KXbklvbgvcykaDNKeL_Kb_cH0ZxtwLC7-QEQd1L9jojoMBPmPT8T_q3yQw9LA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=5JW9JKCTO2muprH-aJjMOQ&oh=00_AfjfL_dO66O35NlK9eVbDGXfa-oh7cA43hViT3rCQYffDw&oe=690FBB92',
      title: 'Studi Banding Organisasi Mahasiswa FIT',
      date: 'Mei 2025',
    },
    {
      image: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.75761-15/486062517_18450962509073952_6353596964135341820_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzU5Mzk5NTUyMzg4MTYwODg4MA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=PrOMGzO3A18Q7kNvwE10siv&_nc_oc=AdnET2NRNFjPIdLdWmJwuNvyOpYrf3fNSQxTyv8TdImKVRWhWFg-kVoG8DHtltMceUU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_gid=2PGbYR9U7J74gixM0Jsj5g&oh=00_Afg0gf_zDFE7EmJwqALSf_1k8u3F2781TudBQKOWJ3cvCA&oe=690FCF11',
      title: 'Pelantikan Kabinet HIMADIRA 2025',
      date: 'Maret 2025',
    },
    {
      image: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.75761-15/485963084_18450697954073952_7264655829062507650_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzU5Mjk5OTcyMTI3NzEwOTc0NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=noX-zzMx1XsQ7kNvwGZSkeX&_nc_oc=AdnbeElJ-cFJqLoC2zk3pgwaiDnYi9Fpuk2U65xaEuDQvvPCbqjgMnLokc4htJpeLM8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_gid=2PGbYR9U7J74gixM0Jsj5g&oh=00_Afgd_M8VAWNbTyneCUqmz52W0KbNer6HktQ0y2xxg2qwoA&oe=690FA96D',
      title: 'Penjahiman 11.0',
      date: 'Maret 2025',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-5xl mb-4">Acara Kami</h1>
          <p className="text-white/90 text-xl">
            Berbagai kegiatan untuk mengembangkan kemampuan dan networking
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-[#0B2D6C] text-4xl mb-12">Acara Mendatang</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <ImageWithFallback 
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#00C2E0]/10 text-[#00C2E0] rounded-full text-xs flex items-center gap-1">
                    {event.icon}
                    {event.category}
                  </span>
                </div>
                <h3 className="text-[#0B2D6C] mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-[#333333] text-sm">
                    <Calendar className="w-4 h-4 text-[#4A90E2]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#333333] text-sm">
                    <MapPin className="w-4 h-4 text-[#4A90E2]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-[#333333] text-sm mb-4 leading-relaxed">{event.description}</p>
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#4A90E2] text-white py-2 rounded hover:bg-[#0B2D6C] transition-colors block text-center"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0B2D6C] text-4xl mb-12">Galeri Acara Lalu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <ImageWithFallback 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D6C]/90 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white mb-2">{event.title}</h3>
                  <p className="text-white/80 text-sm">{event.date}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0B2D6C]/80 p-4 transform translate-y-0 group-hover:translate-y-full transition-transform">
                  <h3 className="text-white text-sm">{event.title}</h3>
                  <p className="text-white/80 text-xs">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] rounded-lg p-12 text-center">
          <h2 className="text-white text-3xl mb-4">Jangan Lewatkan Acara Kami!</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ikuti terus informasi acara terbaru dari HIMADIRA dan jadilah bagian dari komunitas yang terus berkembang
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#0B2D6C] px-8 py-3 rounded hover:bg-[#00C2E0] hover:text-white transition-colors"
          >
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
}