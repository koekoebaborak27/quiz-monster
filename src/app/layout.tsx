import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BattleSessionProvider } from "@/modules/battle";

// ブラウザのタブに出すタイトルと、検索結果などに出す説明文。
export const metadata: Metadata = {
  title: "クイズモンスター",
  description: "3択クイズに答えてモンスターをたおそう",
};

// すべての画面に共通する外枠。BattleSession（画面間で受け渡すメモリ）もここで持つ。
// 画面の文字は日本語なので、読み上げや自動翻訳のために lang="ja" を指定する。
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {/* 画面をまたいで、バトルの条件・結果・先読みした問題を受け渡す。 */}
        <BattleSessionProvider>{children}</BattleSessionProvider>
      </body>
    </html>
  );
}
