import PageIllustration from "@/components/page-illustration";
import { Providers } from "@/components/providers";
import { SessionProvider } from "next-auth/react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grow">
      <Providers>
        <PageIllustration />

        {children}
      </Providers>
    </main>
  );
}
