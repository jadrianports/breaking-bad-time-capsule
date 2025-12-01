# ⚗️ Breaking Bad Time Capsule

> **"Stay out of my territory."** — Me, talking to Alzheimer's.

## 🧠 The "Why"

i realize that one day I'm going to be 90 years old, in a rocking chair (straightjacket), and I'll completely forget who Walter White is. I'll look at a chemistry set and think, *"Oh, that's for baking cookies!"* instead of *"Time to cook meth."*

This little project is my insurance policy. It exists solely so that future me, who'll be ravaged by time and potentially senile can click a button, see a picture of Jesse Pinkman, and remember **YEAH SCIENCE!**.

If you see me in a nursing home (mental hospital) in the year 2080, just hand me an iPad with this URL open. I'll know what to do.

---

## 🛠️ The "Real Why"

While I do love the show, this project was actually built to tackle a very specific, annoying web development nemesis: **The CORS Policy.**

I wanted to build a slick UI using React, but when I tried to fetch data directly from a 3rd-party API, the browser blocked the requests due to `Access-Control-Allow-Origin` restrictions.

### The Solution: Custom Proxy Server
To bypass this without losing my mind, I architected a custom **Express Proxy Server**. 

Instead of the React frontend calling the external API directly (which gets blocked), it calls my local Express backend. Because servers don't have the same CORS restrictions as browsers, the backend fetches the data, filters it, and passes it back to the frontend smoothly.

### The Stack
* **Frontend:** React, Tailwind CSS, Framer Motion (flip cards), Three.js (floating crystals).
* **Backend:** Node.js, Express (Proxy Logic).
* **Data Source:** The Breaking Bad API by [Mridul Panda](https://www.mridul.tech).

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Fire up the Proxy Server
The backend handles the data fetching and filtering logic.

```bash
npm run proxy-server
# Server runs on localhost:5000
```

### 3. Launch the UI
The frontend connects to the proxy to render the data.

```bash
npm run dev
# React app runs on localhost:8080
```
---

## 🙌 Acknowledgements

Huge shoutout to **Mridul Panda** for maintaining a Breaking Bad API even after [Timbiles's](https://github.com/timbiles/Breaking-Bad--API) was shut down.
* **Website:** [www.mridul.tech](https://www.mridul.tech)
* **GitHub:** [Mridul2820](https://github.com/Mridul2820)

---
