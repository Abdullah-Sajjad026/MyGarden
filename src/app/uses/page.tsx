import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Hardware, software, and the AI tooling workflow I actually work with.",
};

/**
 * /uses — grouped, lightly opinionated. Edit the data below to update.
 * TODO(Abdullah): confirm/expand items marked with ⚑.
 */
const sections: { label: string; items: { name: string; note: string }[] }[] = [
  {
    label: "hardware",
    items: [
      {
        name: "Lenovo Legion 16IAX10 · RTX 5060",
        note: "One machine for everything — dev, and the game backlog it keeps losing to.",
      },
      {
        name: "⚑ Monitor / keyboard / mouse",
        note: "Dell P3223QE, Magic Keyboard, Logitech M720 Triathlon",
      },
    ],
  },
  {
    label: "editor & terminal",
    items: [
      {
        name: "VS Code",
        note: "Primary editor.",
      },
      {
        name: "⚑ Terminal + shell",
        note: "Windows Terminal + WSL2 + Starship. I use the terminal for many things, so I keep it fast and simple.",
      },
    ],
  },
  {
    label: "ai workflow",
    items: [
      {
        name: "Claude Code",
        note: "Agentic tasks that span many files — migrations, conventions sweeps, test scaffolding. I write the plan; it executes against the repo.",
      },
      {
        name: "Structured prompting over vibes",
        note: "Anything an agent builds gets a written spec first. Same habit as typed API contracts — schemas over hope.",
      },
    ],
  },
  {
    label: "stack defaults",
    items: [
      {
        name: "React · Next.js · TypeScript",
        note: "Frontend default. TypeScript strict mode, always.",
      },
      {
        name: "Node.js · Express · PostgreSQL",
        note: "Backend default — boring, proven, debuggable.",
      },
      {
        name: "AWS Lambda · Amazon Bedrock",
        note: "Serverless backends and the AI layer at Lyssin.",
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="spec-label">uses</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        What I work with
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The setup, the defaults, and why. Inspired by{" "}
        <a
          href="https://uses.tech"
          className="text-accent-text underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          uses.tech
        </a>
        .
      </p>
      <div className="mt-12 grid gap-10">
        {sections.map((section) => (
          <section key={section.label}>
            <p className="spec-label">{section.label}</p>
            <Separator className="mt-3" />
            <ul className="mt-4 grid gap-4">
              {section.items.map((item) => (
                <li key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-[15px] text-muted-foreground">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
