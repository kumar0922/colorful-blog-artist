
import { Cloud, GitBranch, Monitor, Shield, Cpu, Database, Code2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Enterprise cloud solutions with AWS, Azure, and GCP. Multi-cloud strategies, migration planning, and cost optimization for maximum efficiency.",
    color: "from-violet-400 to-purple-500",
    bgColor: "from-violet-500/10 to-purple-500/10"
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline",
    description: "Automated deployment pipelines with Jenkins, GitLab, and GitHub Actions. Streamlined workflows for faster, more reliable software delivery.",
    color: "from-indigo-400 to-violet-500",
    bgColor: "from-indigo-500/10 to-violet-500/10"
  },
  {
    icon: Monitor,
    title: "System Monitoring",
    description: "Comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack. Real-time insights and proactive issue resolution.",
    color: "from-blue-400 to-indigo-500",
    bgColor: "from-blue-500/10 to-indigo-500/10"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "DevSecOps implementation with security scanning, compliance automation, and vulnerability management for enterprise standards.",
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Cpu,
    title: "Container Orchestration",
    description: "Kubernetes deployment and management, Docker containerization, and microservices architecture for scalable applications.",
    color: "from-pink-400 to-rose-500",
    bgColor: "from-pink-500/10 to-rose-500/10"
  },
  {
    icon: Database,
    title: "Infrastructure as Code",
    description: "Terraform and Ansible automation, version-controlled infrastructure, and reproducible environment provisioning.",
    color: "from-rose-400 to-violet-500",
    bgColor: "from-rose-500/10 to-violet-500/10"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50s-50 22.386-50 50 22.386 50 50 50 50-22.386 50-50zm0 0c0-27.614 22.386-50 50-50s50 22.386 50 50-22.386 50-50 50-50-22.386-50-50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-violet-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Our Expertise</span>
            <Shield className="w-5 h-5 text-indigo-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive DevOps solutions designed to optimize your development lifecycle, 
            enhance system reliability, and accelerate your business objectives
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-violet-400/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Professional gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
                    <div className="relative p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-violet-300 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-white text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
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
        
        {/* Professional CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Ready to optimize your DevOps workflow?</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border border-violet-400/20">
            <span className="text-white font-medium">Schedule a consultation</span>
            <ArrowRight className="w-4 h-4 text-violet-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
