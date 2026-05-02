import { Link, Navigate, useParams } from "react-router-dom";
import manuscriptHero from "../assets/generated/manuscript-hero.png";
import { works } from "../data/site";
import type { Work } from "../data/site";

function Arrow({ className = "ml-8" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`${className} text-xl leading-none`}>
      -&gt;
    </span>
  );
}

function formatCount(value: number) {
  return value.toLocaleString("ja-JP");
}

function formatDate(date: string) {
  return date.split("-").join(".");
}

function Breadcrumb({ work }: { work: Work }) {
  return (
    <nav
      aria-label="パンくず"
      className="flex flex-wrap items-center gap-5 text-sm text-[var(--color-deep)]"
    >
      <Link className="transition-colors hover:text-[var(--color-gold-text)]" to="/">
        ホーム
      </Link>
      <span className="text-[var(--color-gold-text)]">›</span>
      <Link
        className="transition-colors hover:text-[var(--color-gold-text)]"
        to="/works"
      >
        作品一覧
      </Link>
      <span className="text-[var(--color-gold-text)]">›</span>
      <span>{work.title}</span>
    </nav>
  );
}

function SectionBlock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="border-b border-[var(--color-hairline)] py-7 first:pt-0 sm:py-8">
      <h2 className="border-l border-[var(--color-gold)] pl-5 font-serif text-[28px] font-semibold leading-none text-[var(--color-ink)]">
        {title}
      </h2>
      <div className="mt-6 text-[15px] leading-8 text-[var(--color-deep)]">{children}</div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-6 border-b border-[var(--color-hairline)] py-5 text-[15px]">
      <dt className="text-[var(--color-deep)]">{label}</dt>
      <dd className="font-serif text-lg leading-7 text-[var(--color-deep)]">{value}</dd>
    </div>
  );
}

function InfoPanel({ work }: { work: Work }) {
  return (
    <aside className="border border-[var(--color-hairline)] bg-white/45 px-7 py-8 sm:px-9 sm:py-10 lg:sticky lg:top-28">
      <h2 className="font-serif text-[24px] font-semibold leading-none text-[var(--color-ink)]">
        作品情報
      </h2>
      <div className="mt-5 h-px bg-[var(--color-hairline)]" />
      <dl className="mt-2">
        <InfoRow label="ジャンル" value={work.genre} />
        <InfoRow label="形式" value={work.form} />
        <InfoRow label="発表年" value={`${work.year}年`} />
        <InfoRow label="掲載状況" value={work.status} />
        <InfoRow label="話数" value={`${work.episodes}話`} />
        <InfoRow label="文字数" value={`${formatCount(work.wordCount)}字`} />
      </dl>

      <div className="mt-12">
        <h3 className="font-serif text-[22px] font-semibold leading-none text-[var(--color-ink)]">
          関連タグ
        </h3>
        <div className="mt-5 h-px bg-[var(--color-hairline)]" />
        <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-7 text-[var(--color-deep)]">
          {work.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>

      <a
        className="mt-10 inline-flex h-[76px] w-full items-center justify-center bg-[var(--color-gold)] px-7 font-serif text-lg text-white transition-opacity hover:opacity-90"
        href={work.url}
        rel="noreferrer"
        target="_blank"
      >
        <span aria-hidden="true" className="mr-5 text-xl">
          ↗
        </span>
        カクヨムで読む
        <Arrow />
      </a>
    </aside>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const workIndex = works.findIndex((item) => item.slug === slug);
  const work = workIndex >= 0 ? works[workIndex] : undefined;

  if (!work) {
    return <Navigate replace to="/works" />;
  }

  const previousWork = works[(workIndex - 1 + works.length) % works.length];
  const nextWork = works[(workIndex + 1) % works.length];

  return (
    <div className="bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="page-frame pt-8 sm:pt-10">
        <Breadcrumb work={work} />

        <div className="mt-9 grid gap-9 lg:grid-cols-[minmax(0,1fr)_404px] lg:gap-10 xl:gap-12">
          <article>
            <div className="grid gap-8 lg:grid-cols-[minmax(420px,1fr)_minmax(360px,528px)] lg:items-center">
              <div>
                <h1 className="font-serif text-[clamp(36px,5.2vw,64px)] font-semibold leading-[1.18] tracking-normal text-[var(--color-ink)] [overflow-wrap:anywhere]">
                  {work.title}
                </h1>
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 text-[16px] text-[var(--color-deep)]">
                  <span>{work.genre}</span>
                  <span className="h-7 w-px bg-[var(--color-hairline)]" />
                  <span>{work.episodes}話</span>
                  <span className="h-7 w-px bg-[var(--color-hairline)]" />
                  <span className="border border-[var(--color-gold)] bg-white px-5 py-2 font-serif text-[var(--color-gold-text)]">
                    {work.status}
                  </span>
                </div>
              </div>
              <img
                alt=""
                className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[300px]"
                src={manuscriptHero}
              />
            </div>

            <div className="mt-12">
              <SectionBlock title="あらすじ">
                <p>{work.summary}</p>
              </SectionBlock>
              <SectionBlock title="キャッチコピー">
                <p>{work.catchcopy}</p>
              </SectionBlock>
              <SectionBlock title="公開情報">
                <p>
                  初回公開：{formatDate(work.publishedAt)}
                  <br />
                  最終更新：{formatDate(work.updatedAt)}
                  <br />
                  掲載先：カクヨム
                </p>
              </SectionBlock>
              <SectionBlock title="作品メモ">
                <p>
                  {profileLine(work)}
                  <br />
                  作品ページでは目次、タグ、更新履歴を確認できます。
                </p>
              </SectionBlock>
            </div>
          </article>

          <InfoPanel work={work} />
        </div>
      </section>

      <nav className="page-frame mt-8 pb-0" aria-label="前後の作品">
        <div className="grid gap-4 bg-white/50 px-0 py-7 text-sm text-[var(--color-deep)] sm:grid-cols-2 sm:px-0">
          <Link
            className="flex items-center gap-6 transition-colors hover:text-[var(--color-gold-text)]"
            to={`/works/${previousWork.slug}`}
          >
            <span className="text-[var(--color-gold-text)]">‹</span>
            <span>前の作品</span>
            <span className="font-serif text-base text-[var(--color-ink)] [overflow-wrap:anywhere]">{previousWork.title}</span>
          </Link>
          <Link
            className="flex items-center justify-start gap-6 transition-colors hover:text-[var(--color-gold-text)] sm:justify-end"
            to={`/works/${nextWork.slug}`}
          >
            <span>次の作品</span>
            <span className="font-serif text-base text-[var(--color-ink)] [overflow-wrap:anywhere]">{nextWork.title}</span>
            <span className="text-[var(--color-gold-text)]">›</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

function profileLine(work: Work) {
  if (work.genre === "異世界ファンタジー") {
    return "異世界転生、獣使い、聖獣娘・魔獣娘を軸にした代表作です。";
  }

  if (work.themes.includes("TSF")) {
    return "TSF、ダンジョン、配信者、主人公最強の要素を組み合わせた完結作です。";
  }

  if (work.genre === "恋愛") {
    return "不登校の主人公と学級委員の関係性を描く百合恋愛作品です。";
  }

  return "百合、ダンジョン配信、わちゃわちゃしたやり取りを軸にした現代ファンタジーです。";
}
