import clsx from "clsx";

interface Props {
  value: number;
}

function VariationBanner({ value }: Props) {
  if (value === 0) {
    return (
      <span className="flex h-6 items-center justify-center rounded-md font-mono text-xs font-semibold">
        0.0%
      </span>
    );
  }

  const isPositive = value > 0;

  return (
    <span
      className={clsx(
        "flex h-6 items-center justify-center rounded-md font-mono text-xs font-semibold",
        isPositive
          ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white"
          : "bg-gradient-to-r from-red-500 to-red-400 text-white"
      )}
    >
      {isPositive ? `+${value}%` : `${value}%`}
    </span>
  );
}

export default VariationBanner;
