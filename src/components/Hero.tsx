
import { ArrowRight, Code, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Server className="w-8 h-8 text-purple-400" />
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-full">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              DevOps Solutions
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your development workflow with cutting-edge DevOps practices, 
            cloud infrastructure, and automation solutions that scale with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
