import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@components/Header/Header';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { CartDropdown } from '@components/Cart/CartDropdown';
import { Footer } from '@components/Footer/Footer';
import { useCart } from '@hooks/useCart';
import type { Product } from '@types';
import logo from '@assets/logo.png';

// Mock product data - replace with API call later
const MOCK_PRODUCT: Product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description:
    'Experience crystal-clear sound with our premium wireless headphones. featuring active noise cancellation, 30-hour battery life, and premium comfort padding.',
  price: 12999,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
  category: 'Electronics',
  stock: 15,
  rating: 4.5,
  reviews: 128,
};

export const LandingPage = () => {
  const { cart, addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (productId: string, quantity: number) => {
    setIsLoading(true);
    setTimeout(() => {
      addToCart(productId, quantity);
      setIsLoading(false);
    }, 500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <Header cartCount={cart.totalItems} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <motion.section
        className="relative w-full py-16 md:py-32 px-4 border-b border-border"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center">
                <img src={logo} alt="Vitano" className="h-12 w-auto" />
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold leading-tight text-foreground"
                variants={itemVariants}
              >
                Discover Premium Quality
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                Experience excellence with our carefully curated selection of
                premium products. Each item is handpicked for quality, design, and
                durability.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => {
                    const productsSection = document.getElementById('products');
                    productsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Now
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={itemVariants} className="flex gap-8 pt-8">
                <div>
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">4.8★</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 md:h-full"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"
                animate={{
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.img
                src={MOCK_PRODUCT.image}
                alt="Featured Product"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
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
                product={MOCK_PRODUCT}
                onAddToCart={handleAddToCart}
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

      {/* Features Section */}
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

      {/* CTA Section */}
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
            onClick={() => setIsCartOpen(true)}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </div>
      </motion.section>

      {/* Cart Dropdown */}
      <CartDropdown
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
