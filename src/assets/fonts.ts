import { CSSProperties } from "react";

export const fontNames = ["Jua", "Pacifico"] as const; // font names from google fonts
export type FontName = (typeof fontNames)[number];

export const stylesBySpecialText: Record<string, CSSProperties> = {
  key: { fontFamily: "Pacifico", color: "rgb(212, 199, 112)" },
};
