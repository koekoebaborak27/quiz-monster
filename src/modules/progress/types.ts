/** 難易度。出題モジュールに依存せず保存データの型を表す。 */
export type Level = 1 | 2 | 3;

/** 保存データで使うボスID。IDは端末内に保存するため変更しない。 */
const BOSS_IDS = [
  "ukkari-tako",
  "hikkake-oni",
  "nazotoki-dragon",
  "wasure-ghost",
  "damashi-kitsune",
  "heritsu-hebi",
  "kanchigai-koumori",
  "keta-machigaeru",
  "shittaka-fukurou",
  "nebosuke-guma",
  "yomitobashi-gumo",
  "maruanki-saurus",
  "yamakan-robo",
  "namake-zombie",
  "uroboe-sasori",
  "awate-zame",
  "gorioshi-gorilla",
  "atomawashi-maimai",
  "hatena-invader",
  "iiwake-wani",
] as const;

/** ボス一覧で使う、変更しない保存用IDの型。 */
export type BossId = (typeof BOSS_IDS)[number];

/** localStorage に保存する全記録。 */
export type Progress = {
  version: 1;
  wrongIds: string[];
  recentIds: Record<Level, string[]>;
  lastBossId: BossId | null;
  bossKills: Partial<Record<BossId, number>>;
  perfectCount: number;
  soundOn: boolean;
};

/** スキーマ検証で使う、保存データで有効なボスIDの一覧。 */
export const KNOWN_BOSS_IDS: readonly BossId[] = BOSS_IDS;
