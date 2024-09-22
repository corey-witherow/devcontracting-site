"use client";

import { Providers } from "@/components/providers";
import { SessionProvider } from "next-auth/react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <main className="grow">
      <SessionProvider>{children}</SessionProvider>
    </main>
  );
}
