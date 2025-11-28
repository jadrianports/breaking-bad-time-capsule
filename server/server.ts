import express from "express";
import cors from "cors";
import axios from "axios";
import {ParsedQs} from "qs"

const app = express();
app.use(cors());

/**
 * Helper to extract query as string safely
 */
const getQueryString = (queryParam: string | ParsedQs | (string | ParsedQs)[] | undefined): string => {
  if (!queryParam) return "";
  if (typeof queryParam === "string") return queryParam;
  if (Array.isArray(queryParam)) {
    const firstString = queryParam.find((item): item is string => typeof item === "string");
    return firstString || "";
  }
  return "";
};

/**
 * Characters endpoint
 */
app.get("/api/characters", async (req, res) => {
  try {
    const queryName = getQueryString(req.query.name).toLowerCase();

    const response = await axios.get("https://api.mridul.tech/api/breaking-bad/characters");

    const filtered = response.data.data.filter(
      (char: any) =>
        typeof char.name === "string" &&
        char.name.toLowerCase().includes(queryName)
    );

    res.json({ success: true, data: filtered });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Failed to fetch characters" });
  }
});

/**
 * Episodes endpoint
 */
app.get("/api/episodes", async (req, res) => {
  try {
    const queryTitle = getQueryString(req.query.name).toLowerCase();

    const response = await axios.get("https://api.mridul.tech/api/breaking-bad/episodes");

    const filtered = response.data.data.filter(
      (ep: any) =>
        typeof ep.title === "string" &&
        ep.title.toLowerCase().includes(queryTitle)
    );

    res.json({ success: true, data: filtered });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Failed to fetch episodes" });
  }
});

/**
 * Quotes endpoint
 */
app.get("/api/quotes", async (req, res) => {
  try {
    const queryAuthor = getQueryString(req.query.name).toLowerCase();

    const response = await axios.get("https://api.mridul.tech/api/breaking-bad/quotes");

    const filtered = response.data.data.filter(
      (q: any) =>
        typeof q.author === "string" &&
        q.author.toLowerCase().includes(queryAuthor)
    );

    res.json({ success: true, data: filtered });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Failed to fetch quotes" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
