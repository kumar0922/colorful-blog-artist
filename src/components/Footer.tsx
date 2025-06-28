
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              KKDevOps Pro
            </h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Professional DevOps solutions that transform your development workflow 
              and accelerate your business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <Github className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <Mail className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CI/CD Pipelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 KKDevOps Pro. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
