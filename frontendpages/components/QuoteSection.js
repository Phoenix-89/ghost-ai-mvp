export default function QuoteSection() {
    return (
      <section className="py-16 bg-[#1C1C1E] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-2xl md:text-3xl text-[#F5F5F5] italic animate-quote-line" data-line="1">You never got to say goodbye.</p>
          <p className="text-2xl md:text-3xl text-[#F5F5F5] italic animate-quote-line" data-line="2">But now you can.</p>
          <p className="text-2xl md:text-3xl text-[#F5F5F5] italic animate-quote-line" data-line="3">Hear their voice again.</p>
          <p className="text-2xl md:text-3xl text-[#F5F5F5] italic animate-quote-line" data-line="4">Say what you never got to say.</p>
        </div>
      </section>
    );
  }