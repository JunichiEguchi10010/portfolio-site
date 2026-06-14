export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center border-b border-outline-variant/50 bg-white/95 px-4 shadow-sm backdrop-blur-sm sm:px-6 md:h-[72px]">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between gap-3">
        <a
          className="min-w-0 flex-1 text-[13px] font-bold leading-snug text-primary sm:text-[15px] md:flex-none md:text-body-lg"
          href="#"
        >
          江口純一｜業務改善・自動化支援
        </a>
        <nav className="hidden shrink-0 items-center gap-8 md:flex">
          <a
            className="whitespace-nowrap text-label-md font-medium text-[#4A5568] transition-colors hover:text-primary-blue"
            href="#strengths"
          >
            私の強み
          </a>
          <a
            className="whitespace-nowrap text-label-md font-medium text-[#4A5568] transition-colors hover:text-primary-blue"
            href="#services"
          >
            提供できること
          </a>
          <a
            className="whitespace-nowrap text-label-md font-medium text-[#4A5568] transition-colors hover:text-primary-blue"
            href="#works"
          >
            制作実績
          </a>
          <a
            className="whitespace-nowrap text-label-md font-medium text-[#4A5568] transition-colors hover:text-primary-blue"
            href="#process-pricing"
          >
            ご相談の流れ
          </a>
          <a
            className="inline-flex items-center rounded-full bg-primary px-6 py-2 text-label-md font-bold text-on-primary shadow-sm transition-all hover:bg-primary/90"
            href="#contact"
          >
            無料相談
          </a>
        </nav>
        <button
          aria-label="メニューを開く"
          className="shrink-0 text-primary md:hidden"
          type="button"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
