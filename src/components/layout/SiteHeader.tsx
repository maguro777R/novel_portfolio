import { Link, NavLink } from "react-router-dom";
import { nav } from "../../data/site";
import { cx } from "../ui/cx";

export function SiteHeader() {
  return (
    <header className="hairline-bottom sticky top-0 z-40 bg-[var(--color-warm-white)]/95 backdrop-blur">
      <div className="page-frame flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          className="focus-ring motion-safe-default serif-heading text-lg hover:text-[var(--color-gold-text)]"
          to="/"
        >
          川野マグロ
        </Link>
        <nav
          aria-label="主要ナビゲーション"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium"
        >
          {nav.map((item) => (
            <NavLink
              className={({ isActive }) =>
                cx(
                  "focus-ring motion-safe-default text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                  isActive && "text-[var(--color-ink)]",
                )
              }
              key={item.href}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
