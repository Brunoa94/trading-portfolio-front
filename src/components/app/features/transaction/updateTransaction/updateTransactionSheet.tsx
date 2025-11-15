import { useState } from "react";
import { Button } from "@/components/ui/button";
import UpdateTransactionForm from "./updateTransactionForm";
import SideSheet from "../../common/sideSheet";
import type { TransactionI } from "@/types/transaction";

interface Props {
  transaction: TransactionI;
}

function UpdateTransactionSheet({ transaction }: Props) {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <SideSheet
      title="Update Transaction"
      sheetTrigger={<Button className="my-2 uppercase">Update</Button>}
      description={`Transaction #${transaction.id}`}
      content={
        <UpdateTransactionForm
          onSuccess={() => setSheetOpen(false)}
          transaction={transaction}
        />
      }
      open={sheetOpen}
      setOpen={setSheetOpen}
    />
  );
}

export default UpdateTransactionSheet;
