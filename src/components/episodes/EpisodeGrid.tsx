import EpisodeCard from "./EpisodeCard";
import { motion } from "framer-motion";

interface Episode {
  id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: string[];
}

interface EpisodeGridProps {
  episodes: Episode[];
  isLoading: boolean;
}

const EpisodeGrid = ({ episodes, isLoading }: EpisodeGridProps) => {
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

  if (episodes.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-20">
        <p className="text-xl">No episodes found</p>
      </div>
    );
  }

  // Group episodes by season
  const groupedEpisodes = episodes.reduce((acc, episode) => {
    const season = episode.season;
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {} as Record<number, Episode[]>);

  return (
    <div className="space-y-8 p-4">
      {Object.entries(groupedEpisodes)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([season, seasonEpisodes]) => (
          <div key={season}>
            <motion.h2 
              className="font-heading font-bold text-3xl text-secondary mb-6 glow-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Season {season}
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {seasonEpisodes.map((episode, index) => (
                <EpisodeCard key={episode.id} episode={episode} index={index} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default EpisodeGrid;
