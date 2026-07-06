/** Technology stack — add a tool by appending to the relevant group's items. */
export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "frontend",
    items: ["React", "Next.js", "TypeScript", "MUI", "TanStack Query", "Zod"],
  },
  {
    label: "backend",
    items: ["Node.js", "Express", "PostgreSQL", "Knex", "REST APIs"],
  },
  {
    label: "ai & cloud",
    items: ["AWS Lambda", "Amazon Bedrock", "Serverless Framework"],
  },
  {
    label: "tooling",
    items: ["Git", "Jest", "Cursor", "Claude Code"],
  },
];
