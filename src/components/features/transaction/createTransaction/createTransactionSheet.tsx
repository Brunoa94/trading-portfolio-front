import { useState } from "react";
import CreateTransactionForm from "./createTransactionForm";
import SideSheet from "../../../ui-elements/common/sideSheet";
import { UButton } from "@/components/ui-elements/buttons/UButton";

function TransactionSheet() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <SideSheet
      title="Add Transaction"
      sheetTrigger={
        <UButton.WithVariant
          ariaLabel="Create Transaction"
          variant="outline"
          type="submit"
        >
          Create Transaction
        </UButton.WithVariant>
      }
      description="Add a new transaction to you transaction list"
      content={<CreateTransactionForm onSuccess={() => setSheetOpen(false)} />}
      open={sheetOpen}
      setOpen={setSheetOpen}
    />
  );
}

export default TransactionSheet;
