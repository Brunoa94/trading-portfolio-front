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
import AssetsToOptions from "@/components/features/transaction/common/assetsToOptions";

const queryClient = new QueryClient();

interface Props {
  assetType: AssetTypeT;
  setValue: UseFormSetValue<any>;
  defaultValue?: string;
}

export default function AssetsCombobox({
  assetType,
  setValue,
  defaultValue,
}: Props) {
  const { data: assets } = useQuery({
    queryKey: ["assets", assetType],
    queryFn: () => AssetsService.getAssets(),
  });

  const comboOptions = assets ? AssetsToOptions(assets) : [];

  const handleSetValue = (name: string, value: string) => {
    setValue(name, value);

    // Also set the asset_icon when symbol is selected
    if (name === "symbol" && assets) {
      const selectedAsset = assets.find(asset => asset.symbol === value);
      if (selectedAsset) {
        setValue("asset_icon", selectedAsset.icon);
      }
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Combobox
        name="symbol"
        setValue={handleSetValue}
        options={comboOptions}
        placeholder="Select your stock"
        defaultValue={defaultValue}
      />
    </QueryClientProvider>
  );
}
