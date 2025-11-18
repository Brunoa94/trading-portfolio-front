import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TransactionService } from "@/services/transactionService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { CreateTransactionT, TransactionI } from "@/types/transaction";
import { CreateTransactionSchema } from "@/schemas/transaction";
import { toast } from "sonner";

export default function useCreateTransaction(onSuccess?: () => void) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateTransactionT>({
    resolver: zodResolver(CreateTransactionSchema),
  });

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: CreateTransactionT): Promise<TransactionI> => {
      return TransactionService.createTransaction(body);
    },
    onSuccess: (response: TransactionI) => {
      toast.success("Transaction created", {
        duration: 3000,
      });
      queryClient.invalidateQueries({
        queryKey: ["users-transactions", response.user_id],
      });
      onSuccess?.();
    },
    onError: (error) => {
      toast.error("Something went wrong", {
        description: error.message,
        duration: 3000,
      });
    },
  });

  const onSubmit = async (body: CreateTransactionT) => {
    await mutateAsync(body);
  };

  return {
    register,
    onSubmit,
    setValue,
    handleSubmit,
    errors,
    isPending,
  };
}
