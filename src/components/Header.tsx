"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

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
    { href: "mailto:abdullahdev804@gmail.com", icon: Mail, label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center md:justify-around justify-between">
          {/* Logo */}
          <div className="text-xl mr-16 font-bold text-gradient">
            <Link href={"/"}>Portfolio</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
            <Button size="sm" className="btn-primary" asChild>
              <a href="/abdullah-resume.pdf" target="_blank" rel="Resume">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[73px] animate-slide-down">
            <div className="bg-background/95 backdrop-blur-lg border-y border-border shadow-lg">
              <div className="container mx-auto px-4">
                <nav className="flex flex-col py-4">
                  {navItems.map((item, index) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        py-3 px-4 text-left text-lg font-medium
                        text-muted-foreground hover:text-primary 
                        hover:bg-accent/50 rounded-lg transition-all
                        ${index !== 0 ? 'mt-2' : ''}
                      `}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Social Links & Resume */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center justify-between px-4">
                      <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-primary 
                                     hover:bg-accent/50 rounded-lg transition-all"
                            aria-label={link.label}
                          >
                            <link.icon className="h-6 w-6" />
                          </a>
                        ))}
                      </div>
                      <Button size="sm" className="btn-primary" asChild>
                        <a 
                          href="/abdullah-resume.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-6"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Resume
                        </a>
                      </Button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
