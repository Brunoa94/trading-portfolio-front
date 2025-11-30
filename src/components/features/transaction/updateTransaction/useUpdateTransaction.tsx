import { UpdateTransactionSchema } from "@/schemas/transaction";
import { TransactionService } from "@/services/transactionService";
import type { UpdateTransactionT } from "@/types/transaction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, useFormContext } from "react-hook-form";
import { toast } from "sonner";

export default function useUpdateTransaction(
  onSuccess?: () => void,
  defaultValues?: UpdateTransactionT
) {
  const form = useForm<UpdateTransactionT>({
    resolver: zodResolver(UpdateTransactionSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: UpdateTransactionT) => {
      return TransactionService.updateTransaction(body);
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

  const onSubmit = async (body: UpdateTransactionT) => {
    await mutateAsync(body);
  };

  return {
    register,
    onSubmit,
    setValue,
    handleSubmit,
    errors,
    isPending,
    form,
  };
}
