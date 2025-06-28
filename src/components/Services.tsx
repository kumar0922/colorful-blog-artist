
import { Cloud, GitBranch, Monitor, Shield, Cpu, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions on AWS, Azure, and Google Cloud Platform with automated deployment pipelines.",
    color: "text-blue-400"
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Streamlined continuous integration and deployment workflows that reduce time-to-market.",
    color: "text-emerald-400"
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description: "Real-time monitoring, logging, and alerting systems to ensure optimal application performance.",
    color: "text-purple-400"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement security best practices and compliance frameworks throughout your infrastructure.",
    color: "text-red-400"
  },
  {
    icon: Cpu,
    title: "Container Orchestration",
    description: "Docker and Kubernetes solutions for efficient application deployment and scaling.",
    color: "text-orange-400"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Automated database deployments, backups, and performance optimization strategies.",
    color: "text-cyan-400"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive DevOps solutions tailored to accelerate your development lifecycle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
