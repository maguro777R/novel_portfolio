import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import manuscriptHero from "../assets/generated/manuscript-hero.png";
import { contact } from "../data/site";

const checklist = [
  "用件の概要",
  "対象作品や関連URL",
  "希望する返信先",
  "確認したい期限",
  "公開可否や扱いの希望",
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={["text-xl leading-none", className].join(" ")}>
      -&gt;
    </span>
  );
}

function Icon({ name }: { name: "mail" | "doc" | "book" | "camera" | "mic" | "clock" | "note" | "list" | "pen" }) {
  const common = "h-8 w-8 stroke-[1.45]";
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

  if (name === "book") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="M6 7.5h7.5A4.5 4.5 0 0 1 18 12v13a4.5 4.5 0 0 0-4.5-4.5H6z" />
        <path d="M26 7.5h-7.5A4.5 4.5 0 0 0 14 12v13a4.5 4.5 0 0 1 4.5-4.5H26z" />
      </svg>
    );
  }

  if (name === "camera") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="M9 11h3l2-3h4l2 3h3a3 3 0 0 1 3 3v9H6v-9a3 3 0 0 1 3-3Z" />
        <circle cx="16" cy="18" r="4.2" />
      </svg>
    );
  }

  if (name === "mic") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <rect height="14" rx="4" width="8" x="12" y="5" />
        <path d="M8 15a8 8 0 0 0 16 0M16 23v5M12 28h8" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <circle cx="16" cy="16" r="10" />
        <path d="M16 10v7l5 3" />
      </svg>
    );
  }

  if (name === "list") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <rect height="22" rx="1.5" width="16" x="8" y="5" />
        <path d="M12 11h8M12 16h8M12 21h5" />
      </svg>
    );
  }

  if (name === "note") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="M8 5h13l3 3v19H8z" />
        <path d="M20 5v5h5M12 15h8M12 20h7" />
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

  return (
    <svg aria-hidden="true" {...iconProps}>
      <path d="M9 5h11l3 3v19H9z" />
      <path d="M19 5v5h5M12 15h8M12 20h6" />
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
      <span>問い合わせ</span>
    </nav>
  );
}

function InfoPanel({
  children,
  icon,
  title,
}: {
  children: ReactNode;
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
}) {
  return (
    <article className="border border-[var(--color-hairline)] bg-white/38 p-6 sm:p-8 lg:min-h-[266px] lg:border-y-0 lg:border-l-0 first:lg:border-l first:lg:border-y">
      <div className="flex items-center gap-5 border-b border-[var(--color-hairline)] pb-4">
        <div className="text-[var(--color-gold-text)]">
          <Icon name={icon} />
        </div>
        <h2 className="font-serif text-xl font-semibold leading-none text-[var(--color-deep)]">
          {title}
        </h2>
      </div>
      <div className="mt-6">{children}</div>
    </article>
  );
}

