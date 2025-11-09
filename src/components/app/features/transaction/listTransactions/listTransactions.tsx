import {
  Table,
  TableBody,
  TableCaption,
  TableRow,
} from "@/components/ui/table";
import type { TransactionI } from "@/types/transaction";
import TransactionSheet from "./transactionSheet";
import TransactionRow from "./transactionRow";
import { useQuery } from "@tanstack/react-query";
import TableHeader from "../../table/tableHeader";
import TableFooter from "../../table/tableFooter";
import { UserService } from "@/services/usersService";
import type { PropsWithChildren } from "react";

const HEADER_COLUMNS = [
  "ID",
  "Description",
  "Amount",
  "Price Targeted",
  "Asset",
  "Symbol",
];

interface Props {
  user_id: number;
}

const Transactions = ({ transactions }: { transactions: TransactionI[] }) => (
  <>
    {transactions?.map((transaction: TransactionI) => (
      <TableRow key={`id-${transaction.id}`}>
        <TransactionRow row={transaction} />
      </TableRow>
    ))}
  </>
);

const TableContainer = ({ children }: PropsWithChildren) => (
  <div className="mt-6 flex w-full flex-col gap-2">
    <div className="flex w-full items-center justify-end p-2">
      <TransactionSheet />
    </div>
    <Table>
      <TableCaption>A list of all your transactions.</TableCaption>
      <TableHeader columns={HEADER_COLUMNS} />
      <TableBody>{children}</TableBody>
      <TableFooter colSpan={4} />
    </Table>
  </div>
);

export default function ListTransactions({ user_id }: Props) {
  const { data: userTransactionsList, isPending } = useQuery({
    queryKey: ["users-transactions", user_id],
    queryFn: () => UserService.getUserTransactions({ user_id }),
  });

  if (isPending) {
    return (
      <TableContainer>
        <span>Loading...</span>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <Transactions transactions={userTransactionsList || []} />
    </TableContainer>
  );
}
