"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useClientValue } from "@/hooks/use-client-value";

const NetworkScene = dynamic(
  () => import("./network-scene").then((m) => m.NetworkScene),
  { ssr: false }
);

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function StaticFallback() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full opacity-70"
      aria-hidden="true"
    >
      <g stroke="#3a5bc7" strokeOpacity="0.35" fill="none">
        <line x1="80" y1="90" x2="200" y2="60" />
        <line x1="200" y1="60" x2="320" y2="110" />
        <line x1="80" y1="90" x2="140" y2="210" />
        <line x1="200" y1="60" x2="220" y2="200" />
        <line x1="320" y1="110" x2="280" y2="230" />
        <line x1="140" y1="210" x2="220" y2="200" />
        <line x1="220" y1="200" x2="280" y2="230" />
        <line x1="140" y1="210" x2="120" y2="320" />
        <line x1="220" y1="200" x2="230" y2="330" />
        <line x1="280" y1="230" x2="300" y2="310" />
      </g>
      <g fill="#6C9BFF">
        <circle cx="80" cy="90" r="5" />
        <circle cx="200" cy="60" r="6" />
        <circle cx="320" cy="110" r="5" />
        <circle cx="140" cy="210" r="6" />
        <circle cx="220" cy="200" r="7" />
        <circle cx="280" cy="230" r="5" />
        <circle cx="120" cy="320" r="5" />
        <circle cx="230" cy="330" r="5" />
        <circle cx="300" cy="310" r="5" />
      </g>
    </svg>
  );
}

export function NetworkVisual() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const webglSupported = useClientValue(hasWebGL, false);
  const canAnimate = !reducedMotion && webglSupported;

  return (
    <div className="relative aspect-square w-full max-w-lg">
      {canAnimate ? <NetworkScene /> : <StaticFallback />}
    </div>
  );
}
