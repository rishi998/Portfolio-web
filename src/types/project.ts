export type ProjectCategory =
  | "All"
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Concept";

export type ProjectTypology = Exclude<ProjectCategory, "All">;

/** PDFs open in a new browser tab — not embedded on the page */
export type DocumentType = "pdf";

export interface ProjectDocument {
  label: string;
  path: string;
  type: DocumentType;
}

export interface Project {
  id: string;
  name: string;
  typology: ProjectTypology;
  year: string;
  location: string;
  description: string;
  span: "tall" | "wide" | "standard";
  /** Image path only (jpg, png, webp, etc.) */
  cover: string;
  /** Image/video paths only — no PDFs */
  gallery?: string[];
  video?: string;
  documents: ProjectDocument[];
}
