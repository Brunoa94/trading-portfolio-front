import { useQuery } from "@tanstack/react-query";
import WithChildCard from "../card/withChild";
import { UserService } from "@/services/usersService";
import LoadingState from "../visualization/loadingState";
import type { UserOverviewI } from "@/schemas/user";
import useErrorHandling from "@/hooks/useErrorHandling";
import { ChartCandlestick, Euro, WalletMinimal } from "lucide-react";
import MoneyPercentage from "../visualization/moneyPercentage";
import Percentage from "../visualization/percentage";
import ContainerWithIcon from "../visualization/containerWithIcon";

interface Props {
  user_id: number;
}

const Headers = ({
  statisticsOverview,
}: {
  statisticsOverview?: UserOverviewI;
}) => [
  {
    title: "Balance",
    component: (
      <MoneyPercentage
        value={statisticsOverview?.balance || 0}
        percentage={23.2}
      />
    ),
    icon: <Euro size={16} />,
  },
  {
    title: "Variation",
    component: <Percentage percentage={statisticsOverview?.margin || 0} />,
    icon: <ChartCandlestick className="shrink-0" size={16} />,
  },
  {
    title: "Balance",
    component: (
      <Percentage percentage={statisticsOverview?.value_invested || 0} />
    ),
    icon: <WalletMinimal size={16} />,
  },
];

function StatisticsOverview({ user_id }: Props) {
  const {
    data: statisticsOverview,
    isPending,
    error,
  } = useQuery({
    queryKey: ["user-overview", user_id],
    queryFn: async (): Promise<UserOverviewI> =>
      await UserService.getUserOverview({ user_id }),
  });

  useErrorHandling({ error });

  return (
    <div className="mt-6 grid w-full grid-cols-3 gap-2">
      {Headers({ statisticsOverview }).map((element) => (
        <WithChildCard
          title={element.title}
          variant="diagonal-purple"
          icon={
            <ContainerWithIcon bgColor="purple">
              {element.icon}
            </ContainerWithIcon>
          }
        >
          {isPending ? <LoadingState /> : element.component}
        </WithChildCard>
      ))}
    </div>
  );
}

export default StatisticsOverview;
