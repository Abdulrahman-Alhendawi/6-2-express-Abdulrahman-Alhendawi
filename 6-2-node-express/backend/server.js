import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// Create the Express app
const app = express();

// Enable CORS so the frontend (running on a different port) can call this API
app.use(cors());

// Basic test route for the root path
app.get("/", (req, res) => {
	res.send("Welcome to the Quote Generator API");
});

// Quote API route that returns a random quote as JSON
app.get("/api/quote", (req, res) => {
	const quote = getRandomQuote();
	res.json({ quote });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});