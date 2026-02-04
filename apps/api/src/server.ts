import Fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./trpc/root.js";
import { createContext } from "./trpc/context.js";

const app = Fastify();

await app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

app.listen({ port: 4000 });
console.log("API on http://localhost:4000");
