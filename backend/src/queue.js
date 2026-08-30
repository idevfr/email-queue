import { Queue } from "bullmq";

const emailQueue = new Queue("emails", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});
export { emailQueue };
