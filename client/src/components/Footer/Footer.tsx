import { motion } from 'framer-motion';
import logo from '@assets/logo.jpeg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full border-t border-border bg-muted/50 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Vitano" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              Premium products for the modern lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Products
                </a>
              </li>
              <li>
                <a href="#our-team" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('our-team')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@vitano.com</li>
              <li>Phone: +91 90504 65440</li>
              <li>Address: <br/> SVS Traders, House no. 3781, <br/>Shri Ganesh Apartment, Gali no. 191 <br/> Laxman Vihar Phase 2,<br/> Gurugram, Haryana, <br/> PIN - 122001</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* FSSAI */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm">
            <span className="font-bold text-primary">FSSAI Lic. No. 1082600500691</span>
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vitano. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
