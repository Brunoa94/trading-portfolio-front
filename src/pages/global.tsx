import TopPerformersHeader from "@/components/features/overview/topPerformers/topPerformersHeader";
import ListTransactionsWithVariation from "@/components/features/transaction/listTransactions/withVariation";
import GetUserPortfolioVariation from "@/components/features/user/getUserPortfolioVariation/getUserPortfolioVariation";
import Container from "@/components/layout/container";

function GlobalPage() {
  return (
    <Container transparentBg className="gap-12">
      <TopPerformersHeader user_id={6} />
      <GetUserPortfolioVariation user_id={6} />
      {/* <CreateOverviewHeader user_id={6} /> */}
      <ListTransactionsWithVariation user_id={6} />
    </Container>
  );
}

export default GlobalPage;
