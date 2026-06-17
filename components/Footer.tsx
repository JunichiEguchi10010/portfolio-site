import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-white px-4 py-5 sm:px-6 md:py-5">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 md:flex-row md:items-center md:gap-6">
        <div className="space-y-0.5 text-center leading-tight md:text-left">
          <p className="text-label-md font-semibold text-primary">
            江口純一｜業務改善・自動化支援
          </p>
          <p className="text-label-sm text-primary/60">
            © 2026 Junichi Eguchi. All rights reserved.
          </p>
        </div>
        <Link
          className="text-label-sm font-medium text-primary/60 transition-colors hover:text-primary"
          href="/privacy"
        >
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
}
