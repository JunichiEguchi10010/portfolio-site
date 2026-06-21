"use client";

import { useState, type FormEvent } from "react";

const consultationExamples = [
  "毎月の集計作業を自動化したい",
  "Excel・CSVの管理を整理したい",
  "営業活動の記録や確認フローを見直したい",
  "業務データを見やすい画面にしたい",
];

const inputClassName =
  "box-border w-full max-w-full rounded-lg border border-outline-variant bg-[#F8FAFC] px-4 py-3 text-body-md outline-none transition-all placeholder:text-[#94a3b8] focus:border-primary-blue focus:ring-1 focus:ring-primary-blue disabled:cursor-not-allowed disabled:opacity-60";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatusMessage({
          type: "error",
          text:
            data.error ??
            "送信に失敗しました。しばらくしてから再度お試しください。",
        });
        return;
      }

      form.reset();
      setStatusMessage({
        type: "success",
        text: "お問い合わせを受け付けました。\n内容を確認のうえ、2営業日以内にご連絡いたします。\nお問い合わせありがとうございました。",
      });
    } catch {
      setStatusMessage({
        type: "error",
        text: "送信に失敗しました。しばらくしてから再度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex-1 bg-surface-container py-16 md:py-24">
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex min-w-0 flex-col justify-start">
            <h2 className="text-display-lg-mobile text-primary md:text-headline-md">
              まずは今の業務をお聞かせください
            </h2>
            <div className="mt-3 mb-6 h-[2px] w-10 bg-accent-greige" />
            <p className="mb-10 text-section-lead text-[#2D3748]">
              「何を頼めばいいか分からない」という段階でも問題ありません。
              <br className="hidden md:block" />
              日々の業務内容や手間に感じている作業をお聞きし、改善できる
              <br className="hidden md:block" />
              ポイントを整理します。
            </p>
            <p className="mb-4 text-label-md font-bold text-primary">
              たとえば、こんなご相談に対応できます。
            </p>
            <ul className="space-y-4 text-body-md text-primary">
              {consultationExamples.map((example) => (
                <li key={example} className="flex items-start gap-3 font-medium">
                  <span className="material-symbols-outlined shrink-0 text-primary-blue">
                    check
                  </span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 rounded-xl border border-outline-variant bg-white p-5 shadow-lg sm:p-6 md:p-8">
            <form
              className="space-y-5 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="mb-2 block text-label-md font-bold text-primary"
                  htmlFor="contact-name"
                >
                  お名前 / 貴社名
                </label>
                <input
                  className={inputClassName}
                  disabled={isSubmitting}
                  id="contact-name"
                  name="name"
                  placeholder="例：山田 太郎"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-label-md font-bold text-primary"
                  htmlFor="contact-email"
                >
                  メールアドレス
                </label>
                <input
                  className={inputClassName}
                  disabled={isSubmitting}
                  id="contact-email"
                  name="email"
                  placeholder="example@domain.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-label-md font-bold text-primary"
                  htmlFor="contact-message"
                >
                  ご相談内容
                </label>
                <textarea
                  className={`${inputClassName} resize-none`}
                  disabled={isSubmitting}
                  id="contact-message"
                  maxLength={3000}
                  name="message"
                  placeholder="現在の課題や、相談したい事項を自由にご記入ください。"
                  required
                  rows={4}
                />
              </div>
              <button
                className="w-full max-w-full rounded-full bg-primary py-4 text-label-md font-bold text-on-primary shadow-sm transition-all duration-200 ease-out hover:bg-primary/80 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
              {statusMessage ? (
                <p
                  aria-live="polite"
                  className={`whitespace-pre-line text-body-md ${
                    statusMessage.type === "success"
                      ? "text-primary"
                      : "text-[#ba1a1a]"
                  }`}
                  role="status"
                >
                  {statusMessage.text}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
