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
    <section className="bg-white py-section-gap-md">
      <div className="mx-auto max-w-container-max px-6">
        <div className="flex flex-col items-center gap-12 rounded-xl bg-primary p-8 text-on-primary shadow-lg md:flex-row md:p-16">
          <div className="space-y-6 md:w-1/2">
            <span className="inline-block border border-on-primary px-3 py-1 text-label-md">
              Case Study: AUTO_SCREEN
            </span>
            <h2 className="text-display-lg-mobile leading-tight md:text-display-lg">
              実務に即したデータ活用を、
              <br />
              日々の判断に使える形へ。
            </h2>
            <p className="text-body-md leading-relaxed opacity-90">
              AUTO_SCREENは、日次データの取得、指標計算、ランキング生成、初動感知、UI表示までを一貫して行う自作システムです。単なる一覧表ではなく、毎日の確認作業や判断を支援するために、見やすさと運用しやすさを重視して改善を続けています。
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-3 pt-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed">
                    check_circle
                  </span>
                  <span className="text-body-md">{feature}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-label-sm italic text-[#64717D]">
              この経験をもとに、業務データを整理し、判断しやすい画面や自動化ツールとして形にする支援ができます。
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-on-primary/20 shadow-2xl md:w-1/2">
            {/* Phase 3以降で public/images に差し替え予定 */}
            <img
              alt="実務向けダッシュボードUI"
              className="h-full w-full object-cover"
              src={CASE_STUDY_IMAGE_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
