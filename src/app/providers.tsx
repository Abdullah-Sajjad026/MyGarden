"use client";

import { ThemeProvider } from "next-themes";

/** Wraps the app in next-themes so the `.dark` class is toggled on <html>. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
