/**
 * 対象: battle/view（getChoiceStatus・hpPercent・progressPercent）
 * 目的: バトル画面の表示の出し分けのうち、状態から決まる部分を担保する（設計書「表示の出し分け」）
 */
import { describe, it, expect } from "vitest";
import { getChoiceStatus, hpPercent, progressPercent } from "./view";

describe("getChoiceStatus", () => {
  it("解答待ちでは、どの選択肢も通常の見た目", () => {
    expect(getChoiceStatus("answering", "c1", null, "c2")).toBe("default");
  });

  it.each(["correct", "finishing"] as const)("%s では選んだ選択肢だけ緑、他は通常", (phase) => {
    expect(getChoiceStatus(phase, "c2", "c2", "c2")).toBe("correct");
    expect(getChoiceStatus(phase, "c1", "c2", "c2")).toBe("default");
  });

  it("不正解表示では、選んだ選択肢が赤・正解が緑・残りが薄くなる", () => {
    expect(getChoiceStatus("wrong", "c1", "c1", "c2")).toBe("wrong");
    expect(getChoiceStatus("wrong", "c2", "c1", "c2")).toBe("correct");
    expect(getChoiceStatus("wrong", "c3", "c1", "c2")).toBe("faded");
  });
});

describe("hpPercent / progressPercent", () => {
  it("HP 500 で100%、200 で40%、0 で0%", () => {
    expect(hpPercent(500)).toBe(100);
    expect(hpPercent(200)).toBe(40);
    expect(hpPercent(0)).toBe(0);
  });

  it("範囲外のHPは 0〜100 に収める", () => {
    expect(hpPercent(-10)).toBe(0);
    expect(hpPercent(600)).toBe(100);
  });

  it("進み具合は (slot + 1) / 5", () => {
    expect(progressPercent(0)).toBe(20);
    expect(progressPercent(3)).toBe(80);
    expect(progressPercent(4)).toBe(100);
  });
});
