import Project from "../components/Project";

const ProjectsSection = () => {
  const projects = [
    {
      img: "/projectsImg/df.png",
      title: "BIO ET BIEN ETRE",
      description: "e-commerce platform dedicated to the sale of high-quality essential oils .",
      deployLink: "https://benbe.vercel.app/",
      gitHubLink: "https://benbe.vercel.app/",
      tags: ["HTML", "Tailwend", "JavaScript", "React", "Laravel", "Redux"],
    },
    {
      img: "/projectsImg/fgd.png",
      title: "Cafétéria ENCG",
      description: "online platform designed for ENCG Agadir students, offering a convenient way to browse the menu",
      deployLink: "https://amine-akh.github.io/encg-buvette/",
      gitHubLink: "https://amine-akh.github.io/encg-buvette/",
      tags: ["HTML", "CSS", "JS", "Lib"],
    },
    // {
    //   img: "/projectsImg/screenshot.png",
    //   title: "A Random Project ",
    //   description: "Another short and clear project description",
    //   deployLink: "#",
    //   gitHubLink: "#",
    //   tags: ["HTML", "CSS", "TypeScript"],
    // },
  ];
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Recent
        <span className="text-neutral-700 block">Projects</span>
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
