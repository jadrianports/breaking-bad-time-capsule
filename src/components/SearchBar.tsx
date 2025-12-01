import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchBarProps {
  activeTab: string;
  onSearch: (query: string) => void;
}

const placeholders = {
  characters: "Search for a character...",
  episodes: "Search episodes...",
  quotes: "Who said it?",
};

const SearchBar = ({ activeTab, onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState(placeholders[activeTab as keyof typeof placeholders]);

  useEffect(() => {
    setPlaceholder(placeholders[activeTab as keyof typeof placeholders]);
    setQuery("");
  }, [activeTab]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <motion.div 
      className="relative max-w-3xl mx-auto my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;
