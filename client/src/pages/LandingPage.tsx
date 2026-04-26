import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@components/Header/Header';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { CartDropdown } from '@components/Cart/CartDropdown';
import { Footer } from '@components/Footer/Footer';
import { useCart } from '@hooks/useCart';
import type { Product } from '@types';
import logo from '@assets/logo.jpeg';
import { Mail, Phone, MapPin } from 'lucide-react';

// Below are the Google reviews
// Google Reviews Data - Real reviews from Vitano Business Profile
// Source: https://share.google/U585qcYeD0CJ8V6UW
// These are authentic customer reviews sourced directly from Google Business Profile
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Yogesh Verma',
    role: 'Verified Customer',
    quote: 'Had amazing experience while using these products. Would recommend everyone to try once for better life.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjW2JHj0MjzEpSeNSeJQ-F24xeM1G_bDgNTZKJTzVTO_bcHCzf-b=s64-c-rp-mo-br100',
    date: '5 months ago',
  },
  {
    id: 2,
    name: 'pankaj jamdagni',
    role: 'Verified Customer',
    quote: 'It is Good Experience to buy from here..i had bought Hing and Walnut Best quality from here.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWfOvxKQMpwLHi8XD93l1-K7NNsnLg-dvM5dpDIAMttEkLLOg=s64-c-rp-mo-br100',
    date: '5 months ago',
  },
  {
    id: 3,
    name: 'Nikhil Yadav',
    role: 'Verified Customer',
    quote: 'Fresh and good-quality dry fruits. Prices are reasonable and packing is nice. Highly recommended.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWrcbo6ZDOu88E-qDKhjPBImwNZeMB00oMfmUwfuFgWzDEy6WJB=s64-c-rp-mo-br100',
    date: '5 months ago',
  },
  {
    id: 4,
    name: 'sachin saini',
    role: 'Verified Customer',
    quote: 'Best quality product at reasonable price. Superb product',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWuJ1d4n2e_DlSLagZszP3UsRPjmVoOcTTxJN01EKNxzx0Z4y2qgA=s64-c-rp-mo-br100',
    date: '5 months ago',
  },
  {
    id: 5,
    name: 'Chetan Chauhaan',
    role: 'Verified Customer',
    quote: 'Fresh and pure product',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKG1eDXrmYjFud1g9qPF-JIGCXohb97CYE4x9Fa12HiAn8rXg=s64-c-rp-mo-br100',
    date: '5 months ago',
  },
  {
    id: 6,
    name: 'Nawal Verma',
    role: 'Verified Customer',
    quote: 'Just Used this brand. Generally I am not the guy who try new product but this time I find this and this is As Good as big brand',
    rating: 4,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjU3D2prYgn6mqfg_VszjlDOYgGM3Ugo7LARHSsPLQu95TlsGdiv=s64-c-rp-mo-ba12-br100',
    date: '2 weeks ago',
  },
  {
    id: 7,
    name: 'Ankit Agnihotri',
    role: 'Verified Customer',
    quote: 'Really Rich taste and Quality. Strongly Recommended to Everyone atleast taste once.',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVzkn5xUSFng02b8f137m0iEK-rTgVt2TS0T4xc2Ui7TAdKE2w=s64-c-rp-mo-br100',
    date: '2 weeks ago',
  },
  {
    id: 8,
    name: 'Lakshay',
    role: 'Verified Customer',
    quote: 'Fresh and good product very Nice quality',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVTGo3v_BXxGMwlnFLtBdHMkZRnRM0-Vaq4sTNu-3qtEcJXZK8=s64-c-rp-mo-br100',
    date: '3 weeks ago',
  },
  {
    id: 9,
    name: 'Manisha Valmiki',
    role: 'Verified Customer',
    quote: 'Good and fresh and tasty Hing vitano',
    rating: 5,
    image: 'https://lh3.googleusercontent.com/a/ACg8ocL6NABzpKrolsOLn7n05wPbI2uh6jCw749SjIOn2538_aSm8A=s64-c-rp-mo-br100',
    date: 'a month ago',
  },
];

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
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

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

      {/* Testimonials Section - Google Reviews */}
      <motion.section
        className="w-full py-20 md:py-32 px-4 bg-gradient-to-b from-muted/50 to-background border-y border-border overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <text x="2" y="18" fontSize="14" fontWeight="900" fill="#EA4335">G</text>
                <text x="9" y="18" fontSize="14" fontWeight="900" fill="#4285F4">o</text>
                <text x="15" y="18" fontSize="14" fontWeight="900" fill="#FBBC04">o</text>
                <text x="20" y="18" fontSize="14" fontWeight="900" fill="#EA4335">g</text>
              </svg>
              <span className="text-sm font-semibold text-primary">Google Reviews</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Are Saying</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentic 5-star reviews from our satisfied customers on Google Business Profile
            </p>
          </motion.div>

          {/* Testimonial Horizontal Scroll */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{ x: [-100, -1400] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',3 border-primary flex-shrink-0 shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                        <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.role} • Google</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg
                  {/* Header with Image and Stars */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-sm">★</span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient Fade Effect */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-muted/50 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="w-full py-20 md:py-32 px-4 border-y border-border"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-8" variants={itemVariants}>
            About Vitano
          </motion.h2>

          <div className="space-y-8 text-lg text-foreground/80">
            <motion.p variants={itemVariants}>
              Vitano is a modern e-commerce platform dedicated to bringing quality products to customers across India. We believe in providing exceptional value and seamless shopping experiences.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p>
                Our mission is to make online shopping accessible, affordable, and enjoyable for everyone. We partner with trusted brands and suppliers to ensure every product meets our quality standards.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Curated selection of premium products</li>
                <li>Fast and reliable delivery across India</li>
                <li>Secure and easy checkout process</li>
                <li>Dedicated customer support</li>
                <li>Competitive pricing and exclusive deals</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Values</h3>
              <p>
                We are committed to transparency, quality, and customer satisfaction. Every interaction with Vitano is designed to earn your trust and exceed your expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full py-20 md:py-32 px-4 bg-muted/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-5xl">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-4" variants={itemVariants}>
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-center text-foreground/70 mb-12 text-lg"
            variants={itemVariants}
          >
            We'd love to hear from you. Get in touch with us today!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="text-foreground/70">support@vitano.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                  <p className="text-foreground/70">+91 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Address</h3>
                  <p className="text-foreground/70">
                    123 Business Street<br />
                    Mumbai, India 400001
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleContactSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
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
