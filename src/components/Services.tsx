
import { Cloud, GitBranch, Monitor, Shield, Cpu, Database, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions on AWS, Azure, and Google Cloud Platform with automated deployment pipelines and cost optimization.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Streamlined continuous integration and deployment workflows that reduce time-to-market by 70% with zero-downtime deployments.",
    color: "from-emerald-400 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10"
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description: "Real-time monitoring, logging, and alerting systems with AI-powered anomaly detection and predictive analytics.",
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement security best practices, vulnerability scanning, and compliance frameworks with automated security testing.",
    color: "from-red-400 to-orange-500",
    bgColor: "from-red-500/10 to-orange-500/10"
  },
  {
    icon: Cpu,
    title: "Container Orchestration",
    description: "Docker and Kubernetes solutions for efficient application deployment, auto-scaling, and microservices architecture.",
    color: "from-orange-400 to-yellow-500",
    bgColor: "from-orange-500/10 to-yellow-500/10"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Automated database deployments, backups, performance optimization, and multi-region disaster recovery strategies.",
    color: "from-cyan-400 to-blue-500",
    bgColor: "from-cyan-500/10 to-blue-500/10"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Cpath d=\"M50 50c0-27.614-22.386-50-50-50s-50 22.386-50 50 22.386 50 50 50 50-22.386 50-50zm0 0c0-27.614 22.386-50 50-50s50 22.386 50 50-22.386 50-50 50-50-22.386-50-50z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Our Expertise</span>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive DevOps solutions designed to accelerate your development lifecycle 
            and scale your business to new heights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
                    <div className="relative p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-white text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Ready to transform your infrastructure?</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border border-white/10">
            <span className="text-white font-medium">Let's discuss your project</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
