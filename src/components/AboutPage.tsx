import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Eye, Users, Award } from 'lucide-react';

export function AboutPage() {
  const visiMisi = {
    visi: [
      'Menjadi wadah aktualisasi untuk mewujudkan mahasiswa RPLA yang unggul dan adaptif dalam menyelesaikan masalah.',
      'Menciptakan dampak positif bagi masyarakat melalui Kontribusi Aksi yang dilandasi oleh semangat solidaritas dan kekeluargaan.',
    ],
    misi: [
      'Menyelenggarakan program pengembangan akademik dan soft skill untuk menunjang mahasiswa RPLA yang unggul dan adaptif.',
      'Mengembangkan program berbasis riset untuk menyelesaikan masalah yang berdampak positif pada masyarakat.',
      'Membangun lingkungan yang harmonis melalui kegiatan mempererat hubungan kekeluargaan mahasiswa RPLA.',
      'Menjalin kerja sama strategis dengan industri, alumni dan masyarakat untuk menciptakan peluang kontribusi yang lebih luas.',
    ],
  };

const leaders = [
  {
    name: 'KAHIM',
    position: 'Ketua Himpunan',
    description: 'Memimpin HIMADIRA menuju organisasi yang solid dan berdampak.',
    image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.82787-15/561897790_18484030051073952_1058757695063804592_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzczODczMDE4NTU4OTI1MTcxNQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=DIxYLB9WIIkQ7kNvwF7rWr5&_nc_oc=AdmFO9ciC7zTQMXPyfUdjh1we_g4fISGuydq_GzSoWC3i1qE3I7oE0h0owbkS4d3Dmg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=DUHkfACEC4OcEZkGlIvw2w&oh=00_AfgELVFffKIQmHbyBHz7NZnPR7GTa6HZc_zUPDRExXS_Ww&oe=690E408B',
  },
  {
    name: 'WAKAHIM',
    position: 'Wakil Ketua Himpunan',
    description: 'Mendukung ketua dalam mewujudkan visi dan misi HIMADIRA.',
    image: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.82787-15/562437720_18484029958073952_6192722906844093463_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzczODcyOTcyNjY0ODQ1ODY5OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=-8tTSoBzJ-kQ7kNvwHfzNc3&_nc_oc=AdnsK0qHGif87COgjHK6--epPalHYpidykVTTxdPiRJSuYmuIbgrOEpCi-eT9PQlf1U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_gid=DUHkfACEC4OcEZkGlIvw2w&oh=00_AfhJBFBA4HHPoLZ-gLfpbjmprNuUeLKf93uCpJAKf02t_w&oe=690E5A5E',
  },
  {
    name: 'SEKJEND',
    position: 'Sekretaris Jenderal',
    description: 'Mengelola administrasi dan komunikasi himpunan.',
    image: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.82787-15/560362403_18484030012073952_4941956415971042612_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzczODcyOTk1MjcwNDY3MzQzNw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=dPJSv4I68OYQ7kNvwG6Mu1m&_nc_oc=AdlHZGwQ51Yt_YI55hIDAMs3fcUF3vmcLxIlI7eh9tX7kmtpbgB9_EsF3xq2FB2Kx_4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_gid=DUHkfACEC4OcEZkGlIvw2w&oh=00_AfierjXM7hJkFE-sNsHykj85DMimndke7LcadbDx5ExXFQ&oe=690E60A7',
  },
  {
    name: 'ADMIN',
    position: 'Biro Administrasi',
    description: 'Pengarsipan dan pengelolaan seluruh administrasi himpunan.',
    image: 'https://scontent-cgk2-2.cdninstagram.com/v/t51.82787-15/561872835_18484029874073952_7064888873347798448_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzczODcyOTM4NDc4NzUxMDQxMA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=0cgistI5-cwQ7kNvwEC8dw7&_nc_oc=Admi8eK-zQHVF2c-lD5fOpgv331C2qLAf5FYwA2V5CXRjav6p-kgWkMIYkSiNwzwgwM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk2-2.cdninstagram.com&_nc_gid=AoqXGxv-YGfyku3cm1r9eA&oh=00_Afgwz4L6VCTg3DmdRqXTbKtu74ed7dAwAps2n0C8dVUHag&oe=690FA0F9',
  },
  {
    name: 'KEU',
    position: 'Biro Keuangan',
    description: 'Merencanakan dan mengelola keuangan himpunan.',
    image: 'https://scontent-cgk2-2.cdninstagram.com/v/t51.82787-15/561771785_18484029724073952_4785924770026249807_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzczODcyODgxNzk1MjUxNzA3MQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=XwTnrXx2hHQQ7kNvwH5PKdg&_nc_oc=AdmqQ-IZfTFY2r1TIg0LZloPJ84Nd_M8nwyMxLsxMI1qRSKrezZaGQaY-fwS8PZlgVY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk2-2.cdninstagram.com&_nc_gid=AoqXGxv-YGfyku3cm1r9eA&oh=00_AfhGuTt0oKbCPca-uoSMHiYvTUGhyjf30Cvwc8pF3kfMzg&oe=690FCEAA',
  },
  {
    name: 'MO',
    position: 'Biro Manajerial Organisasi',
    description: 'Mengelola dan memantau kinerja aparatur himpunan.',
    image: 'https://scontent-cgk1-2.cdninstagram.com/v/t51.82787-15/561150819_18484029643073952_2553161810879290312_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzczODcyODUxMDQyNjEzMTQ2MQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=XbBPVAugkVQQ7kNvwH4e4aI&_nc_oc=Adn5NSp3Z_5i1jl1wNfiR-8VNplQkavHERRPQMe4hCYoJ5c-apStQd1sCsqO8gsAn0A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_gid=AoqXGxv-YGfyku3cm1r9eA&oh=00_AfjaL7ff5adPKI6z1ouu3dgYajQGHnNj3srO8HmwaifxyQ&oe=690FAB56',
  },
  {
    name: 'MINFO',
    position: 'Biro  Media dan Informasi',
    description: 'Menyediakan akses informasi serta mengelola media sosial himpunan',
    image: 'https://scontent-cgk2-1.cdninstagram.com/v/t51.82787-15/560545764_18484029487073952_6621644980562036393_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=58cdad&_nc_ohc=SAkKNHKz7JoQ7kNvwHdQJbP&_nc_oc=AdnwBcqCQB5tO_vIIxlnQ_TIgZolwA3kKnxo1HG6Jd8hrJRaDTcM8entoShlIhXG2ok&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cgk2-1.cdninstagram.com&_nc_gid=L6yuL--LR8TBG_ss5RvQcA&oh=00_AfjjwK2lsnISaMSVF-CvppiUi72L-iVMsFmWTACpTDUSsA&oe=690FB312',
  },
];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#00C2E0]" />,
      title: 'Inovasi',
      description: 'Mendorong kreativitas dan menghasilkan solusi inovatif di bidang teknologi.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#00C2E0]" />,
      title: 'Kolaborasi',
      description: 'Membangun sinergi dan kerja sama yang solid antar anggota, alumni, dan mitra strategis',
    },
    {
      icon: <Award className="w-8 h-8 text-[#00C2E0]" />,
      title: 'Excellence',
      description: 'Berkomitmen mencapai standar kualitas tertinggi dalam setiap aksi dan program kerja.',
    },
    {
      icon: <Eye className="w-8 h-8 text-[#00C2E0]" />,
      title: 'Integritas',
      description: 'Menjunjung tinggi etika, kejujuran, dan transparansi sebagai landasan berorganisasi.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-5xl mb-4">Tentang HIMADIRA</h1>
          <p className="text-white/90 text-xl">
            Himpunan Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#0B2D6C] text-4xl mb-6">Siapa Kami?</h2>
            <p className="text-[#333333] mb-4 leading-relaxed">
              HIMADIRA (Himpunan Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi) adalah organisasi mahasiswa di Telkom University yang menjadi wadah bagi mahasiswa program studi D3 Rekayasa Perangkat Lunak Aplikasi untuk mengembangkan potensi akademik dan non-akademik.
            </p>
            <p className="text-[#333333] mb-4 leading-relaxed">
              Didirikan dengan semangat untuk menciptakan ekosistem pembelajaran yang kolaboratif dan inovatif, HIMADIRA berkomitmen untuk memfasilitasi mahasiswa dalam mengasah kemampuan teknis, soft skills, dan membangun networking dengan industri teknologi.
            </p>
            <p className="text-[#333333] leading-relaxed">
              Melalui berbagai program seperti workshop, seminar, kompetisi, dan kegiatan sosial, kami berusaha mencetak lulusan yang tidak hanya kompeten secara teknis, tetapi juga memiliki karakter yang kuat dan siap berkontribusi di industri teknologi.
            </p>
          </div>
          <div className="relative">
            <video
            src="https://scontent-cgk2-1.cdninstagram.com/o1/v/t2/f2/m86/AQM1wlSdeBUQfNpfpOkDJlRs3RLfgtNYuzmyfP80hWMUz0kwCJKZhn3dR1GHC2zVV_G9_nAb30sOXsCZDfzCv2Lk58KsgUNfjldrXZw.mp4?_nc_cat=103&_nc_sid=9ca052&_nc_ht=scontent-cgk2-1.cdninstagram.com&_nc_ohc=VWQVthWh75IQ7kNvwGpYd32&efg=eyJ2ZW5jb2RlX3RhZyI6ImlnLXhwdmRzLmNsaXBzLmMyLUMzLmRhc2hfYmFzZWxpbmVfM192MSIsInZpZGVvX2lkIjpudWxsLCJvaWxfdXJsZ2VuX2FwcF9pZCI6OTM2NjE5NzQzMzkyNDU5LCJjbGllbnRfbmFtZSI6ImlnIiwieHB2X2Fzc2V0X2lkIjoxNTc2ODc3Njk5OTQ5MTcyLCJhc3NldF9hZ2VfZGF5cyI6NjEsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoxNTUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=_We0vRoCDoQ-3fo9v6elUQ&_nc_zt=28&oh=00_AfjQJyWRdWYZ2Sltrk268kynfjfFIgls410TTX3fjIJN5g&oe=690BAB0C"
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#0B2D6C] text-4xl mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-[#0B2D6C] mb-3">{value.title}</h3>
                <p className="text-[#333333] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-center text-[#0B2D6C] text-4xl mb-12">Visi & Misi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-[#4A90E2]" />
              <h3 className="text-[#0B2D6C] text-2xl">Visi</h3>
            </div>
            <ul className="space-y-4">
              {visiMisi.visi.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#00C2E0] mt-1">•</span>
                  <span className="text-[#333333] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-[#4A90E2]" />
              <h3 className="text-[#0B2D6C] text-2xl">Misi</h3>
            </div>
            <ul className="space-y-4">
              {visiMisi.misi.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#00C2E0] mt-1">•</span>
                  <span className="text-[#333333] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#0B2D6C] text-4xl mb-12">Struktur Organisasi</h2>
          
      {/* Top Leadership Row */}
      <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {leaders.slice(0, 3).map((leader, index) => (
                  <div 
                      key={index} 
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                      <div className="aspect-[2/3] relative">
                  <ImageWithFallback 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center"
                  />
                  </div>
                      <div className="p-4 text-center">
                          <h3 className="text-[#0B2D6C] text-xl mb-1">{leader.name}</h3>
                          <p className="text-[#4A90E2] text-sm mb-2">{leader.position}</p>
                          <p className="text-[#333333] text-sm leading-relaxed">{leader.description}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

    {/* Other Leadership Row */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {leaders.slice(3).map((leader, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="aspect-[2/3] relative">
            <ImageWithFallback 
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-[#0B2D6C] text-xl mb-1">{leader.name}</h3>
            <p className="text-[#4A90E2] text-sm mb-2">{leader.position}</p>
            <p className="text-[#333333] text-sm leading-relaxed">{leader.description}</p>
          </div>
        </div>
      ))}
    </div>
    <p className="text-center text-[#333333] mt-8">
      Dan berbagai divisi lainnya yang mendukung kegiatan HIMADIRA
    </p>
  </div>
</section>

      {/* 200 Hari Kerja Section */}
      <section className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-white text-5xl mb-4">200</h2>
          <h3 className="text-white text-3xl mb-4">Hari Kerja</h3>
          <p className="text-white/90 leading-relaxed">
            Komitmen kami dalam melayani dan mengembangkan mahasiswa D3 RPL
          </p>
        </div>
      </section>
    </div>
  );
}
