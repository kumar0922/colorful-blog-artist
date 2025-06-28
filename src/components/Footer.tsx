
import { Github, Linkedin, Twitter, Mail, Heart, Sparkles } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Cloud Infrastructure", href: "#" },
    { name: "CI/CD Pipelines", href: "#" },
    { name: "Monitoring & Observability", href: "#" },
    { name: "Security & Compliance", href: "#" }
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" }
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Support", href: "#" }
  ]
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" }
];

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-75"></div>
                <div className="relative p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <Sparkles className="w-6 h-6 text-cyan-300" />
                </div>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                KKDevOps Pro
              </h3>
            </div>
            
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Professional DevOps solutions that transform your development workflow 
              and accelerate your business growth through cutting-edge automation and cloud innovation.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links sections */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 flex items-center gap-2">
              © 2024 KKDevOps Pro. All rights reserved. Built with 
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              and precision.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-cyan-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-cyan-300 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
          
          {/* Achievement badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
              <span className="text-xs text-slate-400">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
              <span className="text-xs text-slate-400">AWS Advanced Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
