import {
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiFigma,
  SiAdobephotoshop,
  SiGooglecloud,
} from "react-icons/si";

import SkillCard from "../components/SkillCard";
import { useRef, useState } from "react";

const HardSkillsSection = () => {
  const skills = [
    {
      Icon: SiHtml5,
      name: "HTML5",
      color: "#FF5722", // Más vibrante
      categories: ["Front-End"],
    },
    {
      Icon: SiCss3,
      name: "CSS3",
      color: "#2196F3", // Más brillante
      categories: ["Front-End"],
    },
    {
      Icon: SiGit,
      name: "Git",
      color: "#FF4C2E", // Naranja más intenso
      categories: ["Back-End", "Front-End"],
    },
    {
      Icon: SiJavascript,
      name: "JavaScript",
      color: "#FFD600", // Amarillo vibrante
      categories: ["Front-End"],
    },
    {
      Icon: SiFigma,
      name: "Figma",
      color: "#B620FF", // Morado más saturado
      categories: ["Design"],
    },
    {
      Icon: SiAdobephotoshop,
      name: "Photoshop",
      color: "#1E90FF", // Azul real más vibrante
      categories: ["Design"],
    },
    {
      Icon: SiTailwindcss,
      name: "TailwindCSS",
      color: "#00E5FF", // Cian brillante
      categories: ["Front-End"],
    },
   
    {
      Icon: SiPython,
      name: "Python",
      color: "#4586D6", // Azul más vivo
      categories: ["Back-End", "Data Analysis"],
    },
    {
      Icon: SiReact,
      name: "React",
      color: "#33DDFF", // Cian brillante
      categories: ["Front-End"],
    },
    {
      Icon: SiFirebase,
      name: "Firebase",
      color: "#FFB300", // Amarillo neón
      categories: ["Back-End"],
    },
    {
      Icon: SiMysql,
      name: "MySQL",
      color: "#0069C0", // Azul fuerte
      categories: ["Back-End"],
    },
    
    {
      Icon: SiNodedotjs,
      name: "Node.js",
      color: "#3DCC3D", // Verde saturado
      categories: ["Back-End"],
    },
    {
      Icon: SiExpress,
      name: "Express.js",
      color: "#E0E0E0", // Gris claro brillante
      categories: ["Back-End"],
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
      color: "#4CAF50", // Verde más intenso
      categories: ["Back-End"],
    },
    
   
    {
      Icon: SiGooglecloud,
      name: "Google Cloud",
      color: "#4C8DFE", // Azul más saturado
      categories: ["Back-End", "Data Analysis"],
    },
  ];
  

  let categories = [];
  skills.forEach((skill) => {
    categories.push(...skill.categories);
  });
  const skillsCategories = ["All", ...new Set(categories)];
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleHover = (e) => {
    const sectionLeft = sectionRef.current.getBoundingClientRect().left;
    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    setBackDropStyle({
      transform: `translate(${-(sectionLeft - left)}px)`,
      top: `${-(sectionTop - top)}px`,
      width: width,
      height: height,
      opacity: 100,
    });
  };

  const [backDropStyle, setBackDropStyle] = useState({});
  const sectionRef = useRef();

  return (
    <section id="skills" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Technical
        <span className="text-neutral-700 block">Toolbox</span>
      </h2>
      <div
        onMouseLeave={() => {
          setBackDropStyle((prevStyle)=>({...prevStyle, opacity: 0}));
        }}
        ref={sectionRef}
        className="flex flex-wrap gap-4 relative"
      >
        <div
          className="absolute backdrop-blur rounded bg-white/5 transition-all ease-in-out"
          style={backDropStyle}
        ></div>
        {skillsCategories.map((category) => (
          <button
            key={category}
            className="z-10 min-w-20 opacity-100 font-medium text-lg aria-pressed:border-b-4 border-transparent rounded py-2 px-3 aria-pressed:bg-white/5 aria-pressed:border-orange-600 border-b-0 text-neutral-200 hover:text-white transition-all"
            onClick={() => {
              setCategoryFilter(category);
            }}
            onMouseEnter={handleHover}
            aria-pressed={categoryFilter === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-3">
        {categoryFilter !== "All"
          ? skills
              .filter((skill) => skill.categories.includes(categoryFilter))
              .map((skill) => <SkillCard {...skill} key={skill.name} />)
          : skills.map((skill) => <SkillCard {...skill} key={skill.name} />)}
      </div>
    </section>
  );
};

export default HardSkillsSection;
