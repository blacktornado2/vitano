import { motion } from 'framer-motion';
import { ProductCard } from '@components/ProductCard/ProductCard';
import type { Product } from '@types';

interface ProductsSectionProps {
  containerVariants: any;
  itemVariants: any;
  product: Product;
  onAddToCart: (productId: string, quantity: number) => void;
  isLoading: boolean;
}

export const ProductsSection = ({
  containerVariants,
  itemVariants,
  product,
  onAddToCart,
  isLoading,
}: ProductsSectionProps) => {
  return (
    <motion.section
      id="products"
      className="w-full py-20 md:py-32 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Product</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our flagship product - a perfect blend of style, functionality, and
            quality craftsmanship.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {/* Left - Product Details */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Why Choose Us?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Premium Quality Materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Lifetime Warranty</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Free Shipping</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>30-Day Money Back</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expert Support</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Center - Product Card */}
          <motion.div variants={itemVariants}>
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          </motion.div>

          {/* Right - Specifications */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4 border border-border">
              <h3 className="text-lg font-bold text-foreground">Specifications</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground font-semibold">Driver Size</p>
                  <p className="text-foreground">40mm Dynamic Driver</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Battery Life</p>
                  <p className="text-foreground">30 Hours</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Bluetooth</p>
                  <p className="text-foreground">Bluetooth 5.0</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Weight</p>
                  <p className="text-foreground">250g</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Warranty</p>
                  <p className="text-foreground">2 Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
