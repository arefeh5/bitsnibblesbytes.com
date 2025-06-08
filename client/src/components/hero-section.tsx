import bnbLogo from "@assets/image1_1749360591972.png";
import cityBackground from "@assets/Delivering the Future (1)_1749360586074.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 code-pattern opacity-10"></div>
      
      {/* Modern city skyline background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={cityBackground} 
          alt="Modern city skyline" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* BnB Logo Large */}
          <div className="flex justify-center mb-8">
            <img 
              src={bnbLogo} 
              alt="BnB Software Logo" 
              className="w-48 h-48 object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
            Delivering the Future
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="text-green-300 font-semibold">bits</span> • 
            <span className="text-green-300 font-semibold">nibbles</span> • 
            <span className="text-green-300 font-semibold">bytes</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Solutions
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="border-2 border-green-500 text-green-300 px-8 py-4 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Code Animation */}
        <div className="mt-20 relative hero-animation">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">BnBSoftware.tsx</div>
            </div>
            <div className="text-sm font-mono text-left">
              <div className="text-purple-400">const <span className="text-blue-400">BnBSoftware</span> = () {'=>'} {'{'}</div>
              <div className="text-gray-400 ml-4">return (</div>
              <div className="text-red-400 ml-8">&lt;<span className="text-blue-400">Innovation</span></div>
              <div className="text-green-500 ml-12">solutions={'{'}<span className="text-yellow-400">"cutting-edge"</span>{'}'}</div>
              <div className="text-green-500 ml-12">quality={'{'}<span className="text-yellow-400">"premium"</span>{'}'}</div>
              <div className="text-green-500 ml-12">support={'{'}<span className="text-yellow-400">"24/7"</span>{'}'}</div>
              <div className="text-red-400 ml-8">/&gt;</div>
              <div className="text-gray-400 ml-4">);</div>
              <div className="text-purple-400">{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
