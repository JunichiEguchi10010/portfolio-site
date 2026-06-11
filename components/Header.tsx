export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-outline-variant/30 bg-white/95 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between">
        <a className="text-body-lg font-bold text-primary" href="#">
          江口純一｜業務改善・自動化支援
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="text-label-md text-[#64717D] transition-colors hover:text-primary"
            href="#strengths"
          >
            私の強み
          </a>
          <a
            className="text-label-md text-[#64717D] transition-colors hover:text-primary"
            href="#services"
          >
            提供できること
          </a>
          <a
            className="text-label-md text-[#64717D] transition-colors hover:text-primary"
            href="#process-pricing"
          >
            ご相談の流れ
          </a>
          <a
            className="text-label-md text-[#64717D] transition-colors hover:text-primary"
            href="#works"
          >
            制作実績
          </a>
          <a
            className="rounded-full bg-primary px-6 py-2 text-label-md text-on-primary transition-all hover:bg-primary-container"
            href="#contact"
          >
            無料相談
          </a>
        </nav>
        <button className="text-primary md:hidden" type="button">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
