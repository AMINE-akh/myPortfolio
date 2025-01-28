import { motion } from "motion/react";

/* eslint-disable react/prop-types */
const SkillCard = ({ Icon, name, color }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      animate
      className="flex w-56 gap-6 p-4 border-2 border-white/5 hover:border-current rounded-lg saturate-150 hover:cursor-default transition-all duration-200 group ease-in-out"
      style={{ color }}
    >
      <div className="z-10 flex w-full gap-5 items-center">
        <Icon className="min-w-min" size={38} />
        <p className="text-start text-neutral-200 group-hover:text-white font-medium transition-all">
          {name}
        </p>
      </div>
    </motion.article>
  );
};

export default SkillCard;
