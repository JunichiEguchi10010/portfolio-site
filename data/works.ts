export type WorkDescription = {
  label: string;
  text: string;
};

export type WorkItem = {
  id: string;
  category: string;
  title: string;
  result: string;
  imageSrc?: string;
  imageAlt: string;
  descriptions: WorkDescription[];
  technologies?: string[];
};

export const works: WorkItem[] = [
  {
    id: "daily-ranking-dashboard",
    category: "Data Strategy",
    title: "日次データ取得・ランキング可視化システムの設計",
    result: "意思決定速度の向上",
    imageSrc: "/images/works/daily-ranking-dashboard.png",
    imageAlt: "日次データ取得・ランキング可視化システムのダッシュボード画面",
    descriptions: [
      {
        label: "課題",
        text: "日々変化するデータを手作業で確認するだけでは、判断に時間がかかり、候補の比較もしづらい状態でした。",
      },
      {
        label: "実装したこと",
        text: "日次データの取得、指標計算、ランキング生成、候補の可視化までを一連の流れとして整理しました。",
      },
      {
        label: "工夫した点",
        text: "単なる一覧表示ではなく、判断に必要な情報を優先順位が分かる形で見せる構成にしました。",
      },
      {
        label: "できるようになったこと",
        text: "毎日の確認作業を効率化し、判断材料を短時間で把握できる状態にしました。",
      },
    ],
    technologies: ["Python", "Streamlit", "pandas", "SQLite", "CSV", "Git"],
  },
  {
    id: "inquiry-case-management-dashboard",
    category: "Automation",
    title: "問い合わせ対応・案件管理ダッシュボードの開発",
    result: "Excel管理から対応漏れを可視化",
    imageSrc: "/images/works/inquiry-case-management-dashboard.png",
    imageAlt: "問い合わせ対応・案件管理ダッシュボードの画面イメージ",
    descriptions: [
      {
        label: "課題",
        text: "問い合わせや営業案件をExcelで管理していると、未対応案件や期限超過に気づきにくく、対応漏れが発生しやすくなります。",
      },
      {
        label: "実装したこと",
        text: "Excelの案件一覧を読み込み、対応状況・担当者・期限超過をダッシュボード上で確認できる軽量な管理ツールを作成しました。",
      },
      {
        label: "工夫した点",
        text: "本格CRMではなく、既存のExcel管理を活かしたまま使える構成にし、現場が無理なく導入できるシンプルな画面設計を重視しました。",
      },
      {
        label: "できるようになったこと",
        text: "未対応・期限超過・本日対応の案件を見つけやすくなり、対応漏れの防止と案件状況の把握につながる仕組みを作りました。",
      },
    ],
    technologies: ["Python", "Streamlit", "pandas", "openpyxl", "Excel", "Git"],
  },
  {
    id: "portfolio-lp",
    category: "Web Development",
    title: "個人ポートフォリオLPの設計・実装・公開",
    result: "Next.js / Vercel 公開",
    imageSrc: "/images/works/portfolio-lp.png",
    imageAlt: "個人ポートフォリオLPの設計・実装・公開",
    descriptions: [
      {
        label: "課題",
        text: "業務改善・自動化支援の専門性を、初見の人にも分かりやすく伝える必要がありました。",
      },
      {
        label: "実装したこと",
        text: "強み、提供サービス、制作実績、相談の流れ、問い合わせフォームまでを1ページLPとして設計・実装しました。",
      },
      {
        label: "工夫した点",
        text: "派手な演出よりも、信頼感・実務家らしさ・情報の整理感を重視し、余白・配色・導線を調整しました。",
      },
      {
        label: "できるようになったこと",
        text: "自身の専門性や制作実績を、相談につながる形で整理・公開できる状態にしました。",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Vercel", "GitHub"],
  },
];
