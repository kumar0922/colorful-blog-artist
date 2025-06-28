
import { CheckCircle, Users, Award, Target } from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "99.9%", label: "Uptime Achieved" },
  { number: "150+", label: "Happy Clients" },
  { number: "24/7", label: "Support Available" }
];

const achievements = [
  "AWS Certified Solutions Architect",
  "Kubernetes Certified Administrator", 
  "Azure DevOps Expert",
  "Google Cloud Professional"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Our Professional Team
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              With over a decade of experience in DevOps and cloud infrastructure, 
              we've helped hundreds of companies streamline their development processes 
              and achieve remarkable operational efficiency.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Expert Team</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Certified Pros</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Results Driven</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
