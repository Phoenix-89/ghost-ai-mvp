export default function Pricing() {
    return (
      <section className="py-16 bg-[#1C1C1E]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#F5F5F5] mb-12">Plans & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-[#0C0C0C] p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Free</h3>
              <p className="text-3xl text-[#2CB67D] mb-4">$0<span className="text-sm">/mo</span></p>
              <p className="text-[#F5F5F5] mb-4">Basic voice upload and text chat.</p>
              <a href="/signup" className="cta-button inline-block bg-[#7F5AF0] text-white px-4 py-2 rounded-lg">Get Started</a>
            </div>
            <div className="card bg-[#0C0C0C] p-6 rounded-lg text-center border-2 border-[#7F5AF0]">
              <span className="inline-block bg-[#2CB67D] text-white text-sm px-3 py-1 rounded-full mb-4">Most Popular</span>
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Pro</h3>
              <p className="text-3xl text-[#2CB67D] mb-4">$19<span className="text-sm">/mo</span></p>
              <p className="text-[#F5F5F5] mb-4">Advanced voice training and calls.</p>
              <a href="/signup" className="cta-button inline-block bg-[#7F5AF0] text-white px-4 py-2 rounded-lg">Choose Pro</a>
            </div>
            <div className="card bg-[#0C0C0C] p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">Legacy</h3>
              <p className="text-3xl text-[#2CB67D] mb-4">$499<span className="text-sm">/one-time</span></p>
              <p className="text-[#F5F5F5] mb-4">Permanent Ghost preservation.</p>
              <a href="/signup" className="cta-button inline-block bg-[#7F5AF0] text-white px-4 py-2 rounded-lg">Choose Legacy</a>
            </div>
          </div>
        </div>
      </section>
    );
  }