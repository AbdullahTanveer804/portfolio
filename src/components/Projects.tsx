"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Wed Connect",
      description:
        "An AI-powered wedding vendor platform, built as a Final Year Project, that connects couples with trusted vendors based on budget, style, location, and unique needs, using smart algorithms & AI to recommend the perfect match for their big day.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Google Gemini",
        "MongoDB",
        "RESTful APIs",
      ],
      github: "https://github.com/AbdullahTanveer804/FYP-Wed-Connect",
      featured: true,
    },
    {
      name: "GhostNote",
      description:
        "A secure platform that allows users to send and receive anonymous messages. It helps people communicate freely without revealing their identity. This is particularly useful for sharing sensitive feedback, honest opinions anonymously.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "MongoDB",
        "RESTful APIs",
      ],
      github: "https://github.com/AbdullahTanveer804/nextjs-GhostNote",
      featured: true,
    },
    {
      name: "Music App",
      description:
        "MusicApp is an interactive frontend web application designed to provide easy access to music education. It features a curated course catalog and a webinar hub with registration and reminders, all within a smooth, responsive, and visually appealing user interface.",
      techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/AbdullahTanveer804/nextjs_musicapp_frontend",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've built that showcase my skills
              in web development, AI integration, and modern tech stacks.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`card-gradient p-6 hover-lift hover-glow transition-smooth group ${
                  project.featured ? "border-primary/30" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="mb-4">
                  {project.featured && (
                    <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.name}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/50 text-accent text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 btn-secondary group/btn"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button
              size="lg"
              variant="outline"
              className="btn-secondary hover-lift"
              asChild
            >
              <a
                href="https://github.com/AbdullahTanveer804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
