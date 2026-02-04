"use client";

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@stylematch/api/src/trpc/root";

export const trpc = createTRPCReact<AppRouter>();
