import { Link } from "react-router-dom";
import manuscriptHero from "../assets/generated/manuscript-hero.png";
import { profile, works } from "../data/site";

function Arrow() {
  return <span aria-hidden="true" className="ml-8 text-xl leading-none">{"->"}</span>;
}

function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <article className="flex min-h-[196px] flex-col border border-[var(--color-hairline)] bg-white px-7 py-7 shadow-[0_6px_18px_rgba(30,30,28,0.06)] sm:px-8">
      <div className="grid grid-cols-[1fr_auto] gap-6">
        <h3 className="font-serif text-[22px] font-semibold leading-snug tracking-normal text-[var(--color-ink)] [overflow-wrap:anywhere]">
          {work.title}
        </h3>
        <div className="text-right text-sm leading-7">
          <p className="font-serif text-lg text-[var(--color-gold-text)]">
            {work.year}年
          </p>
          <p className="mt-3 text-[var(--color-deep)]">{work.form}</p>
        </div>
      </div>
      <p className="mt-5 max-w-[24rem] text-[15px] leading-8 text-[var(--color-deep)]">
        {work.catchcopy}
      </p>
      <Link
        className="mt-auto flex items-center justify-between border-t border-[var(--color-hairline)] pt-4 text-sm font-medium text-[var(--color-gold-text)] transition-colors hover:text-[var(--color-ink)]"
        to={`/works/${work.slug}`}
      >
        <span>{work.status}</span>
        <Arrow />
      </Link>
    </article>
  );
}

export default function Home() {
  return (
    <div className="bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="relative min-h-[calc(670px-94px)] overflow-hidden border-b border-[var(--color-hairline)]">
        <img
          alt=""
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-right md:w-[56%]"
          src={manuscriptHero}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FAF9F6_0%,#FAF9F6_43%,rgba(250,249,246,0.84)_52%,rgba(250,249,246,0.06)_72%)]" />
        <div className="page-frame relative z-10 flex min-h-[calc(670px-94px)] items-center py-16">
          <div className="w-full max-w-[650px] pt-1">
            <p className="font-serif text-lg leading-none text-[var(--color-gold-text)]">
              百合とダンジョン配信、わちゃわちゃした物語を。
            </p>
            <h1 className="mt-8 font-serif text-[clamp(64px,8.3vw,128px)] font-semibold leading-[1.05] tracking-normal text-[var(--color-ink)]">
              {profile.nameJa}
            </h1>
            <p className="mt-8 max-w-[34rem] font-serif text-xl leading-10 text-[var(--color-deep)]">
              現代ファンタジー、異世界ファンタジーを中心に。
              <br />
              カクヨムで発表している作品と活動情報をまとめています。
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Link
                className="inline-flex h-[68px] min-w-[246px] items-center justify-center bg-[var(--color-ink)] px-10 font-serif text-lg text-white transition-opacity hover:opacity-88"
                to="/works"
              >
                作品を見る
                <Arrow />
              </Link>
              <Link
                className="inline-flex h-[68px] min-w-[246px] items-center justify-center border border-[var(--color-gold)] bg-white/55 px-10 font-serif text-lg text-[var(--color-gold-text)] transition-colors hover:bg-white"
                to="/contact"
              >
              問い合わせ
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-hairline)] py-8 sm:py-10">
        <div className="page-frame">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div />
            <div className="text-center">
              <h2 className="font-serif text-[34px] font-semibold leading-none tracking-[0.18em] text-[var(--color-ink)]">
                作品
              </h2>
              <div className="mx-auto mt-4 h-px w-14 bg-[var(--color-gold)]" />
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                現代ファンタジー、異世界ファンタジー、百合、ダンジョン配信系の作品を掲載しています。
              </p>
            </div>
            <Link
              className="justify-self-start border-b border-[var(--color-gold)] pb-2 text-sm text-[var(--color-gold-text)] transition-colors hover:text-[var(--color-ink)] md:justify-self-end"
              to="/works"
            >
              すべての作品を見る
              <Arrow />
            </Link>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {works.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
