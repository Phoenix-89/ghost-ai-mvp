import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Signup(){
  useEffect(() => {
    gsap.from('.animate-signup', { opacity: 0, y: 50, duration: 1.5, ease: 'power2.out' });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0C0C0C] via-[#1C2526] to-[#2CB67D] min-h-screen">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign Up - Ghost AI</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@700&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
      </Head>
      <Nav />
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 animate-signup">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Create Your Ghost</h1>
          <p className="text-xl text-[#F5F5F5] mb-8">Start by uploading memories and details to train your Ghost.</p>
          <div className="bg-[#1C1C1E] p-6 rounded-lg">
            <iframe
              src="https://tally.so/r/your-tally-form-id"
              className="w-full h-[600px] border-none"
              title="Ghost AI Onboarding Form"
            ></iframe>
            <p className="text-[#F5F5F5] mt-4">
              Fill out the form to upload voice clips, text memories, or answer personality questions.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}