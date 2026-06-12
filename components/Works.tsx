export default function Works() {
  const works = [
    {
      tag: "Data Strategy",
      title: "日次データ取得・ランキング可視化システムの設計",
      result: "意思決定速度の向上",
    },
    {
      tag: "Automation",
      title: "業務フロー整理と自動化支援ツールの開発",
      result: "月間40時間の工数削減",
    },
    {
      tag: "UI/UX Development",
      title: "データ集計・判断支援UIの構築",
      result: "現場の入力負荷 50% 軽減",
    },
  ];

  return (
    <section className="bg-[#F7FAFC] py-section-gap-md" id="works">
      <div className="mx-auto max-w-container-max px-6">
        <h2 className="mb-12 text-display-lg-mobile text-primary md:text-headline-md">
          制作・開発実績
        </h2>
        <div className="space-y-4">
          {works.map((work) => (
            <div
              key={work.title}
              className="group flex cursor-pointer flex-col items-start justify-between gap-4 rounded-xl border border-outline-variant/30 bg-white p-6 shadow-sm transition-colors hover:bg-[#F5F7FA] md:flex-row md:items-center"
            >
              <div className="min-w-0 flex-1">
                <span className="mb-2 inline-block rounded bg-[#EEF3F8] px-2 py-0.5 text-label-sm text-[#2B3440]">
                  {work.tag}
                </span>
                <h3 className="text-headline-sm text-primary">{work.title}</h3>
                <div className="mt-1">
                  <span className="text-label-sm font-bold text-primary">
                    [ {work.result} ]
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined shrink-0 text-outline transition-transform group-hover:translate-x-0.5">
                chevron_right
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
