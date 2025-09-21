import clsx from "clsx";

interface Props {
  value: number;
}

function VariationBanner({ value }: Props) {
  const isPositive = value > 0;
  return (
    <div
      className={clsx(
        "flex h-6 items-center justify-center rounded-md px-2 font-mono text-xs font-semibold",
        isPositive
          ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white"
          : "bg-gradient-to-r from-red-500 to-red-400 text-white"
      )}
    >
      <span>
        {isPositive ? `+${value}%` : `${value}%`}
      </span>
    </div>
  );
}

export default VariationBanner;
