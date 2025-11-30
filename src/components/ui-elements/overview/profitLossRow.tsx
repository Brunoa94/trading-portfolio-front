import { TrendingDown, TrendingUp } from "lucide-react";

export default function ProfitLossRow({
  margin,
  isPercentage,
}: {
  margin: number;
  isPercentage?: boolean;
}) {
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
}
