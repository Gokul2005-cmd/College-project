import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use REST API directly instead of SDK
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

app.post("/api/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("📝 Received prompt:", prompt);

    // Add farming context to the prompt
    const farmingPrompt = `You are a helpful farming assistant for Indian farmers. Provide practical, actionable advice. User question: ${prompt}`;
    
    console.log("🚀 Calling Gemini API...");
    
    // Call Gemini API directly using fetch
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: farmingPrompt
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Gemini API Error:", errorData);
      throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    
    console.log("✅ Got response from Gemini");
    res.json({ text });
  } catch (err) {
    console.error("❌ Error Details:");
    console.error("Error message:", err.message);
    console.error("Full error:", err);
    res.status(500).json({ 
      error: "Failed to generate response",
      details: err.message 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`✅ API endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`🔑 API Key loaded: ${GEMINI_API_KEY ? 'Yes' : 'No'}`);
});