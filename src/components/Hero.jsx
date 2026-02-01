import { motion } from "framer-motion";
import profileImage from "../image/Princess.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-16 md:pt-0">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-lavender-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 order-2 lg:order-1 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[480px] mx-auto lg:mx-0"
          >
            <div className="relative group">
              {/* Outer glow effect - responsive sizing */}
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-5 lg:-inset-6 bg-gradient-to-r from-rose-400 via-rose-300 to-lavender-400 rounded-full opacity-30 blur-xl sm:blur-2xl group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Middle decorative ring - responsive sizing */}
              <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-2.5 lg:-inset-3 bg-gradient-to-r from-rose-200 via-lavender-200 to-rose-200 rounded-full opacity-60"></div>
              
              {/* Inner decorative ring - responsive sizing */}
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-br from-white to-rose-50 rounded-full"></div>
              
              {/* Image container with responsive sizing */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-xl sm:shadow-2xl border-2 md:border-4 border-white bg-gradient-to-br from-rose-50 to-lavender-50 group-hover:shadow-2xl sm:group-hover:shadow-3xl transition-all duration-300">
                <img
                  src={profileImage}
                  alt="Princess Ekwueme - Professional Virtual Assistant"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "center 35%" }}
                  loading="eager"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 480px"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Decorative sparkle elements - responsive sizing and positioning */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-rose-400 opacity-70"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-lavender-400 opacity-70"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ rotate: 180, scale: [1, 1.15, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -right-2 sm:-right-3 md:-right-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-rose-300 opacity-60 hidden sm:block"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-2xl order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
                Princess Ekwueme
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-lavender-400 mx-auto lg:mx-0 mb-6"></div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 font-semibold"
            >
             EXECUTIVE VIRTUAL ASSISTANT & SOCIAL MEDIA MANAGER
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
             Executive-level virtual support that protects your time, streamlines operations,
              and maintains a consistent, professional brand presence, without micromanagement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Let's Work Together
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-rose-400 text-rose-600 rounded-full font-semibold hover:bg-rose-50 transform hover:scale-105 transition-all duration-300 text-center"
              >
                View Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
