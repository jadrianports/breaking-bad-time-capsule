import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import EpisodeGrid from "./components/episodes/EpisodeGrid";
import QuoteGrid from "./components/quotes/QuoteGrid";
import Search from "./components/ui/Search";
import axios from "axios";

const App = () => {
  const [activeTab, setActiveTab] = useState("characters");
  const [query, setQuery] = useState("");

  // Separate state for each tab
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const [loadingCharacters, setLoadingCharacters] = useState(true);
  const [loadingEpisodes, setLoadingEpisodes] = useState(true);
  const [loadingQuotes, setLoadingQuotes] = useState(true);

  // Fetch Characters
  useEffect(() => {
    if (activeTab !== "characters") return;

    const fetchCharacters = async () => {
      setLoadingCharacters(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/characters?name=${query}`
        );
        setCharacters(res.data.data || []);
      } catch (err) {
        console.error(err);
        setCharacters([]);
      }
      setLoadingCharacters(false);
    };

    fetchCharacters();
  }, [query, activeTab]);

  // Fetch Episodes
  useEffect(() => {
    if (activeTab !== "episodes") return;

    const fetchEpisodes = async () => {
      setLoadingEpisodes(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/episodes?name=${query}`
        );
        setEpisodes(res.data.data || []);
      } catch (err) {
        console.error(err);
        setEpisodes([]);
      }
      setLoadingEpisodes(false);
    };

    fetchEpisodes();
  }, [query, activeTab]);

  // Fetch Quotes
  useEffect(() => {
    if (activeTab !== "quotes") return;

    const fetchQuotes = async () => {
      setLoadingQuotes(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/quotes?name=${query}`
        );
        setQuotes(res.data.data || []);
      } catch (err) {
        console.error(err);
        setQuotes([]);
      }
      setLoadingQuotes(false);
    };

    fetchQuotes();
  }, [query, activeTab]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setQuery(""); // optional: clear search when switching tabs
  };

  return (
    <div className="container">
      <Header />

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        {["characters", "episodes", "quotes"].map((tab) => (
          <button
            key={tab}
            className="btn"
            style={{
              backgroundColor: activeTab === tab ? "#2c9e6b" : "#3fb573",
            }}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Search */}
      <Search getQuery={(q) => setQuery(q)} activeTab = {activeTab} />

      {/* Content */}
      {activeTab === "characters" && (
        <CharacterGrid isLoading={loadingCharacters} items={characters} />
      )}
      {activeTab === "episodes" && (
        <EpisodeGrid isLoading={loadingEpisodes} episodes={episodes} />
      )}
      {activeTab === "quotes" && (
        <QuoteGrid isLoading={loadingQuotes} quotes={quotes} />
      )}
    </div>
  );
};

export default App;
