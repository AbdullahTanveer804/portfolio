"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp, Download } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/AbdullahTanveer804",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/muhammad-abdullah-tanveer",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:abdullahdev804@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">
                Muhammad Abdullah Tanveer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Scientist building intelligent solutions
              </p>
              <span className="text-muted-foreground leading-relaxed">
                with web technologies, AI, and data analytics.
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-lg transition-smooth hover-lift"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {["About", "Projects", "Experience", "Skills", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        const element = document.querySelector(
                          `#${item.toLowerCase()}`
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-left text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {item}
                    </button>
                  )
                )}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 ">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:abdullahdev804@gmail.com"
                    className="text-foreground hover:text-primary transition-smooth"
                  >
                    abdullahdev804@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-green-400 text-sm">
                    🟢 Available for opportunities
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-secondary mt-3"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    <Link href={"abdullah-resume.pdf"}>Resume</Link>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                © 2025 Muhammad Abdullah Tanveer — All rights reserved
              </p>

              {/* Built With */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <span className="text-primary">Next.js</span>
                <span>•</span>
               
                <span className="text-accent">TypeScript</span>
                <span>•</span>
                <span className="text-primary">Tailwind CSS</span>
              </div>

              {/* Scroll to Top */}
              <Button
                size="sm"
                variant="outline"
                onClick={scrollToTop}
                className="btn-secondary hover-lift"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
