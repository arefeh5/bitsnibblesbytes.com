import thoughtsImage from "@assets/thoughts final_1749360555159.png";
import codingImage from "@assets/solveTs_1749360588140.png";

export default function ThoughtsSection() {
  return (
    <section id="thoughts" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 code-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Thoughts of A Programmer</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Insights and reflections from our development team on the art and science of programming.
          </p>
          <p className="text-lg text-purple-300 mt-4 font-medium">by: Donn Machak</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <img 
              src={thoughtsImage} 
              alt="Thoughts of A Programmer by Donn Machak" 
              className="w-full rounded-xl shadow-lg mb-8"
            />
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src={codingImage} 
                  alt="Programming code on dark screens" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-semibold text-white mb-2">Code Craftsmanship</h3>
                <p className="text-purple-200">The art of writing elegant, maintainable code that stands the test of time.</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                  alt="Developers collaborating and brainstorming" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-semibold text-white mb-2">Collaborative Innovation</h3>
                <p className="text-purple-200">Great software emerges from the collective wisdom of passionate developers.</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                  alt="Digital transformation and future technology visualization" 
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-semibold text-white mb-2">Future Vision</h3>
                <p className="text-purple-200">Embracing emerging technologies to build tomorrow's solutions today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
