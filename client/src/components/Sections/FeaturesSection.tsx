import { motion } from 'framer-motion';

interface FeaturesSectionProps {
  containerVariants: any;
  itemVariants: any;
}

export const FeaturesSection = ({ containerVariants, itemVariants }: FeaturesSectionProps) => {
  return (
    <motion.section
      className="w-full py-20 bg-muted/50 px-4 border-y border-border"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Why Our Customers Love Us
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
          {[
            {
              title: 'Lightning Fast Shipping',
              description: 'Get your orders delivered within 2-3 business days',
            },
            {
              title: 'Hassle-Free Returns',
              description: '30-day money-back guarantee, no questions asked',
            },
            {
              title: '24/7 Customer Support',
              description: 'Our team is always here to help you',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-background rounded-lg border border-border hover:shadow-md transition-shadow text-center"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-4">
                {index === 0 ? '🚚' : index === 1 ? '✨' : '💬'}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
