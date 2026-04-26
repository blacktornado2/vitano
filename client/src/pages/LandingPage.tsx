import { useState } from 'react';
import { Header } from '@components/Header/Header';
import { CartDropdown } from '@components/Cart/CartDropdown';
import { Footer } from '@components/Footer/Footer';
import { useCart } from '@hooks/useCart';
import {
  HeroSection,
  WhyVitanoSection,
  TestimonialsSection,
  AboutSection,
} from '@components/Sections';

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

export const LandingPage = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <Header cartCount={cart.totalItems} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <HeroSection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants}
      />

      {/* Why Vitano Section */}
      <WhyVitanoSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Products Section */}
      {/* <ProductsSection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants}
        product={PRODUCT}
        onAddToCart={handleAddToCart}
        isLoading={isLoading}
      /> */}

      {/* Features Section */}
      {/* <FeaturesSection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants}
      /> */}

      {/* CTA Section */}
      {/* <CTASection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants}
        onShopClick={() => setIsCartOpen(true)}
      /> */}

      {/* Testimonials Section */}
      <TestimonialsSection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants}
      />

      {/* About Section */}
      <AboutSection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants}
      />

      {/* Contact Section */}
      {/* <ContactSection 
        containerVariants={containerVariants} 
        itemVariants={itemVariants}
        contactForm={contactForm}
        onContactChange={handleContactChange}
        onContactSubmit={handleContactSubmit}
      /> */}

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
