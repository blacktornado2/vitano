import { motion, type Variants } from 'framer-motion';
import logo from '@assets/logo.jpeg';
import heroImage from '@assets/heroimage2.webp';
import googleIcon from '@assets/google-icon.svg';

interface HeroSectionProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export const HeroSection = ({ containerVariants, itemVariants }: HeroSectionProps) => {
  return (
    <motion.section
      className="relative w-full min-h-[90vh] px-4 border-b border-border overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background ambient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">

          {/* ── Left Content ── */}
          <motion.div variants={itemVariants} className="space-y-7">

            {/* Logo */}
            <motion.div variants={itemVariants}>
              <img src={logo} alt="Vitano" className="h-14 w-auto" />
            </motion.div>

            {/* Badge pill */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
                🌿 100% Pure &amp; Natural Asafoetida
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground"
              variants={itemVariants}
            >
              The Secret Spice of{' '}
              <span className="text-primary">Every Authentic</span>{' '}
              Indian Kitchen
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Vitano Hing is crafted from the finest asafoetida resin —
              free from fillers, rich in natural oils, and bursting with the
              bold, earthy aroma that makes Indian food truly unforgettable.
              One pinch. Infinite flavour.
            </motion.p>

            {/* Quality badges row */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {[
                { label: 'Lab-Tested Purity', icon: '🔬' },
                { label: 'FSSAI Certified', icon: '✅' },
                { label: 'Direct from Source', icon: '🌱' },
              ].map(({ label, icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  <span>{icon}</span>
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Shop Now
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-border rounded-lg font-semibold text-base hover:bg-muted transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Our Story
              </motion.button>
            </motion.div>

            {/* Trust stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-4 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Kitchens</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Google Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Pure Resin</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Image ── */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center py-8"
          >
            {/* Floating review badge — overlaps top-right of product */}
            <motion.div
              className="absolute top-1/4 right-0 lg:-right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-border z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <img src={googleIcon} alt="Google" className="w-4 h-4" />
                <p className="text-xs text-muted-foreground font-medium">Google Reviews</p>
              </div>
              <p className="font-bold text-foreground text-sm">★★★★★ 4.9 / 5</p>
            </motion.div>

            {/* Floating purity badge — overlaps bottom-left of product */}
            <motion.div
              className="absolute bottom-1/4 left-0 lg:-left-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-border z-20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <p className="text-xs text-muted-foreground font-medium">Certified Quality</p>
              <p className="font-bold text-foreground text-sm">🌿 Pure Hing — No Fillers</p>
            </motion.div>

            {/* Hero product image */}
            <motion.img
              src={heroImage}
              alt="Vitano Asafoetida — Premium Hing"
              className="relative z-10 w-96 h-96 md:w-[820px] md:h-[820px] object-contain drop-shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, rotate: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
