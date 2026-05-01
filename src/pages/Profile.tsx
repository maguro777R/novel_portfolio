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
          <dt>1988年</dt>
          <dd>東京都生まれ</dd>
          <dt>2011年</dt>
          <dd>早稲田大学文学部卒業</dd>
          <dt>2013年</dt>
          <dd>小説の執筆を開始</dd>
          <dt>2016年</dt>
          <dd>文芸誌にて短編が掲載</dd>
          <dt>2019年</dt>
          <dd>初の書籍を刊行</dd>
          <dt>現在</dt>
          <dd>小説・エッセイの執筆を中心に、寄稿・連載・企画など幅広く活動中</dd>
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
          <li>小説の執筆（文芸・大衆問わず）</li>
          <li>エッセイ・コラムの執筆</li>
          <li>雑誌・ウェブメディアへの寄稿</li>
          <li>連載の執筆</li>
          <li>書籍企画・構成</li>
          <li>取材・インタビュー対応</li>
        </ul>
      </ColumnSection>

      <ColumnSection icon="▥" title="掲載歴の抜粋">
        <ul className="space-y-3">
          {credits.map((credit) => (
            <li key={`${credit.year}-${credit.title}`}>
              {credit.venue}「{credit.title}」
            </li>
          ))}
          <li>小説集『水面の名前』（書籍）</li>
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
                {profile.role}・文筆家
              </p>
              <p className="mt-7 max-w-[46rem] text-[16px] leading-9 text-[var(--color-deep)]">
                静かな日常の中にひそむ違和感や、言葉にならない感情の輪郭を描いています。
                <br />
                {profile.bio}
                <br />
                読者の心にそっと触れるような文章を目指しています。
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
                執筆依頼・掲載相談など、どうぞお気軽にご連絡ください。
              </p>
              <Link
                className="inline-flex h-[58px] min-w-[260px] items-center justify-center bg-[var(--color-gold)] px-9 font-serif text-lg text-white transition-opacity hover:opacity-90"
                to="/contact"
              >
                問い合わせる
                <Arrow />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
