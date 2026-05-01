import { Link } from "react-router-dom";
import { nav } from "../../data/site";

export function SiteFooter() {
  return (
    <footer className="hairline-top bg-[var(--color-pale)]">
      <div className="page-frame grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <Link className="serif-heading text-lg" to="/">
            川野マグロ
          </Link>
          <p className="muted-text mt-3 max-w-md text-sm leading-7">
            小説、エッセイ、掲載情報をまとめたポートフォリオです。
          </p>
        </div>
        <nav
          aria-label="フッターナビゲーション"
          className="grid gap-2 text-sm text-[var(--color-muted)] sm:justify-items-end"
        >
          {nav.map((item) => (
            <Link
              className="focus-ring motion-safe-default hover:text-[var(--color-ink)]"
              key={item.href}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="muted-text text-xs sm:col-span-2">
          © 2026 Kawano Maguro
        </p>
      </div>
    </footer>
  );
}
