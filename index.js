const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

const BOT_TOKEN = "TO_REPLACE";
const CHAT_ID = "TO_REPLACE";

app.post("/", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).send("No message");
  }

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });
    res.send("✅ Message sent to Telegram.");
  } catch (err) {
    res.status(500).send("❌ Error sending message.");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
