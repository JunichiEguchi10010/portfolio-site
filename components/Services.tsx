export default function Services() {
  const services = [
    {
      title: "業務整理・業務改善",
      description: (
        <>
          業務の流れを整理し、課題を見える形に整えます。
          <br className="hidden sm:inline" />
          現場に合わせて、改善の方向性と進め方を明確にします。
        </>
      ),
    },
    {
      title: "システム設計・業務システム開発",
      description: (
        <>
          業務に合った小さな仕組みから、
          <br className="hidden sm:inline" />
          日々の作業が自然に回るシステムまで設計・開発します。
        </>
      ),
    },
    {
      title: "データ活用・レポート自動化支援",
      description: (
        <>
          散在するデータを整え、判断に使える形にまとめます。
          <br className="hidden sm:inline" />
          日々の確認作業やレポート作成を効率化します。
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
