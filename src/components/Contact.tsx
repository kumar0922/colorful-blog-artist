
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Code2, MessageCircle, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Professional consultation",
    value: "info@kkdevops.com",
    color: "from-violet-400 to-purple-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with DevOps experts",
    value: "+1 (555) 123-4567",
    color: "from-indigo-400 to-violet-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our office location",
    value: "San Francisco, CA",
    color: "from-purple-400 to-indigo-500"
  }
];

const quickActions = [
  { icon: MessageCircle, title: "Live Chat", description: "Instant technical support" },
  { icon: Calendar, title: "Book Meeting", description: "Schedule DevOps consultation" },
  { icon: Zap, title: "Quick Assessment", description: "Get infrastructure evaluation" }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully! 🚀",
      description: "Thank you for contacting KK DevOps. Our team will respond within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Professional background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-violet-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Get In Touch</span>
            <Send className="w-5 h-5 text-indigo-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Start Your DevOps Transformation
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to optimize your development workflow? Connect with our certified DevOps engineers 
            and discover how we can accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-violet-400/30 transition-all duration-500 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-xl blur opacity-75"></div>
                    <div className="relative p-2 bg-white/10 backdrop-blur-md rounded-xl border border-violet-400/30">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/5 backdrop-blur-md border-violet-400/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20 rounded-xl h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/5 backdrop-blur-md border-violet-400/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20 rounded-xl h-12"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name (Optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/5 backdrop-blur-md border-violet-400/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your DevOps challenges and requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-white/5 backdrop-blur-md border-violet-400/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20 rounded-xl resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Contact methods */}
            {contactMethods.map((method, index) => (
              <Card key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-violet-400/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
                      <div className="relative p-3 bg-white/10 backdrop-blur-md rounded-xl border border-violet-400/30 group-hover:bg-white/15 transition-all duration-300">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                      <p className="text-slate-400 text-sm mb-1">{method.description}</p>
                      <p className="text-violet-300 font-medium">{method.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quick actions */}
            <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-md border border-violet-400/20">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-violet-400" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer group">
                      <action.icon className="w-4 h-4 text-slate-400 group-hover:text-violet-400 transition-colors" />
                      <div>
                        <p className="text-white text-sm font-medium">{action.title}</p>
                        <p className="text-slate-400 text-xs">{action.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
