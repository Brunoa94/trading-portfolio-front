import VariationBanner from "@/components/features/global/variationBanner";

interface Props {
  value: number;
  percentage: number;
}

function MoneyPercentage({ value, percentage }: Props) {
  return (
    <div className="flex gap-4">
      <span className="bg-gradient-to-r from-slate-100 to-blue-200 bg-clip-text font-mono text-3xl font-bold text-transparent">
        € {value}
      </span>
      <VariationBanner value={percentage} />
    </div>
  );
}

export default MoneyPercentage;
