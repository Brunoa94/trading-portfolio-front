import { Trophy } from "lucide-react";
import useGetTopSymbols from "./useGetTopSymbols";
import { useState } from "react";
import type { PodiumEntryT, PodiumKeysT } from "@/types/userOverview";
import TopSymbol from "./topSymbol";
import OptionsTab from "@/components/ui-elements/common/optionsTab/optionsTab";

const TOP_SYMBOLS_FILTERS: { value: PodiumKeysT; label: string }[] = [
  {
    value: "investment_podium",
    label: "Biggest Invesments",
  },
  {
    value: "performance_podium",
    label: "Best Performances",
  },
  {
    value: "transactions_podium",
    label: "Number of Transactions",
  },
];

export default function GetTopSymbols() {
  const {
    data: topPodium,
    isPending,
    error,
  } = useGetTopSymbols({ user_id: 6 });
  const [activeTab, setActiveTab] = useState<PodiumKeysT>("investment_podium");

  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center">
      <div className="mr-auto mb-6 flex items-center gap-2">
        <Trophy className="text-accent h-5 w-5" />
        <h2 className="text-foreground text-lg font-bold">Top Performers</h2>
      </div>
      <div className="mb-2 flex items-end justify-center gap-4">
        {topPodium &&
          topPodium[activeTab].map((podiumEntry: PodiumEntryT, index) => (
            <TopSymbol
              value={podiumEntry.value}
              symbol={podiumEntry.symbol}
              index={index}
            />
          ))}
      </div>
      <OptionsTab<PodiumKeysT>
        options={TOP_SYMBOLS_FILTERS}
        value={activeTab}
        onValueChange={setActiveTab}
      />
    </div>
  );
}
