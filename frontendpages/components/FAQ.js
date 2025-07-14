export default function FAQ() {
    return (
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#F5F5F5] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="accordion bg-[#1C1C1E] rounded-lg">
              <button className="accordion-toggle w-full text-left p-4 text-[#F5F5F5] flex justify-between items-center">
                <span>Is this ethical?</span>
                <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="accordion-content hidden p-4 text-[#F5F5F5] bg-[#0C0C0C] rounded-b-lg">
                <p>We prioritize ethical AI development, ensuring consent and respect for all users and their loved ones.</p>
              </div>
            </div>
            <div className="accordion bg-[#1C1C1E] rounded-lg">
              <button className="accordion-toggle w-full text-left p-4 text-[#F5F5F5] flex justify-between items-center">
                <span>How secure is my data?</span>
                <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="accordion-content hidden p-4 text-[#F5F5F5] bg-[#0C0C0C] rounded-b-lg">
                <p>Your data is encrypted and stored securely, with strict access controls to protect your privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }