import { motion } from 'framer-motion';

interface CTASectionProps {
  containerVariants: any;
  itemVariants: any;
  onShopClick: () => void;
}

export const CTASection = ({ containerVariants, itemVariants, onShopClick }: CTASectionProps) => {
  return (
    <motion.section
      className="w-full py-20 md:py-32 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <motion.h2 className="text-4xl md:text-5xl font-bold" variants={itemVariants}>
          Ready to Elevate Your Experience?
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
          Join thousands of satisfied customers who have transformed their lifestyle with
          our premium products.
        </motion.p>
        <motion.button
          onClick={onShopClick}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </div>
    </motion.section>
  );
};
