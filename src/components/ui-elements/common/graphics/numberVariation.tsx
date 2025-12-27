import { Gradient } from "@/theme/gradient";
import { useIsFlickering } from "@/hooks/useIsFlickering";

interface Props {
  number: number;
  noColor?: boolean;
  isPercentage?: boolean;
}

const getFlickerGradient = ({ flickerType }: { flickerType: string }) => {
  if (flickerType === "positive") {
    return "bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent";
  } else {
    return "bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent";
  }
};

export default function NumberVariation({
  number,
  noColor,
  isPercentage,
}: Props) {
  const isPositive = number > 0;
  const { isFlickering, flickerType } = useIsFlickering(number);

  return (
    <span
      className={`flex font-mono text-xl font-bold transition-all duration-200 ${
        isFlickering
          ? getFlickerGradient({ flickerType })
          : noColor
            ? Gradient.NeutralGradient
            : isPositive
              ? Gradient.PositiveGradient
              : Gradient.NegativeGradient
      }`}
    >
      {number.toFixed(4)}
      {isPercentage ? "%" : "€"}
    </span>
  );
}
