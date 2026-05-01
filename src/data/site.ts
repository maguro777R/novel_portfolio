export type NavItem = {
  label: string;
  href: string;
};

export type Work = {
  title: string;
  slug: string;
  form: "短編小説" | "中編小説" | "エッセイ" | "掌編";
  year: string;
  status: string;
  summary: string;
  themes: string[];
};

export type Credit = {
  year: string;
  title: string;
  venue: string;
  description: string;
};

export type Note = {
  title: string;
  date: string;
  excerpt: string;
};

export type NewsItem = {
  date: string;
  title: string;
  body: string;
};

export type Profile = {
  nameJa: string;
  nameEn: string;
  role: string;
  bio: string;
  fields: string[];
};

export type Contact = {
  email: string;
  description: string;
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
    title: "白い封筒の夜",
    slug: "shiroi-futo-no-yoru",
    form: "短編小説",
    year: "2026",
    status: "掲載準備中",
    summary: "取り壊しが決まったアパートで、差出人のない手紙を受け取った青年の一夜を描く。",
    themes: ["都市", "記憶", "喪失"],
  },
  {
    title: "水面の名前",
    slug: "name-on-the-water",
    form: "中編小説",
    year: "2025",
    status: "Web文芸媒体に掲載",
    summary: "海辺の町へ戻った翻訳者が、途切れていた家族史と静かに向き合う物語。",
    themes: ["家族史", "翻訳", "帰郷"],
  },
  {
    title: "午前四時の机",
    slug: "four-am-desk",
    form: "エッセイ",
    year: "2024",
    status: "連載実績あり",
    summary: "執筆、生活、読むことについて、日々の机辺から綴った創作ノート。",
    themes: ["創作", "読書", "生活"],
  },
];

export const credits: Credit[] = [
  {
    year: "2026",
    title: "白い封筒の夜",
    venue: "文芸誌掲載予定",
    description: "短編小説として発表予定。掲載情報は確定後に更新します。",
  },
  {
    year: "2025",
    title: "水面の名前",
    venue: "Web文芸媒体",
    description: "中編小説を寄稿。海辺の町と家族の記憶を主題にした作品です。",
  },
  {
    year: "2024",
    title: "午前四時の机",
    venue: "創作エッセイ連載",
    description: "執筆習慣、読書、生活の記録を扱うエッセイを連載しました。",
  },
];

export const notes: Note[] = [
  {
    title: "余白の残し方",
    date: "2026-04-12",
    excerpt: "説明しすぎず、読後に残る沈黙をどう設計するかについての短い覚え書き。",
  },
  {
    title: "街を書くための観察",
    date: "2026-03-03",
    excerpt: "通りの明るさ、駅前の音、古い建物の匂いから場面を立ち上げるためのメモ。",
  },
  {
    title: "読み返しの速度",
    date: "2026-01-18",
    excerpt: "初稿から離れ、文章の呼吸を取り戻すまでに必要な時間について。",
  },
];

export const news: NewsItem[] = [
  {
    date: "2026-04-20",
    title: "ポートフォリオを公開しました",
    body: "作品一覧、掲載歴、プロフィール、連絡先をまとめたサイトを公開しました。",
  },
  {
    date: "2026-02-15",
    title: "新作短編を準備中です",
    body: "短編小説「白い封筒の夜」の掲載に向けて準備を進めています。",
  },
  {
    date: "2025-11-09",
    title: "中編小説を寄稿しました",
    body: "Web文芸媒体に「水面の名前」を寄稿しました。",
  },
];

export const profile: Profile = {
  nameJa: "川野マグロ",
  nameEn: "Kawano Maguro",
  role: "小説家",
  bio: "都市生活の細部、記憶の不確かさ、人と場所の距離を主題に、文芸誌やWeb媒体で短編小説とエッセイを発表しています。",
  fields: ["文芸小説", "短編小説", "エッセイ", "書籍企画"],
};

export const contact: Contact = {
  email: "contact@example.com",
  description: "執筆依頼、掲載相談、取材、書籍企画についてはメールでご連絡ください。",
  accepts: ["寄稿", "連載", "取材", "書籍企画"],
};
