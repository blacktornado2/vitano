import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@assets/logo.png';

interface HeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export const Header = ({ cartCount = 0, onCartClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center">
              <img src={logo} alt="Vitano" className="h-10 w-auto" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={onCartClick}
              className="relative p-2 text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <motion.span
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <a
              href="/"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
            >
              Contact
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
