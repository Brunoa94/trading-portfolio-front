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
import { useRef, type PropsWithChildren } from "react";
import LoadingState from "../../global/loadingState";
import { toast } from "sonner";

const HEADER_COLUMNS = [
  "ID",
  "Title",
  "Amount",
  "Price Targeted",
  "Asset",
  "Symbol",
];

interface Props {
  user_id: number;
}

const TableContainer = ({ children }: PropsWithChildren) => (
  <div className="mt-6 flex w-full flex-col gap-2">
    <div className="flex w-full items-center justify-end p-2">
      <TransactionSheet />
    </div>
    {children}
  </div>
);

const TableElements = ({ children }: PropsWithChildren) => (
  <TableContainer>
    <Table>
      <TableCaption>A list of all your transactions.</TableCaption>
      <TableHeader columns={HEADER_COLUMNS} />
      <TableBody>{children}</TableBody>
      <TableFooter colSpan={4} />
    </Table>
  </TableContainer>
);

export default function ListTransactions({ user_id }: Props) {
  const {
    data: userTransactionsList = [],
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["users-transactions", user_id],
    queryFn: async () => await UserService.getUserTransactions({ user_id }),
  });
  const errorTriggered = useRef<boolean>(false);

  if (error || isError) {
    !errorTriggered.current &&
      toast.error("Something went wrong", {
        description: error.message,
        duration: 3000,
      });

    errorTriggered.current = true;

    return (
      <TableContainer>
        <span className="w-full border-b-2 border-white py-4 pb-2 text-center text-xl font-bold text-nowrap">
          No transactions found
        </span>
      </TableContainer>
    );
  }

  if (isPending) {
    return (
      <TableContainer>
        <LoadingState />
      </TableContainer>
    );
  }

  return (
    <TableElements>
      {userTransactionsList?.map((transaction: TransactionI) => (
        <TableRow key={`id-${transaction.id}`}>
          <TransactionRow row={transaction} />
        </TableRow>
      ))}
    </TableElements>
  );
}
