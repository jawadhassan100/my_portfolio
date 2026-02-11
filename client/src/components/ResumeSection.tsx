// components/ResumeSection.tsx
import { motion } from "framer-motion";
import { 
  Download, 
  FileText, 
  Award, 
  Briefcase, 
  GraduationCap,
  Code,
  ChevronRight,
  Sparkles,
  Star,
  Clock,
  MapPin,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Youtube,
  Instagram,
  ShoppingCart,
  Home,
  Gamepad2,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Project icons mapping
const projectIcons: { [key: string]: any } = {
  "Ringtones": Gamepad2,
  "Belleza Cream": ShoppingCart,
  "PJgroups": Home,
  "Youtube Downloader": Youtube,
  "Instagram Story Saver": Instagram,
  "WhatsApp Automation Tool": MessageSquare,
};

// Your actual resume data
const resumeData = {
  name: "Jawad Hassan Khan",
  title: "Full Stack Developer",
  contact: {
    location: "Ghazikot Township, Mansehra",
    phone: "0344 0567787",
    email: "jawadhassankhan2001@gmail.com"
  },
  summary: "Full Stack Web Developer with 2+ years of experience specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Proven ability to build scalable, responsive web applications and real-time dashboards. Passionate about clean code, performance optimization, and collaborative development.",
  
  experience: [
    {
      title: "MERN Stack Developer",
      company: "Prize Ocean Games",
      period: "2025 - Present",
      achievements: [
        "Developed scalable web applications and real-time game dashboards using MERN stack",
        "Optimized codebase and improved application performance by 30% through debugging and refactoring",
        "Collaborated with designers and backend teams to deliver responsive and interactive user interfaces"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Solushyfy",
      period: "2024 - 2025",
      achievements: [
        "Designed and deployed custom MERN + TypeScript applications for client projects",
        "Built RESTful APIs and integrated admin dashboards to streamline and automate workflows",
        "Reduced processing time for data-intensive operations by 40% through query optimization"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor's Degree",
      institution: "Hazara University, Mansehra",
      period: "2021 - 2025"
    },
    {
      degree: "College",
      institution: "Royal College of Sciences, Mansehra",
      period: "2019 - 2021"
    }
  ],
  
  projects: [
    {
      name: "Ringtones",
      description: "MERN gambling platform with real-time games, competitions, and admin dashboard",
      icon: Gamepad2
    },
    {
      name: "Belleza Cream",
      description: "E-commerce site for skincare product with payment gateway and order management",
      icon: ShoppingCart
    },
    {
      name: "PJgroups",
      description: "Property platform with listings, construction cost calculator, and worker management",
      icon: Home
    },
    {
      name: "Youtube Downloader",
      description: "MERN-based tool for downloading and managing YouTube content",
      icon: Youtube
    },
    {
      name: "Instagram Story Saver",
      description: "Full-stack application for saving Instagram stories with user authentication",
      icon: Instagram
    },
    {
      name: "WhatsApp Automation Tool",
      description: "Automated messaging and contact management system using Node.js",
      icon: MessageSquare
    }
  ],
  
  skills: {
    "Frontend": ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Express.js", "REST APIs"],
    "Database": ["MongoDB", "PostgreSQL", "Firebase"],
    "Tools & DevOps": ["Git/GitHub", "Vercel", "Railway", "Custom Automation Tools"],
    "Other": ["Responsive Design", "Performance Optimization", "Debugging", "Agile/Team Collaboration"]
  }
};

interface ResumeSectionProps {
  theme?: 'dark' | 'light';
}

export function ResumeSection({ theme = 'dark' }: ResumeSectionProps) {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'projects' | 'skills'>('experience');

  const handleDownloadTXT = () => {
    // Create formatted resume content
    const resumeContent = `
${resumeData.name}
${resumeData.title}

CONTACT
Location: ${resumeData.contact.location}
Phone: ${resumeData.contact.phone}
Email: ${resumeData.contact.email}

PROFESSIONAL SUMMARY
${resumeData.summary}

EXPERIENCE
${resumeData.experience.map(exp => `
${exp.title} - ${exp.company}
${exp.period}
${exp.achievements.map(ach => `• ${ach}`).join('\n')}
`).join('\n')}

EDUCATION
${resumeData.education.map(edu => `
• ${edu.degree}
  ${edu.institution}
  ${edu.period}
`).join('\n')}

PROJECTS
${resumeData.projects.map(proj => `
• ${proj.name}
  ${proj.description}
`).join('\n')}

TECHNICAL SKILLS
${Object.entries(resumeData.skills).map(([category, skills]) => 
  `${category}:
  ${skills.join(', ')}`
).join('\n\n')}
    `;

    // Create and download file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jawad_Hassan_Khan_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleViewPrint = () => {
    // Create styled HTML version for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Jawad Hassan Khan - Resume</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
                color: #1a1a1a;
                background: #ffffff;
                max-width: 1000px;
                margin: 0 auto;
                padding: 40px 30px;
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 3px solid #6d28d9;
                padding-bottom: 20px;
              }
              h1 {
                font-size: 32px;
                font-weight: 800;
                color: #6d28d9;
                margin-bottom: 5px;
                letter-spacing: -0.5px;
              }
              .title {
                font-size: 18px;
                color: #4b5563;
                font-weight: 600;
                margin-bottom: 15px;
              }
              .contact {
                display: flex;
                justify-content: center;
                gap: 25px;
                flex-wrap: wrap;
                color: #6b7280;
                font-size: 14px;
              }
              .section {
                margin-bottom: 30px;
              }
              h2 {
                font-size: 20px;
                font-weight: 700;
                color: #6d28d9;
                border-bottom: 2px solid #e5e7eb;
                padding-bottom: 8px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 8px;
              }
              .experience-item, .project-item {
                margin-bottom: 25px;
              }
              .exp-header {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                flex-wrap: wrap;
                margin-bottom: 8px;
              }
              .exp-title {
                font-size: 18px;
                font-weight: 700;
                color: #1f2937;
              }
              .exp-company {
                font-size: 16px;
                font-weight: 600;
                color: #6d28d9;
              }
              .exp-period {
                color: #6b7280;
                font-size: 14px;
                font-weight: 500;
              }
              ul {
                margin-left: 20px;
                list-style-type: disc;
              }
              li {
                margin-bottom: 6px;
                color: #4b5563;
              }
              .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
              }
              .skill-category {
                background: #f9fafb;
                padding: 15px;
                border-radius: 8px;
              }
              .skill-category h3 {
                font-size: 16px;
                font-weight: 700;
                color: #6d28d9;
                margin-bottom: 10px;
              }
              .skill-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
              }
              .skill-tag {
                background: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 13px;
                color: #4b5563;
                border: 1px solid #e5e7eb;
              }
              .education-item {
                margin-bottom: 15px;
              }
              .edu-degree {
                font-weight: 700;
                color: #1f2937;
              }
              .edu-institution {
                color: #6b7280;
                margin-left: 5px;
              }
              .project-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
              }
              .project-card {
                background: #f9fafb;
                padding: 20px;
                border-radius: 10px;
                border-left: 4px solid #6d28d9;
              }
              .project-name {
                font-size: 18px;
                font-weight: 700;
                color: #1f2937;
                margin-bottom: 8px;
              }
              .project-desc {
                color: #6b7280;
                font-size: 14px;
              }
              @media print {
                body { padding: 20px; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>${resumeData.name}</h1>
              <div class="title">${resumeData.title}</div>
              <div class="contact">
                <span>📍 ${resumeData.contact.location}</span>
                <span>📱 ${resumeData.contact.phone}</span>
                <span>📧 ${resumeData.contact.email}</span>
              </div>
            </div>

            <div class="section">
              <h2>📋 Professional Summary</h2>
              <p style="color: #4b5563; line-height: 1.8;">${resumeData.summary}</p>
            </div>

            <div class="section">
              <h2>💼 Professional Experience</h2>
              ${resumeData.experience.map(exp => `
                <div class="experience-item">
                  <div class="exp-header">
                    <div>
                      <span class="exp-title">${exp.title}</span>
                      <span class="exp-company"> @ ${exp.company}</span>
                    </div>
                    <span class="exp-period">${exp.period}</span>
                  </div>
                  <ul>
                    ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h2>🎓 Education</h2>
              ${resumeData.education.map(edu => `
                <div class="education-item">
                  <span class="edu-degree">${edu.degree}</span>
                  <span class="edu-institution">${edu.institution}</span>
                  <span style="float: right; color: #6b7280;">${edu.period}</span>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h2>🚀 Projects</h2>
              <div class="project-grid">
                ${resumeData.projects.map(proj => `
                  <div class="project-card">
                    <div class="project-name">${proj.name}</div>
                    <div class="project-desc">${proj.description}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="section">
              <h2>🛠️ Technical Skills</h2>
              <div class="skills-grid">
                ${Object.entries(resumeData.skills).map(([category, skills]) => `
                  <div class="skill-category">
                    <h3>${category}</h3>
                    <div class="skill-tags">
                      ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="no-print" style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <button onclick="window.print()" style="background: #6d28d9; color: white; border: none; padding: 12px 30px; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer; margin-right: 10px;">
                🖨️ Print Resume
              </button>
              <button onclick="window.close()" style="background: #e5e7eb; color: #1f2937; border: none; padding: 12px 30px; border-radius: 30px; font-size: 16px; font-weight: 600; cursor: pointer;">
                ✕ Close
              </button>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="resume" className="section-padding-resume relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">My Resume</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Background</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            {resumeData.summary}
          </p>

          {/* Contact Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">{resumeData.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">{resumeData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">{resumeData.contact.email}</span>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={handleDownloadTXT}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Download Resume (TXT)
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleViewPrint}
              className="group px-8 py-4 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-card transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              View & Print PDF
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'projects', label: 'Projects', icon: Code },
            { id: 'skills', label: 'Skills', icon: Award },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25'
                  : 'bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {resumeData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-lg font-medium text-foreground/90">{exp.company}</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {resumeData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-foreground/80 mt-1">{edu.institution}</p>
                    </div>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.projects.map((project, idx) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              {Object.entries(resumeData.skills).map(([category, skills], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}