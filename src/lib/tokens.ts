export const colors = {
  warmWhite: "#FAF9F6",
  surface: "#FFFFFF",
  ink: "#1E1E1C",
  muted: "#6F6A62",
  hairline: "#E6E1D8",
  gold: "#A88A4A",
  goldText: "#7F642C",
  deep: "#3F3A32",
  pale: "#F2EFE8",
} as const;

export const fonts = {
  serif: '"Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", serif',
  sans: '"Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif',
} as const;

export const layout = {
  pageGutter: "clamp(20px, 5vw, 72px)",
  contentMax: "1180px",
  readableMax: "42rem",
  radius: "6px",
  focusRing: "0 0 0 3px rgba(168, 138, 74, 0.28)",
} as const;

export type ColorToken = keyof typeof colors;
export type FontToken = keyof typeof fonts;
export type LayoutToken = keyof typeof layout;
