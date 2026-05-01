import { Link } from "react-router-dom";
import manuscriptHero from "../assets/generated/manuscript-hero.png";
import { works } from "../data/site";

const work = works.find((item) => item.slug === "shiroi-futo-no-yoru") ?? works[0];

function Arrow({ className = "ml-8" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`${className} text-xl leading-none`}>
      -&gt;
    </span>
  );
}

function Breadcrumb() {
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

function InfoPanel() {
  return (
    <aside className="border border-[var(--color-hairline)] bg-white/45 px-7 py-8 sm:px-9 sm:py-10 lg:sticky lg:top-28">
      <h2 className="font-serif text-[24px] font-semibold leading-none text-[var(--color-ink)]">
        作品情報
      </h2>
      <div className="mt-5 h-px bg-[var(--color-hairline)]" />
      <dl className="mt-2">
        <InfoRow label="ジャンル" value={work.form} />
        <InfoRow label="発表年" value={`${work.year}年`} />
        <InfoRow label="掲載状況" value={work.status} />
        <InfoRow label="文字数（予定）" value="約12,000字" />
      </dl>

      <div className="mt-12">
        <h3 className="font-serif text-[22px] font-semibold leading-none text-[var(--color-ink)]">
          関連する依頼
        </h3>
        <div className="mt-5 h-px bg-[var(--color-hairline)]" />
        <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-7 text-[var(--color-deep)]">
          <li>小説の執筆依頼</li>
          <li>文芸誌への掲載</li>
          <li>書籍収録のご相談</li>
        </ul>
      </div>

      <Link
        className="mt-10 inline-flex h-[76px] w-full items-center justify-center bg-[var(--color-gold)] px-7 font-serif text-lg text-white transition-opacity hover:opacity-90"
        to="/contact"
      >
        <span aria-hidden="true" className="mr-5 text-xl">
          ✉
        </span>
        執筆依頼・掲載相談
        <Arrow />
      </Link>
    </aside>
  );
}

export default function WorkDetail() {
  return (
    <div className="bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="page-frame pt-8 sm:pt-10">
        <Breadcrumb />

        <div className="mt-9 grid gap-9 lg:grid-cols-[minmax(0,1fr)_404px] lg:gap-10 xl:gap-12">
          <article>
            <div className="grid gap-8 lg:grid-cols-[minmax(420px,1fr)_minmax(360px,528px)] lg:items-center">
              <div>
                <h1 className="font-serif text-[clamp(52px,6.2vw,82px)] font-semibold leading-[1.18] tracking-normal text-[var(--color-ink)]">
                  {work.title}
                </h1>
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 text-[16px] text-[var(--color-deep)]">
                  <span>{work.form}</span>
                  <span className="h-7 w-px bg-[var(--color-hairline)]" />
                  <span>{work.year}</span>
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
              <SectionBlock title="初出">
                <p>文芸誌『群青』2026年春季号（掲載予定）</p>
              </SectionBlock>
              <SectionBlock title="作品メモ">
                <p>
                  手紙の内容は語られないまま、部屋の音や街の気配が、青年の記憶を少しずつほどいていく物語です。
                  <br />
                  不確かなものを抱えた夜の静けさを、大切に書きました。
                </p>
              </SectionBlock>
            </div>
          </article>

          <InfoPanel />
        </div>
      </section>

      <nav className="page-frame mt-8 pb-0" aria-label="前後の作品">
        <div className="grid gap-4 bg-white/50 px-0 py-7 text-sm text-[var(--color-deep)] sm:grid-cols-2 sm:px-0">
          <Link
            className="flex items-center gap-6 transition-colors hover:text-[var(--color-gold-text)]"
            to="/works/name-on-the-water"
          >
            <span className="text-[var(--color-gold-text)]">‹</span>
            <span>前の作品</span>
            <span className="font-serif text-base text-[var(--color-ink)]">水面の名前</span>
          </Link>
          <Link
            className="flex items-center justify-start gap-6 transition-colors hover:text-[var(--color-gold-text)] sm:justify-end"
            to="/works/name-on-the-water"
          >
            <span>次の作品</span>
            <span className="font-serif text-base text-[var(--color-ink)]">水面の名前</span>
            <span className="text-[var(--color-gold-text)]">›</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
