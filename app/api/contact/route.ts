import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_MESSAGE_LENGTH = 3000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact API config missing:", {
      hasResendApiKey: Boolean(apiKey),
      hasContactToEmail: Boolean(toEmail),
      hasContactFromEmail: Boolean(fromEmail),
    });
    return NextResponse.json(
      {
        ok: false,
        error:
          "サーバー設定が完了していません。しばらくしてから再度お試しください。",
      },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "リクエストの形式が正しくありません。" },
      { status: 400 },
    );
  }

  const { name, email, message } = body;

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json(
      { ok: false, error: "お名前 / 貴社名を入力してください。" },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json(
      { ok: false, error: "メールアドレスを入力してください。" },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { ok: false, error: "メールアドレスの形式が正しくありません。" },
      { status: 400 },
    );
  }

  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json(
      { ok: false, error: "ご相談内容を入力してください。" },
      { status: 400 },
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      {
        ok: false,
        error: `ご相談内容は${MAX_MESSAGE_LENGTH}文字以内で入力してください。`,
      },
      { status: 400 },
    );
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  const text = `ポートフォリオサイトよりお問い合わせがありました。

お名前 / 貴社名: ${trimmedName}
メールアドレス: ${trimmedEmail}

ご相談内容:
${trimmedMessage}
`;

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: trimmedEmail,
      subject: `【ポートフォリオ問い合わせ】${trimmedName} 様より`,
      text,
    });

    if (error) {
      console.error("Resend send error:", JSON.stringify(error));
      return NextResponse.json(
        {
          ok: false,
          error:
            "メールの送信に失敗しました。しばらくしてから再度お試しください。",
        },
        { status: 500 },
      );
    }

    console.log("Resend send success:", { id: data?.id });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(
      "Contact API unexpected error:",
      error instanceof Error ? error.message : error,
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "メールの送信に失敗しました。しばらくしてから再度お試しください。",
      },
      { status: 500 },
    );
  }
}
