import { Description } from "@radix-ui/react-toast";
import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "My Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 2,
    title: "My Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 1,
    title: "My Title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">

      <div className="container mx-auto max-w-5xl">

        {/* Project Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mv-4 text-center">
          featured <span className="text-primary"> Projects</span>
        </h2>
        {/* Project Desc.. */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt
          incidunt sed beatae vitae eligendi! Quas quasi nostrum labore optio!
        </p>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

                {/* Padding */}
              <div className="p-6"> 

                {/* Tags- skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project title, Desc on card */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* GitHub, link button on card */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>

    </section>
  );
};
