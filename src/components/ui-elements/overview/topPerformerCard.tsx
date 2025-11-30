import type { TopPerformerT } from "@/types/userOverview";
import { CardColors, RankingEmoji } from "./colorsEmojis";
import ProfitLossRow from "./profitLossRow";

interface Props {
  card: TopPerformerT;
  index: number;
}

function TopPerformerCard({ card, index }: Props) {
  return (
    <article
      className={`flex flex-col ${CardColors[index]} gap-4 rounded-lg border-2 p-4`}
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-center">
          <img src={card.asset_icon} className="h-12 w-12 rounded-full" />
          <p className="-mt-1 text-3xl">{RankingEmoji[index]}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-400">Asset</p>
        <p className="text-lg font-bold text-gray-400">{card.symbol}</p>
      </div>
      <div className="align-items flex w-full gap-2">
        <div className="flex flex-col">
          <p className="text-muted-foreground text-xs">Average Buy Price</p>
          <p className="text-foreground text-sm font-semibold">
            {card.avg_buy_price}
          </p>
        </div>
        <div className="ml-auto flex flex-col">
          <p className="text-muted-foreground text-xs">Invested</p>
          <p className="text-foreground text-sm font-semibold">
            {card.total_investment}€
          </p>
        </div>
      </div>
      <ProfitLossRow margin={card.profit_loss} />
      <ProfitLossRow margin={card.profit_loss_percentage} isPercentage />
    </article>
  );
}

export default TopPerformerCard;
