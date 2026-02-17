import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, Globe } from 'lucide-react';

/* Courses Offered — ALL courses from rampex.in, verbatim content */

const courses = [
  {
    title: 'C Programming',
    subtitle: 'Foundations of System Programming',
    bullets: [
      'Learn the basics of C programming, including syntax, structures, and memory management.',
      'Systems Programmer, Embedded Systems Developer, Firmware Engineer.',
      'Embedded systems, operating systems, game development.',
    ],
    image: 'https://rampex.in/assets/C-BAlUSL7W.png',
  },
  {
    title: 'C++ Programming',
    subtitle: 'Object-Oriented and System-Level Programming',
    bullets: [
      'Master C++ programming, focusing on object-oriented design and system-level programming.',
      'Software Engineer, Game Developer, Systems Programmer.',
      'Game development, software development, finance.',
    ],
    image: 'https://rampex.in/assets/Cpp-BtRTws7I.png',
  },
  {
    title: 'Java',
    subtitle: 'Versatile and Robust Programming',
    bullets: [
      'Explore Java programming for building robust, high-performance applications.',
      'Java Developer, Software Engineer, Backend Developer.',
      'Enterprise solutions, finance, mobile development.',
    ],
    image: 'https://rampex.in/assets/Java-BD5cLDjR.jpeg',
  },
  {
    title: 'Python',
    subtitle: 'Simple, Versatile, and Powerful Programming',
    bullets: [
      'Learn Python for web development, data science, automation, and more.',
      'Python Developer, Data Scientist, Automation Engineer.',
      'Tech, finance, research, startups.',
    ],
    image: 'https://rampex.in/assets/Python-BTYy-aBK.png',
  },
  {
    title: 'Data Structures and Algorithms (DSA)',
    subtitle: 'Efficient Problem Solving',
    bullets: [
      'Understand and implement core data structures and algorithms for efficient problem solving.',
      'Software Engineer, Algorithm Engineer, Systems Architect.',
      'Tech, finance, research.',
    ],
    image: 'https://rampex.in/assets/DSA-D702OFYF.png',
  },
  {
    title: 'Computer Science Core Subjects',
    subtitle: 'Essential CS Knowledge',
    bullets: [
      'Cover the core subjects of computer science, including operating systems, networking, and theory of computation.',
      'Software Engineer, Network Engineer, Systems Analyst.',
      'Tech, telecommunications, research.',
    ],
    image: 'https://rampex.in/assets/CSE-CxTGeCUz.jpg',
  },
  {
    title: 'Database Management Systems (DBMS) and MySQL',
    subtitle: 'Database Design and Management',
    bullets: [
      'Learn the fundamentals of DBMS and gain practical skills in MySQL.',
      'Database Administrator, Backend Developer, Data Analyst.',
      'Tech, finance, e-commerce.',
    ],
    image: 'https://rampex.in/assets/DBMS-BwKbl9a_.jpg',
  },
  {
    title: 'Design and Analysis of Algorithms (DAA)',
    subtitle: 'Algorithmic Efficiency',
    bullets: [
      'Master the design and analysis of algorithms to solve complex computational problems.',
      'Algorithm Engineer, Software Developer, Systems Architect.',
      'Tech, finance, research.',
    ],
    image: 'https://rampex.in/assets/DAA-BGbbCOky.jpeg',
  },
  {
    title: 'MERN Stack',
    subtitle: 'Revolutionizing Full-Stack Development',
    bullets: [
      'Master MongoDB, ExpressJS, React, and Node for full-stack development.',
      'Full-Stack Developer, Backend Developer, Database Administrator.',
      'Tech startups, e-commerce, social media platforms.',
    ],
    image: 'https://rampex.in/assets/MERN-Xsn4Tfmg.jpeg',
  },
  {
    title: 'MEAN Stack',
    subtitle: 'Embracing Scalable Applications',
    bullets: [
      'Learn MongoDB, Express.js, Angular, and Node.js for scalable applications.',
      'Full-Stack Developer, Frontend Developer, Backend Developer.',
      'Startups, healthcare, finance.',
    ],
    image: 'https://rampex.in/assets/MEAN-DzxbT0gV.png',
  },
  {
    title: 'Java Full Stack',
    subtitle: 'Harness the Power of Java',
    bullets: [
      'Craft end-to-end solutions, blending front-end and back-end development with Java.',
      'Full-Stack Developer, Backend Developer, Java Developer, Software Architect.',
      'Opportunities in tech, finance, enterprise solutions, and e-commerce.',
    ],
    image: 'https://rampex.in/assets/JavaFullStack--d7usRh-.jpg',
  },
  {
    title: 'Python Full Stack',
    subtitle: 'Unleashing Simplicity and Versatility',
    bullets: [
      'Create full-stack solutions with Python, focusing on simplicity and rapid prototyping.',
      'Full-Stack Developer, Backend Developer, Frontend Developer, Data Scientist, DevOps Engineer.',
      'Tech, startups, research, healthcare, education.',
    ],
    image: 'https://rampex.in/assets/PythonFullStack-8wWH6qMO.jpeg',
  },
  {
    title: 'Cloud (AWS, Azure)',
    subtitle: 'Mastering Cloud Computing',
    bullets: [
      'Learn to build, deploy, and manage applications on AWS and Azure cloud platforms.',
      'Cloud Engineer, DevOps Engineer, Solutions Architect.',
      'Tech, finance, enterprise IT.',
    ],
    image: 'https://rampex.in/assets/Cloud-y_hxioE5.jpeg',
  },
  {
    title: 'DevOps',
    subtitle: 'Integrating Development and Operations',
    bullets: [
      'Master the tools and practices for efficient software development and deployment.',
      'DevOps Engineer, Systems Administrator, Cloud Engineer.',
      'Tech, finance, enterprise IT.',
    ],
    image: 'https://rampex.in/assets/Devops-BNCyeIun.jpg',
  },
  {
    title: 'Artificial Intelligence and Machine Learning (AI & ML)',
    subtitle: 'Transforming Data into Intelligence',
    bullets: [
      'Learn AI and ML techniques to create intelligent systems and predictive models.',
      'Data Scientist, Machine Learning Engineer, AI Researcher.',
      'Tech, finance, healthcare, research.',
    ],
    image: 'https://rampex.in/assets/AIML-CfCzbUgH.jpg',
  },
  {
    title: 'Artificial Intelligence and Data Science (AI & DS)',
    subtitle: 'Combining AI and Data Science',
    bullets: [
      'Master the integration of AI techniques with data science for comprehensive data analysis.',
      'Data Scientist, AI Specialist, Data Analyst.',
      'Tech, finance, healthcare, research.',
    ],
    image: 'https://rampex.in/assets/AIDS-Y9njS9bM.jpg',
  },
  {
    title: 'Machine Learning Operations (MLOps)',
    subtitle: 'Streamlining ML Deployment',
    bullets: [
      'Learn to deploy, manage, and monitor machine learning models in production.',
      'MLOps Engineer, Data Scientist, Machine Learning Engineer.',
      'Tech, finance, healthcare, research.',
    ],
    image: 'https://rampex.in/assets/Mlops-De0jgndX.jpeg',
  },
  {
    title: 'Generative AI',
    subtitle: 'Creating Innovative AI Solutions',
    bullets: [
      'Explore the world of generative AI to create new content and solutions using deep learning.',
      'AI Researcher, Data Scientist, AI Developer.',
      'Tech, research, entertainment, healthcare.',
    ],
    image: 'https://rampex.in/assets/GenAI-Di_W8r38.jpg',
  },
];