export default function Contact() {
  const categoryIcons: Parameters<typeof Icon>[0]["name"][] = [
    "pen",
    "book",
    "doc",
    "list",
  ];

  return (
    <div className="bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <section className="page-frame pt-9 sm:pt-11">
        <Breadcrumb />

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-end gap-x-10 gap-y-4 lg:pt-8">
              <h1 className="font-serif text-[clamp(46px,5vw,70px)] font-semibold leading-tight tracking-normal">
                連絡先
              </h1>
              <p className="pb-3 font-serif text-xl tracking-wide text-[var(--color-gold-text)]">
                Contact
              </p>
            </div>
            <p className="mt-6 max-w-[36rem] text-[15px] leading-9 text-[var(--color-deep)]">
              {contact.description}
              <br />
              メールアドレスは公開情報として確認できないため、掲載していません。
            </p>

            <div
              className="mt-8 grid border border-[var(--color-hairline)] bg-white/58 px-7 py-7 text-[var(--color-deep)] transition-colors hover:border-[var(--color-gold)] hover:bg-white sm:grid-cols-[64px_1fr_auto] sm:items-center sm:px-9 lg:min-h-[132px]"
            >
              <div className="mb-5 text-[var(--color-gold-text)] sm:mb-0">
                <Icon name="mail" />
              </div>
              <div>
                <p className="text-sm leading-7">公開プロフィールで確認できる連絡導線</p>
                <p className="mt-1 break-all font-serif text-[clamp(24px,3vw,34px)] leading-tight text-[var(--color-gold-text)]">
                  {contact.primaryLabel}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <a
                    className="inline-flex min-h-11 items-center border border-[var(--color-gold)] bg-white px-5 font-serif text-[var(--color-gold-text)] transition-colors hover:bg-[var(--color-pale)]"
                    href={contact.primaryUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    X を開く
                  </a>
                  <a
                    className="inline-flex min-h-11 items-center border border-[var(--color-hairline)] bg-white px-5 font-serif text-[var(--color-deep)] transition-colors hover:border-[var(--color-gold)]"
                    href={contact.secondaryUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {contact.secondaryLabel}
                  </a>
                </div>
              </div>
              <Arrow className="mt-5 text-[var(--color-gold-text)] sm:mt-0 sm:pl-8" />
            </div>
          </div>

          <img
            alt=""
            className="h-[280px] w-full object-cover object-center sm:h-[360px] lg:h-[408px]"
            src={manuscriptHero}
          />
        </div>

        <div className="mt-8 grid gap-0 border-[var(--color-hairline)] lg:grid-cols-[1.18fr_1fr_1fr] lg:border-y">
          <InfoPanel icon="doc" title="連絡・相談の種類">
            <p className="text-sm leading-8 text-[var(--color-muted)]">
              連絡内容の目安です。
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6 text-center text-sm text-[var(--color-deep)] sm:grid-cols-5 lg:grid-cols-5">
              {contact.accepts.map((item, index) => (
                <div className="grid justify-items-center gap-3" key={item}>
                  <div className="text-[var(--color-gold-text)]">
                    <Icon name={categoryIcons[index % categoryIcons.length]} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-8 text-[var(--color-muted)]">
              公開連絡先の範囲で確認できる導線のみ掲載しています。
            </p>
          </InfoPanel>

          <InfoPanel icon="list" title="ご相談時にお知らせください">
            <p className="text-sm leading-8 text-[var(--color-muted)]">
              スムーズなやり取りのため、可能な範囲でお知らせください。
            </p>
            <ul className="mt-3 space-y-1 text-sm leading-7 text-[var(--color-deep)]">
              {checklist.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-[0.45rem] grid h-4 w-4 shrink-0 place-items-center border border-[var(--color-hairline)] text-[10px] leading-none text-[var(--color-gold-text)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoPanel>

          <InfoPanel icon="mail" title="ご対応について">
            <p className="text-sm leading-8 text-[var(--color-muted)]">
              X またはカクヨム作者ページからご確認ください。
            </p>
            <div className="mt-5 flex items-center gap-5 bg-[var(--color-pale)] px-6 py-5 text-[var(--color-deep)]">
              <div className="text-[var(--color-gold-text)]">
                <Icon name="clock" />
              </div>
              <div>
                <p className="font-serif text-lg">返信目安：未設定</p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  返信期限は公開情報として確認できないため掲載していません。
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-8 text-[var(--color-muted)]">
              依頼条件や返信期限は、連絡時に直接ご確認ください。
            </p>
          </InfoPanel>
        </div>

        <div className="my-8 flex flex-col gap-5 bg-[var(--color-pale)] px-7 py-5 text-sm text-[var(--color-deep)] sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <p className="flex items-center gap-4 leading-7">
            <span className="text-[var(--color-gold-text)]">
              <Icon name="note" />
            </span>
            このページはカクヨム上で確認できる公開プロフィール情報をもとにしています。
          </p>
          <a
            className="flex items-center gap-8 text-[var(--color-gold-text)] transition-colors hover:text-[var(--color-ink)]"
            href={contact.secondaryUrl}
            rel="noreferrer"
            target="_blank"
          >
            カクヨム作者ページ
            <Arrow />
          </a>
        </div>
      </section>
    </div>
  );
}
