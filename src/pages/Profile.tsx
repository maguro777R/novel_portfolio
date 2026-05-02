import { Link } from "react-router-dom";
import booksVase from "../assets/generated/books-vase.png";
import { credits, profile } from "../data/site";

function Arrow() {
  return <span aria-hidden="true" className="ml-8 text-xl leading-none">-&gt;</span>;
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
      <span>プロフィール</span>
    </nav>
  );
}

function ColumnSection({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon: string;
  title: string;
}) {
  return (
    <section className="border-t border-[var(--color-hairline)] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 first:lg:border-l-0 first:lg:pl-0">
      <h2 className="flex items-center gap-4 font-serif text-[20px] font-semibold leading-none text-[var(--color-ink)]">
        <span aria-hidden="true" className="text-[var(--color-gold-text)]">
          {icon}
        </span>
        {title}
      </h2>
      <div className="mt-6 text-[14px] leading-8 text-[var(--color-deep)]">{children}</div>
    </section>
  );
}

function ProfileColumns() {
  return (
    <div className="grid gap-8 border-t border-[var(--color-hairline)] pt-9 lg:grid-cols-[1.2fr_0.8fr_1.05fr_1.1fr]">
      <ColumnSection icon="▥" title="略歴">
        <dl className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-2">
          <dt>2019年</dt>
          <dd>カクヨムに登録</dd>
          <dt>2023年</dt>
          <dd>異世界ファンタジー、ダンジョン配信系作品を公開</dd>
          <dt>2025年</dt>
          <dd>百合・ダンジョン配信系の完結作を複数公開</dd>
          <dt>2026年</dt>
          <dd>カクヨムコン11中間選考通過作と最新連載を公開</dd>
        </dl>
      </ColumnSection>

      <ColumnSection icon="♢" title="執筆領域">
        <ul className="list-disc space-y-2 pl-5">
          {profile.fields.map((field) => (
            <li key={field}>{field}</li>
          ))}
          <li>寄稿</li>
          <li>連載</li>
        </ul>
      </ColumnSection>

      <ColumnSection icon="▤" title="対応可能な仕事">
        <ul className="list-disc space-y-2 pl-5">
          <li>現代ファンタジー</li>
          <li>異世界ファンタジー</li>
          <li>百合・ガールズラブ系作品</li>
          <li>ダンジョン配信もの</li>
          <li>TSF・女体化要素のある作品</li>
        </ul>
      </ColumnSection>

      <ColumnSection icon="▥" title="掲載歴の抜粋">
        <ul className="space-y-3">
          {credits.map((credit) => (
            <li key={`${credit.year}-${credit.title}`}>
              {credit.venue}：{credit.category}「{credit.title}」
            </li>
          ))}
        </ul>
      </ColumnSection>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="page-frame pt-8 sm:pt-10">
        <Breadcrumb />

        <div className="mt-7 grid gap-10 lg:grid-cols-[38%_1fr] lg:gap-16 xl:gap-20">
          <div className="lg:min-h-[740px]">
            <img
              alt=""
              className="h-[420px] w-full object-cover object-center sm:h-[560px] lg:h-full"
              src={booksVase}
            />
          </div>

          <article className="pb-10 lg:pt-0">
            <div className="border-l border-[var(--color-gold)] pl-8">
              <div className="flex flex-wrap items-end gap-x-12 gap-y-4">
                <h1 className="font-serif text-[clamp(42px,4.4vw,60px)] font-semibold leading-none tracking-normal text-[var(--color-ink)]">
                  プロフィール
                </h1>
                <p className="pb-1 font-serif text-xl text-[var(--color-gold-text)]">
                  Profile
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-serif text-[clamp(42px,4.8vw,58px)] font-semibold leading-tight tracking-normal text-[var(--color-ink)]">
                {profile.nameJa}
              </h2>
              <p className="mt-4 font-serif text-xl text-[var(--color-gold-text)]">
                {profile.role}・{profile.handle}
              </p>
              <p className="mt-7 max-w-[46rem] text-[16px] leading-9 text-[var(--color-deep)]">
                カクヨム登録日：{profile.registeredAt.split("-").join(".")}
                <br />
                {profile.bio}
                <br />
                公開プロフィールで確認できる外部リンクとして X を掲載しています。
              </p>
            </div>

            <div className="mt-12">
              <ProfileColumns />
            </div>

            <div className="mt-10 grid gap-5 border border-[var(--color-hairline)] bg-white/45 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
              <p className="flex items-center gap-5 text-[15px] leading-7 text-[var(--color-deep)]">
                <span aria-hidden="true" className="text-2xl text-[var(--color-ink)]">
                  ✉
                </span>
                最新情報はカクヨム作者ページと X でご確認ください。
              </p>
              <a
                className="inline-flex h-[58px] min-w-[260px] items-center justify-center bg-[var(--color-gold)] px-9 font-serif text-lg text-white transition-opacity hover:opacity-90"
                href={profile.kakuyomuUrl}
                rel="noreferrer"
                target="_blank"
              >
                カクヨムを見る
                <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
