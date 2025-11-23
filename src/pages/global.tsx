import CreateOverviewHeader from "@/components/features/overview/overviewHeader/createOverviewHeader";
import TopPerformersHeader from "@/components/features/overview/topPerformers/topPerformersHeader";
import Container from "@/components/layout/container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function GlobalPage() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <CreateOverviewHeader user_id={6} />
        <TopPerformersHeader />
      </QueryClientProvider>
    </Container>
  );
}

export default GlobalPage;
