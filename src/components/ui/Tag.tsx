import type React from "react";
import { cx } from "./cx";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-[6px] border border-[var(--color-hairline)] bg-[var(--color-pale)] px-3 py-1 text-xs font-medium text-[var(--color-deep)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
