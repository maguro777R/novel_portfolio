import type React from "react";
import { SectionLabel } from "../ui";
import { cx } from "../ui/cx";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cx("page-frame page-section", className)}>{children}</div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cx("max-w-4xl", className)}>
      {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
      <h1 className="serif-heading mt-4 text-4xl sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="muted-text mt-6 max-w-2xl text-base leading-8">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
