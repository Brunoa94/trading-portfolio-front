import type { TopPerformerT } from "@/types/userOverview";
import TopPerformerCard from "../../../ui-elements/overview/topPerformerCard";
import { Trophy } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { UserOverviewService } from "@/services/userOverviewService";
import useErrorHandling from "@/hooks/useErrorHandling";

interface Props {
  user_id: number;
}

function TopPerformersHeader({ user_id }: Props) {
  const {
    data: userTopPerformers = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["users-top-performers", user_id],
    queryFn: async () =>
      await UserOverviewService.getUserTopPerformers({ user_id }),
  });
  const triggerError = useErrorHandling({ error });

  if (error) {
    triggerError();
  }

  if (isPending) return <div>Is loading...</div>;

  return (
    <section className="mt-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Trophy color="var(--dark-purple)" />
        <h3>Top Performers</h3>
      </div>
      <div className="grid w-full grid-cols-3 gap-4">
        {userTopPerformers.map((performer, index) => (
          <TopPerformerCard key={index} card={performer} index={index} />
        ))}
      </div>
    </section>
  );
}

export default TopPerformersHeader;
