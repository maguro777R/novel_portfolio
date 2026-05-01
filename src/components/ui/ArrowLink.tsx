import { Link, type LinkProps } from "react-router-dom";
import { cx } from "./cx";

export function ArrowLink({ children, className, ...props }: LinkProps) {
  return (
    <Link
      className={cx(
        "focus-ring motion-safe-default inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold-text)]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true">-&gt;</span>
    </Link>
  );
}
