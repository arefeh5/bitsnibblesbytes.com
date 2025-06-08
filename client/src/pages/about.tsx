import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import aboutUsImage from "@assets/aboutUs_1749360565629.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with City Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutUsImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What we Stand For
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Headquartered in Raleigh, North Carolina, BNB Software is a specialized software development 
              firm focused on delivering smart, robust, scalable, and business-aligned solutions. With extensive 
              foundational expertise in both legacy and modern systems, we empower organizations seeking to 
              streamline operations, improve internal and external relationships, and gain meaningful control 
              over their technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 max-w-5xl mx-auto leading-tight">
              On top of the expansive technical expertise we have available on our team, we strongly pride 
              ourselves in areas such as customer support, holding a strong willingness to work extensively 
              one-on-one with the customer.
            </h2>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Donn Machak */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Donn Machak</h3>
                  <p className="text-gray-600">Chief Executive Officer</p>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Office: (919) 900-7115</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Mobile: (919) 501-0572</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Donn.Machak@bnbytes.software</span>
                </div>
              </div>
            </div>

            {/* Greg Taylor */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Greg Taylor</h3>
                  <p className="text-gray-600">Chief Technology Officer</p>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Office: (919) 900-7115</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Mobile: (919) 501-0572</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Greg.Taylor@bnbytes.software</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}