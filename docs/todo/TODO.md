# TODO

クイズモンスターの**残タスクと現在地**。

**このファイルには「いま何が残っているか」だけを書く。** 設計・手順・経緯は下表の担当ファイルへ書き、ここからはリンクするだけにする。同じ内容を 2 か所に置かない。**150 行を超えたら、抱え込んでいる内容を担当ファイルへ移す。**

| 書きたいこと | 書く場所 |
| --- | --- |
| **残タスク・進捗・次の一手** | **このファイル** |
| 要件・設計・仕様の決定 | [`docs/specs/`](../specs/README.md) |
| 本番構築の手順・本番構成・環境変数 | [`docs/specs/99_infra/`](../specs/99_infra/README.md) |
| 設定値・落とし穴・実測値 | [`docs/todo/notes/`](notes/README.md) |
| 何をやったか・なぜ・どこで詰まったか | [`docs/todo/history/`](history/README.md)（古い順。新しい記録は末尾へ） |
| 開発フロー | [`docs/development/gitの操作ルール.md`](../development/gitの操作ルール.md) |
| 初めて触る人が必要とする情報 | [`README.md`](../../README.md) |

このファイルの更新手順は [`docs/skills/update-todo.md`](../skills/update-todo.md)（`/update-todo` の正本）。

## 進捗サマリ

**進捗を書くのはこの表だけ。** 他の節に「N / M 完了」を重ねて書かない。

| 区分          | 進捗    |
| ----------- | ----- |
| 1. 要件定義     | 5 / 5 |
| 2. 画面イメージ検討 | 1 / 1 |
| 3. 基本設計     | 3 / 3 |
| 4. 詳細設計     | 1 / 1 |
| 5. 設計のレビュー  | 1 / 1 |
| 6〜11        | 6 / 6 |

## 次にやること

**次のセッションが最初に打つコマンドまで具体的に書く。**

```powershell
# 変更を始める前に、main を最新にする。本番は main への push で自動デプロイされる
git switch main
git pull
```

本番は構築済み。いま急ぎの作業は無い。残りは下の「残っているタスク」（`engines` を揃える任意の変更など）。

