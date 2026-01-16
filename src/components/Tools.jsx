import { motion } from "framer-motion";

const tools = [
  { name: "Google Workspace", category: "Productivity" },
  { name: "Microsoft Office", category: "Productivity" },
  { name: "Notion", category: "Organization" },
  { name: "Asana", category: "Project Management" },
  { name: "Trello", category: "Project Management" },
  { name: "Slack", category: "Communication" },
  { name: "Zoom", category: "Communication" },
  { name: "Canva", category: "Design" },
  { name: "Mailchimp", category: "Marketing" },
  { name: "Calendly", category: "Scheduling" },
  { name: "QuickBooks", category: "Finance" },
  { name: "HubSpot", category: "CRM" }
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Tools & Platforms
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in the tools that power modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-rose-100 text-center"
            >
              <p className="font-semibold text-gray-800 mb-1">{tool.name}</p>
              <p className="text-xs text-rose-500">{tool.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
