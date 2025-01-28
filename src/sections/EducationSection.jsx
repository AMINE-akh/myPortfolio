import Timeline from "../components/Timeline";

const EducationSection = () => {
  const courses = [
    {
      title: "1 Year Study in S. Économie",
      school: "Al Qadi Ayad University",
      skills: ["Microeconomics", "Macroeconomics", "Quantitative Methods"],
      initDate: "Jan, 2022",
      finishDate: "Dec, 2022",
    },
    {
      title: "2 Years Study in Full Stack Development",
      school: "ISTA NTIC Syba",
      skills: ["HTML", "CSS", "JavaScript", "Laravel", "React"],
      initDate: "Jan, 2023",
      finishDate: "Dec, 2024",
    },
    {
      title: "Certificates from Udemy",
      school: "Udemy",
      skills: [
        "Firebase",
        "Flutter",
        "C++",
        "JAVA",
        "Big Data",
        "Data Analysis",
      ],
      initDate: "Various (3 months per certificate)",
      finishDate: "Ongoing",
    },
  ];
  return (
    <section id="education" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        Learning
        <span className="text-neutral-700 block">Path</span>
      </h2>
      <Timeline events={courses} />
    </section>
  );
};

export default EducationSection;
