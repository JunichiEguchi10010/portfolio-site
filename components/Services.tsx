export default function Services() {
  const services = [
    {
      title: "現場の課題整理・改善ポイントの確認",
      description: (
        <>
          ヒアリングを通じ、ボトルネックを特定。
          <br className="hidden sm:inline" />
          最短距離で成果を出すための実行計画を策定します。
        </>
      ),
    },
    {
      title: "データ活用・見える化支援",
      description: (
        <>
          散在するデータを集約し、意思決定に使える形へ整えます。
          <br className="hidden sm:inline" />
          Excelから専用ツールまで柔軟に対応します。
        </>
      ),
    },
    {
      title: "業務の自動化・仕組み化",
      description: (
        <>
          ルーチン業務をプログラミングで自動化し、
          <br className="hidden sm:inline" />
          属人化しやすい作業を、継続して回る仕組みに整えます。
        </>
      ),
    },
  ];

  const highlights = [
    { title: "営業経験 20年", label: "REAL WORLD EXPERIENCE" },
    { title: "業務を整理する構造化力", label: "CORE STRENGTH" },
    { title: "システム開発 / 業務改善支援", label: "DEVELOPMENT & CONSULTING" },
    { title: "AI・データ活用 / 自動化支援", label: "AI & AUTOMATION" },
  ];

  return (
    <section className="bg-surface-container py-14 md:py-24" id="services">
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="min-w-0">
            <h2 className="text-display-lg-mobile text-primary md:text-headline-md">
              できること
            </h2>
            <div className="mt-3 mb-8 h-[2px] w-10 bg-accent-greige" />
            <div className="space-y-8 md:space-y-10">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary-blue" />
                  <div className="min-w-0">
                    <h4 className="mb-2 text-headline-sm text-primary">
                      {service.title}
                    </h4>
                    <p className="text-body-md text-[#2D3748]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border-l-4 border-primary bg-white p-5 shadow-md md:p-6"
              >
                <p className="text-headline-sm text-primary">{item.title}</p>
                <p className="mt-1 text-label-sm font-bold tracking-wider text-primary-blue">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
