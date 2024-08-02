"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Requests() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20"></div>
          <h1>Requests</h1>
        </div>
      </section>
    </>
  );
}
