import z from "zod";
export const ProductSchema = z.object({
    id: z.string(),
    title: z.string(),
    price: z.object({
        amount: z.number(),
        currency: z.string(),
    }),
});
