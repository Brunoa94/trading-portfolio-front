import WithChildCard from "../common/card/withChild";
import MoneyPercentage from "../common/visualization/moneyPercentage";
import Percentage from "../common/visualization/percentage";

function StatisticsOverview() {
  return (
    <div className="mt-6 grid w-full grid-cols-3 gap-2">
      <WithChildCard title="Balance">
        <MoneyPercentage value={354433} percentage={23.2} />
      </WithChildCard>
      <WithChildCard title="Variation">
        <Percentage percentage={23.2} />
      </WithChildCard>
      <WithChildCard title="Revenue"></WithChildCard>
      <WithChildCard title="Revenue"></WithChildCard>
    </div>
  );
}

export default StatisticsOverview;
