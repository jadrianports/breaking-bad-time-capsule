import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";

interface Character {
  id: number;
  name: string;
  image_url: string;
  occupation: string[];
  portrayed: string;
  birth_date: string;
  episodes_count: number;
}

interface CharacterGridProps {
  characters: Character[];
  isLoading: boolean;
}

const CharacterGrid = ({ characters, isLoading }: CharacterGridProps) => {
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

  if (characters.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-20">
        <p className="text-xl">No characters found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {characters.map((character, index) => (
        <CharacterCard key={character.id} character={character} index={index} />
      ))}
    </div>
  );
};

export default CharacterGrid;
