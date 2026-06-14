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
    <section className="bg-white py-14 md:py-24" id="works">
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <h2 className="text-display-lg-mobile text-primary md:text-headline-md">
          制作・開発実績
        </h2>
        <div className="mt-3 mb-8 h-[2px] w-10 bg-accent-greige md:mb-12" />
        <div className="space-y-3 sm:space-y-4">
          {works.map((work) => (
            <div
              key={work.title}
              className="group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-outline-variant bg-[#F8FAFC] p-5 shadow-sm transition-all hover:border-primary-blue/50 hover:bg-white sm:p-6 md:flex-row md:items-center md:gap-4"
            >
              <div className="min-w-0 flex-1 pr-8 md:pr-0">
                <span className="mb-2 inline-block rounded bg-primary/10 px-2 py-0.5 text-label-sm font-bold text-primary">
                  {work.tag}
                </span>
                <h3 className="text-headline-sm leading-snug text-primary transition-colors group-hover:text-primary-blue">
                  {work.title}
                </h3>
                <div className="mt-1">
                  <span className="text-label-sm font-bold text-primary-blue">
                    [ {work.result} ]
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined absolute right-4 top-5 shrink-0 text-outline transition-all group-hover:translate-x-1 group-hover:text-primary-blue md:static md:top-auto md:right-auto">
                arrow_forward
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
