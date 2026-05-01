import { Link, type LinkProps } from "react-router-dom";
import { cx } from "./cx";

type ButtonLinkProps = LinkProps & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cx(
        "focus-ring motion-safe-default inline-flex min-h-11 items-center justify-center rounded-[6px] border px-5 py-2 text-sm font-semibold",
        variant === "primary"
          ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-surface)] hover:border-[var(--color-deep)] hover:bg-[var(--color-deep)]"
          : "border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold-text)]",
        className,
      )}
      {...props}
    />
  );
}
