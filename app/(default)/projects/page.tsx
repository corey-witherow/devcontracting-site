"use client";
import ProjectsGrid from "@/components/projects-grid";
import { useSession } from "next-auth/react";

export default function Projects() {
  const { data: session } = useSession();

  return (
    <>
      {session && session.user && (
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <ProjectsGrid />
            </div>
          </div>
        </section>
      )}
      {!session && (
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              User Unauthorized
            </div>
          </div>
        </section>
      )}
    </>
  );
}
