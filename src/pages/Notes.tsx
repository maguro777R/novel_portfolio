import booksVase from "../assets/generated/books-vase.png";
import manuscriptHero from "../assets/generated/manuscript-hero.png";
import urbanRiverside from "../assets/generated/urban-riverside.png";
import waterSurface from "../assets/generated/water-surface.png";
import { notes } from "../data/site";

type NoteArticle = {
  title: string;
  date: string;
  category: (typeof notes)[number]["category"];
  excerpt: string;
  image: string;
  url: string;
};

const noteImages = [manuscriptHero, waterSurface, urbanRiverside, booksVase];

const noteArticles: NoteArticle[] = notes.map((note, index) => ({
  ...note,
  date: note.date.split("-").join("."),
  image: noteImages[index % noteImages.length],
}));

function Arrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-serif text-2xl leading-none text-[var(--color-gold-text)] ${className}`}
    >
      →
    </span>
  );
}

function FilterButton({ active, children }: { active?: boolean; children: string }) {
  return (
    <button
      className={[
        "h-[54px] min-w-[148px] border border-[var(--color-hairline)] px-8 font-serif text-[15px] transition-colors",
        active
          ? "border-[var(--color-gold)] bg-white text-[var(--color-gold-text)]"
          : "bg-white/35 text-[var(--color-deep)] hover:bg-white",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

function NoteRow({ article }: { article: NoteArticle }) {
  return (
    <article className="grid gap-5 border-b border-[var(--color-hairline)] py-3 last:border-b-0 sm:grid-cols-[minmax(150px,260px)_1fr] sm:gap-9">
      <img
        alt=""
        className="h-48 w-full object-cover sm:h-[126px]"
        src={article.image}
      />
      <div className="grid gap-3 py-1 sm:grid-cols-[112px_1fr_auto] sm:items-start sm:gap-8">
        <time className="font-serif text-lg leading-none text-[var(--color-deep)]">
          {article.date}
        </time>
        <div>
          <span className="inline-flex h-7 min-w-[92px] items-center justify-center border border-[var(--color-gold)] px-4 font-serif text-xs text-[var(--color-gold-text)]">
            {article.category}
          </span>
          <a href={article.url} rel="noreferrer" target="_blank">
            <h2 className="mt-3 font-serif text-[clamp(24px,2.1vw,31px)] font-semibold leading-snug text-[var(--color-ink)] [overflow-wrap:anywhere] transition-colors hover:text-[var(--color-gold-text)]">
              {article.title}
            </h2>
          </a>
          <p className="mt-2 text-[14px] leading-7 text-[var(--color-deep)]">
            {article.excerpt}
          </p>
        </div>
        <a
          aria-label={`${article.title}を読む`}
          className="self-center justify-self-start px-1 py-2 sm:justify-self-end"
          href={article.url}
          rel="noreferrer"
          target="_blank"
        >
          <Arrow />
        </a>
      </div>
    </article>
  );
}

function SidePanel() {
  return (
    <aside className="border border-[var(--color-hairline)] bg-white/54 p-8 shadow-[0_18px_44px_rgba(52,43,30,0.04)] lg:p-10">
      <div className="flex items-center gap-4 border-b border-[var(--color-muted)]/45 pb-4">
        <span className="font-serif text-4xl leading-none text-[var(--color-gold-text)]">
          ✎
        </span>
        <h2 className="font-serif text-xl font-semibold text-[var(--color-ink)]">
          このノートについて
        </h2>
      </div>
      <p className="mt-6 text-[15px] leading-8 text-[var(--color-deep)]">
        カクヨムの近況ノートから、コンテスト参加、作品更新、完結報告に関する公開情報をまとめています。
      </p>

      <PanelList
        className="mt-10"
        items={["すべての投稿　（4）", "コンテスト　（2）", "作品告知　（1）", "近況ノート　（1）"]}
        title="カテゴリー"
      />
      <PanelList
        className="mt-10"
        items={["2026年（1）", "2025年（3）"]}
        title="アーカイブ"
      />

      <img
        alt=""
        className="mt-8 ml-auto h-36 w-56 object-cover object-bottom"
        src={booksVase}
      />
    </aside>
  );
}

function PanelList({
  className = "",
  items,
  title,
}: {
  className?: string;
  items: string[];
  title: string;
}) {
  return (
    <div className={className}>
      <h3 className="border-b border-[var(--color-muted)]/45 pb-3 font-serif text-lg font-semibold">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-[15px] text-[var(--color-deep)]">
        {items.map((item) => (
          <li className="flex items-center gap-4" key={item}>
            <span className="text-[var(--color-gold-text)]">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Notes() {
  return (
    <div className="min-h-[calc(100vh-94px)] border-t border-[var(--color-hairline)] bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="page-frame pt-8 sm:pt-10">
        <p className="text-sm text-[var(--color-deep)]">ホーム　›　ノート</p>
        <div className="mt-7 flex flex-wrap items-end gap-x-9 gap-y-3">
          <h1 className="font-serif text-[clamp(58px,6vw,88px)] font-semibold leading-none tracking-normal">
            ノート
          </h1>
          <p className="pb-3 font-serif text-xl text-[var(--color-gold-text)]">
            Notes
          </p>
        </div>
        <p className="mt-6 max-w-[48rem] font-serif text-lg leading-9 text-[var(--color-deep)]">
          カクヨム近況ノートから、公開されている活動報告を掲載しています。
          <br className="hidden sm:block" />
          コンテスト参加、作品告知、完結報告を確認できます。
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          <div>
            <div className="flex flex-col gap-5 border-b border-[var(--color-hairline)] pb-0 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap">
                <FilterButton active>すべて</FilterButton>
                <FilterButton>コンテスト</FilterButton>
                <FilterButton>作品告知</FilterButton>
              </div>
              <button
                className="h-[54px] min-w-[148px] border border-[var(--color-hairline)] bg-white/35 px-6 text-left font-serif text-[15px] text-[var(--color-deep)]"
                type="button"
              >
                新しい順
                <span aria-hidden="true" className="float-right pl-8 text-[var(--color-muted)]">
                  ⌄
                </span>
              </button>
            </div>

            <div className="mt-4">
              {noteArticles.map((article) => (
                <NoteRow article={article} key={article.title} />
              ))}
            </div>

            <p className="mt-6 pb-8 text-center text-sm leading-7 text-[var(--color-muted)]">
              各項目のリンクからカクヨム近況ノートを開けます。
            </p>
          </div>

          <SidePanel />
        </div>
      </section>
    </div>
  );
}
