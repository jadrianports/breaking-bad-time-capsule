import React, { useState, useEffect } from "react";

const Search = ({ getQuery, activeTab }) => {
  const [text, setText] = useState("");

  // Clear search when tab changes
  useEffect(() => {
    setText("");
    getQuery("");
  }, [activeTab]);

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  // Dynamic placeholder based on tab
  const getPlaceholder = () => {
    switch (activeTab) {
      case "episodes":
        return "Search Episodes by Title...";
      case "quotes":
        return "Search Quotes by Author...";
      default:
        return "Search Characters...";
    }
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder={getPlaceholder()}
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
