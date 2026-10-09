import type { ChoiceId } from "@/modules/quiz";
import { BOSS_MAX_HP } from "./scoring";
import type { BattlePhase } from "./types";

/** 選択肢の見た目の種類。通常・正解（緑）・選んだ不正解（赤）・薄くする。 */
export type ChoiceStatus = "default" | "correct" | "wrong" | "faded";

/**
 * 選択肢1つの見た目を決める。
 * 正解表示では選んだ選択肢だけを緑にし、不正解表示では選んだ選択肢を赤・正解を緑・残りを薄くする。
 */
export function getChoiceStatus(
  phase: BattlePhase,
  choiceId: ChoiceId,
  selectedId: ChoiceId | null,
  answerId: ChoiceId,
): ChoiceStatus {
  if (phase === "correct" || phase === "finishing") {
    return choiceId === selectedId ? "correct" : "default";
  }
  if (phase === "wrong") {
    if (choiceId === selectedId) return "wrong";
    return choiceId === answerId ? "correct" : "faded";
  }
  return "default";
}

/** HPバーの幅（%）。HP 500 が満タンで、範囲外の値は 0〜100 に収める。 */
export function hpPercent(hp: number): number {
  return Math.min(100, Math.max(0, (hp / BOSS_MAX_HP) * 100));
}

/** 進み具合バーの幅（%）。`slot` は0始まりなので、いま解いている問題まで進んだ分を出す。出し直しでは変わらない。 */
export function progressPercent(slot: number): number {
  return ((slot + 1) / 5) * 100;
}
