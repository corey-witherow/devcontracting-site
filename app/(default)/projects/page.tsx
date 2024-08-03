"use client";
import ProjectsGrid from "@/components/projects-grid";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Projects() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <ProjectsGrid />
          </div>
        </div>
      </section>
    </>
  );
}
