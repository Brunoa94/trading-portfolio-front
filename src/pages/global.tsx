import ListTransactions from "@/components/app/features/transaction/listTransactions/listTransactions";
import StatisticsOverview from "@/components/app/global/statisticsOverview";
import Container from "@/components/app/layout/container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function GlobalPage() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <StatisticsOverview user_id={6} />
        <ListTransactions user_id={6} />
      </QueryClientProvider>
    </Container>
  );
}

export default GlobalPage;
