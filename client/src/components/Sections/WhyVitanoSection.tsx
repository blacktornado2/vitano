import { motion, type Variants } from 'framer-motion';
import womanImage from '@assets/woman.png';

interface WhyVitanoSectionProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const REASONS = [
  {
    icon: '🌿',
    title: 'Unadulterated & Pure',
    description:
      'Our Hing is 100% pure asafoetida resin — no maida, no fillers, no artificial additives. Just the real thing, exactly as nature intended. Every batch is lab-tested before it reaches your kitchen.',
    badges: ['No Maida', 'Lab-Tested', 'Zero Additives'],
    accent: 'from-green-50 to-emerald-50',
    border: 'border-green-100',
    iconBg: 'bg-green-100',
  },
  {
    icon: '🏭',
    title: 'In-House Manufacturing',
    description:
      'From sourcing raw resin to sealing the final pack — everything happens under our roof. We control every step of production to guarantee freshness, consistency, and the bold aroma you deserve.',
    badges: ['Direct from Source', 'Farm to Pack', 'FSSAI Certified'],
    accent: 'from-amber-50 to-yellow-50',
    border: 'border-amber-100',
    iconBg: 'bg-amber-100',
  },
  {
    icon: '👨‍🍳',
    title: 'Unmatched Taste & Freshness',
    description:
      'Rich in natural essential oils, Vitano Hing delivers that deep, authentic flavour in every pinch. Sealed for freshness so the aroma hits the moment you open the pack — just like your dadi\'s kitchen.',
    badges: ['Rich Aroma', 'Long Shelf Life', 'Chef Approved'],
    accent: 'from-orange-50 to-red-50',
    border: 'border-orange-100',
    iconBg: 'bg-orange-100',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

export const WhyVitanoSection = ({ containerVariants, itemVariants }: WhyVitanoSectionProps) => {
  return (
    <motion.section
      id="why-vitano"
      className="w-full py-20 md:py-28 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Reasons ── */}
          <div className="space-y-10">
            <motion.div className="space-y-4" variants={itemVariants}>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
                Why Vitano?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                The Vitano Promise
              </h2>
              <p className="text-lg text-muted-foreground">
                We don't just sell spices — we deliver trust, quality, and the taste that makes every dish extraordinary.
              </p>
            </motion.div>

            <div className="space-y-6">
              {REASONS.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  className={`flex gap-5 items-start p-6 rounded-2xl bg-gradient-to-br ${reason.accent} border ${reason.border} hover:shadow-md transition-shadow duration-300`}
                  variants={cardVariants}
                  custom={i}
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-12 h-12 flex-shrink-0 ${reason.iconBg} rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                    {reason.icon}
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {reason.badges.map(badge => (
                        <span
                          key={badge}
                          className="text-xs font-semibold bg-white/80 border border-black/10 rounded-full px-3 py-1 text-foreground/70"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Woman image ── */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative blob */}
              <div className="absolute -inset-4 bg-amber-100/60 rounded-3xl blur-2xl" />
              <motion.img
                src={womanImage}
                alt="Happy customer enjoying Vitano Hing"
                className="relative z-10 w-full h-[520px] object-cover object-top rounded-3xl shadow-xl"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              {/* Overlay tag */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-5 py-3 border border-border text-center">
                <p className="text-xs text-muted-foreground font-medium">Trusted by</p>
                <p className="text-base font-bold text-foreground">10,000+ Happy Kitchens</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};
