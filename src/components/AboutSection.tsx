import { motion } from 'framer-motion';
import { Quote, Target, Award, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="glass p-4 rounded-[2.5rem] border-white/10 relative group overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="About RAMPeX Tech"
                className="w-full h-[400px] object-cover rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Sub-stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass p-5 rounded-3xl border-white/5 space-y-2">
                <div className="text-primary font-bold text-2xl tracking-tighter">2+</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-black">Years Excellence</div>
              </div>
              <div className="glass p-5 rounded-3xl border-white/5 space-y-2">
                <div className="text-accent font-bold text-2xl tracking-tighter">95%</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-black">Placement Rate</div>
              </div>
              <div className="glass p-5 rounded-3xl border-white/5 space-y-2 col-span-2 lg:col-span-1">
                <div className="text-purple-brand font-bold text-2xl tracking-tighter">20+</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-black">Courses</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Our Mission & Vision
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
                Empowering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-brand to-accent">Next-Gen</span> Experts
              </h2>
              <p className="text-xl text-white/60 font-medium leading-relaxed">
                Transforming potential into professional excellence through our <span className="text-white">Personalized Learning Paths</span>.
              </p>
            </div>

            <div className="space-y-8 border-l border-white/10 pl-8">
              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-navy ring-4 ring-primary/20 group-hover:scale-125 transition-transform" />
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white tracking-wide">Dynamic Skill Development</h4>
                  <p className="text-white/40 leading-relaxed text-sm">
                    Specializing in comprehensive tech training from basics to advanced levels, aligning with real-world industry demands.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-navy ring-4 ring-accent/20 group-hover:scale-125 transition-transform" />
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white tracking-wide">Proven Success Strategy</h4>
                  <p className="text-white/40 leading-relaxed text-sm">
                    Our RAMPeX name reflects our commitment to helping students boost their skills and rebooting their career trajectories.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full text-[13px] font-bold uppercase tracking-widest bg-primary text-white shadow-2xl shadow-primary/25 hover:bg-accent transition-all duration-300"
              >
                Learn Our Story
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              >
                View Courses <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
