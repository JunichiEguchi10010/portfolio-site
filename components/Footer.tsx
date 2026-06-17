import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-white px-4 py-8 sm:px-6 md:py-8">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 md:flex-row md:items-center md:gap-8">
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <span className="text-body-md font-bold text-primary md:text-body-lg">
            江口純一｜業務改善・自動化支援
          </span>
          <p className="text-label-sm text-[#64717D]">
            © 2026 Junichi Eguchi. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <Link
            className="text-label-sm font-medium text-primary transition-colors hover:text-primary-blue"
            href="/privacy"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
