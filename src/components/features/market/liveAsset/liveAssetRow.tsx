import NumberVariation from "@/components/ui-elements/common/graphics/numberVariation";
import Percentage from "@/components/ui-elements/common/graphics/percentage";
import TextWithBg from "@/components/ui-elements/common/graphics/textWitBg";
import { TableCell } from "@/components/ui/table";
import type { LiveAssetT } from "@/types/liveAsset";
import { FuturisticTheme, getFuturisticStatusStyles, buildStatusBar, buildIconContainer } from "@/theme/futuristic";

interface Props {
  liveAsset: LiveAssetT;
}

export default function LiveAssetRow({ liveAsset }: Props) {
  const isPositive = liveAsset.percentage_change_24h >= 0;
  const statusStyles = getFuturisticStatusStyles(isPositive);
  const iconStyles = buildIconContainer(statusStyles);

  return (
    <>
      <TableCell className={`w-8 ${FuturisticTheme.Table.Cell}`}>
        <div className={buildStatusBar(statusStyles)} />
      </TableCell>
      <TableCell className={FuturisticTheme.Table.CellWithIcon}>
        <div className={iconStyles.container}>
          <div className={`${iconStyles.glow} bg-gradient-to-r ${statusStyles.iconGradient}`} />
          <img
            src={liveAsset.icon}
            loading="lazy"
            className={iconStyles.image}
          />
          <div className={iconStyles.overlay} />
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.CellWithSymbol}>
        <div className="relative group">
          <div className={`${FuturisticTheme.Interactive.HoverBackground} ${FuturisticTheme.Status.Neutral.gradient}`} />
          <div className={`${FuturisticTheme.Symbol.Container} ${FuturisticTheme.Padding.Container}`}>
            <span className={FuturisticTheme.Symbol.Icon}>◆</span>
            <TextWithBg text={liveAsset.symbol} />
            <div className={FuturisticTheme.Symbol.AccentLine} />
          </div>
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${FuturisticTheme.Status.Neutral.gradient} rounded-md`} />
          <div className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}>
            <NumberVariation number={liveAsset.current_price} noColor />
          </div>
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r ${statusStyles.gradient} rounded-md transition-all duration-300 group-hover:opacity-80`} />
          <div className={`relative bg-black/20 backdrop-blur-sm border ${statusStyles.border} rounded-md ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono} transition-all duration-300 group-hover:border-opacity-60 ${statusStyles.glow}`}>
            <NumberVariation number={liveAsset.change_24h} />
          </div>
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-r ${statusStyles.gradient} rounded-md transition-all duration-300 group-hover:opacity-80`} />
          <div className={`relative bg-black/20 backdrop-blur-sm border ${statusStyles.border} rounded-md ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono} transition-all duration-300 group-hover:border-opacity-60 ${statusStyles.glow}`}>
            <Percentage percentage={liveAsset.percentage_change_24h} />
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${statusStyles.accent} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        </div>
      </TableCell>
    </>
  );
}
