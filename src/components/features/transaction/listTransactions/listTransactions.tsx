import {
  Table,
  TableBody,
  TableCaption,
  TableRow,
} from "@/components/ui/table";
import type { TransactionI } from "@/types/transaction";
import TransactionRow from "./transactionRow";
import { useQuery } from "@tanstack/react-query";
import TableHeader from "../../table/tableHeader";
import TableFooter from "../../table/tableFooter";
import { UserService } from "@/services/usersService";
import { type PropsWithChildren } from "react";
import useErrorHandling from "@/hooks/useErrorHandling";
import Paginator from "@/components/ui-elements/common/paginator/paginator";
import LoadingState from "@/components/ui-elements/common/graphics/loadingState";

const HEADER_COLUMNS = [
  "ID",
  "Title",
  "Amount",
  "Price Targeted",
  "Asset",
  "Symbol",
];

const TableContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-secondary flex w-full flex-col gap-2 rounded-md border-4 p-4">
      {children}
    </div>
  );
};

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

interface Props {
  user_id: number;
}

export default function ListTransactions({ user_id }: Props) {
  const {
    data: userTransactionsList = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["users-transactions", user_id],
    queryFn: async () => await UserService.getUserTransactions({ user_id }),
  });
  const triggerError = useErrorHandling({ error });

  if (error) {
    triggerError();

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
    <section className="flex w-full flex-col gap-2">
      <TableElements>
        {userTransactionsList?.map((transaction: TransactionI) => (
          <TableRow key={`id-${transaction.id}`}>
            <TransactionRow row={transaction} />
          </TableRow>
        ))}
      </TableElements>
      <Paginator />
    </section>
  );
}
