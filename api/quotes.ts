// api/quotes.ts
import axios from "axios";
import { getQueryString } from "./utils/getQueryString.js";

export default async function handler(req: any, res: any) {
  try {
    const queryAuthor = getQueryString(req.query.name)?.toLowerCase();

    const response = await axios.get(
      "https://api.mridul.tech/api/breaking-bad/quotes"
    );

    const filtered = response.data.data.filter(
      (q: any) =>
        typeof q.author === "string" &&
        q.author.toLowerCase().includes(queryAuthor)
    );

    res.status(200).json({ success: true, data: filtered });
  } catch (error: any) {
    console.error("QUOTES FETCH ERROR:", error?.message || error);
    res.status(500).json({ error: true, message: "Failed to fetch quotes" });
  }
}
