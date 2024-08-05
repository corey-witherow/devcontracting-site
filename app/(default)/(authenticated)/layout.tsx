"use client";

import { Providers } from "@/components/providers";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });
  return (
    <main className="grow">
      <Providers>{children}</Providers>
    </main>
  );
}
