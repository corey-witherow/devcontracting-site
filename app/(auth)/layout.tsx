import PageIllustration from "@/components/page-illustration";
import { Providers } from "@/components/providers";

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
