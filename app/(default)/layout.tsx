"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";
import { Providers } from "@/components/providers";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="grow">
        <Providers>
          <PageIllustration />

          {children}
        </Providers>
      </main>

      <Footer />
    </>
  );
}
