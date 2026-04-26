import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@constants/testimonials';

interface TestimonialsSectionProps {
  containerVariants: any;
  itemVariants: any;
}

export const TestimonialsSection = ({ containerVariants, itemVariants }: TestimonialsSectionProps) => {
  return (
    <motion.section
      id="reviews"
      className="w-full py-20 md:py-32 px-4 bg-gradient-to-b from-muted/50 to-background border-y border-border overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="flex flex-col items-center justify-center gap-2 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-32 h-11" viewBox="0 0 105 36" fill="none">
              <text x="0"  y="27" fontSize="24" fontWeight="900" fill="#4285F4">G</text>
              <text x="18" y="27" fontSize="24" fontWeight="900" fill="#EA4335">o</text>
              <text x="36" y="27" fontSize="24" fontWeight="900" fill="#FBBC04">o</text>
              <text x="54" y="27" fontSize="24" fontWeight="900" fill="#4285F4">g</text>
              <text x="72" y="27" fontSize="24" fontWeight="900" fill="#34A853">l</text>
              <text x="81" y="27" fontSize="24" fontWeight="900" fill="#EA4335">e</text>
            </svg>
            <span className="text-xl font-semibold text-primary">Google Reviews</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Are Saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic reviews from our satisfied customers on Google Business Profile
          </p>
        </motion.div>

        {/* Testimonial Horizontal Scroll */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8 pt-8 pb-8"
            animate={{ x: [-100, -2700] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-full md:w-96 bg-gray-100 rounded-xl border border-blue-100 p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
                whileHover={{ y: -6 }}
              >
                {/* Background Gradient Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Header with Image and Info */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 flex-shrink-0 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold text-foreground truncate">{testimonial.name}</h3>
                          <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-base">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mb-4 flex-1">
                    <p className="text-sm leading-relaxed text-foreground/90 line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Date Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    <svg className="w-6 h-6 text-muted-foreground/70" viewBox="0 0 24 24" fill="currentColor">
                      <text x="2" y="18" fontSize="14" fontWeight="900" fill="#EA4335">G</text>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Fade Effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-muted/50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.section>
  );
};
