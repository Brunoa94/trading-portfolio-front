import { queryClient } from "@/clients/queryClient";
import TransactionSheet from "@/components/app/features/transaction/createTransaction/createTransactionSheet";
import ListTransactions from "@/components/app/features/transaction/listTransactions/listTransactions";
import StatisticsOverview from "@/components/app/global/statisticsOverview";
import Container from "@/components/app/layout/container";
import { QueryClientProvider } from "@tanstack/react-query";

function TransactionsPage() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <StatisticsOverview user_id={6} />
        <div className="mt-2 flex w-full items-center justify-end">
          <TransactionSheet />
        </div>
        <ListTransactions user_id={6} />
      </QueryClientProvider>
      TransactionsPage
    </Container>
  );
}

export default TransactionsPage;
