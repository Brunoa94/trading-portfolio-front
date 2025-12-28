import { TableRow } from "@/components/ui/table";
import type { TransactionI } from "@/types/transaction";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/usersService";
import useErrorHandling from "@/hooks/useErrorHandling";
import Paginator from "@/components/ui-elements/common/paginator/paginator";
import LoadingState from "@/components/ui-elements/common/graphics/loadingState";
import { Font } from "@/theme/font";
import { Table, TableContainer } from "../../table/table";
import { TransactionRow } from "../common/transactionRow";
import useListWithPaginator from "@/hooks/useListWithPaginator";

const ITEMS_PER_PAGE = 4;
interface Props {
  user_id: number;
}

export default function ListTransactions({ user_id }: Props) {
  const {
    data: userTransactions,
    isPending,
    error,
  } = useQuery({
    queryKey: ["users-transactions", user_id],
    queryFn: async () => await UserService.getUserTransactions({ user_id }),
  });
  const triggerError = useErrorHandling({ error });
  const { slicedList, setPage } = useListWithPaginator<TransactionI>({
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
      <TableContainer>
        <LoadingState />
      </TableContainer>
    );
  }

  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className={`${Font.TableTitle}`}>List of your transactions</h3>
      <Table.ListTransactions>
        {slicedList.map((transaction: TransactionI) => (
          <TableRow key={`id-${transaction.id}`}>
            <TransactionRow.WithIdTitleActions row={transaction} />
          </TableRow>
        ))}
      </Table.ListTransactions>
      <Paginator
        onClick={setPage}
        totalItems={userTransactions.total}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </section>
  );
}
