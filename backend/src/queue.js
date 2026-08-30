import Redis from "ioredis";
import { Queue } from "bullmq";
const redis = new Redis(process.env.REDIS_URI || "redis://redis:6379", {
  maxRetriesPerRequest: null,
});
const emailQueue = new Queue("emails", {
  connection: redis,
});
export { emailQueue };
