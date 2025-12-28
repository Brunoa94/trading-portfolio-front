import type { LiveAssetT } from "@/types/liveAsset";
import useGetLiveAssets from "../../live-assets/getLiveAssets/useGetLiveAssets";
import { Table } from "../../table/table";
import { TableRow } from "@/components/ui/table";
import LiveAssetRow from "./liveAssetRow";
import Paginator from "@/components/ui-elements/common/paginator/paginator";
import { useState } from "react";

const ITEMS_PER_PAGE = 15;

export default function ListLiveAssets() {
  const { liveAssets } = useGetLiveAssets();
  const [page, setPage] = useState<number>(0);

  return (
    <section className="flex w-full flex-col gap-2">
      <Table.ListLiveAssets>
        {liveAssets
          ?.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)
          .map((asset: LiveAssetT) => (
            <TableRow key={`id-${asset.symbol}`}>
              <LiveAssetRow liveAsset={asset} />
            </TableRow>
          ))}
      </Table.ListLiveAssets>
      <Paginator
        onClick={(page: number) => setPage(page)}
        totalItems={liveAssets.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </section>
  );
}
