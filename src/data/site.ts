/**
 * Single source of truth for identity and links.
 * Update here — every page reads from this file.
 */
export const site = {
  name: "Abdullah Sajjad",
  role: "Founding Engineer",
  // Positioning line — hero headline. Outcome-first, no "passionate".
  positioning:
    "I build production web products end to end — from the React frontend to the API, database, and AI layer.",
  tagline:
    "Founding engineer at Lyssin. Lead frontend at Archer Affiliates. Frontend-heavy, AI-powered full-stack.",
  url: "https://abdullahsajjad.me",
  email: "abdullahsa026@gmail.com", // TODO: confirm public email
  location: "Rahim Yar Khan, Pakistan (remote, US-timezone overlap)",
  socials: {
    github: "https://github.com/Abdullah-Sajjad026", // TODO: confirm handles
    linkedin: "https://www.linkedin.com/in/abdullahsajjad026",
  },
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  // Writing hidden until there's a body of posts worth featuring — uncomment to re-enable.
  // { label: "Writing", href: "/writing" },
  { label: "Uses", href: "/uses" },
  { label: "About", href: "/about" },
] as const;
