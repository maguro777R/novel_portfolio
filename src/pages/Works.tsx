import { Link } from "react-router-dom";
import booksVase from "../assets/generated/books-vase.png";
import manuscriptHero from "../assets/generated/manuscript-hero.png";
import waterSurface from "../assets/generated/water-surface.png";
import { works } from "../data/site";

const workImages = [manuscriptHero, waterSurface, booksVase];

function Arrow() {
  return <span aria-hidden="true" className="ml-7 text-xl leading-none">{"->"}</span>;
}

function FilterButton({ active, children }: { active?: boolean; children: string }) {
  return (
    <button
      className={[
        "h-[52px] min-w-[140px] border border-[var(--color-hairline)] px-9 text-sm transition-colors",
        active
          ? "border-[var(--color-gold)] bg-white text-[var(--color-gold-text)]"
          : "bg-transparent text-[var(--color-deep)] hover:bg-white",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

function WorkRow({ index, work }: { index: number; work: (typeof works)[number] }) {
  return (
    <article className="grid border-b border-[var(--color-hairline)] bg-white/46 last:border-b-0 lg:grid-cols-[300px_1fr]">
      <img
        alt=""
        className="h-52 w-full object-cover lg:h-[128px]"
        src={workImages[index % workImages.length]}
      />
      <div className="grid gap-6 px-7 py-7 lg:grid-cols-[1.65fr_164px_132px_170px_154px] lg:items-center lg:px-8 lg:py-0">
        <div>
          <h2 className="font-serif text-[32px] font-semibold leading-snug text-[var(--color-ink)]">
            {work.title}
          </h2>
          <p className="mt-3 max-w-[32rem] text-[14px] leading-7 text-[var(--color-deep)]">
            {work.summary}
          </p>
        </div>
        <Meta label="ジャンル" value={work.form} />
        <Meta label="発表年" value={`${work.year}年`} />
        <Meta label="掲載状況" value={work.status} />
        <Link
          className="flex items-center justify-start text-sm font-medium text-[var(--color-gold-text)] transition-colors hover:text-[var(--color-ink)] lg:justify-end"
          to={`/works/${work.slug}`}
        >
          詳細を見る
          <Arrow />
        </Link>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-[var(--color-hairline)] lg:border-l lg:pl-7">
      <p className="text-xs leading-6 text-[var(--color-muted)]">{label}</p>
      <p className="font-serif text-lg leading-8 text-[var(--color-deep)]">{value}</p>
    </div>
  );
}

export default function Works() {
  return (
    <div className="min-h-[calc(100vh-94px)] bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="page-frame pt-10 sm:pt-[54px]">
        <div className="border-l border-[var(--color-gold)] pl-9">
          <div className="flex flex-wrap items-end gap-x-12 gap-y-4">
            <h1 className="font-serif text-[clamp(56px,5.2vw,78px)] font-semibold leading-none tracking-normal">
              作品一覧
            </h1>
            <p className="pb-2 font-serif text-2xl text-[var(--color-gold-text)]">
              Works
            </p>
          </div>
          <p className="mt-7 text-[15px] leading-8 text-[var(--color-deep)]">
            小説・エッセイなど、これまでに発表した作品の一覧です。
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-b border-[var(--color-hairline)] pb-0 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap">
            <FilterButton active>すべて</FilterButton>
            <FilterButton>小説</FilterButton>
            <FilterButton>エッセイ</FilterButton>
            <FilterButton>連載</FilterButton>
          </div>
          <div className="flex items-center gap-8">
            <button
              className="h-[52px] min-w-[178px] border border-[var(--color-hairline)] bg-transparent px-7 text-sm text-[var(--color-deep)]"
              type="button"
            >
              新しい順
              <span aria-hidden="true" className="ml-8">⌄</span>
            </button>
            <button
              aria-label="表示形式"
              className="h-[52px] px-3 text-3xl leading-none text-[var(--color-gold-text)]"
              type="button"
            >
              ≡
            </button>
          </div>
        </div>

        <div className="mt-10 border border-[var(--color-hairline)] bg-white/45">
          {works.map((work, index) => (
            <WorkRow index={index} key={work.slug} work={work} />
          ))}
        </div>

        <nav
          aria-label="作品ページ"
          className="mt-5 flex items-center justify-center gap-8 pb-8 text-sm"
        >
          <span className="grid h-11 w-11 place-items-center border border-[var(--color-gold)] bg-white text-[var(--color-ink)]">
            1
          </span>
          <span>2</span>
          <Link
            className="flex items-center text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold-text)]"
            to="/works?page=2"
          >
            次へ
            <Arrow />
          </Link>
        </nav>
      </section>

      <footer className="border-t border-[var(--color-hairline)] py-7">
        <div className="page-frame flex flex-col gap-4 text-sm text-[var(--color-deep)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 川野マグロ</p>
          <Link
            className="flex items-center text-[var(--color-deep)] transition-colors hover:text-[var(--color-gold-text)]"
            to="/contact"
          >
            お問い合わせ
            <Arrow />
          </Link>
        </div>
      </footer>
    </div>
  );
}
