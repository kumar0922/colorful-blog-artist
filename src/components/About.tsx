
import { CheckCircle, Users, Award, Target, Sparkles, TrendingUp, Clock, Shield } from "lucide-react";

const stats = [
  { number: "750+", label: "Projects Delivered", icon: TrendingUp },
  { number: "99.95%", label: "Uptime Achieved", icon: Shield },
  { number: "200+", label: "Happy Clients", icon: Users },
  { number: "24/7", label: "Support Available", icon: Clock }
];

const achievements = [
  "AWS Solutions Architect Professional Certified",
  "Kubernetes Certified Administrator & Security Specialist", 
  "Microsoft Azure Expert & DevOps Engineer",
  "Google Cloud Professional Architect & Developer"
];

const highlights = [
  { icon: Users, title: "Elite Team", description: "Senior engineers with 12+ years expertise" },
  { icon: Award, title: "Industry Leaders", description: "Award-winning solutions and innovations" },
  { icon: Target, title: "Results Focused", description: "Proven track record of successful outcomes" }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-orange-600/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight font-sans">
              Meet Our
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-500 to-amber-500 bg-clip-text text-transparent">
                Innovation Team
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              With over 12 years of pioneering experience in cloud architecture and DevOps excellence, 
              we've transformed the digital landscape for Fortune 500 companies and innovative startups alike. 
              Our mission is to accelerate technological advancement through intelligent automation 
              and scalable infrastructure solutions.
            </p>
            
            <div className="space-y-4 mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <CheckCircle className="w-4 h-4 text-emerald-300" />
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <highlight.icon className="w-6 h-6 text-white mx-auto" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 text-center">
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-500 to-amber-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full border-2 border-white/20"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-amber-500 rounded-full border-2 border-white/20"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-2 border-white/20"></div>
            </div>
            <span className="text-white font-medium">Trusted by global enterprises and innovative startups</span>
          </div>
        </div>
      </div>
    </section>
  );
}
