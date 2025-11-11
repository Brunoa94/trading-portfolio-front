import type { AssetTypeT } from "@/types/asset";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Form } from "../../input/form";
import { Combobox, type ComboOptionT } from "../../input/combobox";
import AssetsCombobox from "../../common/assetsCombobox";
import PriceSection from "./priceSection";

interface TransactionFormFieldsProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  selectedAssetType: AssetTypeT;
  onAssetTypeChange: (assetType: AssetTypeT) => void;
}

const ASSETS_OPTIONS: ComboOptionT[] = [
  {
    value: "CRYPTO",
    label: "Crypto Coin",
  },
  {
    value: "STOCK",
    label: "Funds Stocks",
  },
];

function TransactionFormFields({
  register,
  setValue,
  selectedAssetType,
  onAssetTypeChange,
}: TransactionFormFieldsProps) {
  const handleAssetTypeChange = (value: string) => {
    setValue("asset_type", value);
    onAssetTypeChange(value as AssetTypeT);
  };

  return (
    <>
      <Form.InputText name="title" title="Title" register={register} />
      <Combobox
        name="asset_type"
        setValue={(_, value) => handleAssetTypeChange(value)}
        options={ASSETS_OPTIONS}
      />
      <AssetsCombobox assetType={selectedAssetType} setValue={setValue} />
      <Form.InputNumber name="amount" title="Amount" register={register} />
      <PriceSection register={register} />
      <Form.InputNumber name="user_id" title="User Id" register={register} />
    </>
  );
}

export default TransactionFormFields;
