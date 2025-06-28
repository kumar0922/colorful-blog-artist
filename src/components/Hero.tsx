
import { ArrowRight, Cloud, Shield, Zap, Code2, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-violet-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Professional icon cluster */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-violet-400/30 hover:bg-white/15 transition-all duration-300">
                <Cloud className="w-8 h-8 text-violet-300" />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-indigo-400/30 hover:bg-white/15 transition-all duration-300">
                <Shield className="w-8 h-8 text-indigo-300" />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-purple-400/30 hover:bg-white/15 transition-all duration-300">
                <Zap className="w-8 h-8 text-purple-300" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional heading */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-violet-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-300 tracking-widest uppercase">Professional DevOps Solutions</span>
            <Trophy className="w-5 h-5 text-indigo-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block">Transform Your</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              DevOps Journey
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional DevOps consulting and automation solutions that drive
            <span className="text-violet-300 font-medium"> operational excellence</span>, enhance 
            <span className="text-indigo-300 font-medium"> team productivity</span>, and ensure 
            <span className="text-purple-300 font-medium"> enterprise-grade security</span>
          </p>
        </div>
        
        {/* Professional CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="group bg-white/5 backdrop-blur-md border-violet-400/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg hover:border-violet-400/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center">
              View Portfolio
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
            </span>
          </Button>
        </div>
        
        {/* Professional stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
            <span>500+ Enterprise Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200"></div>
            <span>99.9% System Reliability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
            <span>24/7 Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
