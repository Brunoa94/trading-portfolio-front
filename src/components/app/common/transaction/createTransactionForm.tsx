import {
  CreateTransactionSchema,
  type CreateTransactionT,
} from "@/schemas/transaction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../input/form";
import type { Asset } from "@/types/transaction";
import { Combobox } from "../input/combobox";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { TransactionService } from "@/services/transactionService";

interface Props {
  withFooter?: boolean;
}

function CreateTransactionForm({ withFooter }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CreateTransactionT>({
    resolver: zodResolver(CreateTransactionSchema),
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (body: CreateTransactionT) => {
      console.log("Mutation executing with body:", body);
      return TransactionService.createTransaction(body);
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      queryClient.invalidateQueries({ queryKey: ["tradings"] });
      reset();
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
    onMutate: (variables) => {
      console.log("Mutation starting with variables:", variables);
    },
  });

  const onSubmit = (body: CreateTransactionT) => {
    console.log("Form submitted:", body);
    mutation.mutate(body);
  };

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Form.InputText
        name="description"
        title="Description"
        register={register}
      />
      <Form.InputNumber name="amount" title="Amount" register={register} />
      <Form.InputNumber
        name="price_bought"
        title="Price Bought"
        register={register}
      />
      <Button variant="secondary" className="ml-auto w-fit px-2">
        Get Current Price
      </Button>
      <Combobox name="asset_type" setValue={setValue} />
      {errors.asset_type && (
        <span className="text-sm text-red-500">Asset is required</span>
      )}
      {errors.amount && (
        <span className="text-sm text-red-500">Amount is required</span>
      )}
      {errors.price_bought && (
        <span className="text-sm text-red-500">Price is required</span>
      )}
      {withFooter ? (
        <SheetFooter className="mt-auto px-0">
          <Button type="submit">Save Transaction</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      ) : (
        <Button type="submit">Save Transaction</Button>
      )}
    </form>
  );
}

export default CreateTransactionForm;
