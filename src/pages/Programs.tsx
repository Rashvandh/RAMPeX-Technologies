import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import CourseCard from "@/components/CourseCard";
import { aspireCourses, accelerateCourses, ascendCourses } from "@/data/courses";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const programData = {
  aspire: {
    name: "ASPIRE",
    title: "Foundational Skill Development for Career Starters",
    heading: "Foundation Program for Aspiring Technology Professionals",
    description:
      "Build a rock-solid foundation in programming fundamentals, core computer science concepts, and problem-solving. ASPIRE is designed for career starters who want to enter the technology industry with confidence and competence.",
    courses: aspireCourses,
    keywords: ["Programming Fundamentals", "Core Computer Science", "Entry-Level Technology Roles"],
  },
  accelerate: {
    name: "ACCELERATE",
    title: "Intermediate Placement-Oriented Training Program",
    heading: "Advanced Coding & Full Stack Development Program",
    description:
      "Master full-stack development, database management, and advanced algorithm design. ACCELERATE is built for students ready to move beyond fundamentals and into job-ready skill development with hands-on project experience.",
    courses: accelerateCourses,
    keywords: ["Data Structures & Algorithms", "Full Stack Development", "Interview Preparation"],
  },
  ascend: {
    name: "ASCEND",
    title: "Advanced Technology & Cloud Specialization",
    heading: "Cloud, DevOps & AI Specialization Program",
    description:
      "Specialize in cloud computing, DevOps, artificial intelligence, machine learning, and cutting-edge technologies. ASCEND prepares you for enterprise-level roles at the forefront of technology innovation.",
    courses: ascendCourses,
    keywords: ["Cloud Computing", "DevOps", "AI & Emerging Technologies", "Enterprise-Level Projects"],
  },
};

type ProgramKey = keyof typeof programData;

const Programs = () => {
  const { level } = useParams<{ level: string }>();
  const program = programData[(level as ProgramKey) || "aspire"];

  if (!program) {
    return (
      <PageTransition>
        <section className="section-padding pt-32 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Program Not Found</h1>
          <Link to="/programs/aspire" className="text-primary hover:text-secondary">View ASPIRE Program</Link>
        </section>
      </PageTransition>
    );
  }

  const allLevels: ProgramKey[] = ["aspire", "accelerate", "ascend"];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative section-padding pt-32 lg:pt-40 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000"
            alt="Technology and innovation"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4"
          >
            {program.name}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl"
          >
            {program.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl"
          >
            {program.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {program.keywords.map((k) => (
              <span key={k} className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider bg-accent text-accent-foreground rounded-md border border-border">
                {k}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-1">
          {allLevels.map((key) => (
            <Link
              key={key}
              to={`/programs/${key}`}
              className={`px-6 py-4 text-sm font-medium uppercase tracking-wide border-b-2 transition-colors ${key === level
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-primary"
                }`}
            >
              {programData[key].name}
            </Link>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Courses in {program.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your {program.name} Journey?</h2>
          <p className="text-muted-foreground mb-8">Contact us to learn more about enrollment, schedules, and placement outcomes.</p>
          <Link to="/employers" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-md hover:opacity-90 transition-opacity">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Programs;
