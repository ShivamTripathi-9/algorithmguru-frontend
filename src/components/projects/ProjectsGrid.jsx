import ProjectCard from "./ProjectCard";
import EmptyState from "../common/EmptyState";

export default function ProjectsGrid({ projects, view, onReset }) {
  if (!projects || projects.length === 0) {
    return (
      <EmptyState
        title="No AI Projects Found"
        description="There are no projects matching your current search or filters."
        buttonText="Reset Filters"
        onClick={onReset}
      />
    );
  }

  if (view === "list") {
    return (
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}