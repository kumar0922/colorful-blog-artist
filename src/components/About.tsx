
import { CheckCircle, Users, Award, Target, Code2, TrendingUp, Clock, Shield } from "lucide-react";

const stats = [
  { number: "500+", label: "Enterprise Clients", icon: TrendingUp },
  { number: "99.9%", label: "System Uptime", icon: Shield },
  { number: "150+", label: "DevOps Engineers", icon: Users },
  { number: "24/7", label: "Expert Support", icon: Clock }
];

const certifications = [
  "AWS Certified DevOps Engineer Professional",
  "Microsoft Azure DevOps Engineer Expert", 
  "Google Cloud Professional DevOps Engineer",
  "Kubernetes Certified Administrator (CKA)"
];

const highlights = [
  { icon: Users, title: "Expert Team", description: "Certified DevOps professionals with 10+ years experience" },
  { icon: Award, title: "Industry Recognition", description: "Award-winning solutions and best practices" },
  { icon: Target, title: "Results Driven", description: "Proven track record of successful transformations" }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-violet-400/10 to-purple-600/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-blue-600/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-violet-400 animate-pulse" />
              <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">About KK DevOps</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Leading DevOps
              <span className="block bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Transformation Partners
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              With over a decade of expertise in DevOps transformation, we've helped Fortune 500 companies 
              and innovative startups streamline their development processes, enhance security postures, 
              and achieve operational excellence. Our mission is to bridge the gap between development 
              and operations through intelligent automation and proven methodologies.
            </p>
            
            <div className="space-y-4 mb-10">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative p-1 bg-white/10 backdrop-blur-md rounded-full border border-violet-400/30">
                      <CheckCircle className="w-4 h-4 text-violet-300" />
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">{cert}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-violet-400/30 group-hover:bg-white/15 transition-all duration-300">
                      <highlight.icon className="w-6 h-6 text-white mx-auto" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
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
                {/* Professional card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-violet-400/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 text-center">
                  <div className="relative mb-4 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative p-2 bg-white/10 backdrop-blur-md rounded-xl border border-violet-400/30">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
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
        
        {/* Professional trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border border-violet-400/20">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full border-2 border-white/20"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full border-2 border-white/20"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full border-2 border-white/20"></div>
            </div>
            <span className="text-white font-medium">Trusted by Fortune 500 companies and innovative startups</span>
          </div>
        </div>
      </div>
    </section>
  );
}
