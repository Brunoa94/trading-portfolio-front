import { useState } from "react";
import { Button } from "@/components/ui/button";
import UpdateTransactionForm from "./updateTransactionForm";
import SideSheet from "../../../ui-elements/common/sideSheet";
import type { TransactionI } from "@/types/transaction";
import { Eye } from "lucide-react";

interface Props {
  transaction: TransactionI;
}

function UpdateTransactionSheet({ transaction }: Props) {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <SideSheet
      title="Update Transaction"
      sheetTrigger={
        <Button className="my-2 rounded-full bg-transparent uppercase">
          <Eye color="green" className="h-[32px] w-[32px]" />
        </Button>
      }
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
