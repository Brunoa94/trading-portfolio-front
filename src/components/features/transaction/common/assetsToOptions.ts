import type { AssetT } from "@/types/asset";
import type { ComboOptionT } from "../../input/combobox";

export default function AssetsToOptions(assets: AssetT[]): ComboOptionT[] {
  const map = assets.map((asset) => ({
    value: asset.symbol,
    label: `(${asset.symbol})`,
    icon: asset.icon,
  }));
  return map;
}
