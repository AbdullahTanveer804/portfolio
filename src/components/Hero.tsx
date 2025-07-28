"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, ExternalLink, Download } from "lucide-react";
import { Vortex } from "./ui/vortex";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <WavyBackground>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 animate-fade-in">
            
            {/* Left Content */}
            <div className="flex-1 text-left">
              {/* Greeting */}
              <p
                className="text-primary text-lg mb-4 mt-20 md:mt-10 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                Hi, I'm
              </p>

              {/* Main Heading */}
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Muhammad Abdullah
                <span className="block text-gradient">Tanveer</span>
              </h1>

              {/* Subheading */}
              <h2
                className="text-xl md:text-3xl font-semibold mb-6 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                Computer Scientist
              </h2>

              {/* Tagline */}
              <p
                className="text-md md:text-xl mb-8 max-w-2xl leading-relaxed animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                I solve real-world problems using code, data, and AI. Building
                intelligent, scalable, and user focused digital solutions.
              </p>

              {/* Headline */}
              <div
                className="flex flex-wrap gap-2 md:gap-4 mb-8 animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="px-3 py-1 bg-primary/20 md:text-primary text-black text-sm rounded-full border border-primary/30">
                  Full-Stack Web Developer
                </span>
                <span className="px-3 py-1 bg-accent/20 md:text-accent text-black text-sm rounded-full border border-accent/30">
                  AI Explorer
                </span>
                <span className="px-3 py-1 bg-primary/20 md:text-primary text-black text-sm rounded-full border border-primary/30">
                  Aspiring Data Engineer
                </span>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex justify-center md:justify-start  gap-4 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  size="lg"
                  className="btn-primary hover-lift px-8 py-3 md:text-lg text-sm"
                  asChild
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToProjects();
                    }}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Projects
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="flex-shrink-0 animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="relative">
                <div className="w-40 h-40 md:ml-32 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="profile-pic.jpg"
                    alt="Muhammad Abdullah Tanveer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 md:ml-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 hidden md:block left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Hero;
