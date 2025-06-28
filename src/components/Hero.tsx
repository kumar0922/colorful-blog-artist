
import { Shield, Lock, Eye, Cloud } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient background matching the HTML design */}
      <div className="absolute inset-0 bg-gradient-to-135deg from-cyan-400 via-blue-500 to-green-400">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-400/20"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Icon cluster */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Cloud className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Secure Your DevOps Pipeline
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Learn, implement, and master DevSecOps practices with high-quality tutorials, tools, and real-world guides.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white/50 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            View Tutorials
          </button>
        </div>
      </div>
    </section>
  );
}
