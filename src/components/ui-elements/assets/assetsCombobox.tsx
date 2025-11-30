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
  const { data: comboOptions } = useQuery({
    queryKey: ["assets", assetType],
    queryFn: () => AssetsService.getAssets(),
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
