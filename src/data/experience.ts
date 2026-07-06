/** Experience timeline — add a new role by appending an entry. */
export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Lyssin (Blyndspot · MyVoyce · Ansir)",
    role: "Lead Software Engineer (Founding)",
    period: "Nov 2024 — Present",
    summary:
      "Sole engineer on a five-person founding team. Joined to build the frontend, grew into full-stack ownership across three products — UI through API, database, and the AI layer.",
    highlights: [
      "Built the manager dashboard from MVP to v1 as the only frontend engineer",
      "Schema-validated structured-output layer over Amazon Bedrock across ~20 AI flows",
      "Refresh-token rotation auth with theft detection; transactional org-deletion cascade across ~25 tables",
    ],
  },
  {
    company: "Archer Affiliates",
    role: "Lead Frontend Engineer",
    period: "2024 — Present",
    summary:
      "Lead frontend on the affiliate platform — mentoring a junior engineer and collaborating with backend, QA, and product.",
    highlights: [
      "Led UI redesigns across the platform, including the bulk product-import flow",
      "Established component and button-variant conventions across the codebase",
    ],
  },
];
