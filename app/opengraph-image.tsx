import { ImageResponse } from "next/og";

export const alt = "D BUILDS — Building myself. Building things. Building my future.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0b0a",
          color: "#ede8df",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#8f8a80" }}>
          BUILD LOG / 001 · LAS VEGAS, NV
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3 }}>
          <span>I&apos;M BUILDING A LIFE</span>
          <span>I ONCE THOUGHT</span>
          <span style={{ color: "#c6f432" }}>I WAS LATE FOR.</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 800, letterSpacing: 2 }}>
          D BUILDS<span style={{ color: "#c6f432" }}>.</span>
        </div>
      </div>
    ),
    size
  );
}