const ITEMS_PER_PAGE = 6;

const CoursesSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);
  const visible = courses.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section id="courses" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Curriculum
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tech Stack</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Choose from our industry-vetted courses designed to take you from fundamentals to professional expertise.
          </p>
        </motion.div>

        <div className="min-h-[600px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visible.map((course, index) => (
                <motion.article
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-[2rem] overflow-hidden border-white/5 shadow-2xl group transition-all duration-500 hover:border-primary/30"
                >
                  {/* Course image */}
                  <div className="h-52 relative overflow-hidden bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-40 z-10" />
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-bold font-heading text-white text-xl leading-tight group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-[13px] font-bold uppercase tracking-widest text-primary/80">
                        {course.subtitle}
                      </p>
                    </div>
                    <ul className="space-y-3 text-sm text-white/50 font-medium">
                      {course.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            {i === 0 ? (
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            ) : i === 1 ? (
                              <Briefcase size={14} className="text-primary" />
                            ) : (
                              <Globe size={14} className="text-accent" />
                            )}
                          </div>
                          <span className="leading-relaxed line-clamp-2">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="p-3 rounded-full glass border border-white/10 text-white disabled:opacity-20 hover:border-primary/50 transition-all shadow-xl"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="flex gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${i === page ? 'w-8 bg-primaryShadow bg-primary' : 'w-2.5 bg-white/10 hover:bg-white/20'
                  }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="p-3 rounded-full glass border border-white/10 text-white disabled:opacity-20 hover:border-primary/50 transition-all shadow-xl"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
