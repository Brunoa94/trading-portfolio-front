import { Font } from "@/theme/font";
import { Table } from "../../table/table";
import { TableRow } from "@/components/ui/table";
import { TransactionRowShimmer } from "../common/transactionRowShimmer";

interface Props {
  itemsPerPage: number;
}

export default function ListTransactionsShimmer({ itemsPerPage }: Props) {
  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className={`${Font.TableTitle}`}>List of your transactions</h3>
      <Table.ListTransactions>
        {Array.from({ length: itemsPerPage }, (_, index) => (
          <TableRow key={`shimmer-${index}`}>
            <TransactionRowShimmer.WithIdTitleActions />
          </TableRow>
        ))}
      </Table.ListTransactions>
    </section>
  );
}
