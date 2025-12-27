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

interface TableSkeletonProps extends PropsWithChildren {
  headerColumns: string[];
}

export const TableSkeleton = ({
  children,
  headerColumns,
}: TableSkeletonProps) => (
  <TableContainer>
    <TableC>
      <TableHeader columns={headerColumns} />
      <TableBody>{children}</TableBody>
    </TableC>
  </TableContainer>
);

const ListTransactions = ({ children }: PropsWithChildren) => (
  <TableSkeleton
    children={children}
    headerColumns={["ID", "Title", "Amount", "Price Targeted", "Symbol"]}
  />
);

const ListTransactionsWithVariation = ({ children }: PropsWithChildren) => (
  <TableSkeleton
    children={children}
    headerColumns={[
      "",
      "Amount",
      "Invested Amount",
      "Symbol",
      "Current Price",
      "Date",
    ]}
  />
);

const ListLiveAssets = ({ children }: PropsWithChildren) => (
  <TableSkeleton
    children={children}
    headerColumns={[
      "",
      "Icon",
      "Symbol",
      "Current price",
      "Change 24h",
      "% Change 24h",
    ]}
  />
);

export const Table = {
  ListTransactions,
  ListTransactionsWithVariation,
  ListLiveAssets,
};
