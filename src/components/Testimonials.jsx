import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Princess has been an absolute game-changer for my business. Her attention to detail and warm professionalism make every interaction a pleasure. I've gained so much time back in my day!",
    author: "Sarah M.",
    role: "E-commerce Entrepreneur",
    rating: 5
  },
  {
    quote: "Working with Princess feels like having a trusted partner by my side. She anticipates my needs and handles everything with such care and efficiency. Highly recommend!",
    author: "Jessica L.",
    role: "Wellness Coach",
    rating: 5
  },
  {
    quote: "Princess transformed my chaotic schedule into a well-oiled machine. Her organizational skills are incredible, and she brings such positive energy to everything she does.",
    author: "Amanda K.",
    role: "Creative Agency Owner",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - hear from the amazing women I've had the pleasure of working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-rose-50 to-lavender-50 p-8 rounded-2xl shadow-lg border border-rose-100"
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-rose-200 pt-4">
                <p className="font-bold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-rose-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  