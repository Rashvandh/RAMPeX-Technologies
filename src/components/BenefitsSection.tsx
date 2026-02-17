import { motion } from 'framer-motion';
import { Compass, Sparkles, Wrench, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Compass,
    title: 'Explore New Skills',
    desc: 'Learn essential emerging skills for career growth and industry competitiveness.',
  },
  {
    icon: Sparkles,
    title: 'Learn from Tech Titans',
    desc: 'Learn from industry professionals and technology experts with real-world experience.',
  },
  {
    icon: Wrench,
    title: 'Practical Experience',
    desc: 'Engage in hands-on learning with real-world applications for job market readiness.',
  },
  {
    icon: TrendingUp,
    title: 'Career Advancement Support',
    desc: 'Enhance your career prospects with resume building and mock interviews for a smooth transition.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-deep">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Advantages
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Clientele <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Benefits</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Why students and leading institutions choose RAMPeX for their technical transformation journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, index) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-[2rem] p-8 text-center border-white/10 shadow-xl group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-primary/20 glass group-hover:bg-primary/30 group-hover:rotate-12 transition-all duration-500">
                <b.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-bold font-heading text-white mb-3 text-xl tracking-tight leading-tight group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
