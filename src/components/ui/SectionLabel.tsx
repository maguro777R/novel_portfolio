import type React from "react";
import { cx } from "./cx";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cx(
        "text-xs font-semibold uppercase tracking-normal text-[var(--color-gold-text)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
