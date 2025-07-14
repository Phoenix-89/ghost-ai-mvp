```
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import QuoteSection from '../components/QuoteSection';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Hero text fade-in
    gsap.from('.animate-fade-in', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Quote lines staggered fade-in
    gsap.utils.toArray('.animate-quote-line').forEach((line, i) => {
      gsap.from(line, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: i * 0.3,
        scrollTrigger: { trigger: line, start: 'top 80%' },
      });
    });

    // How It Works cards slide-in
    gsap.utils.toArray('.card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 1,
        scrollTrigger: { trigger: card, start: 'top 80%' },
      });
    });

    // Accordion toggle
    document.querySelectorAll('.accordion-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
      });
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0C0C0C] via-[#1C2526] to-[#2CB67D]">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ghost AI</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@700&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
      </Head>
      <Nav />
      <Hero />
      <QuoteSection />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}