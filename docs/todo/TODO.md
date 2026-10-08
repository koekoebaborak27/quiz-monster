# TODO

<PROJECT_NAME> の**残タスクと現在地**。

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
| 6〜10        | 1 / 5 |

## 次にやること

**次のセッションが最初に打つコマンドまで具体的に書く。**

```powershell
# 7. ローカル環境構築。Node.js は .nvmrc のバージョン（22）を使う
node -v
pnpm install
```

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
- [ ] 7. ローカル環境構築（DB は使わない）
- [ ] 8. 実装・単体ロジックテスト（1機能ずつ、[実装の順番](../specs/03_detail-design/README.md#実装の順番)に従う。→ [`create-vitest-test`](../skills/create-vitest-test.md)）
- [ ] 9. 画面テスト（必要かどうかを判断する。必要な場合は [`create-unit-test-spec`](../skills/create-unit-test-spec.md) でテスト仕様書を作成したうえで [`playwright-evidence-test`](../skills/playwright-evidence-test.md) を行う）
- [ ] 10. ユーザテスト（必要かどうかを判断する）

## 残っているタスク

いずれも**期限のない宿題**。判断材料は各リンク先にまとめる。

- [ ] <いつかやること>

## 現在の状態

事実のみ。予定・経緯・仕様は書かない。

| 項目 | 状態 |
| --- | --- |
| git 管理 | 作成済み（GitHub `koekoebaborak27/quiz-monster`、公開リポジトリ。`git remote -v` で確認） |
| 作業ブランチ | `main` のみ（`git branch -a` で確認） |
| CI | `main` で成功（`gh run list --limit 1` で確認） |
| ローカル環境 | <未構築 / 構築済み> |
| 本番 | <未構築 / 稼働中> |

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
