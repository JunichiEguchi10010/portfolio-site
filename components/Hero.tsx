import Image from "next/image";

// Phase 3以降で public/images に差し替え予定
const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCr8W3HNlKCijr9pCE5p4GFycQabCcQLjewe80OY0gvtunaxNjcNfXry_DPEsuEBKx16i5dVZGbRTymdsvidEb0XWk4Sq8i1QOij9zTwxBhtCjWWcm0R-sKijvmn5qgeGBOivWzj3PKxJOxowruPIVpucbDhGG8UJ6aD9wPESyA7L3uPSxjgn96CpXWCo7fDA7a3K0qb4ILA-ahqxXTAoIFefT-GYHwoSc5o_WpIoqL8LCWf5jyGV-sIgMLbApZVt79LOetYI-BVMrd";

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-container-max items-center gap-8 overflow-visible px-4 pt-10 pb-12 sm:px-6 md:pt-16 md:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-0 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="relative z-10 min-w-0 space-y-5 lg:max-w-xl lg:space-y-6 lg:drop-shadow-sm">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-lg border border-outline-variant/50 bg-white px-3 py-1 text-label-sm text-[#2B3440]">
            業務改善
          </span>
          <span className="rounded-lg border border-outline-variant/50 bg-white px-3 py-1 text-label-sm text-[#2B3440]">
            データ活用
          </span>
          <span className="rounded-lg border border-outline-variant/50 bg-white px-3 py-1 text-label-sm text-[#2B3440]">
            自動化ツール開発
          </span>
        </div>
        <div className="relative z-20 min-w-0">
          <h1 className="text-display-lg-mobile font-bold leading-[1.25] tracking-normal text-primary md:text-display-lg md:tracking-[-0.01em]">
            手作業に追われる日々を
            <br />
            自然に回る業務へ
          </h1>
        </div>
        <div className="space-y-4">
          <div className="max-w-lg text-body-md leading-relaxed text-[#2B3440]">
            <p>
              実務を整理し、Excel・CSVまわりの繰り返し作業を
              <br />
              無理なく続く“軽い仕組み”に整えます。
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4 lg:w-fit">
          <a
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-label-md text-on-primary shadow-sm transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
            href="#contact"
          >
            業務の悩みを相談する
          </a>
          <a
            className="inline-flex w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-label-md text-primary transition-all hover:bg-white sm:w-auto sm:px-8"
            href="#works"
          >
            制作実績を見る
          </a>
        </div>
      </div>
      <div className="relative z-0 aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl border border-outline-variant/30 bg-[#EEF3F8] shadow-md lg:-ml-6 lg:max-w-[520px] lg:-translate-y-2 xl:-ml-16 xl:max-w-[560px]">
        {/* Phase 3以降で public/images に差し替え予定 */}
        <Image
          alt="江口純一 実務イメージ"
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          src={HERO_IMAGE_URL}
        />
      </div>
    </section>
  );
}
