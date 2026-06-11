# Portfolio Roadmap

## 全体ロードマップ

新規フォルダ作成
↓
docs作成
↓
Next.jsプロジェクト作成
↓
完成デザイン確認
↓
セクション分解
↓
Reactコンポーネント化
↓
Tailwind CSSでデザイン再現
↓
PC表示確認
↓
スマホ・タブレット調整
↓
問い合わせフォーム接続
↓
GitHubへpush
↓
Vercel公開
↓
URLをポートフォリオとして使用

## Phase 1: 初期セットアップ

* 新規フォルダを作成する
* Next.js + TypeScript + Tailwind CSS のプロジェクトを作成する
* docsディレクトリを作成する
* 実装方針、技術スタック、ロードマップをdocsに残す

完了条件:

* `npm run dev` が起動する
* 初期ページがブラウザで表示される
* docsが3ファイル作成されている

## Phase 2: 構造作成

* `components/` ディレクトリを作成する
* 完成デザインをセクション単位に分解する
* 各セクションの空コンポーネントを作成する
* `app/page.tsx` から各コンポーネントを読み込む

完了条件:

* 各セクションがページ上に仮表示される
* コンポーネント構成が整理されている

### Phase 2 実施メモ

* 完成デザインHTMLを Header / Hero / Strengths / Services / Works / AutoScreenCaseStudy / ProcessPricing / Contact / Footer に分解した
* `app/page.tsx` から各コンポーネントを完成デザインと同じ順番で読み込む構成にした
* Noto Sans JP と Material Symbols を `layout.tsx` / `globals.css` で設定した
* フォーム送信処理とスクロールスパイは未実装のまま

## Phase 3: デザイン再現

* 完成デザインに合わせてPC表示を再現する
* 色、余白、文字サイズ、幅、配置を調整する
* AUTO_SCREEN紹介セクションを作成する
* 使用技術、制作プロセス、強みを整理して表示する

完了条件:

* PC表示で完成デザインに近い状態になっている

## Phase 4: レスポンシブ対応

* スマホ表示を調整する
* タブレット表示を確認する
* 文字サイズ、余白、画像サイズを調整する
* 横スクロールが出ないようにする

完了条件:

* PC、タブレット、スマホで大きな崩れがない

## Phase 5: フォーム接続

* 問い合わせフォームを設置する
* Formspree、Google Form、または別サービスで送信できるようにする
* 送信後の表示を確認する

完了条件:

* 問い合わせが送信できる
* 入力欄がスマホでも使いやすい

## Phase 6: 公開

* GitHubへpushする
* Vercelに接続する
* 本番URLを発行する
* 表示崩れを確認する

完了条件:

* VercelのURLでポートフォリオが見られる
* URLをプロフィールや提案文に使える
