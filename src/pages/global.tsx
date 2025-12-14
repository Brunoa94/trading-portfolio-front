import CreateOverviewHeader from "@/components/features/overview/overviewHeader/createOverviewHeader";
import TopPerformersHeader from "@/components/features/overview/topPerformers/topPerformersHeader";
import ListTransactionsWithVariation from "@/components/features/transaction/listTransactions/withVariation";
import GetUserPortfolioVariation from "@/components/features/user/getUserPortfolioVariation/getUserPortfolioVariation";
import Container from "@/components/layout/container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function GlobalPage() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <CreateOverviewHeader user_id={6} />
        <TopPerformersHeader user_id={6} />
        <ListTransactionsWithVariation user_id={6} />
      </QueryClientProvider>
      <GetUserPortfolioVariation user_id={6} />
    </Container>
  );
}

export default GlobalPage;
