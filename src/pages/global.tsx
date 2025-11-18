import TransactionSheet from "@/components/features/transaction/createTransaction/createTransactionSheet";
import ListTransactions from "@/components/features/transaction/listTransactions/listTransactions";
import StatisticsOverview from "@/components/ui-elements/transactions/statisticsOverview";
import Container from "@/components/layout/container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function GlobalPage() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <StatisticsOverview user_id={6} />
        <div className="mt-2 flex w-full items-center justify-end">
          <TransactionSheet />
        </div>
        <ListTransactions user_id={6} />
      </QueryClientProvider>
    </Container>
  );
}

export default GlobalPage;
