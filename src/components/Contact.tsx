"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Download,
  User,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdullahdev804@gmail.com",
      href: "mailto:abdullahdev804@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "AbdullahTanveer804",
      href: "https://github.com/AbdullahTanveer804",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Muhammad Abdullah Tanveer",
      href: "https://linkedin.com/in/muhammad-abdullah-tanveer",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post("/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      toast({
        title: "Success!",
        description:
          "Your message has been sent successfully. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description:
          error?.response?.data?.error ||
          error?.message ||
          "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations,
              or just having a conversation about technology and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient p-8">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50 border-border"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50 border-border"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50 border-border"
                      placeholder="+92 324 345 4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-secondary/50 border-border resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-primary hover-lift"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={20} className=" animate-spin " />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="card-gradient p-4 hover-lift hover-glow transition-smooth"
                  >
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Location */}
              <Card className="card-gradient p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Faisalabad, Punjab Pakistan
                    </p>
                  </div>
                </div>
              </Card>

              {/* Resume Download */}
              <Card className="card-gradient p-6 text-center">
                <h4 className="text-xl font-bold mb-4">Download My Resume</h4>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my experience, skills, and
                  projects.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-secondary hover-lift"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    <Link href={"abdullah-resume.pdf"}>Download Resume</Link>
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
