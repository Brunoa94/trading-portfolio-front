import { Gradient } from "@/theme/gradient";

export type RankingT = "gold" | "silver" | "bronze";

export const CardColors: string[] = [
  `${Gradient.DiagonalGold} border-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.3)]`,
  `${Gradient.DiagonalSilver} border-slate-400 shadow-[0_0_20px_rgba(148,163,184,0.2)]`,
  `${Gradient.DiagonalBronze} border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.25)]`,
];

export const RankingEmoji: string[] = ["🥇", "🥈", "🥉"];
