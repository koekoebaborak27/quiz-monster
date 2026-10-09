# 99_infra 00 — 概要と全体構成

本番は **Vercel（Hobby プラン）** に置く。DB・ログイン・環境変数は使わない。

## 構成

| 項目 | 内容 |
| --- | --- |
| ホスティング | Vercel（Hobby。無料） |
| 本番 URL | `https://quiz-monster-nu.vercel.app`（`quiz-monster` という名前は他人が使用中のため、Vercel が `-nu` を付けた） |
| 連携元 | GitHub `koekoebaborak27/quiz-monster`（公開）の `main` ブランチ |
| 自動デプロイ | Vercel の GitHub 連携による。`main` への push で本番、それ以外のブランチ・PR でプレビュー URL が作られる。GitHub Actions（CI）とは別に動き、CI の成否は待たない |
| 環境変数 | 無し |
| 出題 API | Next.js の Route Handlers（`POST /api/questions`。Vercel のサーバーレス関数として動く） |
| PWA | `/manifest.webmanifest`・`/sw.js`・`/offline.html`。Service Worker は本番ビルドのときだけ登録される |

## プロジェクトの設定値

`vercel.json` は置いていない。Vercel の自動検出に任せている。

| 設定 | 値 |
| --- | --- |
| Application Preset | Next.js（自動検出） |
| Root Directory | `./` |
| Build / Output / Install Command | 既定のまま（上書きしない）。Install は `pnpm-lock.yaml` から `pnpm install` が選ばれる |
| Node.js Version | 画面（Settings → Build and Deployment）では 22.x にした。ただし `package.json` の `engines`（`>=22.12.0`）が優先されるようで、ビルドログに「新しいメジャー版が出ると自動で上がる」警告が出る。実際の版は 22 より新しい可能性がある（動作に問題は出ていない） |
| Environment Variables | 設定しない |

## 構築手順の記録

初回デプロイの手順は [`infra_design_01_Vercelへの初回デプロイ.md`](infra_design_01_Vercelへの初回デプロイ.md)。
