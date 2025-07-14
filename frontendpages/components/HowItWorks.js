export default function HowItWorks() {
    return (
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#F5F5F5] mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-[#1C1C1E] p-6 rounded-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-[#2CB67D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">Upload Memories</h3>
              <p className="text-[#F5F5F5]">Share voice recordings, messages, or stories to begin.</p>
            </div>
            <div className="card bg-[#1C1C1E] p-6 rounded-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-[#2CB67D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">Train the Ghost</h3>
              <p className="text-[#F5F5F5]">Our AI processes the data to recreate their voice and essence.</p>
            </div>
            <div className="card bg-[#1C1C1E] p-6 rounded-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-[#2CB67D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"></path></svg>
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">Chat or Call</h3>
              <p className="text-[#F5F5F5]">Interact with your Ghost through text or voice conversations.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }