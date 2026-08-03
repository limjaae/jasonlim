"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Interview } from "@/lib/data/interviews";

export function InterviewCard({ interview }: { interview: Interview }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="flex h-full flex-col p-5">
      <h3 className="font-heading text-base font-semibold">{interview.speaker}</h3>
      <p className="text-sm text-muted-foreground">
        {interview.role}
        {interview.organisation ? ` · ${interview.organisation}` : ""}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-foreground/85 text-pretty">
        “{interview.takeaway}”
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {interview.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand"
      >
        {open ? "Hide insights" : "Read insights"}
        <ChevronDown
          className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {interview.insight}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
