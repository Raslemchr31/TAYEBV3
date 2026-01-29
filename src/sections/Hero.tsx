import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, ChevronDown, Star, Truck, Wrench } from 'lucide-react';
import { businessInfo } from '@/data';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Logo animation
      tl.fromTo(logoRef.current,
        { scale: 0.5, rotation: -10, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
        0.2
      );

      // Title words animation
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word');
        tl.fromTo(words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          0.4
        );
      }

      // Subtitle
      tl.fromTo(subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.8
      );

      // CTA buttons
      tl.fromTo(ctaRef.current?.children || [],
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
        1
      );

      // Product image
      tl.fromTo(imageRef.current,
        { x: 100, opacity: 0, rotateY: 15 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1 },
        0.6
      );

      // Badges
      tl.fromTo(badgesRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
        1.2
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 40%, #ffffff 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="decor-circle decor-circle-1 animate-float" style={{ animationDelay: '0s' }} />
      <div className="decor-circle decor-circle-2 animate-float" style={{ animationDelay: '2s', left: '-5%', top: '60%' }} />
      <div className="decor-circle decor-circle-3 animate-float" style={{ animationDelay: '4s', right: '15%', top: '30%' }} />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-200/30 to-pink-200/30 animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-amber-200/30 to-blue-200/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-200/30 to-purple-200/30 animate-float" style={{ animationDelay: '2s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            {/* Logo */}
            <div ref={logoRef} className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-blue-100">
                  <img
                    src="/images/1a527920-ef9a-11f0-9a84-597cc24b4054.png"
                    alt="Mr.Tayeb Logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight"
            >
              <span className="word inline-block">طاولات</span>{' '}
              <span className="word inline-block">التفصيل</span>{' '}
              <span className="word inline-block text-blue-600">القابلة</span>{' '}
              <span className="word inline-block text-blue-600">للطي</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              تصميم عصري، متانة فائقة، وسعر منافس
              <br />
              <span className="text-slate-500 text-base">جودة تتحدث عن نفسها</span>
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href={businessInfo.whatsapp}
                onClick={() => fbq('track', 'Contact')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                اطلب الآن عبر الواتساب
              </a>
              <button
                onClick={scrollToProducts}
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                تصفح منتجاتنا
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div ref={badgesRef} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm text-slate-700">جودة Premium</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
                <Truck className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-slate-700">توصيل سريع</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
                <Wrench className="w-4 h-4 text-green-500" />
                <span className="text-sm text-slate-700">تركيب سهل</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-pink-400/20 rounded-3xl blur-3xl transform scale-110" />

              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
                <img
                  src="/images/table2.jpeg"
                  alt="طاولة تفصيل قابلة للطي"
                  className="w-full h-auto object-cover"
                />

                {/* Floating price tag */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-sm opacity-90">ابتداءً من</span>
                  <div className="text-xl font-bold">1,500,000 د.ج</div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  جديد
                </div>
              </div>

              {/* Secondary floating image */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                <img
                  src="/images/1729541438044.jpg"
                  alt="تفاصيل الطاولة"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
