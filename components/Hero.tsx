import Image from "next/image";

// Phase 3以降で public/images に差し替え予定
const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCr8W3HNlKCijr9pCE5p4GFycQabCcQLjewe80OY0gvtunaxNjcNfXry_DPEsuEBKx16i5dVZGbRTymdsvidEb0XWk4Sq8i1QOij9zTwxBhtCjWWcm0R-sKijvmn5qgeGBOivWzj3PKxJOxowruPIVpucbDhGG8UJ6aD9wPESyA7L3uPSxjgn96CpXWCo7fDA7a3K0qb4ILA-ahqxXTAoIFefT-GYHwoSc5o_WpIoqL8LCWf5jyGV-sIgMLbApZVt79LOetYI-BVMrd";

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-container-max items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-0 md:py-24">
      <div className="min-w-0 space-y-5 md:z-10 md:mr-[-40px] md:max-w-xl md:space-y-6 md:drop-shadow-sm">
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
        <h1 className="text-display-lg-mobile font-bold leading-tight text-primary md:text-display-lg">
          手作業を減らし、
          <br />
          現場が自然に回る仕組みを
          <br />
          つくります。
        </h1>
        <div className="space-y-4">
          <div className="max-w-lg text-body-md leading-relaxed text-[#2B3440]">
            <p>実務を整理し、</p>
            <p>Excel・CSV・業務データまわりの繰り返し作業を、</p>
            <p>小さな自動化ツールで軽くします。</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
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
      <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl border border-outline-variant/30 bg-[#EEF3F8] shadow-md md:z-0">
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
