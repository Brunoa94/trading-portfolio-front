import { useState } from "react";
import type { AssetTypeT } from "@/types/asset";
import TransactionFormFields from "../common/transactionFormFields";
import useUpdateTransaction from "./useUpdateTransaction";
import { TransactionErrors } from "../common/transactionErrors";
import type { TransactionI } from "@/types/transaction";
import { UButton } from "@/components/ui-elements/buttons/UButton";
import { FormProvider } from "react-hook-form";

interface Props {
  onSuccess?: () => void;
  transaction: TransactionI;
}

export default function UpdateTransactionForm({
  onSuccess,
  transaction,
}: Props) {
  const { handleSubmit, onSubmit, register, setValue, errors, form } =
    useUpdateTransaction(onSuccess, transaction);
  const [selectedAssetType, setSelectedAssetType] = useState<AssetTypeT>(
    (transaction.asset_type as AssetTypeT) || "STOCK"
  );

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} value={transaction.id} />
        <TransactionFormFields
          register={register}
          setValue={setValue}
          selectedAssetType={selectedAssetType}
          onAssetTypeChange={setSelectedAssetType}
          transaction={transaction}
        />
        <UButton.WithVariant ariaLabel="Save transaction" variant="default" type="submit">
          Save Transaction
        </UButton.WithVariant>
        <TransactionErrors errors={errors} />
      </form>
    </FormProvider>
  );
}
