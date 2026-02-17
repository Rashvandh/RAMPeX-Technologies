import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* What We Do / Programs â€” Center of Excellence, verbatim from rampex.in */

const programs = [
  {
    title: 'PLP Training Program',
    desc: 'Customized training programs designed to transform every learner into a success story',
    image: 'https://rampex.in/assets/PLP-Chxrd7Gw.png',
  },
  {
    title: 'Stack Training',
    desc: 'On-demand domain and tech stack training to meet industry needs, anytime, anywhere',
    image: 'data:image/png;base64,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',
  },
  {
    title: 'Super Dream Offer',
    desc: 'Empowering talent to crack top-tier companies and achieve dream packages',
    image: 'data:image/png;base64,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',
  },
  {
    title: 'Faculty Enhancement Program',
    desc: 'Redefining teaching with innovative methodologies and real-world applications',
    image: 'https://rampex.in/assets/FEP-CTjpkXBq.png',
  },
];

const ProgramsSection = () => {
  return (
    <section id="whatwedo" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Center of Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mt-2 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Programs</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Evolving from a student to a highly sought-after professional in your chosen field through our specialized training modules.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((prog, index) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-[2rem] overflow-hidden border-white/10 shadow-2xl transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="h-52 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60 z-10" />
                {prog.image ? (
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-navy flex items-center justify-center">
                    <span className="text-5xl font-bold font-heading text-white/10">
                      {prog.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 space-y-4">
                <h3 className="font-bold font-heading text-white text-xl tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {prog.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                  {prog.desc}
                </p>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors"
                  >
                    Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

