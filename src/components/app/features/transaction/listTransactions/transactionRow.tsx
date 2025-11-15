import { TableCell } from "@/components/ui/table";
import type { TransactionI } from "@/types/transaction";
import UpdateTransactionSheet from "../updateTransaction/updateTransactionSheet";

interface Props {
  row: TransactionI;
}

function TransactionRow({ row }: Props) {
  return (
    <>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.title || ""}</TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>{row.price_targeted}€</TableCell>
      <TableCell>{String(row.asset_type)}</TableCell>
      <TableCell>{row.symbol}</TableCell>
      <UpdateTransactionSheet transaction={row} />
    </>
  );
}

export default TransactionRow;
