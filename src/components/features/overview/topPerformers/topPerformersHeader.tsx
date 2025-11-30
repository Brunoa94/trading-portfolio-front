import TopPerformerCard from "../../../ui-elements/overview/topPerformerCard";
import type { TopPerformerT } from "@/types/userOverview";
import { Trophy } from "lucide-react";

const mockTopPerformers: TopPerformerT[] = [
  {
    ranking: "gold",
    symbol: "AAPL",
    quantity: 150,
    value_invested: 25000,
    marginPercentage: 15.5,
    marginNumber: 3875,
  },
  {
    ranking: "silver",
    symbol: "TSLA",
    quantity: 75,
    value_invested: 18500,
    marginPercentage: 12.3,
    marginNumber: 2275.5,
  },
  {
    ranking: "bronze",
    symbol: "NVDA",
    quantity: 50,
    value_invested: 22000,
    marginPercentage: 8.7,
    marginNumber: 1914,
  },
];

function TopPerformersHeader() {
  return (
    <section className="mt-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Trophy color="var(--dark-purple)" />
        <h3>Top Performers</h3>
      </div>
      <div className="grid w-full grid-cols-3 gap-4">
        {mockTopPerformers.map((performer, index) => (
          <TopPerformerCard key={index} card={performer} />
        ))}
      </div>
    </section>
  );
}

export default TopPerformersHeader;
