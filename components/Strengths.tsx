export default function Strengths() {
  return (
    <section
      className="border-y border-outline-variant/20 py-section-gap-md"
      id="strengths"
      style={{
        background:
          "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(238, 243, 248) 100%)",
      }}
    >
      <div className="mx-auto max-w-container-max px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-display-lg-mobile text-primary md:text-headline-md">
            私の強み
          </h2>
          <p className="text-body-md text-[#2B3440]">
            20年のキャリアで培った現場感覚と構造化スキルで、実効性のある改善を提案します。
          </p>
        </div>
        <div className="grid gap-gutter md:grid-cols-3">
          <div className="rounded-xl border border-outline-variant/30 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <span className="material-symbols-outlined mb-4 text-[32px] text-primary">
              search
            </span>
            <h3 className="mb-4 text-headline-sm text-primary">
              営業現場で培った課題発見力
            </h3>
            <p className="text-body-md leading-relaxed text-[#2B3440]">
              現場や顧客との対話から、本質的な課題を見つけ出し、改善の入口を明確にします。
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant/30 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <span className="material-symbols-outlined mb-4 text-[32px] text-primary">
              account_tree
            </span>
            <h3 className="mb-4 text-headline-sm text-primary">
              複雑な業務を整理する構造化力
            </h3>
            <p className="text-body-md leading-relaxed text-[#2B3440]">
              業務や情報の流れを整理し、曖昧な課題を言語化して、改善できる形へ落とし込みます。
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant/30 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <span className="material-symbols-outlined mb-4 text-[32px] text-primary">
              insights
            </span>
            <h3 className="mb-4 text-headline-sm text-primary">
              データを使った判断支援の設計力
            </h3>
            <p className="text-body-md leading-relaxed text-[#2B3440]">
              必要な情報を見える化し、日々の判断や行動につながる仕組みを設計します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
