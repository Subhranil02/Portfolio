import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        {/* Below of About me */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section of About Me */}
          <div className="space-y-6">
            <h3>Passionate Web Developer & Tech Creator</h3>
            <p className="tecxt-muted-foreground">
              I'm Subhranil Ghosh, a self-taught web developer with a strong
              foundation in frontend technologies like HTML, CSS, JavaScript,
              and React. I’ve built multiple responsive projects using
              real-world APIs and continue to refine my skills through hands-on
              learning.
            </p>
            <p className="tecxt-muted-foreground">
              Currently, I’m expanding into full-stack development with Node.js,
              Express, and MongoDB while also preparing rigorously in Data
              Structures and Algorithms. I believe in consistency, continuous
              learning, and using code to make an impact.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Downlode CV
              </a>
            </div>
          </div>
          {/* Right Section of About Me */}
          <div className="grid grid-cols-1 gap-6">
            {/* Code Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                {/* In Card */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I build responsive, fast, and scalable websites using HTML,
                    CSS, JavaScript, and React.
                  </p>
                </div>
              </div>
            </div>

            {/* User Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Design</h4>
                  <p className="text-muted-foreground">
                    I focus on crafting clean UI/UX with modern design
                    principles. From layout to animation.
                  </p>
                </div>
              </div>
            </div>

            {/* BrifCase Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    I plan, organize, and manage my projects with clear goals
                    and timelines. Whether solo or collaborating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
