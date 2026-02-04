import z from "zod";
export declare const ProductSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    price: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        currency: string;
    }, {
        amount: number;
        currency: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    price: {
        amount: number;
        currency: string;
    };
}, {
    id: string;
    title: string;
    price: {
        amount: number;
        currency: string;
    };
}>;
export type Product = z.infer<typeof ProductSchema>;
