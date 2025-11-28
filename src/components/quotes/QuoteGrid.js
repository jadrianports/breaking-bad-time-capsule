import React from "react";
import Spinner from "../ui/Spinner";
const QuotesGrid = ({ quotes, isLoading }) => {
  if (isLoading) return <Spinner/>;
  if (!quotes.length) return <h1>No Quotes Found</h1>;

  return (
    <section className="cards">
      {quotes.map((q, idx) => (
        <div className="card" key={idx}>
          <div className="card-inner">
            <div className="card-front">
              <h1>{q.author}</h1>
              <p>{q.series}</p>
            </div>
            <div className="card-back">
              <p>"{q.quote}"</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default QuotesGrid;
