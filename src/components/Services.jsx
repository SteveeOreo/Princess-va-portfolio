import { motion } from "framer-motion";

const services = [
  {
    icon: "📅",
    title: "Calendar & Schedule Management",
    description: "Keep your schedule organized and optimized. I handle appointments, time blocking, and ensure you never miss an important meeting."
  },
  {
    icon: "📧",
    title: "Email & Inbox Management",
    description: "Transform your inbox from chaos to clarity. I filter, prioritize, and respond to emails so you can focus on what matters."
  },
  {
    icon: "💼",
    title: "Business Support",
    description: "From document preparation to research and data entry, I provide comprehensive administrative support for your business needs."
  },
  {
    icon: "📊",
    title: "Project Coordination",
    description: "Keep projects on track with organized workflows, deadline management, and seamless coordination between team members."
  },
  {
    icon: "✈️",
    title: "Travel Planning",
    description: "Stress-free travel arrangements including flights, accommodations, and itinerary planning tailored to your preferences."
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description: "Maintain a consistent online presence with content scheduling, engagement, and community management across platforms."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive virtual assistance tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-rose-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  