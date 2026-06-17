import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜江口純一｜業務改善・自動化支援",
  description:
    "江口純一のポートフォリオサイトにおける個人情報の取り扱いについて定めたプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 md:px-6 md:py-24">
      <article className="mx-auto max-w-3xl text-primary">
        <Link
          className="mb-8 inline-flex text-sm font-medium text-primary/70 transition-colors hover:text-primary"
          href="/"
        >
          ← トップへ戻る
        </Link>

        <h1 className="text-display-lg-mobile md:text-headline-md">
          プライバシーポリシー
        </h1>
        <div className="mt-3 mb-8 h-[2px] w-10 bg-accent-greige" />

        <p className="mb-8 text-body-md leading-7 text-[#2D3748]">
          江口純一（以下「当方」といいます。）は、本サイトにおいて取得する個人情報について、以下のとおり適切に取り扱います。
        </p>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">1. 取得する情報</h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            当方は、お問い合わせフォームを通じて、以下の情報を取得する場合があります。
          </p>
          <ul className="list-disc space-y-1 pl-5 text-body-md leading-7 text-[#2D3748]">
            <li>お名前・貴社名</li>
            <li>メールアドレス</li>
            <li>ご相談内容</li>
            <li>その他、お問い合わせ時にご入力いただいた情報</li>
          </ul>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">2. 利用目的</h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            取得した情報は、以下の目的で利用します。
          </p>
          <ul className="list-disc space-y-1 pl-5 text-body-md leading-7 text-[#2D3748]">
            <li>お問い合わせへの回答</li>
            <li>ご相談内容の確認</li>
            <li>業務改善・データ活用・自動化支援に関するご連絡</li>
            <li>サービス内容の改善</li>
            <li>必要に応じた本人確認</li>
          </ul>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">3. 第三者提供について</h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            当方は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">4. 個人情報の管理</h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            当方は、取得した個人情報について、漏えい、紛失、改ざん等が起きないよう、適切な管理に努めます。
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">
            5. 外部サービスの利用について
          </h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            本サイトでは、お問い合わせ対応やサイト運営のために、外部サービスを利用する場合があります。
            その場合、必要な範囲で情報が外部サービスに送信・保存されることがあります。
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">
            6. 個人情報の開示・訂正・削除等について
          </h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            ご本人から個人情報の開示、訂正、削除、利用停止等のご希望があった場合は、法令に従い、適切に対応します。
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">7. お問い合わせ窓口</h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            個人情報の取り扱いに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-headline-sm text-primary">
            8. プライバシーポリシーの変更
          </h2>
          <p className="text-body-md leading-7 text-[#2D3748]">
            当方は、必要に応じて本プライバシーポリシーの内容を変更することがあります。
            変更後の内容は、本サイトに掲載した時点で有効となります。
          </p>
        </section>

        <div className="space-y-1 border-t border-outline-variant/40 pt-6 text-body-md leading-7 text-[#4A5568]">
          <p>制定日：2026年1月1日</p>
          <p>運営者：江口純一</p>
        </div>
      </article>
    </main>
  );
}
