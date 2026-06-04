import type { Project, ProjectDocument } from "@/types/project";
import { workAsset } from "@/lib/work-assets";
import { PROJECT_MEDIA } from "@/data/media";

function doc(label: string, path: string): ProjectDocument {
  return { label, path, type: "pdf" };
}

const IMG = /\.(jpe?g|png|webp|gif)$/i;
const VIDEO = /\.(mp4|webm)$/i;

/** Showcase catalog — on-page: images & video only; PDFs linked in modal */
export const workProjects: Project[] = [
  {
    id: "spa-wellness-interior",
    name: "SPA Wellness & Therapy Interior",
    typology: "Interior",
    year: "2025",
    location: "SPA — Wellness",
    description:
      "Full interior visualization package: therapy rooms, jacuzzi, waiting lobby, and walkthrough render set.",
    span: "tall",
    cover: "SPA/render/NEW 1.jpg",
    gallery: [
      "SPA/render/NEW 2.jpg",
      "SPA/render/therapy room.jpeg",
      "SPA/render/jacuzzi.jpeg",
      "SPA/render/waiting lobby.jpeg",
      "SPA/render/NEW 5.jpg",
    ],
    documents: [
      doc("SPA Layout — Option 1", "SPA/spa-new.pdf"),
      doc("SPA Layout — Option 2", "SPA/spa-new OPTION 2.pdf"),
      doc("SPA Model Sheet", "SPA/spa-Model.pdf"),
    ],
  },
  {
    id: "spa-mezzanine-layout",
    name: "SPA Mezzanine & Clean File",
    typology: "Interior",
    year: "2025",
    location: "SPA",
    description: "Mezzanine planning and coordinated spa technical documentation.",
    span: "standard",
    cover: "SPA/render/3.jpeg",
    gallery: ["SPA/render/4.jpeg", "SPA/render/1.jpeg", "SPA/render/2.jpeg"],
    documents: [doc("SPA Model Export", "SPA/spa-Model.pdf")],
  },
  {
    id: "sector-105-residence",
    name: "Sector 105 Residence",
    typology: "Residential",
    year: "2025",
    location: "Noida Sector 105",
    description:
      "Residential interiors and house planning with bedroom renders and furniture coordination.",
    span: "wide",
    cover: "105 noida/render/bed room 1 (a).png",
    gallery: [
      "105 noida/render/bed room 1 (b).png",
      "105 noida/render/view -1 (1).png",
      "105 noida/tile.jpg",
    ],
    documents: [
      doc("House Plan", "105 noida/house plan-Model.pdf"),
      doc("Floor Plan", "105 noida/floor plan.pdf"),
      doc("Furniture Layout", "105 noida/furniture layout.pdf"),
      doc("Foundation Details", "105 noida/FOUNDATION DETAILS  17-9-25-Model.pdf"),
    ],
  },
  {
    id: "sector-105-zoning",
    name: "Sector 105 Zoning Plan",
    typology: "Commercial",
    year: "2025",
    location: "Noida, UP",
    description: "Land-use and zoning documentation for Sector 105 urban parcel.",
    span: "standard",
    cover: "105 noida/tile.jpg",
    documents: [doc("Zoning Plan Model", "105 noida/zoning plan-Model.pdf")],
  },
  {
    id: "c11-tower-noida",
    name: "C-11 Multi-Storey Tower",
    typology: "Commercial",
    year: "2025",
    location: "Noida — C-11",
    description:
      "Multi-level tower: basement through third floor plans, stilt, driveways, and elevation package.",
    span: "tall",
    cover: "105 noida/render/view -1 (1).png",
    gallery: ["105 noida/tile.jpg", "105 noida/washroom.PNG"],
    documents: [
      doc("Front Elevation", "105 noida/c-11/front elevation.pdf"),
      doc("Ground Floor Plan", "105 noida/c-11/GROUND FLOOR PLAN.pdf"),
      doc("First Floor Plan", "105 noida/c-11/FIRST FLOOR PLAN.pdf"),
      doc("Second Floor Plan", "105 noida/c-11/SECOND FLOOR PLAN.pdf"),
      doc("Third Floor Plan", "105 noida/c-11/THIRD FLOOR PLAN.pdf"),
      doc("Basement Plan", "105 noida/c-11/BASEMENT FLOOR PLAN.pdf"),
      doc("Stilt Floor Plan", "105 noida/c-11/STILT FLOOR PLAN.pdf"),
      doc("Project Status", "105 noida/c-11/Status.pdf"),
    ],
  },
  {
    id: "noida-washroom-interior",
    name: "Sector 105 Washroom Suites",
    typology: "Interior",
    year: "2025",
    location: "Noida Sector 105",
    description: "Detailed washroom layout series with PNG previews and PDF drawing sets.",
    span: "standard",
    cover: "105 noida/washroom.PNG",
    gallery: ["105 noida/tile.jpg"],
    documents: [
      doc("Washroom Layout 1", "105 noida/WASHROOM 1 LAYOUT.pdf"),
      doc("Washroom Layout 2", "105 noida/WASHROOM  2 LAYOUT.pdf"),
      doc("Washroom Layout 3", "105 noida/WASHROOM 3 LAYOUT.pdf"),
      doc("New Furniture Layout", "105 noida/NEW FURNITURE LAYOUT.pdf"),
    ],
  },
  {
    id: "dholera-airport-terminal",
    name: "Dholera Airport — Cargo Terminal",
    typology: "Concept",
    year: "2025",
    location: "Dholera SIR, Gujarat",
    description: "International airport cargo terminal block planning and aerial study.",
    span: "wide",
    cover: "dholera files/1.png",
    gallery: ["dholera files/bed .jpeg", "dholera files/LOGO.webp"],
    documents: [
      doc(
        "Cargo Terminal Block",
        "dholera files/DHOLERA AIRPORT - CAGRO TERMINAL BLOCK.pdf",
      ),
    ],
  },
  {
    id: "worldmark-2nd-floor",
    name: "Interior Office Projects",
    typology: "Commercial",
    year: "2026",
    location: "Worldmark, NCR",
    description:
      "Complete interior office drawing sets: Worldmark 2nd floor fit-out, zoning studies, and coordinated layout documentation.",
    span: "wide",
    cover: "office_innterior2.jpeg",
    gallery: ["dholera files/1.png", "dholera files/bed .jpeg"],
    documents: [
      doc("Drawing Set", "10-03-2026/2ND FLOOR -Drawings Set.pdf"),
      doc("Existing Plan", "10-03-2026/EXISTING PLAN.pdf"),
      doc("Furniture Plan", "10-03-2026/FURNITURE PLAN.pdf"),
      doc("Ceiling Plan", "10-03-2026/CEILING PLAN.pdf"),
      doc("Flooring Plan", "10-03-2026/FLOORING PLAN.pdf"),
      doc("Civil Glazing Plan", "10-03-2026/CIVIL GLAZING PLAN.pdf"),
      doc("Worldmark Model", "dholera files/5-Worldmark - 2nd Floor-Model.pdf"),
      doc("Office Layout", "dholera files/5-Worldmark - 2nd Floor-OFFICE LAYOUT.pdf"),
      doc("Zoning Option 1", "dholera files/ZOING PLAN OPTION -1.pdf"),
    ],
  },
  {
    id: "bird-office-3rd-floor",
    name: "Bird Office — 3rd Floor Fit-Out",
    typology: "Interior",
    year: "2026",
    location: "NCR",
    description: "Third floor interior package with washroom, carpet, ceiling, and furniture layouts.",
    span: "standard",
    cover: "dholera files/LOGO.webp",
    gallery: ["dholera files/bed .jpeg"],
    documents: [
      doc("Drawing Set", "10-03-2026/3RD FLOOR/3ND FLOOR -Drawings Set.pdf"),
      doc("Washroom Layout", "10-03-2026/3RD FLOOR/3ND FLOOR -WASHROOM LAYOUT.pdf"),
      doc("Furniture Layout", "10-03-2026/3RD FLOOR/FURNITURE LAYOUT.pdf"),
      doc("Ceiling Layout", "10-03-2026/3RD FLOOR/CEILING LAYOUT.pdf"),
      doc("Carpet Layout", "10-03-2026/3RD FLOOR/CARPET LAYOUT.pdf"),
    ],
  },
  {
    id: "gse-buildings",
    name: "GSE Buildings",
    typology: "Industrial",
    year: "2025",
    location: "Industrial Campus",
    description:
      "Ground support equipment building documentation — layout plans and coordinated technical drawing sets.",
    span: "standard",
    cover: "iso view .jpeg",
    documents: [
      doc("GSE Buildings", "GSE_Buildings.pdf"),
      doc("GSE Buildings 2", "GSE_BUILDINGS2.pdf"),
    ],
  },
  {
    id: "gat-bangalore-campus",
    name: "Heyaderabad Terminal Project",
    typology: "Commercial",
    year: "2025",
    location: "Heyaderabad",
    description:
      "GAT site plan, mezzanine, roof, sections, elevations, and layout options.",
    span: "standard",
    cover: "heyderabad_terminal_project.jpeg",
    documents: [
      doc("Layout Option 1", "beg. project/option 1.pdf"),
      doc("Layout Option 2", "beg. project/option 2.pdf"),
      doc("Office Layout", "beg. project/OFFICE LAYOUT.pdf"),
    ],
  },
];

export const projects = workProjects;

export function getProjectCoverUrl(project: Project): string {
  return workAsset(project.cover);
}

export function getProjectImageFallback(id: string): string {
  return (
    PROJECT_MEDIA[id] ??
    PROJECT_MEDIA["spa-wellness-interior"] ??
    Object.values(PROJECT_MEDIA)[0]
  );
}

export function getDocumentUrl(path: string): string {
  return workAsset(path);
}

export function isDisplayableMedia(filePath: string): boolean {
  return IMG.test(filePath) || VIDEO.test(filePath);
}
