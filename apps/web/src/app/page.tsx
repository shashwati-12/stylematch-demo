"use client";

import { trpc } from "../lib/trpc/client";

export default function HomePage() {
  const { data, isLoading } = trpc.product.featured.useQuery();

  if (isLoading) return <div>Loading…</div>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Featured Products</h1>
      <ul className="mt-4 space-y-2">
        {data?.map((product) => (
          <li key={product.id} className="border p-4 rounded">
            <div>{product.title}</div>
            <div>
              ₹{product.price.amount / 100} {product.price.currency}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
