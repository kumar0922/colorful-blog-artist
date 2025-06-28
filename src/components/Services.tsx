
import { Cloud, GitBranch, Monitor, Shield, Cpu, Database, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Enterprise-grade cloud solutions with multi-region deployment, auto-scaling, and intelligent cost optimization across all major platforms.",
    color: "from-emerald-400 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10"
  },
  {
    icon: GitBranch,
    title: "DevOps Automation",
    description: "Advanced CI/CD pipelines with automated testing, deployment strategies, and infrastructure as code for seamless development workflows.",
    color: "from-teal-400 to-emerald-500",
    bgColor: "from-teal-500/10 to-emerald-500/10"
  },
  {
    icon: Monitor,
    title: "Performance Monitoring",
    description: "Comprehensive observability platform with real-time metrics, distributed tracing, and AI-powered anomaly detection systems.",
    color: "from-amber-400 to-orange-500",
    bgColor: "from-amber-500/10 to-orange-500/10"
  },
  {
    icon: Shield,
    title: "Security Operations",
    description: "Zero-trust security architecture with automated vulnerability scanning, compliance monitoring, and incident response protocols.",
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: Cpu,
    title: "Container Platform",
    description: "Kubernetes-native solutions with service mesh, progressive deployments, and intelligent resource management for optimal performance.",
    color: "from-red-400 to-pink-500",
    bgColor: "from-red-500/10 to-pink-500/10"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Modern data pipelines with real-time processing, automated backups, and cross-region disaster recovery for mission-critical applications.",
    color: "from-pink-400 to-purple-500",
    bgColor: "from-pink-500/10 to-purple-500/10"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50s-50 22.386-50 50 22.386 50 50 50 50-22.386 50-50zm0 0c0-27.614 22.386-50 50-50s50 22.386 50 50-22.386 50-50 50-50-22.386-50-50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Our Solutions</span>
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight font-sans">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-amber-500 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions engineered to transform your business operations 
            and drive unprecedented growth in today's digital landscape
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
                <CardTitle className="text-white text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">
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
          <p className="text-slate-400 mb-6">Ready to modernize your infrastructure?</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-white/10">
            <span className="text-white font-medium">Schedule a consultation</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
