"use client";

import { useState, type FormEvent } from "react";

const consultationExamples = [
  "毎月の集計作業を自動化したい",
  "Excel・CSVの管理を整理したい",
  "営業活動の記録や確認フローを見直したい",
  "業務データを見やすい画面にしたい",
];

const inputClassName =
  "box-border w-full max-w-full rounded-lg border border-outline-variant/50 bg-white px-4 py-3 text-body-md outline-none transition-colors placeholder:text-[#94a3b8] focus:border-primary focus:ring-0 disabled:cursor-not-allowed disabled:opacity-60";

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
        text: "お問い合わせを送信しました。ご連絡ありがとうございます。",
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
    <section className="bg-white py-12 md:py-20" id="contact">
      <div className="mx-auto max-w-container-max px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex min-w-0 flex-col justify-start">
            <h2 className="mb-4 text-display-lg-mobile text-primary md:text-headline-md">
              まずは今の業務をお聞かせください
            </h2>
            <p className="mb-6 text-body-md leading-relaxed text-[#2B3440]">
              「具体的に何を頼めばいいか分からない」「現状を整理してほしい」という段階でも問題ありません。現在の業務内容や、手間に感じている作業を簡単にお聞かせください。
            </p>
            <p className="mb-4 text-label-md font-bold text-primary">
              たとえば、こんなご相談から対応できます。
            </p>
            <ul className="space-y-4 text-body-md text-primary">
              {consultationExamples.map((example) => (
                <li key={example} className="flex items-start gap-3">
                  <span className="material-symbols-outlined shrink-0 text-primary">
                    check
                  </span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 rounded-xl border border-outline-variant/30 bg-[#F7FAFC] p-5 shadow-sm sm:p-6 md:p-8">
            <form
              className="space-y-5 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="mb-2 block text-label-md text-primary"
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
                  className="mb-2 block text-label-md text-primary"
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
                  className="mb-2 block text-label-md text-primary"
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
                className="w-full max-w-full rounded-full bg-primary py-4 text-label-md font-bold text-on-primary shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
              {statusMessage ? (
                <p
                  aria-live="polite"
                  className={`text-body-md ${
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
