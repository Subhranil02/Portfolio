import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            {/* Below of About me */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section of About Me */}
                <div className="space-y-6">
                    <h3>Passionate Web Developer & Tech Creator</h3>
                    <p className="tecxt-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum beatae ut, inventore soluta sint alias impedit placeat minima totam at aliquam aliquid incidunt, aspernatur unde deleniti, dolore nesciunt atque quisquam?
                    </p>
                    <p className="tecxt-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum beatae ut, inventore soluta sint alias impedit placeat minima totam at aliquam aliquid incidunt, aspernatur unde deleniti, dolore nesciunt atque quisquam?
                    </p>
                    <div className="flex flex-col sm: flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Downlode CV</a>
                    </div>
                </div>
                {/* Right Section of About Me */}
                <div className="grid grid-cols-1 gap-6">

                    {/* Code Card */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>

                            {/* In Card */}
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus.</p>
                            </div>
                        </div>
                    </div>



                    {/* User Card */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Frontend Design</h4>
                                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus.</p>
                            </div>
                        </div>
                    </div>

                    {/* BrifCase Card */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}