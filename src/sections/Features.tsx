import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TreePine, Cog, Paintbrush, Scissors, CircleDot, Package } from 'lucide-react';
import { features } from '@/data';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  '🪵': <TreePine className="w-8 h-8 text-amber-600" />,
  '⚙️': <Cog className="w-8 h-8 text-slate-600" />,
  '🎨': <Paintbrush className="w-8 h-8 text-pink-500" />,
  '🔧': <Scissors className="w-8 h-8 text-blue-600" />,
  '🔵': <CircleDot className="w-8 h-8 text-purple-600" />,
  '📦': <Package className="w-8 h-8 text-green-600" />
};

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-pink-200/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            مواصفاتنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-lg">
            جودة تتحدث عن نفسها
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {iconMap[feature.icon] || <Cog className="w-8 h-8 text-blue-600" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.titleAr}
              </h3>
              <p className="text-slate-600 text-sm">
                {feature.descriptionAr}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div className="text-right">
              <h4 className="font-bold text-slate-800 text-lg">مواد أولية عالية الجودة</h4>
              <p className="text-slate-600 text-sm">نستخدم أفضل المواد لضمان متانة منتجاتنا</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
