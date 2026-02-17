import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animation-delay-2000 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Learning
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-[1.1] tracking-tight">
                Reboot Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Learning
                </span> Experience
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed font-medium">
                Unleash your tech genius with RAMPeX. We bridge the gap between academic excellence and industry demands.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold uppercase tracking-widest bg-primary text-white shadow-2xl shadow-primary/25 hover:bg-accent transition-all duration-300"
              >
                Get Started <ArrowRight size={20} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold uppercase tracking-widest glass border border-white/20 text-white transition-all duration-300"
              >
                <div className="bg-white/20 p-2 rounded-full">
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Intro
              </motion.button>
            </div>

            {/* Stats/Badges */}
            <div className="flex items-center gap-8 pt-6 border-t border-white/10 w-fit">
              <div>
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Students</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Courses</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">96%</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Success</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Hero illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="glass p-4 rounded-[2rem] border-white/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="https://rampex.in/assets/Hero-CyMbPoNy.png"
                alt="RAMPeX Technologies Hero"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/20 shadow-xl"
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
                100%
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
