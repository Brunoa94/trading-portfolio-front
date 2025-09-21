import { TableCell } from "@/components/ui/table";
import type { TransactionI } from "@/types/transaction";

interface Props {
  row: TransactionI;
}

function TransactionRow({ row }: Props) {
  return (
    <>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.description || ""}</TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>{row.price_bought}€</TableCell>
      <TableCell>{row.asset.symbol}</TableCell>
    </>
  );
}

export default TransactionRow;
