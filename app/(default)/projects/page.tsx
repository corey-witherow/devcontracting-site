import ProjectsGrid from "@/components/projects-grid";

export default function Projects() {
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
