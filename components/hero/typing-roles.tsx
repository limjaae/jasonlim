"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/site";
import { useMediaQuery } from "@/hooks/use-media-query";

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1400;

export function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing"
  );
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (reducedMotion) return;
    const current = roles[roleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETE_SPEED
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }, 0);
      return () => clearTimeout(t);
    }
  }, [text, phase, roleIndex, reducedMotion]);

  if (reducedMotion) {
    return <span className="text-brand">{roles[0]}</span>;
  }

  return (
    <span className="text-brand">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] animate-pulse bg-brand align-middle" />
    </span>
  );
}
