# Tech Stack

## 採用技術

| 分類              | 技術               | 用途           |
| --------------- | ---------------- | ------------ |
| Framework       | Next.js          | ポートフォリオLPの実装 |
| Language        | TypeScript       | 型安全なReact実装  |
| Styling         | Tailwind CSS     | 完成デザインの再現    |
| UI              | React Components | セクション単位の分割   |
| Hosting         | Vercel           | Web公開        |
| Version Control | Git / GitHub     | ソース管理        |
| AI Development  | ChatGPT / Cursor | 設計・実装補助      |

## 採用理由

### Next.js

ポートフォリオLPを公開するための標準的なReactフレームワークとして採用する。

App Router構成を使い、`app/page.tsx` を中心に1ページLPを構成する。

### TypeScript

コンポーネントのpropsやデータ定義を明確にし、保守しやすい構成にするために採用する。

### Tailwind CSS

完成済みデザインの余白、配色、文字サイズ、レスポンシブ対応を効率よく再現するために採用する。

### Vercel

Next.jsとの相性がよく、GitHub連携で簡単に公開できるため採用する。

### GitHub

実装履歴を残し、ポートフォリオとしてコード管理の実績も見せられるようにする。

### ChatGPT / Cursor

ChatGPTは方針整理・文章作成・実装指示作成に使う。
CursorはNext.js実装・コンポーネント化・修正作業に使う。

## 初期実装で採用しないもの

* DB接続
* 認証機能
* 管理画面
* 決済機能
* 複雑なAPI連携
* 重いアニメーションライブラリ
* UIコンポーネントライブラリ

## 初期実装のゴール

完成済みデザインをNext.js + TypeScript + Tailwind CSSで再現し、Vercelで公開できる状態にする。
