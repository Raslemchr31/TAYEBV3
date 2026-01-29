import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { businessInfo } from '@/data';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'products', label: 'منتجاتنا' },
    { id: 'features', label: 'مواصفاتنا' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isScrolled ? 'bg-blue-100' : 'bg-white shadow-lg'
              }`}>
                <img
                  src="/images/1a527920-ef9a-11f0-9a84-597cc24b4054.png"
                  alt="Mr.Tayeb Logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className={`font-bold text-lg hidden sm:block transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-slate-800'
              }`}>
                {businessInfo.name}
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${
                    isScrolled ? 'text-slate-700' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={businessInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
              >
                <Phone className="w-4 h-4" />
                احصل على عرض
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <img
                  src="/images/1a527920-ef9a-11f0-9a84-597cc24b4054.png"
                  alt="Mr.Tayeb Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-bold text-xl text-slate-800">
                {businessInfo.name}
              </span>
            </div>

            {/* Links */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-right py-4 px-4 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={businessInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                احصل على عرض
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