- [x] 1. 要件定義（→ [`docs/specs/`](../specs/README.md)。画面遷移図が必要な場合は [`docs/diagrams.md`](../diagrams.md) の手順に従いmermaidで描く）
  - [x] 1-0. 草案の作成（→ [`草案.md`](../specs/01_requirements/草案.md)）
  - [x] 1-1. 図鑑機能の深掘り（何を集めるか、問題図鑑とボス図鑑の関係、未獲得の見せ方、収集の動機づけ）
  - [x] 1-2. その他漏れがないか壁打ち
  - [x] 1-3. 問題データのAI生成と、オーナーによるピックアップでの品質チェック（2026-10-07）→ [履歴](history/2026-10.md#2026-10-07-問題データの品質チェック完了)
  - [x] 1-4. 要件定義書作成（2026-10-07）→ [履歴](history/2026-10.md#2026-10-07-要件定義書の作成)
- [x] **2. 画面イメージ検討**（2026-10-07。→ [`screens.html`](../specs/mock/screens.html)・[`DESIGN.md`](../../DESIGN.md)）→ [履歴](history/2026-10.md#2026-10-07-画面イメージの作成とdesignの刷新)
- [x] **3. 基本設計**（2026-10-08。DB は使わないためテーブル定義は無し）→ [履歴](history/2026-10.md#2026-10-08-画面イメージを基本設計へ移動)
  - [x] 3-1. 基本設計書の作成（2026-10-08。→ [`02_basic-design/`](../specs/02_basic-design/README.md)）→ [履歴](history/2026-10.md#2026-10-08-基本設計書の作成)
  - [x] 3-2. 設計者が決めた点のオーナー確認（2026-10-08。`lastBossId` の保存追加、`screens.html`・`DESIGN.md` への反映まで完了。`version` が新しすぎる場合は案A（読み込まず書き込まない）で確定）→ [履歴](history/2026-10.md#2026-10-08-基本設計書の作成)
  - [x] 3-3. `battle/05_画面イメージ.md` を基本設計へ移す（2026-10-08。→ [`battle/04_画面イメージ.md`](../specs/02_basic-design/battle/04_画面イメージ.md)）
- [x] **4. 詳細設計**（2026-10-08。バトル進行の処理の分け方と BattleSession・先読みだけを作成。→ [`03_detail-design/`](../specs/03_detail-design/README.md)）→ [履歴](history/2026-10.md#2026-10-08-詳細設計書の作成)
- [x] **5. 基本設計・詳細設計のレビュー**（2026-10-08。→ [`02_basic-design/`](../specs/02_basic-design/README.md)・[`03_detail-design/`](../specs/03_detail-design/README.md)）→ [履歴](history/2026-10.md#2026-10-08-基本設計と詳細設計のレビュー)
- [x] **6. git にリポジトリを作成する**（2026-10-08。GitHub で空のリポジトリを作り、手元から初回 push）→ [履歴](history/2026-10.md#2026-10-08-gitリポジトリの作成)
- [x] **7. ローカル環境構築**（2026-10-08。Next.js の導入、ひな形の仮の値の修正、`prisma/` の削除、CI への build 追加、README の書き直し）→ [履歴](history/2026-10.md#2026-10-08-ローカル環境構築とnextjsの導入)・[補足](notes/local-env.md)
- [x] 8. 実装・単体ロジックテスト（1機能ずつ、[実装の順番](../specs/03_detail-design/README.md#実装の順番)に従う。→ [`create-vitest-test`](../skills/create-vitest-test.md)）
  - [x] 8-1. `quiz`：問題データの読み込み・出題の選び方・入力の検証・出題API（2026-10-08。→ [履歴](history/2026-10.md#2026-10-08-quizモジュールと出題apiの実装)）
  - [x] 8-2. `progress`：保存データの読み書き（2026-10-08。→ [履歴](history/2026-10.md#2026-10-08-progressモジュールと保存データの読み書き)）
  - [x] 8-3. `boss`：ボス一覧・ボスの選び方・枠ランクの判定（画面以外）（2026-10-09。→ [履歴](history/2026-10.md#2026-10-09-bossモジュールのボス一覧選び方枠ランク)）
  - [x] 8-4. `battle` の計算部分：`battle-reducer.ts`・`scoring.ts`・`api-client.ts`（2026-10-09。→ [履歴](history/2026-10.md#2026-10-09-battleモジュールの計算部分)）
  - [x] 8-5. `battle` の画面：`BattleSession` → ホーム → バトル → 結果、サウンド（2026-10-09。→ [履歴](history/2026-10.md#2026-10-09-battleモジュールの画面)）
  - [x] 8-6. `boss` の画面：ボス図鑑（2026-10-09。→ [履歴](history/2026-10.md#2026-10-09-bossモジュールのボス図鑑の画面)）
  - [x] 8-7. PWA：manifest・Service Worker・オフライン用ページ（2026-10-09。→ [履歴](history/2026-10.md#2026-10-09-pwa)）
- [x] 9. 画面テスト（2026-10-09 オーナー判断で省略し、不要と確定）→ [履歴](history/2026-10.md#2026-10-09-画面テストの省略とユーザーテストへ)
- [x] 10. ユーザテスト（2026-10-09 オーナーが実施し、問題なし）→ [履歴](history/2026-10.md#2026-10-09-eslint-10-への更新とブランチ保護の見送り)
- [x] 11. Vercel へ本番デプロイ（2026-10-09。実機でホーム画面に追加・機内モード表示まで確認済み。→ [`99_infra/`](../specs/99_infra/README.md)）→ [履歴](history/2026-10.md#2026-10-09-vercelへの初回デプロイ)

## 残っているタスク

いずれも**期限のない宿題**。判断材料は各リンク先にまとめる。

- [ ] （任意）`package.json` の `engines.node` を `>=22.12.0` から `22.x` に揃える。`.nvmrc`（22）と本番の Node 版を一致させるため。コードの変更なので PR にする。詳細 → [`infra_design_00`](../specs/99_infra/infra_design_00_概要と全体構成.md)

- [x] ESLint を 10 へ上げる（2026-10-09。本リポジトリはマージ済み、テンプレート側もオーナーが反映済み）→ [履歴](history/2026-10.md#2026-10-09-eslint-10-への更新とブランチ保護の見送り)
- [ ] （見送り中）`main` のブランチ保護ルールを設定する。2026-10-09 に今回は見送りと決めた。方針と画面の場所 → [履歴](history/2026-10.md#2026-10-09-eslint-10-への更新とブランチ保護の見送り)

## 現在の状態

事実のみ。予定・経緯・仕様は書かない。

| 項目 | 状態 |
| --- | --- |
| git 管理 | 作成済み（GitHub `koekoebaborak27/quiz-monster`、公開リポジトリ。`git remote -v` で確認） |
| 作業ブランチ | `main` と、マージ済みの `chore/eslint-10`（`git branch -a` で確認） |
| CI | `main` で成功（`gh run list --limit 1` で確認） |
| ローカル環境 | 構築済み（`pnpm dev` で http://localhost:3000 に仮のトップページが出る） |
| 出題API | 実装済み（`POST /api/questions`。バトル画面から呼んでいる） |
| 保存データ（progress） | 実装済み（localStorage の読み書き。ホーム・バトル画面から使っている） |
| ボス（boss） | 実装済み（ボス一覧・`pickBoss`・`getRank`・`getZukanNotice`・`countDefeatedBosses`・`BossCircle`）。ボス図鑑の画面（`BossZukanScreen`・`/zukan`）も実装済み |
| バトルの画面（battle） | ホーム（`/`）・バトル（`/battle`）・結果（`/result`）・音を実装済み。ブラウザで通しで遊べる |
| デザインの土台 | Tailwind v4・`globals.css`（色の正本）・`cn()`・`lucide-react`・`next/font` を導入済み |
| PWA | manifest・`public/sw.js`・`public/offline.html`・アイコン（オーナーが用意した絵。元画像は `docs/specs/mock/pwa-app-icon-monster-star-question.png`）を実装済み。`sw.js` は単体テストで確認。実機での登録・オフライン表示は未確認 |
| ESLint | 10.12.0 に更新済み（`main` に反映済み。`pnpm ls eslint` で確認） |
| 本番 | 構築済み（Vercel Hobby。`https://quiz-monster-nu.vercel.app`。`main` への push で自動デプロイ。実機でホーム画面に追加・機内モード表示を確認済み） |

## 完了済みの作業

各区分の実施内容・判断・詰まった点は [`docs/todo/history/`](history/README.md) にセッション単位で残す。

| 区分 | 件数 | 記録 |
| --- | --- | --- |
| 要件定義 | 5 | [`2026-10.md`](history/2026-10.md) |
| 画面イメージ検討 | 1 | [`2026-10.md`](history/2026-10.md) |
| 基本設計 | 3 | [`2026-10.md`](history/2026-10.md) |
| 詳細設計 | 1 | [`2026-10.md`](history/2026-10.md) |
| 設計のレビュー | 1 | [`2026-10.md`](history/2026-10.md) |
| git リポジトリ作成 | 1 | [`2026-10.md`](history/2026-10.md) |
| ローカル環境構築 | 1 | [`2026-10.md`](history/2026-10.md) |
| 実装・単体ロジックテスト | 7 | [`2026-10.md`](history/2026-10.md) |
| 画面テスト（不要と確定）・ユーザテスト | 2 | [`2026-10.md`](history/2026-10.md) |
| 本番デプロイ（Vercel） | 1 | [`2026-10.md`](history/2026-10.md) |
