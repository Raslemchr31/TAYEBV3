import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { businessInfo } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-lg">
            نحن هنا لمساعدتك في اختيار الطاولة المناسبة
          </p>
        </div>

        {/* Contact Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">اتصل بنا</h4>
                <p className="text-blue-600 font-medium text-lg" dir="ltr">
                  {businessInfo.phone}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={businessInfo.whatsapp}
              onClick={() => fbq('track', 'Contact')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">واتساب</h4>
                <p className="text-green-600 font-medium">
                  راسلنا على الواتساب
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${businessInfo.email}`}
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">البريد الإلكتروني</h4>
                <p className="text-amber-600 font-medium" dir="ltr">
                  {businessInfo.email}
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">العنوان</h4>
                <p className="text-purple-600 font-medium">
                  {businessInfo.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">ساعات العمل</h4>
                <p className="text-pink-600 font-medium">
                  {businessInfo.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Social & Map */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">تابعنا على</h3>
              <div className="flex gap-4">
                <a
                  href={businessInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href={businessInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href={businessInfo.whatsapp}
              onClick={() => fbq('track', 'Contact')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">هل لديك سؤال؟</h3>
              <p className="text-blue-100 mb-6">
                فريقنا جاهز لمساعدتك في اختيار المنتج المناسب
              </p>
              <a
                href={businessInfo.whatsapp}
              onClick={() => fbq('track', 'Contact')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا الآن
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">+5000</div>
                <div className="text-sm text-slate-600">عميل سعيد</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-500 mb-1">58</div>
                <div className="text-sm text-slate-600">ولاية</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-green-500 mb-1">100%</div>
                <div className="text-sm text-slate-600">جودة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
