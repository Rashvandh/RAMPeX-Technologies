import { motion } from 'framer-motion';
import { Users, Award, Handshake, GraduationCap } from 'lucide-react';

const stats = [
  { icon: Users, value: '10K+', label: 'Students Empowered' },
  { icon: Award, value: '100+', label: 'Trainings Completed' },
  { icon: Handshake, value: '30+', label: 'Partnerships' },
  { icon: GraduationCap, value: '25+', label: 'Industrial Trainers' },
];

const StatsSection = () => {
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            GenSpark by the Numbers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
            Milestones <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Achieved</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-8 text-center border-white/5 shadow-2x-large group hover:border-primary/40 transition-all duration-500"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <stat.icon size={24} />
              </div>
              <p className="text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tighter mb-2">
                {stat.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
