import thoughtsImage from "@assets/thoughts final_1749360555159.png";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 mx-8 py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Connect with us */}
            <div className="lg:col-span-3">
              <Link href="/contact">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">Connect with us</h4>
              </Link>
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
            <div className="lg:col-span-2">
              <Link href="/solutions">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">Solutions</h4>
              </Link>
              <div className="space-y-3 text-gray-600">
                <Link href="/solutions">
                  <p className="hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">QuickBooks</p>
                </Link>
                <Link href="/solutions">
                  <p className="hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">CRM System</p>
                </Link>
                <Link href="/solutions">
                  <p className="hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">Excel</p>
                </Link>
                <Link href="/solutions">
                  <p className="hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">SQL Server</p>
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Company</h4>
              <div className="space-y-3 text-gray-600">
                <Link href="/about">
                  <p className="hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">About Us</p>
                </Link>
                <Link href="/contact">
                  <p className="hover:text-green-500 hover:drop-shadow-[0_0_3px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer">Contact Us</p>
                </Link>
              </div>
            </div>

            {/* Thoughts of A Programmer */}
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={thoughtsImage} 
                  alt="Thoughts of A Programmer by Donn Machak" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-200 mx-8 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              &copy; 2025 BNB Software. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}