import useErrorHandling from "@/hooks/useErrorHandling";
import { UserService } from "@/services/usersService";
import { useQuery } from "@tanstack/react-query";
import { Table, TableContainer } from "../../table/table";
import { Font } from "@/theme/font";
import { TableRow } from "@/components/ui/table";
import type { TransactionWithVariationI } from "@/types/transaction";
import Paginator from "@/components/ui-elements/common/paginator/paginator";
import { TransactionRow } from "../common/transactionRow";
import { TransactionRowShimmer } from "../common/transactionRowShimmer";
import useListWithPaginator from "@/hooks/useListWithPaginator";

const ITEMS_PER_PAGE = 5;
interface Props {
  user_id: number;
}

function ListTransactionsWithVariation({ user_id }: Props) {
  const {
    data: userTransactions,
    isPending,
    error,
  } = useQuery({
    queryKey: ["users-transactions-with-variation", user_id],
    queryFn: async () =>
      await UserService.getUserTransactionsWithVariation({ user_id }),
  });
  const triggerError = useErrorHandling({ error });
  const { slicedList, setPage } =
    useListWithPaginator<TransactionWithVariationI>({
      itemsPerPage: ITEMS_PER_PAGE,
      list: userTransactions?.items ?? [],
    });

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
      <section className="flex w-full flex-col gap-2">
        <h3 className={`${Font.TableTitle}`}>List of your transactions</h3>
        <Table.ListTransactionsWithVariation>
          {Array.from({ length: ITEMS_PER_PAGE }, (_, index) => (
            <TableRow key={`shimmer-${index}`}>
              <TransactionRowShimmer.WithVariationLabels />
            </TableRow>
          ))}
        </Table.ListTransactionsWithVariation>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className={`${Font.TableTitle}`}>List of your transactions</h3>
      <Table.ListTransactionsWithVariation>
        {slicedList?.map((transaction: TransactionWithVariationI) => (
          <TableRow key={`id-${transaction.id}`}>
            <TransactionRow.WithVariationLabels row={transaction} />
          </TableRow>
        ))}
      </Table.ListTransactionsWithVariation>
      <Paginator
        totalItems={userTransactions.total}
        onClick={setPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </section>
  );
}

export default ListTransactionsWithVariation;
