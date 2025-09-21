import clsx from "clsx";

interface Props {
  value: number;
}

function VariationBanner({ value }: Props) {
  return (
    <div
      className={clsx(
        "flex h-6 items-center justify-center rounded-sm px-2",
        value > 0 ? "bg-green-500" : "bg-red-500"
      )}
    >
      <span className={clsx("text-primary text-xs")}>
        {value > 0 ? `+${value}%` : `-${value}%`}
      </span>
    </div>
  );
}

export default VariationBanner;
