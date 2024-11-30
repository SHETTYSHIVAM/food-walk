import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import cors from "cors"
const app = express();
import Feedback from "./models/feedback-model.js"

app.use(cors());
app.use(express.json());

connectDB()
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((error) => {
    console.log("Database connection failed:: ", error);
    process.exit(1);
  });

app.post("/api/feedback", async (req, res) => {
  const { name, whatCanbeImproved, rating, comments } = req.body;

  if (!name || !whatCanbeImproved || !rating || !comments) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newFeedback = new Feedback({
      name,
      whatCanbeImproved,
      rating,
      comments,
    });
    console.log(newFeedback)
    await newFeedback.save();
    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
