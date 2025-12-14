import TransactionSheet from "@/components/features/transaction/createTransaction/createTransactionSheet";
import ListTransactions from "@/components/features/transaction/listTransactions/listTransactions";
import StatisticsOverview from "@/components/ui-elements/transactions/statisticsOverview";
import Container from "@/components/layout/container";
import GetTopSymbols from "@/components/features/overview/getTopSymbols/getTopSymbols";

function TransactionsPage() {
  return (
    <>
      <Container transparentBg>
        <GetTopSymbols />
      </Container>
      <Container>
        <StatisticsOverview user_id={6} />
        <div className="mt-2 flex w-full items-center justify-end">
          <TransactionSheet />
        </div>
        <ListTransactions user_id={6} />
      </Container>
    </>
  );
}

export default TransactionsPage;
