import VariationBanner from "../global/variationBanner";

interface Props {
  value: number;
  percentage: number;
}

function MoneyPercentage({ value, percentage }: Props) {
  return (
    <div className="flex gap-4">
      <span className="text-primary text-3xl font-bold">€ {value}</span>
      <VariationBanner value={percentage} />
    </div>
  );
}

export default MoneyPercentage;
