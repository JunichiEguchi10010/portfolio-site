export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <span className="text-body-lg font-bold text-primary">
            江口純一｜業務改善・自動化支援
          </span>
          <p className="text-label-sm text-[#64717D]">
            © 2026 Junichi Eguchi. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-label-sm text-[#2B3440] transition-colors hover:text-primary"
            href="#"
          >
            プライバシーポリシー
          </a>
          <a
            className="text-label-sm text-[#2B3440] transition-colors hover:text-primary"
            href="#"
          >
            利用規約
          </a>
        </div>
      </div>
    </footer>
  );
}
