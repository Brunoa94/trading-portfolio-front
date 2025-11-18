import { AssetsService } from "@/services/assetsService";
import type { AssetT, AssetTypeT } from "@/types/asset";
import {
  Combobox,
  type ComboOptionT,
} from "@/components/features/input/combobox";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import type { UseFormSetValue } from "react-hook-form";

const queryClient = new QueryClient();

interface Props {
  assetType: AssetTypeT;
  setValue: UseFormSetValue<any>;
  defaultValue?: string;
}

function AssetsToOptions(assets: AssetT[]): ComboOptionT[] {
  const map = assets.map((asset) => ({
    value: asset.symbol,
    label: `(${asset.symbol})`,
  }));
  return map;
}

export default function AssetsCombobox({
  assetType,
  setValue,
  defaultValue,
}: Props) {
  const { data: comboOptions } = useQuery({
    queryKey: ["assets", assetType],
    queryFn: () => AssetsService.getAssets({ assetType }),
    select: (assets: AssetT[]): ComboOptionT[] => AssetsToOptions(assets),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Combobox
        name="symbol"
        setValue={setValue}
        options={comboOptions}
        placeholder="Select your stock"
        defaultValue={defaultValue}
      />
    </QueryClientProvider>
  );
}
