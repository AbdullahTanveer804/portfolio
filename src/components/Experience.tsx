"use-client";
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";

const Experience = () => {
  const experiences = [
    {
      title: "Data Visualization Early Internship",
      company: "Excelerate",
      link: "https://4excelerate.org/",
      type: "Internship",
      period: "August 2025 - Present",
      status: "Selected",
      location: "Remote",
      description:
        "Selected for data visualization internship focusing on data storytelling and interactive dashboards.",
      highlights: [
        "Working on data storytelling projects",
        "Creating interactive dashboards",
        "Applying data visualization best practices",
      ],
      icon: Award,
      color: "primary",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      company: "Coursera · Google Career Certificates",
      link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChsSEwjwnJXe8dWOAxXgckECHSXPNKMYACICCAEQABoCd3M&co=1&ase=2&gclid=Cj0KCQjws4fEBhD-ARIsACC3d2-ZB3f-3oXDFN80nzQ8Nlg9uGI_4RQfU-b6K4jQz-u-pXdty-YjHj0aApSnEALw_wcB&ei=s1uCaIrZL6unkdUPhI2AmAE&ohost=www.google.com&cid=CAESVuD21dibB42YhE58aHlrfNxQCwDeQd7hEtYCrEWVT5LUG1oy48SWahto-eBgWI60h-DyUprEfgboo55htMrjVp4H9S_QZU0lqcSKx8HSg9h_JaqQOxBA&category=acrcp_v1_40&sig=AOD64_0P4iQVbWHMPTcYX9ROlbkDDdfKzg&q&sqi=2&nis=4&adurl&ved=2ahUKEwjK_o_e8dWOAxWrU6QEHYQGABMQ0Qx6BAgJEAE",
      type: "Course",
      period: "2025 - Present",
      status: "In Progress",
      location: "Online",
      description:
        "Comprehensive beginner-to-intermediate program focusing on core data analytics skills using industry-standard tools.",
      highlights: [
        "Learning data cleaning, analysis, and visualization with Excel, SQL, and R",
        "Applying statistical thinking and data-driven problem solving",
        "Preparing for real-world data analyst job scenarios",
      ],
      icon: BookOpen,
      color: "accent",
    },
    {
      title: "Certified Cloud Applied Generative AI Engineer",
      company: "PIAIC (Panaversity)",
      link: "https://www.piaic.org/",
      type: "Course",
      period: "2024 - Present",
      status: "In Progress",
      location: "On-Site",
      description:
        "Comprehensive program covering frontend development, GenAI, and Agentic AI technologies.",
      highlights: [
        "Completed Frontend Stack (React, Next.js, TypeScript)",
        "Currently enrolled in Agentic & GenAI AI tracks",
        "Working with OpenAI Agents SDK, LangChain, CrewAI, and modern AI tools",
      ],
      icon: BookOpen,
      color: "accent",
    },
    {
      title: "Virtual Job Simulation",
      company: "Deloitte",
      link: "https://www.deloitte.com/au/en/careers/students/virtual-internship.html",
      type: "Simulation",
      period: "2025",
      status: "Completed",
      location: "Virtual",
      description:
        "Completed structured case problems focused on data analysis and strategic recommendations.",
      highlights: [
        "Analyzed complex business data sets",
        "Provided strategic recommendations",
        "Gained insights into consulting methodologies",
      ],
      icon: Users,
      color: "primary",
    },
    {
      title: "Bachelor of Science in Computer Science (BSCS)",
      company: "Government College University Faisalabad (GCUF)",
      link: "https://gcuf.edu.pk/",
      type: "Degree",
      period: "2021 - 2025",
      status: "Completed",
      location: "Faisalabad, Pakistan",
      description:
        "Full-fledged CS program with practical training in software engineering, AI, databases, systems, and mathematics.",
      highlights: [
        "Final Year Project: Wed Connect – Full-stack AI-powered vendor booking platform",
        "Strengths: Data structures, OS, Data Mining, AI, Algorithms, DB Systems",
        "Completed 8 semesters with specialization in AI & Full-Stack Development",
      ],
      icon: GraduationCap,
      color: "primary",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      Selected: "bg-primary/20 text-primary border-primary/30",
      "In Progress": "bg-accent/20 text-accent border-accent/30",
      Completed: "bg-green-500/20 text-green-400 border-green-500/30",
    };

    return (
      <span
        className={`px-2 py-1 text-xs rounded-full border ${
          statusStyles[status as keyof typeof statusStyles]
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey through internships, education, and professional
              development in tech.
            </p>
          </div>

          {/* Scrollable Timeline Container */}
          <div className="relative h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-[333%] w-0.5 bg-border"></div>

            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-2 md:left-[50.9%] md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8 md:ml-0" : "md:ml-8 md:mr-0"
                  } md:w-5/12 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                >
                  <Card className="card-gradient p-6 hover-lift hover-glow transition-smooth">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            exp.color === "primary"
                              ? "bg-primary/20 text-primary"
                              : exp.color === "accent"
                              ? "bg-accent/20 text-accent"
                              : "bg-secondary/50 text-secondary-foreground"
                          }`}
                        >
                          <exp.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      {getStatusBadge(exp.status)}
                    </div>

                    {/* Title and Company */}
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-primary font-semibold mb-3 underline">
                      <Link href={`${exp.link}`}>{exp.company}</Link>
                    </h4>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/90 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-semibold mb-2 text-sm">
                        Key Highlights:
                      </h5>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Future Goals */}
      <div className="text-center mt-16">
        <Card className="card-gradient p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Future <span className="text-gradient">Goals</span>
          </h3>
          <p className="text-foreground/90 leading-relaxed">
            My long-term career goal is to become a{" "}
            <span className="text-primary font-semibold">Data Engineer</span>.
            If given the opportunity, I would love to pursue a
            <span className="text-accent font-semibold">
              {" "}
              Master's degree in Germany
            </span>{" "}
            in Computer Science or Data Engineering.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
