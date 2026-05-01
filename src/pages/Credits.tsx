import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { contact, credits } from "../data/site";

const tabs = ["掲載", "寄稿", "連載", "受賞・候補"];

const detailLines = [
  "文芸誌／Web文芸媒体／新聞・書評欄",
  "書籍（単行本・アンソロジー）",
];

const supportLines = [
  "文芸小説／短編／エッセイ／寄稿",
  "連載／書籍企画・構成／取材・インタビュー",
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={["text-xl leading-none", className].join(" ")}>
      -&gt;
    </span>
  );
}

function Icon({ name }: { name: "mail" | "book" | "pen" | "doc" }) {
  const common = "h-9 w-9 stroke-[1.45]";
  const iconProps = {
    className: common,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 32 32",
  };

  if (name === "mail") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <rect height="18" rx="1" width="24" x="4" y="7" />
        <path d="m5 9 11 9 11-9" />
      </svg>
    );
  }

  if (name === "pen") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="m7 24 4-1 13-13-3-3L8 20zM18 10l3 3" />
      </svg>
    );
  }

  if (name === "doc") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="M9 5h11l3 3v19H9z" />
        <path d="M19 5v5h5M12 15h8M12 20h6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" {...iconProps}>
      <path d="M6 7.5h7.5A4.5 4.5 0 0 1 18 12v13a4.5 4.5 0 0 0-4.5-4.5H6z" />
      <path d="M26 7.5h-7.5A4.5 4.5 0 0 0 14 12v13a4.5 4.5 0 0 1 4.5-4.5H26z" />
    </svg>
  );
}

function Breadcrumb() {
  return (
    <nav className="flex flex-wrap items-center gap-5 text-sm text-[var(--color-deep)]" aria-label="パンくず">
      <Link className="transition-colors hover:text-[var(--color-gold-text)]" to="/">
        ホーム
      </Link>
      <span className="text-[var(--color-gold-text)]">›</span>
      <span>掲載・実績</span>
    </nav>
  );
}

function categoryForCredit(index: number) {
  return ["掲載予定", "寄稿", "連載"][index] ?? "掲載";
}

function titleForCredit(credit: (typeof credits)[number], index: number) {
  if (index === 0) {
    return `${credit.venue}「${credit.title}」`;
  }

  if (index === 1) {
    return `${credit.venue} 寄稿「${credit.title}」`;
  }

  return `${credit.venue}「${credit.title}」`;
}

function metaForCredit(credit: (typeof credits)[number], index: number) {
  if (index === 0) {
    return "掲載予定：2026年春号　｜　文芸誌「群青」";
  }

  if (index === 1) {
    return "掲載：2025年6月10日　｜　Web文芸「すばる」エッセイ欄";
  }

  return "連載期間：2024年1月 - 12月（全12回）　｜　Webメディア「灯台」";
}

function TimelineItem({
  credit,
  index,
}: {
  credit: (typeof credits)[number];
  index: number;
}) {
  return (
    <article className="relative grid gap-5 border-b border-[var(--color-hairline)] pb-8 last:border-b-0 sm:grid-cols-[120px_1fr]">
      <div className="font-serif text-[26px] leading-tight text-[var(--color-ink)] sm:pt-2">
        {credit.year}
        {index === 0 && (
          <span className="block text-sm leading-7 text-[var(--color-muted)]">（予定）</span>
        )}
      </div>
      <div className="relative pl-8 sm:pl-11">
        <span className="absolute bottom-0 left-0 top-0 w-px bg-[var(--color-hairline)]" />
        <span className="absolute -left-[5px] top-[0.62rem] h-[11px] w-[11px] rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-warm-white)]" />
        <div className="inline-flex border border-[var(--color-gold)] px-3 py-1 text-sm leading-none text-[var(--color-gold-text)]">
          {categoryForCredit(index)}
        </div>
        <h2 className="mt-4 font-serif text-[clamp(25px,2.7vw,34px)] font-semibold leading-tight">
          {titleForCredit(credit, index)}
        </h2>
        <p className="mt-4 text-sm leading-8 text-[var(--color-deep)]">
          {credit.description}
        </p>
        <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
          {metaForCredit(credit, index)}
        </p>
      </div>
    </article>
  );
}

