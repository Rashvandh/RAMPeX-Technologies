import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Counter from "@/components/Counter";
import heroBg from "@/assets/hero-boardroom.jpg";
import { ArrowRight, Users, Building2, TrendingUp, BookOpen, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: 10000, suffix: "+", label: "Students Empowered" },
  { value: 200, suffix: "+", label: "Corporate Hiring Partners" },
  { value: 95, suffix: "%", label: "Placement Success Rate" },
  { value: 25, suffix: "+", label: "Industry Trainers" },
];

const programs = [
  {
    icon: BookOpen,
    name: "ASPIRE",
    tagline: "Foundational Technology Training",
    heading: "Foundational Skill Development for Career Starters",
    points: ["Programming Fundamentals", "Core Computer Science", "Entry-Level Technology Roles"],
    link: "/programs/aspire",
  },
  {
    icon: Target,
    name: "ACCELERATE",
    tagline: "Advanced Skill Mastery",
    heading: "Intermediate Placement-Oriented Training Program",
    points: ["Data Structures & Algorithms", "Full Stack Development", "Interview Preparation"],
    link: "/programs/accelerate",
  },
  {
    icon: Rocket,
    name: "ASCEND",
    tagline: "Specialized Advanced Tech Program",
    heading: "Advanced Technology & Cloud Specialization",
    points: ["Cloud Computing & DevOps", "AI & Emerging Technologies", "Enterprise-Level Projects"],
    link: "/programs/ascend",
  },
];

const collaborators = [
  "Dr. Mahalingam College of Engineering and Technology",
  "Dr. N.G.P. Institute of Technology",
  "Bannari Amman Institute of Technology",
  "Sri Krishna Institutions",
  "Kumaraguru College of Technology",
  "Kongu Engineering College",
  "Sri Ramakrishna Engineering College",
  "Sri Eashwar College of Engineering",
  "KPR Institute of Engineering and Technology",
  "Jai Shriram College of Engineering",
  "KPRCAS",
  "VETIAS",
];

const Index = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Executive boardroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            Technology Training &amp; Placement Institute Delivering Industry-Ready Talent
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl font-light">
            RAMPeX is a placement-oriented technology training institute focused on skill development, corporate readiness, and industry-aligned programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/programs/aspire"
                className="px-8 py-3.5 bg-primary-foreground text-primary text-sm font-semibold tracking-wide rounded-md hover:bg-white transition-colors"
              >
                Explore Programs
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/employers"
                className="px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground text-sm font-semibold tracking-wide rounded-md hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Partner With RAMPeX
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About Section */}
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="section-padding overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              A Corporate-Focused Skill Development Partner
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              RAMPeX Technologies is a dynamic and forward-thinking IT training initiative specializing in comprehensive skill development and cutting-edge technology training. Our programs cater to students at all levels, starting from the basics and progressing to expertise, aligning with our Personalized Learning Path (PLP) strategy.
            </p>
            <p className="text-foreground leading-relaxed">
              Through deep industry collaboration, real-world curriculum design, corporate alignment, and measurable placement success, we ensure every graduate is prepared to make an immediate impact in the technology workforce.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.0lcJbtIr3ZL7BL6qH2iRyQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Corporate Collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Stats */}
    <section className="section-alt section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-default"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Programs Overview */}
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">Structured placement-oriented programs designed for every stage of your technology career.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="executive-card flex flex-col hover:shadow-xl transition-all border border-transparent hover:border-primary/20"
            >
              <prog.icon className="w-10 h-10 text-secondary mb-5" />
              <div className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">{prog.name}</div>
              <h3 className="font-heading text-xl font-semibold mb-2">{prog.tagline}</h3>
              <p className="text-sm text-muted-foreground mb-5">{prog.heading}</p>
              <ul className="space-y-2 mb-6 text-sm text-foreground">
                {prog.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to={prog.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Learning Path */}
    <section className="section-alt section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Structured Career Acceleration Framework</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">A corporate pipeline that takes you from foundational knowledge to industry deployment.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Core", desc: "Build a strong foundation in programming fundamentals, computer science concepts, and problem-solving skills." },
            { step: "02", title: "Application", desc: "Apply your knowledge through full-stack development, industry projects, and hands-on technical training." },
            { step: "03", title: "Deploy", desc: "Enter the workforce with corporate readiness — mock interviews, resume building, and placement support." },
          ].map((item) => (
            <div key={item.step} className="flex gap-5">
              <div className="font-heading text-5xl font-bold text-muted">{item.step}</div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Collaborators */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">Trusted by Leading Organizations</h2>
        <p className="text-muted-foreground text-center mb-12">Our institutional collaborators and hiring partners across industries.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collaborators.map((name) => (
            <div key={name} className="executive-card flex items-center justify-center text-center py-6 px-4">
              <span className="text-sm font-medium text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-alt section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Build the Future with RAMPeX</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Whether you're a student seeking career acceleration or an organization looking for pre-trained technology talent, RAMPeX is your partner in building a future-ready workforce.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/jobseekers" className="px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-md hover:opacity-90 transition-opacity">
            Start Your Journey
          </Link>
          <Link to="/employers" className="px-8 py-3.5 border border-primary text-primary text-sm font-semibold tracking-wide rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
            Hire Talent
          </Link>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Index;
