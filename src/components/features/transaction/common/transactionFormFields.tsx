import type { AssetTypeT } from "@/types/asset";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Form } from "../../input/form";
import { Combobox, type ComboOptionT } from "../../input/combobox";
import AssetsCombobox from "../../../ui-elements/assets/assetsCombobox";
import PriceSection from "./priceSection";
import type { TransactionI } from "@/types/transaction";

interface TransactionFormFieldsProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  selectedAssetType: AssetTypeT;
  onAssetTypeChange: (assetType: AssetTypeT) => void;
  transaction?: TransactionI;
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
  transaction,
}: TransactionFormFieldsProps) {
  const handleAssetTypeChange = (value: string) => {
    setValue("asset_type", value);
    onAssetTypeChange(value as AssetTypeT);
  };

  return (
    <>
      <Form.InputText
        name="title"
        title="Title"
        register={register}
        defaultValue={transaction?.title}
      />
      <Combobox
        name="asset_type"
        setValue={(_, value) => handleAssetTypeChange(value)}
        options={ASSETS_OPTIONS}
        defaultValue={transaction?.asset_type}
      />
      <AssetsCombobox
        assetType={selectedAssetType}
        setValue={setValue}
        defaultValue={transaction?.symbol}
      />
      <Form.InputNumber
        name="amount"
        title="Amount"
        register={register}
        defaultValue={transaction?.amount}
      />
      <PriceSection
        register={register}
        defaultValue={transaction?.price_targeted}
        name="price_targeted"
      />
      <Form.InputNumber
        name="user_id"
        title="User Id"
        register={register}
        defaultValue={transaction?.user_id}
      />
    </>
  );
}

export default TransactionFormFields;