function SummaryBlock({
  children,
  icon,
  title,
}: {
  children: ReactNode;
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
}) {
  return (
    <section className="border-b border-[var(--color-hairline)] py-7 last:border-b-0">
      <div className="grid grid-cols-[44px_1fr] gap-5">
        <div className="text-[var(--color-gold-text)]">
          <Icon name={icon} />
        </div>
        <div>
          <h2 className="font-serif text-lg font-semibold leading-8">{title}</h2>
          <div className="mt-3 text-sm leading-8 text-[var(--color-deep)]">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Credits() {
  return (
    <div className="bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="page-frame py-9 sm:py-11">
        <Breadcrumb />

        <div className="mt-9 grid gap-12 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_410px]">
          <div>
            <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
              <h1 className="font-serif text-[clamp(54px,5.6vw,82px)] font-semibold leading-tight tracking-normal">
                掲載・実績
              </h1>
              <p className="pb-4 font-serif text-xl tracking-wide text-[var(--color-gold-text)]">
                Credits
              </p>
            </div>
            <p className="mt-6 max-w-[42rem] text-[15px] leading-9 text-[var(--color-deep)]">
              これまでの掲載・寄稿・連載・受賞歴などをまとめています。
              <br />
              新しい情報は随時更新していきます。
            </p>

            <div className="mt-9 flex flex-wrap border-b border-[var(--color-hairline)]">
              {tabs.map((tab, index) => (
                <button
                  className={[
                    "h-12 min-w-[118px] border border-b-0 border-[var(--color-hairline)] px-8 font-serif text-base transition-colors",
                    index === 0
                      ? "border-[var(--color-gold)] bg-white text-[var(--color-gold-text)]"
                      : "bg-transparent text-[var(--color-deep)] hover:bg-white/70",
                  ].join(" ")}
                  key={tab}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-8">
              {credits.map((credit, index) => (
                <TimelineItem credit={credit} index={index} key={credit.title} />
              ))}
            </div>

            <p className="mt-7 text-sm leading-8 text-[var(--color-muted)]">
              ※ 掲載・寄稿情報は、公開の許可をいただいたもののみ掲載しています。
            </p>
          </div>

          <aside className="self-start border border-[var(--color-hairline)] bg-white/35 p-7 sm:p-9 lg:sticky lg:top-28 lg:mt-[66px]">
            <h2 className="font-serif text-xl font-semibold leading-9">編集者・担当者さまへ</h2>
            <p className="mt-6 text-sm leading-9 text-[var(--color-deep)]">
              企画趣旨に合わせた執筆、長短の調整、
              <br />
              継続連載のご相談など、柔軟に対応いたします。
              <br />
              お気軽にお問い合わせください。
            </p>

            <div className="mt-6 bg-[var(--color-pale)] px-6 py-2">
              <SummaryBlock icon="book" title="主な媒体">
                {detailLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </SummaryBlock>
              <SummaryBlock icon="pen" title="対応領域">
                {supportLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </SummaryBlock>
              <SummaryBlock icon="doc" title="依頼実績">
                <p>寄稿・連載・書籍企画など、</p>
                <p>継続的にご依頼いただいています。</p>
              </SummaryBlock>
            </div>

            <Link
              className="mt-7 flex h-16 items-center justify-center gap-7 bg-[var(--color-gold)] px-6 font-serif text-lg text-white transition-opacity hover:opacity-90"
              to="/contact"
            >
              <Icon name="mail" />
              <span>執筆依頼・掲載相談</span>
              <Arrow />
            </Link>

            <p className="sr-only">連絡先: {contact.email}</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
