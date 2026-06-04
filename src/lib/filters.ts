import { HOSPITALITY_IDS, type FilterId } from "@/lib/constants";
import type { Project } from "@/types/project";

export function projectMatchesFilter(project: Project, filter: FilterId): boolean {
  if (filter === "All") return true;
  if (filter === "Hospitality") return HOSPITALITY_IDS.has(project.id);
  if (filter === "Visualization") return project.typology === "Concept";
  return project.typology === filter;
}
