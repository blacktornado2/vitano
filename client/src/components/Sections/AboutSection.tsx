import { motion, type Variants } from 'framer-motion';
import plantImage from '@assets/asafoetida_plant2.webp';

interface AboutSectionProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export const AboutSection = ({ containerVariants, itemVariants }: AboutSectionProps) => {
  return (
    <motion.section
      id="about"
      className="w-full py-20 md:py-28 px-4 border-y border-border"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Plant image ── */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative blob */}
              <div className="absolute -inset-4 bg-green-100/60 rounded-3xl blur-2xl" />
              <motion.img
                src={plantImage}
                alt="Ferula asafoetida plant — the source of Vitano Hing"
                className="relative z-10 w-full h-[480px] object-cover object-center rounded-3xl shadow-xl"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              {/* Source tag */}
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-4 py-2.5 border border-border">
                <p className="text-xs text-muted-foreground font-medium">Sourced from</p>
                <p className="text-sm font-bold text-foreground">Ferula Asafoetida Plant</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: About copy ── */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div className="space-y-4" variants={itemVariants}>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                From the Root of the Earth to Your Kitchen
              </h2>
            </motion.div>

            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
              Vitano was born from a simple belief — that the spices in your kitchen deserve the same honesty you bring to your cooking. We traced Hing back to its origin: the resin of the <em>Ferula asafoetida</em> plant, harvested from sun-dried roots in the wild.
            </motion.p>

            <motion.div className="space-y-4" variants={itemVariants}>
              {[
                {
                  icon: '🌱',
                  title: 'Direct from the Source',
                  desc: 'We work directly with growers — no middlemen, no adulteration. Raw resin arrives at our facility and never leaves our hands until it reaches yours.',
                },
                {
                  icon: '🏭',
                  title: 'Fully In-House Production',
                  desc: 'Every gram is processed, blended, and packed under our roof. Full control means full accountability — and a product we are proud to put our name on.',
                },
                {
                  icon: '🔬',
                  title: 'FSSAI Certified & Lab-Tested',
                  desc: 'Every batch is quality-checked before dispatch. What you get is exactly what the label says — nothing more, nothing less.',
                },
              ].map(item => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};
