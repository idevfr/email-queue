import { Worker } from "bullmq";
import { sendMail } from "./nodemailer";
const emailWorker = new Worker(
  "emails",
  async function (job) {
    console.log(`job is processing...`);
    sendMail(job.data);
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
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
