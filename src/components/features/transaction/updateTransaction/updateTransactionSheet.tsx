import { useState } from "react";
import UpdateTransactionForm from "./updateTransactionForm";
import SideSheet from "../../../ui-elements/common/sideSheet";
import type { TransactionI } from "@/types/transaction";
import { Eye } from "lucide-react";
import { UButton } from "@/components/ui-elements/buttons/UButton";

interface Props {
  transaction: TransactionI;
}

function UpdateTransactionSheet({ transaction }: Props) {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <SideSheet
      title="Update Transaction"
      sheetTrigger={
        <UButton.Ghost ariaLabel="Update transaction">
          <Eye className="h-[32px] w-[32px] text-green-800" />
        </UButton.Ghost>
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
