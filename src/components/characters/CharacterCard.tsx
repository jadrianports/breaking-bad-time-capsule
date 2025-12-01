import { motion } from "framer-motion";
import { useState } from "react";

interface Character {
  id: number;
  name: string;
  image_url: string;
  occupation: string[];
  portrayed: string;
  birth_date: string;
  episodes_count: number;
}

interface CharacterCardProps {
  character: Character;
  index: number;
}

const CharacterCard = ({ character, index }: CharacterCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-96 cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={character.image_url}
            alt={character.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
            <h3 className="font-heading font-bold text-xl text-foreground">
              {character.name}
            </h3>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl bg-card border border-border p-6 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h2 className="font-heading font-bold text-2xl mb-4 text-secondary glow-text">
            {character.name}
          </h2>
          <ul className="space-y-3 text-foreground">
            <li>
              <strong className="text-secondary">Occupation:</strong>{" "}
              {character.occupation[0]}
            </li>
            <li>
              <strong className="text-secondary">Actor:</strong>{" "}
              {character.portrayed}
            </li>
            <li>
              <strong className="text-secondary">Birthday:</strong>{" "}
              {character.birth_date}
            </li>
            <li>
              <strong className="text-secondary">Episodes:</strong>{" "}
              {character.episodes_count}
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CharacterCard;
