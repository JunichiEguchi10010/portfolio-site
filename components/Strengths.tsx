export default function Strengths() {
  const cards = [
    {
      icon: "search",
      title: "課題の本質を見つける力",
      description:
        "業務の流れを整理し、複雑な状況から課題の核心をつかみます。改善の方向性が見える状態をつくります。",
    },
    {
      icon: "account_tree",
      title: "“使われる仕組み”を設計する力",
      description:
        "現場で無理なく続く仕組みづくりを大切にしています。小さく始めて、自然に運用へつながる形に整えます。",
    },
    {
      icon: "insights",
      title: "データを“使える形”に整える力",
      description:
        "散在するデータを集約し、必要な情報を分かりやすく整理します。数字を根拠に、迷いの少ない判断ができる状態をつくります。",
    },
  ];

  return (
    <section
      className="border-y border-outline-variant/30 bg-white py-14 md:py-24"
      id="strengths"
    >
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-display-lg-mobile text-primary md:text-headline-md">
            私の強み
          </h2>
          <div className="mx-auto mt-3 mb-6 h-[2px] w-10 bg-accent-greige" />
          <p className="mx-auto max-w-3xl text-section-lead text-[#2D3748]">
            約20年の営業経験で培った現場感覚と洞察力を活かし、
            <br className="hidden sm:block lg:hidden" />
            実効性のある改善を提案します。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-gutter">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-xl border-2 border-transparent bg-[#F8FAFC] p-6 shadow-sm md:p-8"
            >
              <span className="material-symbols-outlined mb-3 block text-[28px] leading-none text-primary-blue md:mb-4 md:text-[32px]">
                {card.icon}
              </span>
              <h3 className="mb-3 text-headline-sm text-primary md:mb-4">
                {card.title}
              </h3>
              <p className="flex-1 text-body-md leading-relaxed text-[#4A5568]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
