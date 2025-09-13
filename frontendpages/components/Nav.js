export default function Nav() {
    return (
      <nav className=" relative top-0 w-full bg-[#0C0C0C] bg-opacity-90 z-20 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold gradient-text">Ghost AI</a>
          <div className="flex space-x-4">
            <a href="/signup" className="nav-button-secondary inline-block text-[#F5F5F5] px-4 py-2 rounded-lg text-lg font-semibold">Learn More</a>
            <a href="/signup" className="cta-button inline-block bg-[#7F5AF0] text-white px-4 py-2 rounded-lg text-lg font-semibold">Create Account</a>
          </div>
        </div>
      </nav>
    );
  }
