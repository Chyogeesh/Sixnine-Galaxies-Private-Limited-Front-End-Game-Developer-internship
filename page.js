'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BestSellingProducts from '../components/BestSellingProducts';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth Reveal Animation on Page Load
    gsap.from('body', {
      duration: 1.5,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.5,
    });

    // Text Fill Animation on First Paragraph
    gsap.from('.hero-paragraph span', {
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <BestSellingProducts />
      <FAQSection />
      <Footer />
    </div>
  );
}
