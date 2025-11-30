import { useState } from "react";
import type { AssetTypeT } from "@/types/asset";
import useCreateTransaction from "./useCreateTransaction";
import TransactionFormFields from "../common/transactionFormFields";
import { TransactionErrors } from "../common/transactionErrors";
import { Button } from "@/components/ui/button";
import { FormProvider } from "react-hook-form";

interface Props {
  withFooter?: boolean;
  onSuccess?: () => void;
}

export default function CreateTransactionForm({ onSuccess }: Props) {
  const { handleSubmit, onSubmit, register, setValue, errors, form } =
    useCreateTransaction(onSuccess);
  const [selectedAssetType, setSelectedAssetType] =
    useState<AssetTypeT>("STOCK");

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TransactionFormFields
          register={register}
          setValue={setValue}
          selectedAssetType={selectedAssetType}
          onAssetTypeChange={setSelectedAssetType}
        />
        <Button type="submit">Save Transaction</Button>
        <TransactionErrors errors={errors} />
      </form>
    </FormProvider>
  );
}
