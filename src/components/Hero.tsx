
import { ArrowRight, Code, Server, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon cluster with glassmorphism */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Code className="w-8 h-8 text-emerald-300" />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Server className="w-8 h-8 text-amber-300" />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Zap className="w-8 h-8 text-teal-300" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main heading with modern typography */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-300 tracking-widest uppercase">Elite Development</span>
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight font-sans">
            <span className="inline-block">Accelerate Your</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-amber-500 bg-clip-text text-transparent animate-pulse">
              Digital Evolution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionize your development workflow with cutting-edge automation, 
            <span className="text-emerald-300 font-medium"> scalable cloud architecture</span>, and 
            <span className="text-amber-300 font-medium"> bulletproof security solutions</span>
          </p>
        </div>
        
        {/* CTA buttons with modern design */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              Launch Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="group bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center">
              View Case Studies
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full group-hover:scale-125 transition-transform"></div>
            </span>
          </Button>
        </div>
        
        {/* Stats or badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>750+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-200"></div>
            <span>99.95% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-400"></div>
            <span>Global Expert Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
