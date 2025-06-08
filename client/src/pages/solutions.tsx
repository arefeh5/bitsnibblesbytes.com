import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import solveTsImage from "@assets/solveTs_1749360588140.png";

export default function Solutions() {
  const solutions = [
    {
      title: "QuickBooks",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: "Manually entering in data between systems wastes time and causes errors.",
      details: [
        "We take those troubles out of your hands by connecting QuickBooks to everything. Which will send the daily sales and etc. directly into your custom made reports",
        "With QuickBooks solution you can automate billing and payroll, track expenses and get reports that actually make sense. Making your life easier."
      ]
    },
    {
      title: "CRM System",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "We support, enhance, and integrate Act! CRM systems for businesses.",
      details: [
        "Maintain enterprise-grade CRM systems with our Salesforce expertise, whatever your business requires, we're here to deliver the right fit."
      ]
    },
    {
      title: "SQL Server",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      description: "For growing business that need the security of a real database",
      details: [
        "Our SQL Server lets teams work together without version chaos.",
        "We safely store and protect your information with proper backups and security."
      ]
    },
    {
      title: "Excel",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14l11-7z" />
        </svg>
      ),
      description: "Different versions of spreadsheets cause confusion and wasted time.",
      details: [
        "We'll autofill Excel sheets with live data straight from your QuickBooks/CRM, so you don't have to.",
        "We'll also schedule reports to email themselves, saving you more time to do what's important."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with solveTs Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${solveTsImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Clever Implementations. Scalable Systems. Real Results.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At BNB Software we develop and customize applications that streamline your operations, connect your tools, and scale with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                id={solution.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 scroll-mt-32"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 font-medium">{solution.description}</p>
                
                <div className="space-y-4">
                  {solution.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}