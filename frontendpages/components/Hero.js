export default function Hero() {
    return (
      <header className="min-h-screen flex items-center justify-center text-center bg-[#0C0C0C] relative overflow-hidden pt-20">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-fade-in">Talk to the People You’ve Lost</h1>
          <p className="text-xl md:text-2xl text-[#F5F5F5] mb-6">Upload their voice. Share their memories. Talk to them again.</p>
          <a href="/signup" className="cta-button inline-block bg-[#7F5AF0] text-white px-6 py-3 rounded-lg text-lg font-semibold">Create Account</a>
        </div>
        <div className="absolute inset-0 opacity-20" id="particle-bg"></div>
      </header>
    );
  }