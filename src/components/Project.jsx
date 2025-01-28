import { LuGithub, LuGlobe } from "react-icons/lu";
import Anchor from "./Anchor";
import { motion } from "motion/react";
import Tag from "./Tag";

const Project = ({ img, title, description, gitHubLink, deployLink, tags }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      animate
      className="flex flex-col md:flex-row items-center md:items-start border-l-4 border-transparent hover:border-orange-600 rounded-l rounded-r-xl p-4 md:p-8 gap-4 md:gap-5 hover:bg-white/5 hover:translate-x-2 transition-all"
    >
      <img
        className="object-cover rounded-md h-32 w-32 md:h-40 md:w-40"
        src={img}
        alt={title}
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-semibold text-2xl md:text-3xl">{title}</h3>
        <p className="text-neutral-500 mt-1 text-sm md:text-lg">{description}</p>
        <div className="flex flex-wrap text-neutral-200 gap-2">
          {tags && tags.map((tag, index) => <Tag name={tag} key={index} />)}
        </div>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        {deployLink && <Anchor Icon={LuGlobe} href={deployLink} />}
        {gitHubLink && <Anchor Icon={LuGithub} href={gitHubLink} />}
      </div>
    </motion.article>
  );
};


export default Project;
