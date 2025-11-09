import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TransactionService } from "@/services/transactionService";
import { CreateTransactionSchema, type CreateTransactionT } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useCreateTransaction() {
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
      queryClient.invalidateQueries({ queryKey: ["users-transactions"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
    onMutate: (variables) => {
      console.log("Mutation starting with variables:", variables);
    },
  });

  const onSubmit = async (body: CreateTransactionT) => {
    console.log("Form submitted:", body);
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
