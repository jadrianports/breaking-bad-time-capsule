// api/episodes.ts
import axios from "axios";
import { getQueryString } from "./utils/getQueryString.js";

export default async function handler(req: any, res: any) {
  try {
    const queryTitle = getQueryString(req.query.name)?.toLowerCase();

    const response = await axios.get(
      "https://api.mridul.tech/api/breaking-bad/episodes"
    );

    const filtered = response.data.data.filter(
      (ep: any) =>
        typeof ep.title === "string" &&
        ep.title.toLowerCase().includes(queryTitle)
    );

    res.status(200).json({ success: true, data: filtered });
  } catch (error: any) {
    console.error("EPISODE FETCH ERROR:", error?.message || error);
    res.status(500).json({ error: true, message: "Failed to fetch episodes" });
  }
}
