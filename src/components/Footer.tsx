
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">KKFunda DevSecOps</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/90">
              © 2025 KKFunda DevSecOps | 
              <a href="#" className="text-yellow-200 hover:text-yellow-100 mx-2 transition-colors">Privacy Policy</a> | 
              <a href="#" className="text-yellow-200 hover:text-yellow-100 transition-colors">Terms of Use</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
