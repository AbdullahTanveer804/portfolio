"use client";
import {
  Code,
  Database,
  Brain,
  Target,
  GraduationCap,
  MapPin,
  Phone,
  MapIcon,
} from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description:
        "Building web applications with Next.js, React, Typescript, MongoDB, and modern tech stack",
    },
    {
      icon: Brain,
      title: "AI Explorer",
      description:
        "Exploring Agentic AI, Generative AI, LLMs, and building intelligent solutions",
    },
    {
      icon: Database,
      title: "Data Enthusiast",
      description:
        "Aspiring Data Engineer with focus on Data pipelines creation, analytics and visualization",
    },
  ];

  const currentLearning = [
    "OpenAI Agents SDK",
    "CrewAI",
    "LangChain",
    "Python",
    "R",
    "Data Warehousing",
    "Data Analysis",
    "ETL/ELT",
    "Data Visualization",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  A 23-year-old
                  <span className="text-primary font-semibold">
                    {" "}
                    Computer Scientist
                  </span>{" "}
                  and emerging
                  <span className="text-primary font-semibold">
                    {" "}
                    Data Engineer
                  </span>{" "}
                  with
                  <span className="text-primary font-semibold">
                    {" "}
                    1.5 years of experience,
                  </span>{" "}
                  specialize in full-stack development using
                  <span className="text-accent font-semibold">
                    {" "}
                    Next.js, React, TypeScript, MongoDB, & RESTful APIs,
                  </span>{" "}
                  and actively explore the intersection of AI and data
                  engineering through real world projects and tools.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  Currently, I’m upskilling in{" "}
                  <span className="text-accent font-semibold">
                    Agentic AI and Generative AI
                  </span>{" "}
                  as part of the{" "}
                  <span className="text-accent font-semibold underline">
                    <Link href={"https://www.piaic.org/"}>
                      PIAIC GenAI Stack,
                    </Link>
                  </span>{" "}
                  building intelligent systems using{" "}
                  <span className="text-accent font-semibold">
                    OpenAI Agents SDK, LangChain, CrewAI, & LLMs.
                  </span>{" "}
                  These projects involve prompt engineering and multi-agent
                  logic to create smart, context aware applications.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  Alongside AI, I’m pursuing the
                  <span className="text-primary font-semibold underline">
                    {" "}
                    <Link
                      href={
                        "https://www.coursera.org/professional-certificates/google-data-analytics?utm_medium=sem&utm_source=gg&utm_campaign=b2c_apac_google-data-analytics_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_s2-v2_en_m_hyb_25-05_x&campaignid=22576909573&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&creativeid=&assetgroupid=6577056523&targetid=&extensionid=&placement=&gad_source=1&gad_campaignid=22566925365&gbraid=0AAAAADdKX6ZmRwp9tO57iC5loh3TebJ5x&gclid=Cj0KCQjws4fEBhD-ARIsACC3d2_qUwGSPv-6D5flf3OZXcDrAzB-2rViabrKkV3IyMAFvTfIfR_4osoaAsBpEALw_wcB"
                      }
                    >
                      Google Data Analytics Professional Certificate,
                    </Link>
                  </span>{" "}
                  where I’m strengthening my skills in{" "}
                  <span className="text-accent font-semibold">
                    SQL, data analysis, wrangling, visualization
                  </span>{" "}
                  and{" "}
                  <span className="text-accent font-semibold">
                    pipeline creation
                  </span>{" "}
                  all aligned with my long term goal of becoming a
                  <span className="text-primary font-semibold">
                    {" "}
                    Data Engineer
                  </span>
                  .
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  From deploying full-stack apps to building AI-powered
                  workflows and data pipelines, I combine strong software
                  engineering fundamentals with a data first mindset. My
                  academic foundation in Computer Science and project-based
                  learning across web, AI, and data help me bridge the gap
                  between complex systems and real world impact.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I’m also preparing to pursue a{" "}
                  <span className="text-primary font-semibold">
                    Master’s in Germany
                  </span>{" "}
                  in{" "}
                  <span className="text-primary font-semibold">
                    Computer Science or Data Engineering,
                  </span>{" "}
                  with a focused ambition to contribute to the future of
                  <span className="text-accent font-semibold">
                    {" "}
                    AI, big data,
                  </span>{" "}
                  and{" "}
                  <span className="text-accent font-semibold">
                    intelligent infrastructure.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Column - Highlights Cards */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="card-gradient p-6 hover-lift hover-glow transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Phone</span>
                  <p className="text-foreground/90 px-2">+92 322 603 9903</p>
                </div>
              </div>

              {/* Current Projects */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-accent">Location</span>
                  <p className="text-foreground/90">
                    Faisalabad, Pubjab Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Now Learning Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Currently <span className="text-gradient">Learning</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {currentLearning.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/50 text-accent rounded-lg border border-border hover:bg-secondary/70 transition-smooth text-sm"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
