import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SkillProps {
  name: string;
  icon: LucideIcon | React.ElementType;
  color: string;
  index: number;
}

export function SkillCard({ name, icon: Icon, color, index }: SkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-secondary/30 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 group cursor-default"
    >
      <div 
        className="p-4 rounded-full bg-background/50 group-hover:bg-background transition-colors shadow-inner"
        style={{ color: color }}
      >
        <Icon size={32} />
      </div>
      <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
