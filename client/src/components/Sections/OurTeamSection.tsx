import { motion, type Variants } from 'framer-motion';
import { TEAM_MEMBERS } from '@constants';

interface OurTeamSectionProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const teamMembers = TEAM_MEMBERS;

export const OurTeamSection = ({ containerVariants, itemVariants }: OurTeamSectionProps) => {
  return (
    <motion.section
      id="our-team"
      className="relative w-full py-20 px-4 border-b border-border overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Background ambient blobs */}
      <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 w-96 h-96 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={itemVariants}>
            Meet Our <span className="text-primary">Team</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Dedicated professionals committed to bringing you the finest products
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div className="flex justify-center">
          <motion.div className="max-w-sm lg:max-w-none">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="group max-w-80"
                variants={itemVariants}
              >
                <motion.div
                  className="relative h-72 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-amber-100/20 border border-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Avatar */}
                  <div className="flex items-center justify-center h-full text-7xl">
                    {member.image}
                  </div>
                </motion.div>

                {/* Member Info */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Learn More About Our Story
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
