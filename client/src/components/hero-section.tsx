import bnbLogo from "@assets/image1_1749360591972.png";
import cityBackground from "@assets/background_1749404028690.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative overflow-hidden" style={{backgroundImage: `url(${cityBackground})`}}>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="text-center w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Seamless Integrations.<br />
            Built for Growth.<br />
            Exceptional Support.
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            We make your business tools work together so you don't have to.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-green-400 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
