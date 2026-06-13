# portfolio-site

業務改善・データ活用・AI活用支援の実績を伝えるポートフォリオLPです。完成済みデザインを Next.js + TypeScript + Tailwind CSS で再現し、問い合わせフォームから Resend 経由でメール送信できる構成になっています。

AUTO_SCREEN は投資助言ツールではなく、大量データの整理・候補抽出・日次運用を支援する**判断支援システム**として紹介しています。本リポジトリには AUTO_SCREEN の実データ、APIキー、個人情報、その他の秘匿情報は含みません。

## 技術スタック

| 分類 | 技術 |
| --- | --- |
| Framework | Next.js（App Router） |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | React Components |
| Email | Resend（`/api/contact`） |
| Hosting | Vercel（公開予定） |
| Version Control | Git / GitHub |

詳細は [docs/TECH_STACK.md](docs/TECH_STACK.md) を参照してください。

## セットアップ

```bash
git clone <repository-url>
cd portfolio-site
npm install
cp .env.example .env.local
```

`.env.local` に必要な環境変数を設定したうえで、開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 環境変数

実際の値は `.env.local` に設定し、Git 管理しません。変数名のみ以下に記載します。

| 変数名 | 用途 |
| --- | --- |
| `RESEND_API_KEY` | Resend API の認証キー |
| `CONTACT_TO_EMAIL` | 問い合わせの送信先メールアドレス |
| `CONTACT_FROM_EMAIL` | 問い合わせ送信時の差出人メールアドレス |

テンプレートは [.env.example](.env.example) を参照してください。

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # 本番ビルド
npm run start  # 本番サーバー起動
npm run lint   # ESLint 実行
```

## 公開

本番公開は **Vercel** を予定しています。GitHub リポジトリと Vercel プロジェクトを接続し、Vercel の環境変数に上記3つの変数を設定してください。

実装方針やロードマップは [docs/](docs/) を参照してください。
