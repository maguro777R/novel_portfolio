import booksVase from "../assets/generated/books-vase.png";
import manuscriptHero from "../assets/generated/manuscript-hero.png";
import urbanRiverside from "../assets/generated/urban-riverside.png";
import waterSurface from "../assets/generated/water-surface.png";

type NoteArticle = {
  title: string;
  date: string;
  category: "エッセイ" | "創作ノート";
  excerpt: string;
  image: string;
};

const noteArticles: NoteArticle[] = [
  {
    title: "午前四時の机",
    date: "2024.06.12",
    category: "エッセイ",
    excerpt:
      "静けさがもっとも深い時間帯に、机に向かう。薄い光のなかで、昨日の自分から手紙が届くような気がする。",
    image: manuscriptHero,
  },
  {
    title: "余白のある文章について",
    date: "2024.05.21",
    category: "創作ノート",
    excerpt:
      "書かないことも、書くことの一部だと思う。空白は、読者の時間をそっと置いていくための場所。",
    image: waterSurface,
  },
  {
    title: "都市の記憶を歩く",
    date: "2024.04.10",
    category: "エッセイ",
    excerpt:
      "地図には残らない記憶の層が、街をかたちづくっている。歩くことは、それらを静かにたどる行為だ。",
    image: urbanRiverside,
  },
  {
    title: "書く前に読むもの",
    date: "2024.03.02",
    category: "創作ノート",
    excerpt:
      "書くためには、まず読むこと。言葉の海に身をひたし、よい声を自分の中に見つけていく。",
    image: booksVase,
  },
];

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
          <h2 className="mt-3 font-serif text-[clamp(24px,2.1vw,31px)] font-semibold leading-snug text-[var(--color-ink)]">
            {article.title}
          </h2>
          <p className="mt-2 text-[14px] leading-7 text-[var(--color-deep)]">
            {article.excerpt}
          </p>
        </div>
        <button
          aria-label={`${article.title}を読む`}
          className="self-center justify-self-start px-1 py-2 sm:justify-self-end"
          type="button"
        >
          <Arrow />
        </button>
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
        創作の過程で生まれた思索や、日常のなかで大切にしたいことを綴っています。
        作品とあわせてお楽しみいただければ幸いです。
      </p>

      <PanelList
        className="mt-10"
        items={["すべての投稿　（12）", "エッセイ　（7）", "創作ノート　（5）"]}
        title="カテゴリー"
      />
      <PanelList
        className="mt-10"
        items={["2024年（8）", "2023年（3）", "2022年（1）"]}
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
          日々の思索や、書くことにまつわること、暮らしの中で出会った言葉。
          <br className="hidden sm:block" />
          創作のメモやエッセイを綴っています。
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          <div>
            <div className="flex flex-col gap-5 border-b border-[var(--color-hairline)] pb-0 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap">
                <FilterButton active>すべて</FilterButton>
                <FilterButton>エッセイ</FilterButton>
                <FilterButton>創作ノート</FilterButton>
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

            <nav
              aria-label="ノートページ"
              className="mt-6 flex items-center justify-center gap-7 pb-8 font-serif text-sm"
            >
              <span className="grid h-11 w-11 place-items-center border border-[var(--color-gold)] bg-white">
                1
              </span>
              <span>2</span>
              <span>3</span>
              <button className="flex items-center gap-5" type="button">
                次へ
                <Arrow />
              </button>
            </nav>
          </div>

          <SidePanel />
        </div>
      </section>
    </div>
  );
}
