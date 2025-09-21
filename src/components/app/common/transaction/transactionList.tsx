import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TRANSACTIONS } from "@/mock/transactions";
import type { TransactionI } from "@/types/transaction";
import TransactionRow from "./transactionRow";
import TransactionSheet from "./transactionSheet";
import clsx from "clsx";

const HEADER_COLUMNS = ["ID", "Description", "Amount", "Price Bought", "Asset"];

export function TableDemo() {
  return (
    <div className="mt-6 flex w-full flex-col gap-2">
      <div className="flex w-full items-center justify-end p-2">
        <TransactionSheet />
      </div>
      <Table>
        <TableCaption>A list of all your transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            {HEADER_COLUMNS.map((column: string, index: number) => (
              <TableHead className={clsx(index === 0 ? "w-[100px]" : "")}>
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {TRANSACTIONS.map((transaction: TransactionI) => (
            <TableRow key={`id-${transaction.id}`}>
              <TransactionRow row={transaction} />
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
