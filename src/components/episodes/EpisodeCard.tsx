import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";

interface Episode {
  id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: string[];
}

interface EpisodeCardProps {
  episode: Episode;
  index: number;
}

const EpisodeCard = ({ episode, index }: EpisodeCardProps) => {
  return (
    <motion.div
      className="glass-panel rounded-xl p-6 hover:border-secondary transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-secondary font-bold text-sm">
            S{String(episode.season).padStart(2, '0')}E{String(episode.episode).padStart(2, '0')}
          </span>
          <h3 className="font-heading font-bold text-xl text-foreground mt-1">
            {episode.title}
          </h3>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
        <Calendar className="w-4 h-4" />
        <span>{episode.air_date}</span>
      </div>
      
      {episode.characters && episode.characters.length > 0 && (
        <div className="flex items-start gap-2">
          <Users className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            {episode.characters.slice(0, 3).map((character, idx) => (
              <span
                key={idx}
                className="text-xs bg-muted px-2 py-1 rounded-full text-foreground"
              >
                {character}
              </span>
            ))}
            {episode.characters.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{episode.characters.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default EpisodeCard;
