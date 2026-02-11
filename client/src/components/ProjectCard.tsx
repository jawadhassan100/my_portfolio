import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, image, tags, liveUrl, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
    >
    <div className="group w-full sm:max-w-xl lg:max-w-2xl mx-auto">
  <div className="relative aspect-video overflow-hidden rounded-xl">
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
    <img
  src={image}
  alt={title}
  className="w-full h-full object-cover bg-black 
             brightness-110 contrast-110 saturate-110
             group-hover:brightness-125 group-hover:saturate-125
             transform group-hover:scale-105 
             transition-all duration-700 ease-out"
/>
  </div>
</div>


      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        
        </div>
      </div>
    </motion.div>
  );
}
