import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import useDeleteTransaction from "./useDeleteTransaction";

interface Props {
  id: number;
}

export default function DeleteTransactionButton({ id }: Props) {
  const { onDelete, isPending } = useDeleteTransaction({ id });

  return (
    <Button onClick={onDelete} className="color-white" color="red">
      <Trash size={36} absoluteStrokeWidth />
    </Button>
  );
}
