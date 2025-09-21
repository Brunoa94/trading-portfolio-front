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
import { useState } from "react";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";

type AssetSelect = {
  value: Asset;
  label: string;
};

const frameworks: AssetSelect[] = [
  {
    value: "crypto",
    label: "Crypto Coin",
  },
  {
    value: "stock",
    label: "Funds Stocks",
  },
  {
    value: "commodity",
    label: "Pension",
  },
  {
    value: "currency",
    label: "Currency",
  },
];

interface Props {
  withFooter?: boolean;
}

function CreateTransactionForm({ withFooter }: Props) {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(CreateTransactionSchema),
  });

  const onSubmit = (e: CreateTransactionT) => {
    console.log("JSON " + JSON.stringify(e));
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
      <Combobox name="asset" register={register} />
      {withFooter && (
        <SheetFooter className="mt-auto px-0">
          <Button type="submit">Save Transaction</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      )}
    </form>
  );
}

export default CreateTransactionForm;
