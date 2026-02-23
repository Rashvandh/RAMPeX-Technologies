import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { title: "Industry-Aligned Curriculum", desc: "Our programs are designed in collaboration with hiring managers and technology leaders to ensure relevance." },
  { title: "Hands-On Project Experience", desc: "Work on real-world projects that mirror the challenges you'll face in your first role." },
  { title: "Corporate Mentorship", desc: "Learn directly from industry professionals with years of experience at top technology companies." },
  { title: "Structured Placement Process", desc: "From mock interviews to resume optimization, we prepare you for every step of the hiring journey." },
];

const programs = [
  {
    name: "ASPIRE",
    heading: "Foundation Program for Aspiring Technology Professionals",
    desc: "Build your programming fundamentals with C, C++, Java, Python, DSA, and core CS subjects. Perfect for career starters entering technology roles.",
    link: "/programs/aspire",
  },
  {
    name: "ACCELERATE",
    heading: "Advanced Coding & Full Stack Program",
    desc: "Master full-stack development with MERN, MEAN, Java Full Stack, and Python Full Stack. Includes database management and algorithm design.",
    link: "/programs/accelerate",
  },
  {
    name: "ASCEND",
    heading: "Cloud, DevOps & AI Specialization Program",
    desc: "Specialize in cloud computing, DevOps, AI & ML, data science, MLOps, and generative AI for enterprise-level roles.",
    link: "/programs/ascend",
  },
];

const placementSteps = [
  { step: "01", title: "Assessment", desc: "Evaluate skills, interests, and career goals to create a personalized learning path." },
  { step: "02", title: "Intensive Training", desc: "Focused, immersive training in your chosen technology track with hands-on projects." },
  { step: "03", title: "Mock Interviews", desc: "Practice with industry-standard interview processes — technical rounds, HR, and coding challenges." },
  { step: "04", title: "Deployment", desc: "Get matched with hiring partners and deployed into technology roles aligned with your skills." },
];

const Jobseekers = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative section-padding pt-32 lg:pt-40 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000"
          alt="Student collaboration"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Placement-Oriented Technology Training Programs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Accelerate your career with industry-aligned training, corporate mentorship, and structured placement support designed to make you job-ready from day one.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/programs/aspire" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-md transition-all shadow-md hover:shadow-lg">
              Explore Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Why Choose */}
    <section className="section-alt section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Why Choose RAMPeX for Technology Training?</h2>
            <div className="grid sm:grid-cols-1 gap-8">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl order-first lg:order-last"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
              alt="Professional training"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Program Breakdown */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Program Breakdown</h2>
        <div className="space-y-8">
          {programs.map((p) => (
            <div key={p.name} className="executive-card flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">{p.name}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{p.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              <Link to={p.link} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors shrink-0">
                View Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Placement Process */}
    <section className="section-alt section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Our Corporate Placement Framework</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placementSteps.map((s) => (
            <div key={s.step}>
              <div className="font-heading text-4xl font-bold text-muted mb-3">{s.step}</div>
              <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Technology Career?</h2>
        <p className="text-muted-foreground mb-8">Join thousands of successful graduates who have accelerated their careers through RAMPeX's placement-oriented programs.</p>
        <Link to="/programs/aspire" className="px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-md hover:opacity-90 transition-opacity">
          Get Started Today
        </Link>
      </div>
    </section>
  </PageTransition>
);

export default Jobseekers;
