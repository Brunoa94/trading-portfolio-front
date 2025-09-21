import StatisticsOverview from "@/components/app/global/statisticsOverview";
import Container from "@/components/app/layout/container";

function GlobalPage() {
  return (
    <main className="flex w-full justify-center">
      <Container>
        <StatisticsOverview />
      </Container>
    </main>
  );
}

export default GlobalPage;
