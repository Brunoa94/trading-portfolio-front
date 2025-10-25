import { TableDemo } from "@/components/app/common/transaction/transactionList";
import StatisticsOverview from "@/components/app/global/statisticsOverview";
import Container from "@/components/app/layout/container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function GlobalPage() {
  return (
    <main className="flex w-full justify-center">
      <Container>
        <QueryClientProvider client={queryClient}>
          <StatisticsOverview />
          <TableDemo />
        </QueryClientProvider>
      </Container>
    </main>
  );
}

export default GlobalPage;
