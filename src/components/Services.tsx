
import { GitBranch, Container, Monitor, CloudCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: GitBranch,
    title: "CI/CD Security",
    description: "Integrate security checks into your CI/CD pipeline for safer deployments and automation.",
    color: "from-indigo-500 to-blue-600"
  },
  {
    icon: Container,
    title: "Container Security",
    description: "Learn how to secure Docker and Kubernetes environments against vulnerabilities.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Monitor,
    title: "Monitoring & Logging",
    description: "Track, log, and audit your infrastructure effectively with ELK, Prometheus, and more.",
    color: "from-cyan-500 to-teal-600"
  },
  {
    icon: CloudCheck,
    title: "Cloud Compliance",
    description: "Implement security and compliance best practices in AWS, Azure, and GCP environments.",
    color: "from-teal-500 to-green-600"
  }
];

export function Services() {
  return (
    <section id="tutorials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gray-50 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
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
