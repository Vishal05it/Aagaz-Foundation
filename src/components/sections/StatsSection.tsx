import {
  GraduationCap,
  Users,
  HandCoins,
  BookOpen,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const StatsCard = ({
  icon: Icon,
  label,
  value,
  index,
}: {
  icon: typeof GraduationCap;
  label: string;
  value: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative group"
    >
      {/* Layered card with offset shadow */}
      <div className="absolute inset-0 bg-secondary translate-x-1.5 translate-y-1.5 rounded-lg transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
      <div className="relative bg-white border-2 border-accent rounded-lg p-6 text-center transition-all duration-300 group-hover:border-primary">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-mesh-rose">
          <Icon strokeWidth={1.8} size={26} className="text-primary" />
        </div>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
          {value}
        </h3>
        <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.18em]">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: Calendar,
      value: "20+",
      label: "Years on the ground",
    },
    {
      icon: GraduationCap,
      value: "5,000+",
      label: "Students supported",
    },
    {
      icon: HandCoins,
      value: "100%",
      label: "Reaches the child",
    },
    {
      icon: Users,
      value: "300+",
      label: "Active volunteers",
    },
    {
      icon: BookOpen,
      value: "2",
      label: "Learning centres",
    },
  ];

  return (
    <section className="bg-impact-pattern py-24 px-6 relative overflow-hidden">
      {/* Decorative diamond accents */}
      <span className="absolute top-12 left-12 w-4 h-4 bg-primary rotate-45 opacity-60 hidden lg:block" />
      <span className="absolute top-12 right-12 w-4 h-4 bg-secondary rotate-45 opacity-60 hidden lg:block" />
      <span className="absolute bottom-12 left-12 w-4 h-4 bg-secondary rotate-45 opacity-60 hidden lg:block" />
      <span className="absolute bottom-12 right-12 w-4 h-4 bg-primary rotate-45 opacity-60 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="block w-8 h-px bg-primary" />
            By The Numbers
            <span className="block w-8 h-px bg-primary" />
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-accent">
            Quiet work. Loud results.
          </h2>
          <p className="mt-3 text-text-muted max-w-xl mx-auto text-sm">
            Twenty years of receipts, reports, and follow-up phone calls — boiled
            down to five honest numbers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
