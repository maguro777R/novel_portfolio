import manuscriptHero from "../assets/generated/manuscript-hero.png";
import { news } from "../data/site";

type NewsRow = {
  date: string;
  category: "掲載" | "寄稿" | "連載" | "お知らせ";
  title: string;
  body: string;
};

const pageLocalNews: NewsRow[] = [
  {
    date: "2025.06.18",
    category: "連載",
    title: "連載エッセイ更新",
    body: "Webメディア「灯台」にて、連載エッセイ「午前四時の机」第6回を公開しました。",
  },
];

const categoryByTitle: Record<string, NewsRow["category"]> = {
  ポートフォリオを公開しました: "お知らせ",
  新作短編を準備中です: "掲載",
  中編小説を寄稿しました: "寄稿",
};

function formatDate(date: string) {
  return date.split("-").join(".");
}

const newsRows: NewsRow[] = [
  ...news.map((item) => ({
    date: formatDate(item.date),
    category: categoryByTitle[item.title] ?? "お知らせ",
    title: item.title,
    body: item.body,
  })),
  ...pageLocalNews,
].sort((a, b) => b.date.localeCompare(a.date));

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="font-serif text-2xl leading-none text-[var(--color-gold-text)]"
    >
      →
    </span>
  );
}

function FilterButton({ active, children }: { active?: boolean; children: string }) {
  return (
    <button
      className={[
        "h-[56px] min-w-[calc(50%_-_1px)] flex-1 border border-[var(--color-hairline)] px-6 font-serif text-[15px] transition-colors sm:min-w-[166px] sm:flex-none sm:px-8",
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

function NewsItem({ item }: { item: NewsRow }) {
  return (
    <article className="grid gap-4 border-b border-[var(--color-hairline)] py-7 sm:grid-cols-[142px_18px_96px_minmax(0,1fr)_72px] sm:items-start sm:gap-7 sm:py-8">
      <time className="font-serif text-xl leading-none text-[var(--color-deep)] sm:pt-2">
        {item.date}
      </time>
      <span
        aria-hidden="true"
        className="mt-[0.62rem] hidden h-3 w-3 rounded-full border-2 border-[var(--color-gold-text)] sm:block"
      />
      <span className="inline-flex h-8 w-fit min-w-[82px] items-center justify-center border border-[var(--color-gold)] px-4 font-serif text-sm text-[var(--color-gold-text)] sm:mt-1">
        {item.category}
      </span>
      <div>
        <h2 className="font-serif text-[clamp(22px,1.9vw,28px)] font-semibold leading-snug text-[var(--color-ink)]">
          {item.title}
        </h2>
        <p className="mt-1 text-[14px] leading-7 text-[var(--color-deep)]">
          {item.body}
        </p>
      </div>
      <button
        aria-label={`${item.title}を読む`}
        className="self-center justify-self-start px-1 py-2 sm:justify-self-end sm:pt-4"
        type="button"
      >
        <Arrow />
      </button>
    </article>
  );
}

export default function News() {
  return (
    <div className="min-h-[calc(100vh-94px)] border-t border-[var(--color-hairline)] bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="relative overflow-hidden border-b border-[var(--color-hairline)]">
        <img
          alt=""
          className="absolute bottom-0 right-0 h-[250px] w-full object-cover object-right opacity-85 md:h-full md:w-[50%] md:opacity-95"
          src={manuscriptHero}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FAF9F6_0%,rgba(250,249,246,0.93)_46%,rgba(250,249,246,0.34)_100%)] md:bg-[linear-gradient(90deg,#FAF9F6_0%,#FAF9F6_50%,rgba(250,249,246,0.86)_64%,rgba(250,249,246,0.06)_100%)]" />
        <div className="page-frame relative z-10 min-h-[430px] pt-8 sm:pt-10 md:min-h-[342px]">
          <p className="text-sm text-[var(--color-deep)]">ホーム　›　お知らせ</p>
          <div className="mt-8 flex flex-wrap items-end gap-x-9 gap-y-3">
            <h1 className="font-serif text-[clamp(62px,6.8vw,96px)] font-semibold leading-none tracking-normal">
              お知らせ
            </h1>
            <p className="pb-4 font-serif text-xl text-[var(--color-gold-text)]">
              News
            </p>
          </div>
          <p className="mt-8 max-w-[45rem] font-serif text-lg leading-9 text-[var(--color-deep)]">
            活動や掲載情報、更新のお知らせをお届けします。
            <br className="hidden sm:block" />
            今後の予定や新しい情報は、こちらで随時ご案内いたします。
          </p>
        </div>
      </section>

      <section className="page-frame">
        <div className="-mt-px flex flex-wrap sm:flex-nowrap">
          <FilterButton active>すべて</FilterButton>
          <FilterButton>掲載</FilterButton>
          <FilterButton>寄稿</FilterButton>
          <FilterButton>連載</FilterButton>
          <FilterButton>お知らせ</FilterButton>
        </div>

        <div className="pt-7">
          {newsRows.map((item) => (
            <NewsItem item={item} key={item.title} />
          ))}
        </div>

        <nav
          aria-label="お知らせページ"
          className="mt-7 flex items-center justify-center gap-8 pb-8 font-serif text-sm text-[var(--color-deep)]"
        >
          <span className="grid h-11 w-11 place-items-center border border-[var(--color-gold)] bg-white">
            1
          </span>
          <span>2</span>
          <button className="flex items-center gap-5" type="button">
            次へ
            <Arrow />
          </button>
        </nav>
      </section>
    </div>
  );
}
