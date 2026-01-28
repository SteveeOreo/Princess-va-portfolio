import { motion } from "framer-motion";

// Butterfly SVG Component
const Butterfly = ({ delay, x, y, size = "w-6 h-6" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.2, 0.5, 0.2],
        y: [y, y - 25, y],
        x: [x, x + 8, x],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 5 + delay * 0.5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className={`absolute ${size} pointer-events-none`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full text-rose-400"
        style={{ opacity: 0.4 }}
      >
        {/* Butterfly body */}
        <ellipse cx="12" cy="12" rx="1" ry="8" fill="currentColor" />
        {/* Top left wing */}
        <path
          d="M12 8C10 6 7 5 5 6C4 7 3 9 4 11C5 10 7 9 9 9C10 8 11 8 12 8Z"
          fill="currentColor"
        />
        {/* Top right wing */}
        <path
          d="M12 8C14 6 17 5 19 6C20 7 21 9 20 11C19 10 17 9 15 9C14 8 13 8 12 8Z"
          fill="currentColor"
        />
        {/* Bottom left wing */}
        <path
          d="M12 16C10 18 7 19 5 18C4 17 3 15 4 13C5 14 7 15 9 15C10 16 11 16 12 16Z"
          fill="currentColor"
        />
        {/* Bottom right wing */}
        <path
          d="M12 16C14 18 17 19 19 18C20 17 21 15 20 13C19 14 17 15 15 15C14 16 13 16 12 16Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
};

// Book SVG Component
const Book = ({ delay, x, y, size = "w-5 h-5" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        y: [y, y - 18, y],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: 6 + delay * 0.5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className={`absolute ${size} pointer-events-none`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full text-lavender-500"
        style={{ opacity: 0.35 }}
      >
        <path
          d="M4 19.5C4 18.12 5.12 17 6.5 17H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.5 2H20V20H6.5C5.12 20 4 18.88 4 17.5V4.5C4 3.12 5.12 2 6.5 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 7H16"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M8 10H16"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export default function FloatingElements() {
  // Butterfly positions (percentage-based for responsiveness)
  // Smaller sizes for professional look
  const butterflies = [
    { delay: 0, x: 5, y: 20, size: "w-4 h-4 sm:w-5 sm:h-5" },
    { delay: 1.2, x: 88, y: 30, size: "w-3 h-3 sm:w-4 sm:h-4" },
    { delay: 2.4, x: 12, y: 65, size: "w-5 h-5 sm:w-6 sm:h-6" },
    { delay: 0.6, x: 92, y: 55, size: "w-4 h-4 sm:w-5 sm:h-5" },
    { delay: 1.8, x: 6, y: 50, size: "w-3 h-3 sm:w-4 sm:h-4" },
    { delay: 3, x: 90, y: 75, size: "w-4 h-4 sm:w-5 sm:h-5" },
  ];

  // Book positions - subtle and professional
  const books = [
    { delay: 0.3, x: 8, y: 35, size: "w-3 h-3 sm:w-4 sm:h-4" },
    { delay: 1.5, x: 90, y: 45, size: "w-4 h-4 sm:w-5 sm:h-5" },
    { delay: 2.7, x: 10, y: 70, size: "w-3 h-3 sm:w-4 sm:h-4" },
    { delay: 0.9, x: 87, y: 20, size: "w-4 h-4 sm:w-5 sm:h-5" },
    { delay: 2.1, x: 5, y: 60, size: "w-3 h-3 sm:w-4 sm:h-4" },
    { delay: 3.3, x: 93, y: 68, size: "w-4 h-4 sm:w-5 sm:h-5" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Butterflies */}
      {butterflies.map((butterfly, index) => (
        <Butterfly key={`butterfly-${index}`} {...butterfly} />
      ))}

      {/* Books */}
      {books.map((book, index) => (
        <Book key={`book-${index}`} {...book} />
      ))}
    </div>
  );
}
