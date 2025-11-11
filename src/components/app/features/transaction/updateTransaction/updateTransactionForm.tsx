import { useState } from "react";
import type { AssetTypeT } from "@/types/asset";
import TransactionFormFields from "../common/transactionFormFields";
import FormFooter from "../common/formFooter";
import useUpdateTransaction from "./useUpdateTransaction";
import { TransactionErrors } from "../common/transactionErrors";

interface Props {
  withFooter?: boolean;
  onSuccess?: () => void;
}

export default function UpdateTransactionForm({
  withFooter,
  onSuccess,
}: Props) {
  const { handleSubmit, onSubmit, register, setValue, errors } =
    useUpdateTransaction(onSuccess);
  const [selectedAssetType, setSelectedAssetType] =
    useState<AssetTypeT>("STOCK");

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <TransactionFormFields
        register={register}
        setValue={setValue}
        selectedAssetType={selectedAssetType}
        onAssetTypeChange={setSelectedAssetType}
      />
      <TransactionErrors errors={errors} />
      <FormFooter withFooter={withFooter} />
    </form>
  );
}
