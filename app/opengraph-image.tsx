import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#9C9FA8" }}>
          jasonlimtech.vercel.app
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            Jason Lim
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#c9cbd1", maxWidth: 900 }}>
            Deployment Strategist &amp; Solution Engineer
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#6C9BFF" }}>
          <span>Customer Discovery</span>
          <span>·</span>
          <span>Enterprise AI</span>
          <span>·</span>
          <span>Operational Decision Platforms</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

export const alt = siteConfig.title;
