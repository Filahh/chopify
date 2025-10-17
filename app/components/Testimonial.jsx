'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Ada',
    quote:
      'The jollof was absolutely perfect! Delivery was quick and neatly packaged.',
  },
  {
    name: 'Tunde',
    quote: 'Best grilled chicken I’ve had in Abuja. The sauce was insane!',
  },
  {
    name: 'Zainab',
    quote: 'Seamless ordering experience — and the food came piping hot!',
  },
  {
    name: 'Emeka',
    quote: 'Chopify is my go-to lunch spot now. Consistent, tasty, and fast!',
  },
];

const Testimonial = () => {
  const [index, setIndex] = React.useState(0);

  // Auto-slide every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 md:px-12 lg:px-24 text-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#292A44] via-[#C4402A] to-[#E46B3F] opacity-95 -z-10"></div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-white/10 blur-3xl rounded-full -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 drop-shadow-md">
        What Our Customers Say
      </h2>

      {/* Sliding testimonials */}
      <div className="relative max-w-3xl mx-auto h-40 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute text-white/90 italic leading-relaxed text-lg md:text-xl px-6"
          >
            “{testimonials[index].quote}”
            <p className="mt-4 font-semibold text-[#F8B75D]">
              — {testimonials[index].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual control dots */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#F8B75D] scale-110' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-10 border-t border-white/30 text-white/80 text-sm">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-[#F8B75D]">Chopify</span>. All
          rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Testimonial;
