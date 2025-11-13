import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateTransactionForm from "../createTransaction/createTransactionForm";
import SideSheet from "../../common/sideSheet";

function TransactionSheet() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <SideSheet
      title="Add Transaction"
      sheetTrigger={<Button className="uppercase">Create Transaction</Button>}
      description="Add a new transaction to you transaction list"
      submitButton={<Button type="submit">Create Transaction</Button>}
      content={
        <CreateTransactionForm
          withFooter
          onSuccess={() => setSheetOpen(false)}
        />
      }
      open={sheetOpen}
      setOpen={setSheetOpen}
    />
  );
}

export default TransactionSheet;
