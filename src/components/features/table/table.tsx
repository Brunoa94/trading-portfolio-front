import { Table as TableC, TableBody } from "@/components/ui/table";
import { type PropsWithChildren } from "react";
import TableHeader from "./tableHeader";

export const TableContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-secondary flex w-full flex-col gap-2 rounded-md border-4 p-4">
      {children}
    </div>
  );
};

const ListTransactions = ({ children }: PropsWithChildren) => {
  const HEADER_COLUMNS = ["ID", "Title", "Amount", "Price Targeted", "Symbol"];

  return (
    <TableContainer>
      <TableC>
        <TableHeader columns={HEADER_COLUMNS} />
        <TableBody>{children}</TableBody>
      </TableC>
    </TableContainer>
  );
};

export const Table = {
  ListTransactions,
};
