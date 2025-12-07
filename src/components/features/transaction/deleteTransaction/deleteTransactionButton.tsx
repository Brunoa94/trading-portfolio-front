import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import useDeleteTransaction from "./useDeleteTransaction";

interface Props {
  id: number;
}

export default function DeleteTransactionButton({ id }: Props) {
  const { onDelete } = useDeleteTransaction({ id });

  return (
    <Button
      onClick={onDelete}
      className="color-white cursor-pointer bg-transparent hover:bg-white"
    >
      <Trash
        size={36}
        absoluteStrokeWidth
        className="h-[26px] w-[26px] text-red-800"
      />
    </Button>
  );
}
