import Fastify from "fastify";
import cors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./trpc/root.js";
import { createContext } from "./trpc/context.js";

const app = Fastify();

// ✅ CORS MUST be registered first
await app.register(cors, {
  origin: ["http://localhost:3000"],
  credentials: true,
});

await app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
    createContext,
  },
});

await app.listen({
  port: 4000,
  host: "0.0.0.0",
});

console.log("API on http://localhost:4000");
