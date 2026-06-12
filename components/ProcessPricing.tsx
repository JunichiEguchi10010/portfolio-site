const steps = [
  {
    number: "1",
    title: "ヒアリング",
    description: "現在の業務内容や、手間に感じている作業をお聞きします。",
  },
  {
    number: "2",
    title: "整理・設計",
    description: "業務の流れやデータの状態を整理し、改善方法を検討します。",
  },
  {
    number: "3",
    title: "小さく実装・改善",
    description: "必要な部分から自動化し、使いながら調整します。",
  },
];

const pricing = [
  { label: "業務整理・改善相談", price: "1万円〜" },
  { label: "Excel / CSV整理・自動化", price: "3万円〜" },
  { label: "小さな業務ツール開発", price: "5万円〜" },
];

export default function ProcessPricing() {
  return (
    <section
      className="border-t border-outline-variant/20 bg-[#F7FAFC] py-12 md:py-section-gap-md"
      id="process-pricing"
    >
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 text-display-lg-mobile text-primary md:text-headline-md">
            ご相談から導入まで
          </h2>
          <p className="mx-auto max-w-2xl text-body-md text-[#2B3440]">
            現在の業務内容や手作業の流れをお聞きし、改善できる部分を一緒に整理します。
            <br className="hidden sm:inline" />
            必要なところから、小さく仕組みにしていきます。
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 md:space-y-8">
            <h3 className="border-b border-outline-variant/30 pb-2 text-headline-sm text-primary">
              導入までの流れ
            </h3>
            <div className="space-y-5 md:space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-label-md font-bold text-on-primary">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <p className="mb-1 font-bold text-primary">{step.title}</p>
                    <p className="text-body-md text-[#2B3440]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            <h3 className="border-b border-outline-variant/30 pb-2 text-headline-sm text-primary">
              費用の目安
            </h3>
            <div className="rounded-xl border border-outline-variant/30 bg-[#E6EDF5] p-6 shadow-sm md:p-8">
              <ul className="mb-6 space-y-4">
                {pricing.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-1 border-b border-outline-variant/30 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="min-w-0 text-body-md text-primary">
                      {item.label}
                    </span>
                    <span className="shrink-0 text-headline-sm text-primary">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-label-sm italic text-[#64717D]">
                内容や規模に応じて、事前にお見積りします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
