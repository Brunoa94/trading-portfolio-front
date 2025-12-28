import NumberVariation from "@/components/ui-elements/common/graphics/numberVariation";
import Percentage from "@/components/ui-elements/common/graphics/percentage";
import TextWithBg from "@/components/ui-elements/common/graphics/textWitBg";
import { TableCell } from "@/components/ui/table";
import type { LiveAssetT } from "@/types/liveAsset";

interface Props {
  liveAsset: LiveAssetT;
}

export default function LiveAssetRow({ liveAsset }: Props) {
  const isPositive = liveAsset.percentage_change_24h >= 0;
  const glowColor = isPositive ? 'shadow-green-500/20' : 'shadow-red-500/20';
  const borderColor = isPositive ? 'border-green-500/30' : 'border-red-500/30';

  return (
    <>
      <TableCell className="w-8 py-6">
        <div className={`h-full w-1 bg-gradient-to-b ${isPositive ? 'from-green-400 to-green-600' : 'from-red-400 to-red-600'} rounded-full shadow-lg ${glowColor}`} />
      </TableCell>
      <TableCell className="relative py-6">
        <div className={`relative group transition-all duration-300 hover:scale-110`}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${isPositive ? 'from-green-500/20 to-emerald-500/20' : 'from-red-500/20 to-pink-500/20'} blur-md group-hover:blur-lg transition-all duration-300`} />
          <img
            src={liveAsset.icon}
            loading="lazy"
            className={`relative h-12 w-12 rounded-full border-2 ${borderColor} bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:border-opacity-60 ${glowColor} shadow-xl`}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      </TableCell>
      <TableCell className="px-6 py-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="relative bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg px-4 py-3 group-hover:border-cyan-400/40 transition-all duration-300">
            <TextWithBg text={liveAsset.symbol} />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
        </div>
      </TableCell>
      <TableCell className="py-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-md" />
          <div className="relative bg-black/10 backdrop-blur-sm border border-gray-500/20 rounded-md px-4 py-3 font-mono">
            <NumberVariation number={liveAsset.current_price} noColor />
          </div>
        </div>
      </TableCell>
      <TableCell className="py-6">
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r ${isPositive ? 'from-green-500/10 to-emerald-500/10' : 'from-red-500/10 to-pink-500/10'} rounded-md transition-all duration-300 group-hover:opacity-80`} />
          <div className={`relative bg-black/20 backdrop-blur-sm border ${borderColor} rounded-md px-4 py-3 font-mono transition-all duration-300 group-hover:border-opacity-60 ${glowColor}`}>
            <NumberVariation number={liveAsset.change_24h} />
          </div>
        </div>
      </TableCell>
      <TableCell className="py-6">
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r ${isPositive ? 'from-green-500/10 to-emerald-500/10' : 'from-red-500/10 to-pink-500/10'} rounded-md transition-all duration-300 group-hover:opacity-80`} />
          <div className={`relative bg-black/20 backdrop-blur-sm border ${borderColor} rounded-md px-4 py-3 font-mono transition-all duration-300 group-hover:border-opacity-60 ${glowColor}`}>
            <Percentage percentage={liveAsset.percentage_change_24h} />
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isPositive ? 'via-green-400/50' : 'via-red-400/50'} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        </div>
      </TableCell>
    </>
  );
}
