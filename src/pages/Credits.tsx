import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { contact, credits } from "../data/site";

const tabs = ["すべて", "連載", "完結", "選考通過"];

const detailLines = [
  "カクヨム作者ページ",
  "カクヨム作品ページ／近況ノート",
];

const supportLines = [
  "現代ファンタジー／異世界ファンタジー",
  "百合／ダンジョン配信／TSF・女体化",
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

function TimelineItem({
  credit,
}: {
  credit: (typeof credits)[number];
}) {
  return (
    <article className="relative grid gap-5 border-b border-[var(--color-hairline)] pb-8 last:border-b-0 sm:grid-cols-[120px_1fr]">
      <div className="font-serif text-[26px] leading-tight text-[var(--color-ink)] sm:pt-2">
        {credit.year}
      </div>
      <div className="relative pl-8 sm:pl-11">
        <span className="absolute bottom-0 left-0 top-0 w-px bg-[var(--color-hairline)]" />
        <span className="absolute -left-[5px] top-[0.62rem] h-[11px] w-[11px] rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-warm-white)]" />
        <div className="inline-flex border border-[var(--color-gold)] px-3 py-1 text-sm leading-none text-[var(--color-gold-text)]">
          {credit.category}
        </div>
        <a href={credit.url} rel="noreferrer" target="_blank">
          <h2 className="mt-4 font-serif text-[clamp(24px,2.4vw,32px)] font-semibold leading-tight [overflow-wrap:anywhere] transition-colors hover:text-[var(--color-gold-text)]">
            {credit.venue}「{credit.title}」
          </h2>
        </a>
        <p className="mt-4 text-sm leading-8 text-[var(--color-deep)]">
          {credit.description}
        </p>
        <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
          公開情報：{credit.venue}
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
              カクヨムで確認できる連載、完結、選考通過、告知をまとめています。
              <br />
              未確認の商業実績や受賞歴は掲載していません。
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
              {credits.map((credit) => (
                <TimelineItem credit={credit} key={credit.title} />
              ))}
            </div>

            <p className="mt-7 text-sm leading-8 text-[var(--color-muted)]">
              ※ 掲載情報は、カクヨム上で確認できる公開情報をもとにしています。
            </p>
          </div>

          <aside className="self-start border border-[var(--color-hairline)] bg-white/35 p-7 sm:p-9 lg:sticky lg:top-28 lg:mt-[66px]">
            <h2 className="font-serif text-xl font-semibold leading-9">編集者・担当者さまへ</h2>
            <p className="mt-6 text-sm leading-9 text-[var(--color-deep)]">
              公開中作品の詳細、更新履歴、
              <br />
              近況ノートの情報は各リンク先で確認できます。
              <br />
              連絡導線は X とカクヨム作者ページです。
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
                <p>商業出版・受賞歴は</p>
                <p>確認できた情報のみ掲載します。</p>
              </SummaryBlock>
            </div>

            <Link
              className="mt-7 flex h-16 items-center justify-center gap-7 bg-[var(--color-gold)] px-6 font-serif text-lg text-white transition-opacity hover:opacity-90"
              to="/contact"
            >
              <Icon name="mail" />
              <span>連絡先を見る</span>
              <Arrow />
            </Link>

            <p className="sr-only">連絡先: {contact.primaryLabel}</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
