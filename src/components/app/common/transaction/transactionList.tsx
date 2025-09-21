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
import { Button } from "@/components/ui/button";
import TransactionSheet from "./transactionSheet";
import clsx from "clsx";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

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
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
