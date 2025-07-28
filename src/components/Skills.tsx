"use client";
import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Wrench, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "primary",
      skills: [
        "React",
        "Next.js (App Router)",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "ShadCN",
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "accent",
      skills: [
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "FAST APIs",
        "RESTful APIs",
      ],
    },
    {
      title: "GenAI & AI",
      icon: Brain,
      color: "primary",
      skills: [
        "OpenAI Agents SDK",
        "Multi-Agents System",
        "LangChain",
        "CrewAI",
        "LLMs",
        "AutoGen",
        "RAG",
        "Prompt Engineering",
      ],
    },
    {
      title: "Data Analytics",
      icon: Database,
      color: "accent",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Pipeline-Creation",
        "Data Analysis",
        "Data Visualization",
        "Excel",
        "R",
      ],
    },
    {
      title: "Dev Tools",
      icon: Wrench,
      color: "primary",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "PyCharm",
        "Windsurf",
        "Vercel",
        "npm/yarn",
        "Netlify",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "accent",
      skills: [
        "Teamwork",
        "Communication",
        "Fast Learner",
        "Adaptable",
        "Problem Solving",
        "Leadership",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/20 text-primary border-primary/30",
      accent: "bg-accent/20 text-accent border-accent/30",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/20 text-primary",
      accent: "bg-accent/20 text-accent",
      secondary: "bg-secondary/50 text-secondary-foreground",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I
              use to build innovative solutions across web development, AI, and
              data analytics.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="card-gradient p-6 hover-lift hover-glow transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-lg ${getIconColorClasses(category.color)}`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 text-sm rounded-lg border transition-smooth hover:scale-105 ${getColorClasses(category.color)}`}
                      style={{
                        animationDelay: `${index * 0.1 + skillIndex * 0.05}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Skills Highlight */}
          <div className="mt-16">
            <Card className="card-gradient p-8 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">
                  Current <span className="text-gradient">Focus Areas</span>
                </h3>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                I'm currently deepening my expertise in{" "}
                <span className="text-primary font-semibold">Agentic AI</span>{" "}
                and
                <span className="text-accent font-semibold">
                  {" "}
                  Data Engineering
                </span>
                , building projects that combine web development with AI and
                analytics to create intelligent, data-driven solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Agentic AI",
                  "LLM Integration",
                  "AI-Powered Apps",
                  "Data Analysis",
                  "Data Warehousing",
                  "Pipelines Creation",
                ].map((focus, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
