export type NavItem = {
  label: string;
  href: string;
};

export type Work = {
  title: string;
  slug: string;
  form: "長編小説" | "中編小説" | "短編小説" | "掌編";
  genre: string;
  year: string;
  status: string;
  catchcopy: string;
  summary: string;
  themes: string[];
  episodes: number;
  wordCount: number;
  publishedAt: string;
  updatedAt: string;
  url: string;
};

export type Credit = {
  year: string;
  category: "連載" | "完結" | "選考通過" | "告知";
  title: string;
  venue: string;
  description: string;
  url: string;
};

export type Note = {
  title: string;
  date: string;
  category: "近況ノート" | "作品告知" | "コンテスト";
  excerpt: string;
  url: string;
};

export type NewsItem = {
  date: string;
  category: "更新" | "完結" | "選考通過" | "告知";
  title: string;
  body: string;
  url: string;
};

export type Profile = {
  nameJa: string;
  handle: string;
  role: string;
  bio: string;
  fields: string[];
  registeredAt: string;
  kakuyomuUrl: string;
  xUrl: string;
};

export type Contact = {
  description: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel: string;
  secondaryUrl: string;
  accepts: string[];
};

export const nav: NavItem[] = [
  { label: "作品", href: "/works" },
  { label: "プロフィール", href: "/profile" },
  { label: "掲載・実績", href: "/credits" },
  { label: "ノート", href: "/notes" },
  { label: "お知らせ", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
];

export const works: Work[] = [
  {
    title: "追放された外れテイマー、ダンジョン配信で救ったレアモンスターがバズって最強百合パーティになりました",
    slug: "hazure-tamer-dungeon-stream",
    form: "長編小説",
    genre: "現代ファンタジー",
    year: "2026",
    status: "連載中",
    catchcopy: "救ったモンスターと最強の彼女たちが今度は私を離してくれない",
    summary: "外れテイマーとして追放された主人公が、ダンジョン配信で救ったレアモンスターをきっかけに最強百合パーティへ巻き込まれていく現代ファンタジー。",
    themes: ["百合", "ダンジョン配信", "テイマー"],
    episodes: 28,
    wordCount: 77912,
    publishedAt: "2026-03-22",
    updatedAt: "2026-04-18",
    url: "https://kakuyomu.jp/works/2912051595943235192",
  },
  {
    title: "ヤンデレ聖女にチート勇者として仕立て上げられた私、首が飛んでも無限蘇生で現代ダンジョンを配信無双",
    slug: "yandere-saint-infinite-revive",
    form: "長編小説",
    genre: "現代ファンタジー",
    year: "2025",
    status: "完結済",
    catchcopy: "現代日本、元女子高生、現勇者。相棒は、陰キャヤンデレ聖女様……",
    summary: "現代日本で勇者として仕立て上げられた主人公が、無限蘇生と配信を軸にダンジョンを駆け抜けるカクヨムコン11参加作。",
    themes: ["ヤンデレ聖女", "ダンジョン配信", "無限蘇生"],
    episodes: 47,
    wordCount: 114670,
    publishedAt: "2025-12-18",
    updatedAt: "2026-03-25",
    url: "https://kakuyomu.jp/works/822139840469565779",
  },
  {
    title: "破滅不可避の悪役獣使いに転生したが肉塊になりたくないので聖獣娘、魔獣娘に媚びを売る",
    slug: "akuyaku-kemono-tsukai",
    form: "長編小説",
    genre: "異世界ファンタジー",
    year: "2023",
    status: "連載中",
    catchcopy: "無理矢理使役する予定なのにどうして積極的に契約しようとしてくるんだ！？",
    summary: "破滅ルートを避けたい悪役獣使いが、聖獣娘や魔獣娘に嫌われないよう立ち回る異世界転生ファンタジー。",
    themes: ["異世界転生", "獣使い", "聖獣娘"],
    episodes: 63,
    wordCount: 152077,
    publishedAt: "2023-05-01",
    updatedAt: "2024-09-02",
    url: "https://kakuyomu.jp/works/16817330652916262212",
  },
  {
    title: "TSしたダンジョン配信者は無自覚で無双する",
    slug: "ts-dungeon-streamer",
    form: "長編小説",
    genre: "現代ファンタジー",
    year: "2023",
    status: "完結済",
    catchcopy: "TS、女体化、弱体化！？　しかし、最強！　大バズり！！",
    summary: "ダンジョン探索者となった男子高校生がTSスキルで女の子になり、配信と探索で無自覚に注目を集めていく現代ファンタジー。",
    themes: ["TSF", "ダンジョン", "無自覚無双"],
    episodes: 60,
    wordCount: 140007,
    publishedAt: "2023-12-01",
    updatedAt: "2025-03-26",
    url: "https://kakuyomu.jp/works/16817330658986631665",
  },
  {
    title: "配信初心者の私、プロ指示厨の言いなりで気づけば百合ハーレム完成！？",
    slug: "beginner-streamer-yuri-harem",
    form: "長編小説",
    genre: "現代ファンタジー",
    year: "2025",
    status: "完結済",
    catchcopy: "あれ！？　私、ダンジョンじゃなくて女の子攻略させられてる！？",
    summary: "同接ほぼ1の女子高生探索者が、的確すぎるコメントに従ううちに偉業と百合ハーレムを積み上げていくダンジョン配信もの。",
    themes: ["百合ハーレム", "ダンジョン配信", "女主人公"],
    episodes: 25,
    wordCount: 64460,
    publishedAt: "2025-03-20",
    updatedAt: "2025-03-20",
    url: "https://kakuyomu.jp/users/magurok/works",
  },
  {
    title: "不登校の私がプリントを届けに来る学級委員に手玉に取られるはずがない",
    slug: "futoko-gakkyu-iin",
    form: "中編小説",
    genre: "恋愛",
    year: "2025",
    status: "完結済",
    catchcopy: "撫でられて喜ぶとかこんなの絶対私じゃない",
    summary: "不登校の主人公と、プリントを届けに来る学級委員の距離が近づいていく百合恋愛作品。",
    themes: ["百合", "学級委員", "同居感"],
    episodes: 11,
    wordCount: 23758,
    publishedAt: "2025-11-11",
    updatedAt: "2025-11-11",
    url: "https://kakuyomu.jp/works/822139838239864728",
  },
];

export const credits: Credit[] = [
  {
    year: "2026",
    category: "連載",
    title: "追放された外れテイマー、ダンジョン配信で救ったレアモンスターがバズって最強百合パーティになりました",
    venue: "カクヨム",
    description: "現代ファンタジーの最新連載。2026年4月18日時点で全28話、77,912字まで公開。",
    url: "https://kakuyomu.jp/works/2912051595943235192",
  },
  {
    year: "2026",
    category: "選考通過",
    title: "ヤンデレ聖女にチート勇者として仕立て上げられた私、首が飛んでも無限蘇生で現代ダンジョンを配信無双",
    venue: "カクヨムコン11",
    description: "長編部門で中間選考通過を確認。作品は完結済み。",
    url: "https://kakuyomu.jp/contests/kakuyomu_contest_11?contest_category_number=10&order=last_episode_published_at",
  },
  {
    year: "2025",
    category: "完結",
    title: "推しのダンジョン配信者が妹になった義理の姉妹の話",
    venue: "カクヨム",
    description: "義姉妹・百合系作品の完結を近況ノートで報告。",
    url: "https://kakuyomu.jp/users/magurok/news/16818792439146429059",
  },
  {
    year: "2025",
    category: "告知",
    title: "底辺配信者の私、朝活配信中に遭遇したキメラにされた少女と契約して悪の秘密結社を...",
    venue: "ドラゴンノベルス7中編応募",
    description: "ドラゴンノベルス7の中編応募予定として、現代ファンタジー百合配信作品を告知。",
    url: "https://kakuyomu.jp/users/magurok/news/16818622173290839082",
  },
];

export const notes: Note[] = [
  {
    title: "カクヨムコン11 最終選考に残ったのは……",
    date: "2026-04-02",
    category: "コンテスト",
    excerpt: "「ヤンデレ聖女...」の中間選考通過と、新作「追放された外れテイマー...」について報告した近況ノート。",
    url: "https://kakuyomu.jp/users/magurok/news/2912051596725957411",
  },
  {
    title: "カクヨムコン11走り出しました！",
    date: "2025-12-18",
    category: "コンテスト",
    excerpt: "カクヨムコン11参加作として「ヤンデレ聖女...」の投稿開始を知らせる近況ノート。",
    url: "https://kakuyomu.jp/users/magurok/news/822139841555679961",
  },
  {
    title: "GAコンテスト用小説明日投稿！",
    date: "2025-10-08",
    category: "作品告知",
    excerpt: "第1回GAウェブ小説コンテスト向けに、現代ファンタジーと百合要素のある作品投稿を告知。",
    url: "https://kakuyomu.jp/users/magurok/news/822139837093041412",
  },
  {
    title: "りぼん用新作完結してました！",
    date: "2025-08-23",
    category: "近況ノート",
    excerpt: "「推しのダンジョン配信者が妹になった義理の姉妹の話」の完結を報告。",
    url: "https://kakuyomu.jp/users/magurok/news/16818792439146429059",
  },
];

export const news: NewsItem[] = [
  {
    date: "2026-04-18",
    category: "更新",
    title: "最新作が第28話まで更新",
    body: "「追放された外れテイマー...」が全28話、77,912字まで公開されています。",
    url: "https://kakuyomu.jp/works/2912051595943235192",
  },
  {
    date: "2026-04-02",
    category: "選考通過",
    title: "カクヨムコン11中間選考通過",
    body: "「ヤンデレ聖女...」がカクヨムコン11長編部門で中間選考を通過しました。",
    url: "https://kakuyomu.jp/users/magurok/news/2912051596725957411",
  },
  {
    date: "2025-12-18",
    category: "告知",
    title: "カクヨムコン11参加作の投稿開始",
    body: "「ヤンデレ聖女...」をカクヨムコン11参加作として投稿開始しました。",
    url: "https://kakuyomu.jp/users/magurok/news/822139841555679961",
  },
  {
    date: "2025-08-23",
    category: "完結",
    title: "義姉妹の百合作品が完結",
    body: "「推しのダンジョン配信者が妹になった義理の姉妹の話」の完結を報告しました。",
    url: "https://kakuyomu.jp/users/magurok/news/16818792439146429059",
  },
];

export const profile: Profile = {
  nameJa: "川野マグロ",
  handle: "@magurok",
  role: "カクヨム作家",
  bio: "カクヨムで現代ファンタジー、異世界ファンタジーを中心に作品を発表。近年は百合、ダンジョン配信、TSF・女体化系の作品を多く執筆し、楽しげなやり取りやわちゃわちゃした関係性を描いています。",
  fields: ["現代ファンタジー", "異世界ファンタジー", "百合", "ダンジョン配信", "TSF・女体化"],
  registeredAt: "2019-07-09",
  kakuyomuUrl: "https://kakuyomu.jp/users/magurok",
  xUrl: "https://x.com/MaguroK7654",
};

export const contact: Contact = {
  description: "公開プロフィールで確認できる連絡導線として、X またはカクヨム作者ページをご利用ください。",
  primaryLabel: "X: MaguroK7654",
  primaryUrl: "https://x.com/MaguroK7654",
  secondaryLabel: "カクヨム作者ページ",
  secondaryUrl: "https://kakuyomu.jp/users/magurok",
  accepts: ["作品感想", "掲載相談", "コンテスト関連", "コラボ相談"],
};
