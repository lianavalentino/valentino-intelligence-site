import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#f7f5f0",
          color: "#1b1d22",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 2, textTransform: "uppercase", color: "#5b5f6a" }}>
          Valentino Intelligence
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, maxWidth: 1000 }}>
          I turn the data and busywork in your business into systems that run on their own.
        </div>
        <div style={{ fontSize: 28, color: "#5b5f6a" }}>Liana Valentino · Portland, Oregon</div>
      </div>
    ),
    size,
  );
}
