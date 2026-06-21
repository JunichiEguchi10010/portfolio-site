import Image from "next/image";

// Phase 3以降で public/images に差し替え予定
const CASE_STUDY_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsgcxkgBIoiamgPxfpOWmRGh_CSP4xlLXpsgSApZjMTJcucTmtFzrjtgqFEcDiFo3qOtYqflZiqlG6Lv_TzpU6u0HhJpjFVF21PF1EZSgb4MQy0JePnnEAPswjU3IvKKNoLI1FVhrvZ8D6RFN8uYZYQ4QTkUk7MKGC0PDbsYPYmfbSG0iFY8QsF1e5rfcnU6bhXJyXWPmyZJOqXApoFYe0R7JNN1bLy5CT7r0n9AlmP2ooCTwthUu38XRDUEEIJh9WMaXueEEEa4fd";

const features = [
  "日次データの取得・更新",
  "指標計算とランキング生成",
  "初動感知による候補抽出",
  "Streamlitによる確認画面",
  "AIを活用した判断補助",
  "Gitによる改善履歴管理",
];

export default function AutoScreenCaseStudy() {
  return (
    <section className="bg-surface-container py-14 md:py-24">
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <div className="flex flex-col items-stretch gap-8 rounded-xl bg-primary p-6 text-on-primary shadow-2xl sm:p-8 md:flex-row md:items-center md:gap-12 md:p-16">
          <div className="min-w-0 space-y-6 md:w-1/2">
            <span className="inline-block border-2 border-accent-greige px-3 py-1 text-label-md font-bold text-accent-greige">
              Engineering Showcase
            </span>
            <h2 className="text-display-lg-mobile leading-tight md:text-display-lg">
              日々の業務をもっと扱いやすく。
            </h2>
            <p className="text-body-md leading-relaxed text-slate-300">
              自作の運用支援アプリ「AUTO_SCREEN」は、データ取得から可視化、初動検知までを一つにまとめた、“毎日の判断を支えるためのツール”です。実務で使い続けられるよう、機能とUIを丁寧に磨いています。
            </p>
            <div className="grid grid-cols-1 gap-y-3 pt-2 md:grid-cols-2 md:gap-x-6 md:pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <span className="material-symbols-outlined shrink-0 text-[20px] text-accent-greige">
                    check_circle
                  </span>
                  <span className="text-body-md font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-label-sm italic text-slate-400">
              この経験をもとに、業務データを整理し、判断しやすい画面や自動化ツールとして形にする支援ができます。
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl border border-white/10 shadow-2xl md:aspect-auto md:h-[360px] md:w-1/2">
            {/* Phase 3以降で public/images に差し替え予定 */}
            <Image
              alt="実務向けダッシュボードUI"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 540px"
              src={CASE_STUDY_IMAGE_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
