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
        label: "得られた価値",
        text: "毎日の確認作業を効率化し、判断材料を短時間で把握できる状態にしました。",
      },
    ],
    technologies: ["Python", "Streamlit", "CSV", "Git"],
  },
  {
    id: "workflow-automation-tool",
    category: "Automation",
    title: "業務フロー整理と自動化支援ツールの開発",
    result: "月間40時間の工数削減",
    imageAlt: "業務フロー整理と自動化支援ツールの画面イメージ",
    descriptions: [
      {
        label: "課題",
        text: "手作業や確認作業が分散していると、作業漏れや属人化が起きやすくなります。",
      },
      {
        label: "実装したこと",
        text: "業務の流れを整理し、繰り返し発生する作業をツール化・自動化できる形に落とし込みました。",
      },
      {
        label: "工夫した点",
        text: "現場の運用を大きく変えすぎず、日々の業務に自然に組み込める設計を重視しました。",
      },
      {
        label: "得られた価値",
        text: "作業時間の削減だけでなく、確認のしやすさや再現性の向上につながる仕組みを作りました。",
      },
    ],
    technologies: ["Python", "Excel", "CSV", "Git"],
  },
  {
    id: "data-decision-ui",
    category: "UI/UX Development",
    title: "データ集計・判断支援UIの構築",
    result: "現場の入力負荷 50% 軽減",
    imageAlt: "データ集計・判断支援UIの表示画面",
    descriptions: [
      {
        label: "課題",
        text: "データは存在していても、集計や見せ方が整理されていないと、判断材料として活用しづらい状態になります。",
      },
      {
        label: "実装したこと",
        text: "必要なデータを集計し、比較・確認しやすいUIとして表示できるようにしました。",
      },
      {
        label: "工夫した点",
        text: "数値を並べるだけでなく、優先度や確認ポイントが分かりやすくなるように設計しました。",
      },
      {
        label: "得られた価値",
        text: "状況把握から判断までの流れを短縮し、日々の意思決定を支える画面にしました。",
      },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "portfolio-lp",
    category: "Web Development",
    title: "個人ポートフォリオLPの設計・実装・公開",
    result: "Next.js / Vercel 公開",
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
        label: "得られた価値",
        text: "自身の専門性や制作実績を、相談につながる形で整理・公開できる状態にしました。",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Vercel", "GitHub"],
  },
];
