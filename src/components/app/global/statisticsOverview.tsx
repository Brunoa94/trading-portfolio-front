import WithChildCard from "../features/card/withChild";
import MoneyPercentage from "../features/visualization/moneyPercentage";
import Percentage from "../features/visualization/percentage";

function StatisticsOverview() {
  return (
    <div className="mt-6 grid w-full grid-cols-3 gap-2">
      <WithChildCard title="Balance">
        <MoneyPercentage value={354433} percentage={23.2} />
      </WithChildCard>
      <WithChildCard title="Variation">
        <Percentage percentage={23.2} />
      </WithChildCard>
    </div>
  );
}

export default StatisticsOverview;
