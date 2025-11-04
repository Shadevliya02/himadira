import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Github, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#4A90E2]" />,
      title: 'Alamat',
      content: 'Telkom University, Jl. Telekomunikasi No. 1, Terusan Buah Batu, Bandung, Jawa Barat 40257',
    },
    {
      icon: <Mail className="w-6 h-6 text-[#4A90E2]" />,
      title: 'Email',
      content: 'himadira@telkomuniversity.ac.id',
    },
    {
      icon: <Phone className="w-6 h-6 text-[#4A90E2]" />,
      title: 'Telepon',
      content: '+62 812-3456-7890',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B2D6C] to-[#4A90E2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-5xl mb-4">Hubungi Kami</h1>
          <p className="text-white/90 text-xl">
            Mari terhubung dan berkomunikasi dengan kami
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-[#0B2D6C] text-3xl mb-8">Informasi Kontak</h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-[#0B2D6C] mb-1">{info.title}</h3>
                    <p className="text-[#333333] leading-relaxed">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h3 className="text-[#0B2D6C] mb-4">Ikuti Kami</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-[#0B2D6C] rounded-lg flex items-center justify-center text-white hover:bg-[#00C2E0] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-[#0B2D6C] rounded-lg flex items-center justify-center text-white hover:bg-[#00C2E0] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-[#0B2D6C] rounded-lg flex items-center justify-center text-white hover:bg-[#00C2E0] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden">
              <a
                href="https://maps.google.com/?cid=303774744723454467&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-full h-full z-10"
                aria-label="Lihat di Google Maps"
              ></a>
              <iframe
                title="Google Maps Telkom University"
                src="https://www.google.com/maps?q=Telkom+University,+Bandung&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-[#0B2D6C] text-3xl mb-8">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#333333] mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#333333] mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="Subjek pesan"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#333333] mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A90E2] text-white py-3 rounded-lg hover:bg-[#0B2D6C] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#0B2D6C] text-3xl mb-4">Ada Pertanyaan?</h2>
          <p className="text-[#333333] mb-8 leading-relaxed">
            Jangan ragu untuk menghubungi kami. HIMADIRA siap membantu menjawab pertanyaan 
            dan memberikan informasi yang Anda butuhkan tentang kegiatan dan program kami.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[#0B2D6C] mb-2">Jam Operasional</h3>
              <p className="text-[#333333] text-sm">Senin - Jumat</p>
              <p className="text-[#333333] text-sm">09:00 - 17:00 WIB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[#0B2D6C] mb-2">Response Time</h3>
              <p className="text-[#333333] text-sm">Kami akan merespon</p>
              <p className="text-[#333333] text-sm">dalam 1-2 hari kerja</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-[#0B2D6C] mb-2">Sekretariat</h3>
              <p className="text-[#333333] text-sm">Gedung Fakultas Ilmu Terapan</p>
              <p className="text-[#333333] text-sm">Telkom University</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
