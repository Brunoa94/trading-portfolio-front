import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TransactionService } from "@/services/transactionService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { CreateTransactionT } from "@/types/transaction";
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
    mutationFn: (body: CreateTransactionT) => {
      return TransactionService.createTransaction(body);
    },
    onSuccess: () => {
      toast.success("Transaction created", {
        duration: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["users-transactions"] });
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

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return {
    register,
    onSubmit,
    onError,
    setValue,
    handleSubmit,
    errors,
    isPending,
  };
}
