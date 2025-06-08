import rubyImage from "@assets/ruby_1749360593940.png";

export default function ServicesSection() {
  const features = [
    "We assemble the perfect combination of tools for your unique operations.",
    "Our modular solutions adapt to your growing and evolving needs. Mix and match features like QuickBooks integrations + CRM syncs + custom reporting.",
    "Simple software makes your life easier.",
    "We leverage prebuilt connectors like Quickbooks and Salesforce to be able to get what you need to you as soon as possible."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We're dedicated to your needs with tailored solutions.
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={rubyImage} 
                alt="Team collaboration - professional consultation" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}