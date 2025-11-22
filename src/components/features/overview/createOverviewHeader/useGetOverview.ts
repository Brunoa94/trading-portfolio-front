import useErrorHandling from "@/hooks/useErrorHandling";
import { UserOverviewService } from "@/services/userOverviewService";
import { useQuery } from "@tanstack/react-query";

interface Props {
  user_id: number;
}

export default function useGetOverview({ user_id }: Props) {
  const { data, isPending, error } = useQuery({
    queryKey: ["user-overview", user_id],
    queryFn: async () => await UserOverviewService.getUserOverview({ user_id }),
  });
  useErrorHandling({ error });

  return {
    isPending,
    data,
    error,
  };
}
