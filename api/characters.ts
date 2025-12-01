import axios from "axios";
import { getQueryString } from "./utils/getQueryString.js";

export default async function handler(req: any, res: any) {
  try {
    const queryName = getQueryString(req.query.name)?.toLowerCase();

    const response = await axios.get("https://api.mridul.tech/api/breaking-bad/characters");

    const filtered = response.data.data.filter(
      (char: any) =>
        typeof char.name === "string" &&
        char.name.toLowerCase().includes(queryName)
    );

    res.status(200).json({ success: true, data: filtered });
  } catch (error: any) {
    console.error("CHARACTERS FETCH Error:", error);
    res.status(500).json({ error: true, message: "Failed to fetch characters" });
  }
}
