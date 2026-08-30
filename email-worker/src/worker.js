import Redis from "ioredis";
import { Worker } from "bullmq";
import { sendMail } from "./nodemailer.js";
const redis = new Redis(process.env.REDIS_URI || "redis://redis:6379", {
  maxRetriesPerRequest: null,
});
const emailWorker = new Worker(
  "emails",
  async function (job) {
    console.log(`job is processing...`);
    sendMail(job.data);
  },
  {
    connection: redis,
  },
);
emailWorker.on("error", (err) => {
  console.log(err);
});
emailWorker.on("failed", (data, err) => {
  console.log(data + "failed with", err);
});
emailWorker.on("completed", (job) => {
  console.log(job + "is completed");
});
