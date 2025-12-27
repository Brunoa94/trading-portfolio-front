import NumberVariation from "@/components/ui-elements/common/graphics/numberVariation";
import Percentage from "@/components/ui-elements/common/graphics/percentage";
import TextWithBg from "@/components/ui-elements/common/graphics/textWitBg";
import { TableCell } from "@/components/ui/table";
import type { LiveAssetT } from "@/types/liveAsset";

interface Props {
  liveAsset: LiveAssetT;
}

export default function LiveAssetRow({ liveAsset }: Props) {
  return (
    <>
      <TableCell className="w-8" />
      <TableCell>
        <img
          src={liveAsset.icon}
          loading="lazy"
          className="-ml-2 h-12 w-12 rounded-full"
        />
      </TableCell>
      <TableCell className="px-4 text-3xl text-gray-200">
        <TextWithBg text={liveAsset.symbol} />
      </TableCell>
      <TableCell>
        <NumberVariation number={liveAsset.current_price} noColor />
      </TableCell>
      <TableCell>
        <NumberVariation number={liveAsset.change_24h} />
      </TableCell>
      <TableCell>
        <Percentage percentage={liveAsset.percentage_change_24h} />
      </TableCell>
    </>
  );
}
