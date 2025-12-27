import type { LiveAssetT } from "@/types/liveAsset";
import useGetLiveAssets from "../../live-assets/getLiveAssets/useGetLiveAssets";
import { Table } from "../../table/table";
import { Font } from "@/theme/font";
import { TableRow } from "@/components/ui/table";
import LiveAssetRow from "./liveAssetRow";
import Paginator from "@/components/ui-elements/common/paginator/paginator";

export default function ListLiveAssets() {
  const { liveAssets, isConnected } = useGetLiveAssets();

  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className={`${Font.TableTitle}`}>Live Market data </h3>
      <Table.ListLiveAssets>
        {liveAssets?.map((asset: LiveAssetT) => (
          <TableRow key={`id-${asset.symbol}`}>
            <LiveAssetRow liveAsset={asset} />
          </TableRow>
        ))}
      </Table.ListLiveAssets>
      <Paginator />
    </section>
  );
}
