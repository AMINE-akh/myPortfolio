import Tag from "./Tag";
import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const TimelineItem = ({ title, school, initYear, finishYear, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      viewport={{ once: true }}
      animate
      className="timeline-item flex items-center gap-5 group"
    >
      <div className="timeline-item-dot h-5 w-5 rounded-[50%] bg-neutral-900 border-4 border-orange-600 group-hover:border-neutral-100 z-10 group-hover:bg-orange-600 group-hover:scale-[1.33] group-hover:shadow-sm  shadow-orange-600 transition-all"></div>
      <div className="timeline-item-content w-full flex flex-col gap-4 group-hover:bg-white/5 group-hover:translate-x-1 px-8 py-5 rounded-xl transition-all">
        <h3 className="text-white text-3xl font-semibold">{title}</h3>
        <p className="text-neutral-400 text-lg font-medium">{school}</p>
        <div className="flex flex-wrap gap-2">
          {skills &&
            skills.map((skill, index) => <Tag name={skill} key={index} />)}
        </div>
        <p className="text-neutral-400">
          {initYear} - {finishYear}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
