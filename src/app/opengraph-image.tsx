import { ImageResponse } from "next/og";
import { company } from "@/lib/content";
export const alt = "Chaveiro Nenê — Freguesia do Ó";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F7F7F7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 76px",
        color: "#101010",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <svg width="120" height="120" viewBox="0 0 400 400">
          <path
            d="M84 327V74H143L257 235V74H317V327H258L144 166V327Z"
            fill="#1E1E22"
          />
          <path
            d="M197 235 C197 223 207 214 219 214 C231 214 241 223 241 235 C241 243 237 250 231 254 L241 289 H197 L207 254 C201 250 197 243 197 235 Z"
            fill="#B08A4A"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ fontSize: 38, letterSpacing: 5 }}>
            CHAVEIRO NENÊ
          </strong>
          <span style={{ fontSize: 20, letterSpacing: 4, color: "#8C6600" }}>
            FREGUESIA DO Ó
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 65,
          lineHeight: 1.1,
          letterSpacing: -2,
          color: "#8C6600",
        }}
      >
        Chaveiro na Freguesia do Ó<br />
        Atendimento residencial e automotivo.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #D5D5D5",
          paddingTop: 24,
          fontSize: 24,
        }}
      >
        <span>Residencial · Automotivo · Chaves codificadas</span>
        <span>{company.phone}</span>
      </div>
    </div>,
    size,
  );
}
