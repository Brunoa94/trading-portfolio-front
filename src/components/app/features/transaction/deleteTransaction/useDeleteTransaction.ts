import { TransactionService } from "@/services/transactionService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface Props {
  id: number;
}

function useDeleteTransaction({ id }: Props) {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => await TransactionService.deleteTransaction(id),
    onSuccess: () => {
      toast.success("Transaction created", {
        duration: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["users-transactions"] });
    },
    onError: (error) => {
      toast.error("Something went wrong", {
        description: error.message,
        duration: 3000,
      });
    },
  });

  const onDelete = async () => {
    await mutateAsync();
  };

  return {
    onDelete,
    isPending,
  };
}

export default useDeleteTransaction;
