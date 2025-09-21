import VariationBanner from "../global/variationBanner";

interface Props {
  value: number;
  percentage: number;
}

function MoneyPercentage({ value, percentage }: Props) {
  return (
    <div className="flex gap-4">
      <span className="text-3xl font-bold font-mono bg-gradient-to-r from-slate-100 to-blue-200 bg-clip-text text-transparent">€ {value}</span>
      <VariationBanner value={percentage} />
    </div>
  );
}

export default MoneyPercentage;
