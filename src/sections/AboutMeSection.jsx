const AboutMeSection = () => {
  
  return (
    <section id="about-me" className="flex flex-col gap-10">
      <h2 className="uppercase text-white font-bold text-8xl inline-block">
        My Story
        <span className="text-neutral-700 block">so Far</span>
      </h2>
      <div className="text-neutral-200 text-pretty leading-7 flex flex-col gap-6">
        <p>
          Hello! My name is
          <span className="accent">&quot;Amine Akhfamani&quot;</span>, and I’m a full-stack developer from Essaouira, currently living in Marrakech, where I’ve moved to study at ISTA NTIC Syba. My journey into the world of development is one that’s deeply rooted in passion and curiosity.

          Since I was a kid, I’ve been fascinated by how things work. At the age of 10, I got my first taste of technology when I disassembled an old computer just to understand its parts. This curiosity eventually turned into a love for <span className="accent">programming</span>. I started with basic tools like <span className="accent">Scratch</span>, experimenting with animations and games. By the time I was in high school, I had already dived into <span className="accent">JavaScript</span> and created small projects to solve everyday problems.

          One of my most memorable projects was building a <span className="accent">management system</span> for a small shop in my hometown. It was a turning point for me, as I saw how technology could truly make life easier, replacing outdated systems and streamlining workflows.
        </p>
        <p>
          As I’ve grown, my passion for <span className="accent">web development</span> and <span className="accent">software engineering</span> has only deepened. I love the creativity involved in building user-friendly interfaces and crafting seamless user experiences. Beyond web development, I’ve also explored <span className="accent">data analysis</span> and <span className="accent">cybersecurity</span>, always aiming to expand my skillset and challenge myself with new technologies.

          Outside of coding, I enjoy <span className="accent">reading</span>, <span className="accent">photography</span>, and exploring the vibrant culture of Marrakech. I also find inspiration in the world of <span className="accent">Formula 1</span>, where precision and teamwork drive success. (By the way, Lando Norris is one of my heroes!)
        </p>
        <p>
          Looking ahead, my dream is to grow as a professional, not only as a developer but also as a <span className="accent">team leader</span> and <span className="accent">project manager</span>. I want to work on impactful projects, contribute to innovative solutions, and inspire others who, like me, discovered their passion for development through curiosity and perseverance.
        </p>

      </div>
    </section>
  );
};

export default AboutMeSection;
