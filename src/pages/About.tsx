import PageTransition from "@/components/PageTransition";
import { Target, Eye, Award } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  { year: "2019", title: "Founded", desc: "RAMPeX Technologies was established with a vision to bridge the gap between academic learning and industry requirements." },
  { year: "2020", title: "First Training Program", desc: "Launched the PLP (Personalized Learning Path) training program with initial batch of 200+ students." },
  { year: "2021", title: "Expanded Partnerships", desc: "Partnered with 15+ engineering colleges across Tamil Nadu for campus training and placement drives." },
  { year: "2022", title: "Advanced Programs", desc: "Introduced ACCELERATE and ASCEND programs with full-stack, cloud, and AI specialization tracks." },
  { year: "2023", title: "10,000+ Students", desc: "Crossed the milestone of 10,000 students trained, with 200+ corporate hiring partners." },
  { year: "2024", title: "Enterprise Training", desc: "Launched custom enterprise training solutions for corporate upskilling and talent deployment." },
];

const team = [
  { name: "Leadership Team", role: "Founders & Directors", desc: "Industry veterans with combined 30+ years of experience in technology training, corporate HR, and software development." },
  { name: "Training Faculty", role: "25+ Industry Trainers", desc: "Our trainers come from leading technology companies and bring real-world experience into every session." },
  { name: "Placement Cell", role: "Corporate Relations", desc: "Dedicated team managing relationships with 200+ hiring partners and ensuring smooth placement processes." },
];

const About = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative section-padding pt-32 lg:pt-40 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          alt="Modern office architecture"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            About RAMPeX Technologies
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Empowering future professionals through the fusion of academic excellence and industry insight. We are a dynamic IT training initiative specializing in comprehensive skill development and cutting-edge technology training.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission / Vision / Values */}
    <section className="section-alt section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To deliver customized and innovative learning experiences that transform every learner into a success story, fostering expert development and facilitating job placement in the IT industry.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To become the most trusted technology training and placement partner in India, bridging the gap between academic learning and industry requirements at scale.",
            },
            {
              icon: Award,
              title: "Our Values",
              desc: "Excellence in training, integrity in partnerships, innovation in curriculum, and commitment to measurable outcomes for every student and corporate partner we serve.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="executive-card"
            >
              <item.icon className="w-10 h-10 text-secondary mb-5 transition-transform group-hover:rotate-12" />
              <h2 className="font-heading text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                RAMPeX Technologies is a dynamic and forward-thinking IT training initiative specializing in comprehensive skill development and cutting-edge technology training. Our programs cater to students at all levels, starting from the basics and progressing to expertise, aligning with our Personalized Learning Path (PLP) strategy.
              </p>
              <p>
                This strategy ensures we deliver customized and innovative learning experiences, ultimately fostering expert development and facilitating job placement in the IT industry. Our name, RAMPeX, reflects our commitment to helping students boost their skills to expertise level and rebooting the new learning experience.
              </p>
              <p>
                We believe that, with the right training and support, every student has the potential to become an expert in their field. From foundational programming to advanced cloud computing and AI, our structured programs create a clear pathway from learning to employment.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                alt="Tech Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="section-alt section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "PLP Training Program", desc: "Customized training programs designed to transform every learner into a success story." },
            { title: "Stack Training", desc: "On-demand domain and tech stack training to meet industry needs, anytime, anywhere." },
            { title: "Super Dream Offer", desc: "Empowering talent to crack top-tier companies and achieve dream packages." },
            { title: "Faculty Enhancement", desc: "Redefining teaching with innovative methodologies and real-world applications." },
          ].map((item) => (
            <div key={item.title} className="executive-card">
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Company Timeline</h2>
        <div className="space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6 items-start">
              <div className="font-heading text-2xl font-bold text-secondary w-20 shrink-0">{item.year}</div>
              <div className="border-l-2 border-border pl-6 pb-2">
                <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-alt section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="executive-card text-center"
            >
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-5 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-muted-foreground">{member.name[0]}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
              <div className="text-xs font-medium uppercase tracking-widest text-secondary mb-3">{member.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default About;
