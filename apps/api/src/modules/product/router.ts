import { router, publicProcedure } from "../../trpc/trpc.js";
import { ProductSchema } from "@stylematch/schema";
import { z } from "zod";

export const productRouter = router({
  featured: publicProcedure
    .output(z.array(ProductSchema))
    .query(() => {
      return [
        {
          id: "1",
          title: "Demo Product",
          price: { amount: 1999, currency: "INR" },
        },
      ];
    }),
});
