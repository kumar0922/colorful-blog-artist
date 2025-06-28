
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-violet-500/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative p-2 bg-white/10 backdrop-blur-md rounded-xl border border-violet-400/30">
                    <Code2 className="w-6 h-6 text-violet-300" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  KK DevOps Pro
                </h1>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-300 hover:text-violet-300 transition-colors font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="text-slate-300 hover:text-violet-300 transition-colors font-medium relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-slate-300 hover:text-violet-300 transition-colors font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate-300 hover:text-violet-300 transition-colors font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-violet-300 hover:bg-white/10 rounded-xl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-violet-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-4 py-3 text-slate-300 hover:text-violet-300 hover:bg-white/5 rounded-xl transition-all">Home</a>
            <a href="#services" className="block px-4 py-3 text-slate-300 hover:text-violet-300 hover:bg-white/5 rounded-xl transition-all">Services</a>
            <a href="#about" className="block px-4 py-3 text-slate-300 hover:text-violet-300 hover:bg-white/5 rounded-xl transition-all">About</a>
            <a href="#contact" className="block px-4 py-3 text-slate-300 hover:text-violet-300 hover:bg-white/5 rounded-xl transition-all">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
