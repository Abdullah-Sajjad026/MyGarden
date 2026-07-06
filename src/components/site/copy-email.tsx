"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

/** Click-to-copy email with a "Copied" confirmation state. */
export function CopyEmail() {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (permissions/older browser) — fall back to mailto.
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <Button onClick={handleCopy} className="font-mono text-[13px]">
      {copied ? <Check /> : <Copy />}
      {copied ? "Copied" : site.email}
    </Button>
  );
}
