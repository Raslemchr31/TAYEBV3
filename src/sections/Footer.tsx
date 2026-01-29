import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { businessInfo } from '@/data';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <img
                  src="/images/1a527920-ef9a-11f0-9a84-597cc24b4054.png"
                  alt="Mr.Tayeb Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">{businessInfo.name}</h3>
                <p className="text-slate-400 text-sm">طاولات التفصيل القابلة للطي</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {businessInfo.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  منتجاتنا
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  مواصفاتنا
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  تواصل معنا
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">منتجاتنا</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  طاولة تفصيل منزلية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  طاولة تفصيل برفوف
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  طاولة تفصيل بلس
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  طاولة تفصيل 120×200
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <span dir="ltr">{businessInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-amber-400" />
                <span dir="ltr">{businessInfo.email}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{businessInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-right">
              © 2024 {businessInfo.name}. جميع الحقوق محفوظة.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              صنع بـ <Heart className="w-4 h-4 text-red-500 fill-red-500" /> في الجزائر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
