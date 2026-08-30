import express from "express";
import { emailQueue } from "./queue.js";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  res.send("<h1>working....</h1>");
});
app.post("/emails", async (req, res) => {
  const { to, subject, body } = req.body;
  const job = await emailQueue.add(
    "send-welcome-mail",
    { to, subject, body },
    { attempts: 3, backoff: { type: "exponential", delay: 1500 } },
  );
  res.json({ message: "sending mail", job });
});
app.listen(PORT, () => {
  console.log(`running at : http://localhost:${PORT}`);
});
