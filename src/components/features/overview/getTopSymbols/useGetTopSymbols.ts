import useErrorHandling from "@/hooks/useErrorHandling";
import { UserOverviewService } from "@/services/userOverviewService";
import { useQuery } from "@tanstack/react-query";

interface Props {
  user_id: number;
}

export default function useGetTopSymbols({ user_id }: Props) {
  const { data, isPending, error } = useQuery({
    queryKey: ["user-podium", user_id],
    queryFn: async () =>
      await UserOverviewService.getUserSymbolsPodium({ user_id }),
  });
  useErrorHandling({ error });

  return {
    isPending,
    data,
    error,
  };
}
