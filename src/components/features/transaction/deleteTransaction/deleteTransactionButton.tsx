import { Trash } from "lucide-react";
import useDeleteTransaction from "./useDeleteTransaction";
import { UButton } from "@/components/ui-elements/buttons/UButton";

interface Props {
  id: number;
}

export default function DeleteTransactionButton({ id }: Props) {
  const { onDelete } = useDeleteTransaction({ id });

  return (
    <UButton.Ghost ariaLabel="Delete transaction" onClick={onDelete}>
      <Trash
        size={36}
        absoluteStrokeWidth
        className="h-[26px] w-[26px] text-red-800"
      />
    </UButton.Ghost>
  );
}
