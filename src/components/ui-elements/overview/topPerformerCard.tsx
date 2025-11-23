import { Gradient } from "@/theme/gradient";
import type { TopPerformerT } from "@/types/userOverview";
import { TrendingDown, TrendingUp } from "lucide-react";

export type RankingT = "gold" | "silver" | "bronze";

const CardColors: Record<RankingT, string> = {
  gold: `${Gradient.DiagonalGold} border-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.3)]`,
  silver: `${Gradient.DiagonalSilver} border-slate-400 shadow-[0_0_20px_rgba(148,163,184,0.2)]`,
  bronze: `${Gradient.DiagonalBronze} border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.25)]`,
};

const RankingEmoji: Record<RankingT, string> = {
  gold: "🥇",
  silver: "🥈",
  bronze: "🥉",
};

const ProfitLossRow = ({
  margin,
  isPercentage,
}: {
  margin: number;
  isPercentage?: boolean;
}) => {
  const colorTitle = margin > 0 ? "text-green-600" : "text-red-600";
  const iconColor = margin > 0 ? "#059669" : "#dc2626";
  const endSymbol = isPercentage ? "%" : "€";

  const iconToShow =
    margin > 0 ? (
      <TrendingUp color={iconColor} />
    ) : (
      <TrendingDown color={iconColor} />
    );

  return (
    <div className="flex w-full flex-col">
      <p className="text-muted-foreground text-sm">
        {!isPercentage ? "Profit/Loss" : "Percentage"}
      </p>
      <div className="flex w-full items-center justify-end">
        <p className={`mr-auto text-sm font-semibold ${colorTitle}`}>
          {margin}
          {endSymbol}
        </p>
        {!isPercentage && <>{iconToShow}</>}
      </div>
    </div>
  );
};

interface Props {
  card: TopPerformerT;
}

function TopPerformerCard({ card }: Props) {
  return (
    <article
      className={`flex flex-col ${CardColors[card.ranking]} gap-4 rounded-lg border-2 p-4`}
    >
      <div className="flex flex-col">
        <p className="text-3xl">{RankingEmoji[card.ranking]}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-400">Asset</p>
        <p className="text-lg font-bold text-gray-400">{card.symbol}</p>
      </div>
      <div className="align-items flex w-full gap-2">
        <div className="flex flex-col">
          <p className="text-muted-foreground text-xs">Quantity</p>
          <p className="text-foreground text-sm font-semibold">
            {card.quantity}
          </p>
        </div>
        <div className="ml-auto flex flex-col">
          <p className="text-muted-foreground text-xs">Invested</p>
          <p className="text-foreground text-sm font-semibold">
            {card.value_invested}€
          </p>
        </div>
      </div>
      <ProfitLossRow margin={card.marginNumber} />
      <ProfitLossRow margin={card.marginPercentage} isPercentage />
    </article>
  );
}

export default TopPerformerCard;
