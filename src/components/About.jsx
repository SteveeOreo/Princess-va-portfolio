import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm <span className="font-semibold text-rose-600">Princess Ekwueme</span>, a detail-oriented Virtual Executive Assistant and Social Media Manager supporting founders, executives, and business owners. 
              I streamline schedules, manage communications, and provide precise administrative support, ensuring critical tasks are completed efficiently and on time.

            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            I protect executive time through structured calendars, inbox control, documentation,
             and proactive follow-ups, while maintaining a consistent, professional brand presence online.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            I thrive in remote, high-trust environments, delivering reliable support that allows leaders to focus on growth, 
            impact, and strategic priorities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-rose-100 to-lavender-100 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">What I Bring</h3>
            <ul className="space-y-4">
              {[
                "✨ Exceptional attention to detail",
                "💝 Warm, professional communication",
                "🎯 Proactive problem-solving",
                "🔒 Complete confidentiality",
                "⚡ Quick turnaround times",
                "💼 Business-savvy approach"
              ].map((item, index) => (
                <li key={index} className="text-gray-700 text-lg flex items-center">
                  <span className="mr-3">{item.split(' ')[0]}</span>
                  <span>{item.substring(2)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  