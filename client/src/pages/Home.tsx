import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Server, 
  Database, 
  Globe, 
  Layout, 
  Code, 
  Layers, 
  Cpu, 
  CreditCard, 
  FileCode,
  Sun,
  Moon,
  ChevronUp,
  Sparkles
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useContactMutation } from "@/hooks/use-contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import RingToneRiches from "../../../attached_assets/ringtone.png"
import PjGroups from "../../../attached_assets/pjGroups.png"
import doneforyou from "../../../attached_assets/donefor.png"
import skin from "../../../attached_assets/skin.png"
import { ResumeSection } from "@/components/ResumeSection";

// Icons for skills (Lucide approximations for specific logos)
const skills = [
  { name: "React", icon: Code, color: "#61DAFB" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "Express", icon: Layers, color: "#000000" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  { name: "Next.js", icon: Globe, color: "#000000" },
  { name: "PostgreSQL", icon: Database, color: "#008CDD" },
  { name: "TypeScript", icon: FileCode, color: "#D63AFF" },
  { name: "Tailwind", icon: Layout, color: "#06B6D4" },
];

const projects = [
  {
  title: "Ringtone Riches",
  description: "A real-time competitive gaming platform with interactive skill-based games, dynamic leaderboards, tournament systems, and secure reward distribution. Designed for high engagement and scalable performance.",
  image: RingToneRiches,
  tags: ["MERN", "PostgreSQL", "TypeScript", "Competitive Gaming"],
  liveUrl: "https://ringtoneriches.co.uk/",
  },
  { 
    title: "PJ Groups",
    description: "A modern real estate web application featuring property listings for houses, plots, and commercial shops available for rent and sale. Includes a built-in construction cost calculator, advanced filtering, and a clean, user-focused UI/UX design for seamless property browsing.",
    image: PjGroups,
    tags: ["MERN", "PostgreSQL", "Property Listings", "Calculator Tool"],
    liveUrl: "https://pj-groups.vercel.app/",
      },
  {
    title: "Amazing World Media",
    description: "An interactive lead generation platform where users engage with a scratch-card style game to unlock and win digital services. Built with a custom admin dashboard for managing campaigns, user data, and service offerings, combining gamification with marketing automation.",
    image: doneforyou,
    tags: ["MERN", "Gamification", "Admin Dashboard", "Lead Generation"],
    liveUrl: "https://amazingworldmedia.net/",
      },
  {
    title: "Skin Diversity Clinic",
    description: "A modern, responsive landing page built with React and Tailwind CSS for a dermatology clinic. Showcases services, treatments, and clinic information with a clean, user-centric UI/UX design focused on clarity and patient engagement.",
    image: skin,
    tags: ["React", "Tailwind CSS", "Landing Page", "UI/UX Focused"],
    liveUrl: "https://skin-diversity.vercel.app/",
      },
];

const education = [
  {
    year: "2023",
    title: "MERN Stack Certification",
    institution: "Solushyfy",
    description: "Intensive bootcamp covering full-stack development patterns, RESTful APIs, and modern deployment strategies.",
  },
  {
    year: "2025",
    title: "BS Computer Science",
    institution: "Hazara University",
    description: "Specialized in Software Engineering with a focus on algorithms, data structures, and database systems.",
  },
  {
    year: "2021",
    title: "FSC Pre-Engineering",
    institution: "Royal College",
    description: "Foundation in mathematics and physics, developing strong analytical and problem-solving capabilities.",
  },
];

export default function Home() {
  const contactMutation = useContactMutation();
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      updateTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
      updateTheme('dark');
    } else {
      setTheme('light');
      updateTheme('light');
    }
  }, []);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateTheme = (newTheme: 'dark' | 'light') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = (data: InsertMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-all duration-500">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar onThemeToggle={toggleTheme} theme={theme} />


 {/* Scroll to Top Button */}
<AnimatePresence>
  {showScrollTop && (
    <motion.button
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 z-40 p-3 rounded-full dark:bg-card/80 bg-white/80 backdrop-blur-sm border dark:border-border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChevronUp className="w-5 h-5 group-hover:text-primary transition-colors" />
    </motion.button>
  )}
</AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Abstract Background Shapes - Theme Adjusted */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] dark:opacity-20 opacity-10" />
<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] dark:opacity-10 opacity-5" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Jawad Khan
            </h1>
            <div className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8 h-20 md:h-12">
              <TypeAnimation
                sequence={[
                  "Full Stack MERN Developer",
                  2000,
                  "Building Scalable SaaS",
                  2000,
                  "Creating Modern UI/UX",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </div>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
              I specialize in building exceptional digital experiences. Currently, I'm focused on 
              accessible, human-centered products using the modern web stack.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#projects"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
             <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
                <motion.a
                  href="https://github.com/jawadhassan100"
                  className="p-3 rounded-full dark:bg-secondary bg-gray-100 hover:dark:bg-accent hover:bg-gray-200 dark:text-foreground text-gray-900 transition-colors border dark:border-border border-gray-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/jawad-khan-a9028b27b/"
                 className="p-3 rounded-full dark:bg-secondary bg-gray-100 hover:dark:bg-accent hover:bg-gray-200 dark:text-foreground text-gray-900 transition-colors border dark:border-border border-gray-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:hello@jawad.dev"
                 className="p-3 rounded-full dark:bg-secondary bg-gray-100 hover:dark:bg-accent hover:bg-gray-200 dark:text-foreground text-gray-900 transition-colors border dark:border-border border-gray-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card/50 dark:bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              With a deep passion for clean code and problem-solving, I transform complex requirements into 
              seamless, user-friendly applications. My journey in tech is driven by curiosity and a 
              relentless pursuit of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <SkillCard key={skill.name} {...skill} index={idx} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} {...project} index={idx} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-card/50 dark:bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {idx % 2 === 0 && (
                      <div className="hidden md:block">
                        <span className="text-primary font-bold text-xl">{edu.year}</span>
                        <h3 className="text-2xl font-bold mt-1">{edu.title}</h3>
                        <p className="text-lg text-foreground/80 mt-1">{edu.institution}</p>
                        <p className="text-muted-foreground mt-3">{edu.description}</p>
                      </div>
                    )}
                    {idx % 2 !== 0 && (
                      <div className="md:hidden">
                        <span className="text-primary font-bold text-xl">{edu.year}</span>
                        <h3 className="text-2xl font-bold mt-1">{edu.title}</h3>
                        <p className="text-lg text-foreground/80 mt-1">{edu.institution}</p>
                        <p className="text-muted-foreground mt-3">{edu.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 dark:ring-black ring-white z-10 mt-1.5" />

                  <div className="flex-1 pl-6 md:pl-0">
                    {idx % 2 !== 0 && (
                      <div className="hidden md:block text-left">
                        <span className="text-primary font-bold text-xl">{edu.year}</span>
                        <h3 className="text-2xl font-bold mt-1">{edu.title}</h3>
                        <p className="text-lg text-foreground/80 mt-1">{edu.institution}</p>
                        <p className="text-muted-foreground mt-3">{edu.description}</p>
                      </div>
                    )}
                    {idx % 2 === 0 && (
                      <div className="md:hidden text-left pl-6 border-l border-border md:border-none">
                        <span className="text-primary font-bold text-xl">{edu.year}</span>
                        <h3 className="text-2xl font-bold mt-1">{edu.title}</h3>
                        <p className="text-lg text-foreground/80 mt-1">{edu.institution}</p>
                        <p className="text-muted-foreground mt-3">{edu.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ResumeSection theme={theme} />

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
            </p>
          </motion.div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Jawad Khan" 
                            className="bg-background/50 border-border focus:border-primary/50 transition-colors h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="jawad@example.com" 
                            type="email"
                            className="bg-background/50 border-border focus:border-primary/50 transition-colors h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="bg-background/50 border-border focus:border-primary/50 transition-colors min-h-[150px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card/30 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Jawad Khan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}