import { motion } from 'framer-motion';
import { ProductCard } from '@components/ProductCard/ProductCard';
import type { Product } from '@types';

interface ProductsSectionProps {
  containerVariants: any;
  itemVariants: any;
  product: Product;
}

export const ProductsSection = ({
  containerVariants,
  itemVariants,
  product,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Products</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted, 100% pure asafoetida — made fresh in-house with no
            additives, fillers, or artificial colours.
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
              <h3 className="text-2xl font-bold text-foreground">Why Choose Our Hing?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>100% Pure & Unadulterated</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Handcrafted Fresh In-House</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>No Artificial Colours or Fillers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Rich Aroma & Authentic Flavour</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Farm-to-Kitchen Freshness</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Center - Product Card */}
          <motion.div variants={itemVariants}>
            <ProductCard
              product={product}
            />
          </motion.div>

          {/* Right - Specifications */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4 border border-border">
              <h3 className="text-lg font-bold text-foreground">Product Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground font-semibold">Ingredient</p>
                  <p className="text-foreground">100% Pure Asafoetida (Hing)</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Form</p>
                  <p className="text-foreground">Powder / Compounded</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Net Weight</p>
                  <p className="text-foreground">10g</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Shelf Life</p>
                  <p className="text-foreground">12 Months</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-semibold">Storage</p>
                  <p className="text-foreground">Cool & Dry Place</p>
                </div>
              </div>
              {/* FSSAI Badge */}
              <div className="mt-4 p-3 bg-primary/10 border border-primary/30 rounded-lg text-center">
                <p className="text-xs text-muted-foreground font-medium mb-1">FSSAI License No.</p>
                <p className="text-sm font-bold text-primary tracking-wide">1082600500691</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
