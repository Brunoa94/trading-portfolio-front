import UpDownArrow from "@/components/ui-elements/visualization/upDownArrow";

interface Props {
  percentage: number;
}

function Percentage({ percentage }: Props) {
  const isPositive = percentage > 0;
  return (
    <div className="flex w-full gap-2">
      <span
        className={`flex font-mono text-3xl font-bold ${
          isPositive
            ? "bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent"
        }`}
      >
        {percentage}%
      </span>
      <UpDownArrow value={percentage} />
    </div>
  );
}

export default Percentage;
