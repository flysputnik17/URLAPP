import express from "express";
const router = express.Router();
import fetch from "node-fetch";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1000,
  max: 5,
  message: "Too many requests, please try again later.",
});

router.post("/", limiter, async (req, res) => {
  const { urls } = req.body;

  if (!Array.isArray(urls) || urls.length < 3) {
    return res.status(400).json({ error: "Please provide at least 3 URLs." });
  }

  try {
    const fetchPromises = urls.map((url) =>
      fetch(`https://api.linkpreview.net/?q=${encodeURIComponent(url)}`, {
        headers: {
          "X-Linkpreview-Api-Key": process.env.APIkey,
        },
      }).then((response) => response.json())
    );

    const results = await Promise.all(fetchPromises);
    res.json(results);
  } catch (error) {
    console.error("Error fetching metadata:", error);
    res.status(500).json({ error: "Error fetching metadata" });
  }
});

export default router;
