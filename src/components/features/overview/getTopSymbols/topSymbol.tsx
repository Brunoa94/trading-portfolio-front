import type { StylingPropsT } from "@/types/styling";

const podiumConfigStyling: StylingPropsT[] = [
  {
    position: 1,
    height: "h-28",
    bgGradient: "from-amber-500/40 to-amber-600/20",
    borderColor: "border-amber-500",
    textColor: "text-amber-400",
    glow: "shadow-[0_0_25px_rgba(217,119,6,0.4)]",
    order: "order-2",
  },
  {
    position: 0,
    height: "h-20",
    bgGradient: "from-slate-400/30 to-slate-500/15",
    borderColor: "border-slate-400",
    textColor: "text-slate-300",
    glow: "shadow-[0_0_20px_rgba(148,163,184,0.3)]",
    order: "order-1",
  },
  {
    position: 2,
    height: "h-16",
    bgGradient: "from-orange-500/30 to-orange-600/15",
    borderColor: "border-orange-500",
    textColor: "text-orange-400",
    glow: "shadow-[0_0_20px_rgba(234,88,12,0.35)]",
    order: "order-3",
  },
];

interface Props {
  index: number;
  value: number;
  symbol: string;
}

function TopSymbol({ index, symbol, value }: Props) {
  const config = podiumConfigStyling[index];

  return (
    <div key={symbol} className={`flex flex-col items-center ${config.order}`}>
      <div className={`text-lg font-bold ${config.textColor} mb-2`}>
        {symbol}
      </div>
      <div
        className={`${config.height} w-24 rounded-t-lg bg-gradient-to-t md:w-32 ${config.bgGradient} border-x-2 border-t-2 ${config.borderColor} ${config.glow} flex flex-col items-center justify-center transition-all duration-300 hover:scale-105`}
      >
        <span className={`text-2xl font-bold ${config.textColor}`}>
          {config.position + 1}
        </span>
        <span className={`text-sm font-semibold ${config.textColor}`}>
          {value}
        </span>
      </div>
    </div>
  );
}

export default TopSymbol;
