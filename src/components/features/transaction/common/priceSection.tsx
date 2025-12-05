import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "../../input/form";
import { useFormContext, type UseFormRegister } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { AssetsService } from "@/services/assetsService";
import useErrorHandling from "@/hooks/useErrorHandling";
import { Spinner } from "@/components/ui/spinner";

interface Props {
  register: UseFormRegister<any>;
  defaultValue?: number;
  name: string;
}

export default function PriceSection({ register, defaultValue, name }: Props) {
  const { watch, setValue } = useFormContext();
  const symbol = watch("symbol");
  const {
    data: assetPrice = null,
    isPending,
    error,
  } = useQuery({
    queryKey: ["asset-price", symbol],
    queryFn: async () => await AssetsService.getAssetPrice(symbol),
    enabled: !!symbol,
  });
  const triggerError = useErrorHandling({ error });

  function setCurrentPrice(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (assetPrice) {
      setValue(name, assetPrice.current_price);
    }
  }

  if (error) {
    triggerError();
  }

  return (
    <div className="space-y-2">
      <Form.InputNumber
        name={name}
        title="Price Targeted"
        register={register}
        defaultValue={defaultValue}
      />
      <Button
        variant="secondary"
        className="ml-auto flex w-fit items-center gap-4 px-2"
        onClick={setCurrentPrice}
        disabled={isPending || !assetPrice}
      >
        {isPending && symbol && <Spinner />}
        Get Current Price
      </Button>
    </div>
  );
}
