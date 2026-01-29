import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import Products from '@/sections/Products';
import Features from '@/sections/Features';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP defaults
    gsap.defaults({
      ease: 'expo.out',
      duration: 0.8
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50" dir="rtl">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
