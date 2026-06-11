export default function Services() {
  return (
    <section className="bg-white py-section-gap-md" id="services">
      <div className="mx-auto max-w-container-max px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-display-lg-mobile text-primary md:text-headline-md">
              提供できること
            </h2>
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <div>
                  <h4 className="mb-2 text-headline-sm text-primary">
                    現場の課題整理・改善ポイントの確認
                  </h4>
                  <p className="text-body-md text-[#2B3440]">
                    ヒアリングを通じ、ボトルネックを特定。
                    <br />
                    最短距離で成果を出すための実行計画を策定します。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <div>
                  <h4 className="mb-2 text-headline-sm text-primary">
                    データ活用・見える化支援
                  </h4>
                  <p className="text-body-md text-[#2B3440]">
                    散在するデータを集約し、意思決定に使える形へ整えます。
                    <br />
                    Excelから専用ツールまで柔軟に対応します。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <div>
                  <h4 className="mb-2 text-headline-sm text-primary">
                    業務の自動化・仕組み化
                  </h4>
                  <p className="text-body-md text-[#2B3440]">
                    ルーチン業務をプログラミングで自動化し、
                    <br />
                    属人化しやすい作業を、継続して回る仕組みに整えます。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border-l-4 border-primary bg-[#F5F7FA] p-6 shadow-sm">
              <p className="text-headline-sm text-primary">営業経験 20年</p>
              <p className="text-label-sm text-[#64717D]">REAL WORLD EXPERIENCE</p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-[#F5F7FA] p-6 shadow-sm">
              <p className="text-headline-sm text-primary">業務を整理する構造化力</p>
              <p className="text-label-sm text-[#64717D]">CORE STRENGTH</p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-[#F5F7FA] p-6 shadow-sm">
              <p className="text-headline-sm text-primary">システム開発 / 業務改善支援</p>
              <p className="text-label-sm text-[#64717D]">DEVELOPMENT & CONSULTING</p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-[#F5F7FA] p-6 shadow-sm">
              <p className="text-headline-sm text-primary">AI・データ活用 / 自動化支援</p>
              <p className="text-label-sm text-[#64717D]">AI & AUTOMATION</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
