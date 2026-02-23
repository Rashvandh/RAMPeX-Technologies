import type { Course } from "@/data/courses";
import { Briefcase, Building2 } from "lucide-react";

import { motion } from "framer-motion";

const CourseCard = ({ course }: { course: Course }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    className="executive-card flex flex-col h-full transition-all duration-300 border border-transparent hover:border-primary/10"
  >
    <h4 className="font-heading text-xl font-semibold mb-1">{course.title}</h4>
    <p className="text-sm font-medium text-secondary mb-4">{course.subtitle}</p>
    <p className="text-sm text-foreground leading-relaxed mb-5">{course.description}</p>
    <div className="mt-auto space-y-3 text-sm">
      <div className="flex items-start gap-2 text-muted-foreground">
        <Briefcase className="w-4 h-4 mt-0.5 shrink-0" />
        <span>{course.roles}</span>
      </div>
      <div className="flex items-start gap-2 text-muted-foreground">
        <Building2 className="w-4 h-4 mt-0.5 shrink-0" />
        <span>{course.industries}</span>
      </div>
    </div>
  </motion.div>
);

export default CourseCard;
