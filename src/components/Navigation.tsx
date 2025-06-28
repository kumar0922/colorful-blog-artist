
import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
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
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl' 
        : 'bg-gradient-to-r from-indigo-600 to-blue-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h1 className="text-xl font-bold text-white">
                  KKFunda DevSecOps
                </h1>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-200 transition-colors font-medium">
              Home
            </a>
            <a href="#tutorials" className="text-white hover:text-yellow-200 transition-colors font-medium">
              Tutorials
            </a>
            <a href="#tools" className="text-white hover:text-yellow-200 transition-colors font-medium">
              Tools
            </a>
            <a href="#blog" className="text-white hover:text-yellow-200 transition-colors font-medium">
              Blog
            </a>
            <a href="#contact" className="text-white hover:text-yellow-200 transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-200 hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-blue-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-4 py-3 text-white hover:text-yellow-200 hover:bg-white/5 rounded-lg transition-all">Home</a>
            <a href="#tutorials" className="block px-4 py-3 text-white hover:text-yellow-200 hover:bg-white/5 rounded-lg transition-all">Tutorials</a>
            <a href="#tools" className="block px-4 py-3 text-white hover:text-yellow-200 hover:bg-white/5 rounded-lg transition-all">Tools</a>
            <a href="#blog" className="block px-4 py-3 text-white hover:text-yellow-200 hover:bg-white/5 rounded-lg transition-all">Blog</a>
            <a href="#contact" className="block px-4 py-3 text-white hover:text-yellow-200 hover:bg-white/5 rounded-lg transition-all">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
