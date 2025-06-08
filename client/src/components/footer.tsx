import thoughtsImage from "@assets/thoughts final_1749360555159.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Connect with us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Connect with us</h4>
            <div className="space-y-3 text-gray-600">
              <p>Office: (919) 900-7115</p>
              <p>Mobile: (919) 501-0572</p>
              <p>support@bnbytes.software</p>
              <div className="mt-4">
                <p>9650 Strickland Rd</p>
                <p>Suite 103-352</p>
                <p>Raleigh, NC 27615</p>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Solutions</h4>
            <div className="space-y-3 text-gray-600">
              <p>QuickBooks</p>
              <p>CRM System</p>
              <p>Excel</p>
              <p>SQL Server</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Company</h4>
            <div className="space-y-3 text-gray-600">
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </div>

          {/* Thoughts of A Programmer */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={thoughtsImage} 
                alt="Thoughts of A Programmer by Donn Machak" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}