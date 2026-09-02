import { Queue } from "bullmq";
const emailQueue = new Queue("emails", {
  connection: {
    host: "rediseq",
    port: 6379,
  },
});
export { emailQueue };
