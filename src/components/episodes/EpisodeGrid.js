import React from "react";
import Spinner from "../ui/Spinner";
const EpisodesGrid = ({ episodes, isLoading }) => {
  if (isLoading) return <Spinner/> ;
  if (!episodes || !episodes.length) return <h1>No Episodes Found</h1>;

  return (
    <section className="cards">
      {episodes.map((ep) => (
        <div className="card" key={ep.id}>
          <div className="card-inner">
            <div className="card-front">
              <h1>{ep.title}</h1>
              <p>Season {ep.season}, Episode {ep.episode}</p>
              <p>{ep.air_date}</p>
            </div>
            <div className="card-back">
              <h2>Characters</h2>
              <ul>
                {(ep.characters || []).map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EpisodesGrid;
