import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../../input/form";
import { Combobox } from "../../input/combobox";
import { Button } from "@/components/ui/button";

import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { CreateTransactionErrors } from "./createTransactionErrors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TransactionService } from "@/services/transactionService";
import { CreateTransactionSchema, type CreateTransactionT } from "./schemas";

interface Props {
  withFooter?: boolean;
}

function CreateTransactionForm({ withFooter }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateTransactionT>({
    resolver: zodResolver(CreateTransactionSchema),
  });

  const queryClient = useQueryClient();

  const { mutateAsync, data, isPending } = useMutation({
    mutationFn: (body: CreateTransactionT) => {
      return TransactionService.createTransaction(body);
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      queryClient.invalidateQueries({ queryKey: ["tradings"] });
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

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Form.InputText name="title" title="Title" register={register} />
      <Form.InputNumber name="amount" title="Amount" register={register} />
      <Form.InputNumber
        name="price_targeted"
        title="Price Targeted"
        register={register}
      />
      <Button variant="secondary" className="ml-auto w-fit px-2">
        Get Current Price
      </Button>
      <Combobox name="asset_type" setValue={setValue} />
      <Form.InputNumber name="user_id" title="User Id" register={register} />
      <Form.InputText name="symbol" title="Symbol" register={register} />
      <CreateTransactionErrors errors={errors} />
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
