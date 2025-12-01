import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateTransactionForm from "./createTransactionForm";
import SideSheet from "../../../ui-elements/common/sideSheet";

function TransactionSheet() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <SideSheet
      title="Add Transaction"
      sheetTrigger={
        <Button className="uppercase" type="submit" variant="outline">
          Create Transaction
        </Button>
      }
      description="Add a new transaction to you transaction list"
      content={<CreateTransactionForm onSuccess={() => setSheetOpen(false)} />}
      open={sheetOpen}
      setOpen={setSheetOpen}
    />
  );
}

export default TransactionSheet;
