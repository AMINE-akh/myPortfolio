import {
  LuBookOpen,
  LuBrain,
  LuClock,
  LuLightbulb,
  LuMessageCircle,
  LuShuffle,
  LuSmile,
  LuUsers,
  LuZoomIn,
} from "react-icons/lu";
import SkillCard from "../components/SkillCard";

const SoftSkillsSection = () => {
  const softSkills = [
    { name: "Team Collaboration", Icon: LuUsers, color: "#00FF00" }, // Verde neón
    { name: "Problem Solving", Icon: LuBrain, color: "#FF4500" }, // Naranja rojizo brillante
    { name: "Effective Communication", Icon: LuMessageCircle, color: "#00BFFF" }, // Azul neón
    { name: "Continuous Learning", Icon: LuBookOpen, color: "#9400D3" }, // Violeta brillante
    { name: "Time Management", Icon: LuClock, color: "#FFD700" }, // Amarillo vivo
    { name: "Critical Thinking", Icon: LuLightbulb, color: "#FF6347" }, // Rojo tomate
    { name: "Attention to Detail", Icon: LuZoomIn, color: "#00FFFF" }, // Cian neón
    { name: "Adaptability", Icon: LuShuffle, color: "#FF00FF" }, // Fucsia
    { name: "Customer Focus", Icon: LuSmile, color: "#1E90FF" }, // Azul real saturado
  ];  
  

  return (
    <section id="soft-skills" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Personal
        <span className="text-neutral-700 block">Strengths</span>
      </h2>

      <div className="flex flex-wrap gap-4">
        {softSkills.map((skill) => (
          <SkillCard {...skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default SoftSkillsSection;
