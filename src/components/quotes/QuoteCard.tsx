import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface QuoteData {
  id: number;
  quote: string;
  author: string;
}

interface QuoteCardProps {
  quote: QuoteData;
  index: number;
}

const QuoteCard = ({ quote, index }: QuoteCardProps) => {
  return (
    <motion.div
      className="glass-panel rounded-xl p-8 hover:border-secondary transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Quote className="w-12 h-12 text-secondary mb-4 opacity-50" />
      
      <blockquote className="flex-1 mb-4">
        <p className="text-foreground italic text-lg leading-relaxed">
          "{quote.quote}"
        </p>
      </blockquote>
      
      <footer>
        <cite className="text-secondary font-bold not-italic block text-right">
          — {quote.author}
        </cite>
      </footer>
    </motion.div>
  );
};

export default QuoteCard;
