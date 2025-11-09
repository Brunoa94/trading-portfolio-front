import { useState } from "react";
import { Form } from "../../input/form";
import { Combobox, type ComboOptionT } from "../../input/combobox";
import { Button } from "@/components/ui/button";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import type { AssetTypeT } from "@/types/asset";

import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { CreateTransactionErrors } from "./createTransactionErrors";
import useCreateTransaction from "./useCreateTransaction";
import AssetsCombobox from "@/components/app/common/assetsCombobox";

interface Props {
  withFooter?: boolean;
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

function useAssetTypeSelection() {
  const [selectedAssetType, setSelectedAssetType] =
    useState<AssetTypeT>("STOCK");
  return { selectedAssetType, setSelectedAssetType };
}

interface TransactionFormFieldsProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  selectedAssetType: AssetTypeT;
  onAssetTypeChange: (assetType: AssetTypeT) => void;
}

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

interface PriceSectionProps {
  register: UseFormRegister<any>;
}

function PriceSection({ register }: PriceSectionProps) {
  return (
    <div className="space-y-2">
      <Form.InputNumber
        name="price_targeted"
        title="Price Targeted"
        register={register}
      />
      <Button variant="secondary" className="ml-auto w-fit px-2">
        Get Current Price
      </Button>
    </div>
  );
}

interface FormFooterProps {
  withFooter?: boolean;
}

function FormFooter({ withFooter }: FormFooterProps) {
  const submitButton = <Button type="submit">Save Transaction</Button>;

  return withFooter ? (
    <SheetFooter className="mt-auto px-0">
      {submitButton}
      <SheetClose asChild>
        <Button variant="outline">Close</Button>
      </SheetClose>
    </SheetFooter>
  ) : (
    submitButton
  );
}

function CreateTransactionForm({ withFooter }: Props) {
  const { handleSubmit, onSubmit, onError, register, setValue, errors } =
    useCreateTransaction();
  const { selectedAssetType, setSelectedAssetType } = useAssetTypeSelection();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <TransactionFormFields
        register={register}
        setValue={setValue}
        selectedAssetType={selectedAssetType}
        onAssetTypeChange={setSelectedAssetType}
      />
      <CreateTransactionErrors errors={errors} />
      <FormFooter withFooter={withFooter} />
    </form>
  );
}

export default CreateTransactionForm;
