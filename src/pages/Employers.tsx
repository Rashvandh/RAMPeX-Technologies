import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const hiringModels = [
  { title: "Campus Hiring Partner", desc: "Access pre-screened, trained candidates directly from our training programs for campus recruitment drives." },
  { title: "Direct Talent Deployment", desc: "Hire deployment-ready graduates with verified skills and project experience in your required technology stack." },
  { title: "Corporate Upskilling Programs", desc: "Upskill your existing workforce with customized training programs aligned to your technology roadmap." },
  { title: "Custom Enterprise Training", desc: "Tailored training solutions designed for your organization's specific requirements and technology stack." },
];

const pipelineSteps = [
  { step: "01", title: "Source", desc: "We identify and recruit high-potential candidates from engineering colleges across Tamil Nadu." },
  { step: "02", title: "Train", desc: "Intensive, hands-on training in your required technology stack with real-world project experience." },
  { step: "03", title: "Evaluate", desc: "Rigorous assessment including coding challenges, mock interviews, and project reviews." },
  { step: "04", title: "Deploy", desc: "Pre-trained, assessed candidates deployed to your organization, ready to contribute from day one." },
];

const Employers = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ company: "", name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thank you for reaching out", description: "Our team will contact you within 24 hours." });
    setForm({ company: "", name: "", email: "", phone: "", message: "" });
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative section-padding pt-32 lg:pt-40 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate office"
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
              Corporate Hiring &amp; Technology Talent Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bridge the industry skill gap with pre-trained, deployment-ready technology professionals. Reduce time-to-hire and access custom corporate training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bridging the Gap */}
      <section className="section-alt section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Bridging the Industry Skill Gap</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>In today's competitive technology landscape, finding job-ready talent is a significant challenge. RAMPeX addresses this gap by delivering pre-trained candidates who have been rigorously assessed and are ready for immediate deployment.</p>
                <div className="grid sm:grid-cols-1 gap-4 pt-4">
                  {[
                    "Reduced time-to-hire with pre-screened, trained candidates",
                    "Custom corporate training aligned to your technology stack",
                    "Ongoing talent pipeline for sustained hiring needs",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                  alt="Corporate meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hiring Models */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-12"
          >
            Our Hiring Models
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hiringModels.map((m, index) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="executive-card cursor-default"
              >
                <h3 className="font-heading text-xl font-semibold mb-3 transition-colors group-hover:text-primary">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Pipeline */}
      <section className="section-alt section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-12"
          >
            Technology Talent Pipeline
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pipelineSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 group"
              >
                <div className="font-heading text-4xl font-bold text-muted transition-colors group-hover:text-secondary/40">{s.step}</div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">Partner With RAMPeX</h2>
          <p className="text-muted-foreground text-center mb-12">Fill out the form below and our corporate partnerships team will reach out within 24 hours.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Contact Person</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-md hover:opacity-90 transition-opacity"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
};

export default Employers;
