import { Button } from "@/components/ui/button";
import { Form } from "../../input/form";
import type { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
  defaultValue?: number;
}

export default function PriceSection({ register, defaultValue }: Props) {
  return (
    <div className="space-y-2">
      <Form.InputNumber
        name="price_targeted"
        title="Price Targeted"
        register={register}
        defaultValue={defaultValue}
      />
      <Button variant="secondary" className="ml-auto w-fit px-2">
        Get Current Price
      </Button>
    </div>
  );
}
