import QuoteCard from "./QuoteCard";
import { motion } from "framer-motion";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuoteGridProps {
  quotes: Quote[];
  isLoading: boolean;
}

const QuoteGrid = ({ quotes, isLoading }: QuoteGridProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <motion.div
          className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (quotes.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-20">
        <p className="text-xl">No quotes found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {quotes.map((quote, index) => (
        <QuoteCard key={quote.id} quote={quote} index={index} />
      ))}
    </div>
  );
};

export default QuoteGrid;
