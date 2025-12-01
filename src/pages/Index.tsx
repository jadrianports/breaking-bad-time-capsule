import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import CrystalBackground from "@/components/CrystalBackground";
import CharacterGrid from "@/components/characters/CharacterGrid";
import EpisodeGrid from "@/components/episodes/EpisodeGrid";
import QuoteGrid from "@/components/quotes/QuoteGrid";

const API_BASE = "/api";

const Index = () => {
  const [activeTab, setActiveTab] = useState("characters");
  const [query, setQuery] = useState("");

  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const [loadingCharacters, setLoadingCharacters] = useState(true);
  const [loadingEpisodes, setLoadingEpisodes] = useState(false);
  const [loadingQuotes, setLoadingQuotes] = useState(false);

  // Fetch Characters
  useEffect(() => {
    if (activeTab !== "characters") return;

    const fetchCharacters = async () => {
      setLoadingCharacters(true);
      try {
        const res = await axios.get(`${API_BASE}/characters?name=${query}`);
        setCharacters(res.data.data || []);
      } catch (err) {
        console.error("Error fetching characters:", err);
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
        const res = await axios.get(`${API_BASE}/episodes?name=${query}`);
        setEpisodes(res.data.data || []);
      } catch (err) {
        console.error("Error fetching episodes:", err);
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
        const res = await axios.get(`${API_BASE}/quotes?name=${query}`);
        setQuotes(res.data.data || []);
      } catch (err) {
        console.error("Error fetching quotes:", err);
        setQuotes([]);
      }
      setLoadingQuotes(false);
    };

    fetchQuotes();
  }, [query, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setQuery("");
  };

  return (
    <div className="min-h-screen relative">
      <CrystalBackground />
      
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <Logo />
        <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
        <SearchBar activeTab={activeTab} onSearch={setQuery} />

        <div className="mt-8">
          {activeTab === "characters" && (
            <CharacterGrid characters={characters} isLoading={loadingCharacters} />
          )}
          {activeTab === "episodes" && (
            <EpisodeGrid episodes={episodes} isLoading={loadingEpisodes} />
          )}
          {activeTab === "quotes" && (
            <QuoteGrid quotes={quotes} isLoading={loadingQuotes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
