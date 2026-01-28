import { motion } from "framer-motion";

const cases = [
  {
    client: "Female Entrepreneur",
    industry: "E-commerce & Fashion",
    problem: "Overwhelmed with daily operations and unable to focus on business growth",
    solution: "Implemented comprehensive calendar management, email filtering system, and automated routine tasks",
    result: "Gained 10+ hours weekly for strategic planning, increased productivity by 40%"
  },
  {
    client: "Wellness Coach",
    industry: "Health & Wellness",
    problem: "Disorganized client communications and missed follow-ups affecting client satisfaction",
    solution: "Created streamlined client management system, automated follow-up sequences, and organized communication hub",
    result: "Improved client retention by 35%, reduced response time by 60%"
  },
  {
    client: "Creative Agency Owner",
    industry: "Marketing & Design",
    problem: "Chaotic project management leading to missed deadlines and client dissatisfaction",
    solution: "Established project tracking system, deadline management, and client communication protocols",
    result: "Zero missed deadlines in 6 months, increased client satisfaction scores by 50%"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Success Stories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients who trusted me with their business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-rose-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-rose-100"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                  {item.industry}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {item.client}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-rose-600 mb-1">Challenge:</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-rose-600 mb-1">Solution:</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.solution}</p>
                </div>
                <div className="pt-2 border-t border-rose-200">
                  <p className="text-sm font-semibold text-lavender-600 mb-1">Result:</p>
                  <p className="text-gray-800 font-medium text-sm">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  