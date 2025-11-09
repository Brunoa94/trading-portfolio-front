import type { CreateTransactionT } from "@/types/transaction";
import type { FieldErrors } from "react-hook-form";

interface Props {
  errors: FieldErrors<CreateTransactionT>;
}

export const CreateTransactionErrors = ({ errors }: Props) => {
  return (
    <>
      {errors.asset_type && (
        <span className="text-sm text-red-500">Asset is required</span>
      )}
      {errors.amount && (
        <span className="text-sm text-red-500">Amount is required</span>
      )}
      {errors.price_targeted && (
        <span className="text-sm text-red-500">Price is required</span>
      )}
    </>
  );
};
