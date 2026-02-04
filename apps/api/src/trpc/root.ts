import { router } from "./trpc.js";
import { productRouter } from "../modules/product/router.js";

export const appRouter = router({
  product: productRouter,
});

export type AppRouter = typeof appRouter;
