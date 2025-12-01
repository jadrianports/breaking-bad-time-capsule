import { motion } from "framer-motion";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "characters", label: "Characters" },
  { id: "episodes", label: "Episodes" },
  { id: "quotes", label: "Quotes" },
];

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <motion.nav 
      className="glass-panel rounded-xl p-2 flex gap-2 justify-center sticky top-4 z-40 max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            relative px-6 py-3 rounded-lg font-body font-medium transition-all duration-300
            ${activeTab === tab.id 
              ? "bg-secondary text-background shadow-lg" 
              : "text-foreground hover:bg-muted/50"
            }
          `}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-secondary rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </motion.nav>
  );
};

export default Navigation;
