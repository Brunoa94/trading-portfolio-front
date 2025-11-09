import { Spinner } from "@/components/ui/spinner";

interface Props {
  message?: string;
}

export default function LoadingState({ message = "Loading..." }: Props) {
  return (
    <div className="flex items-center gap-4 py-4">
      <Spinner />
      <span>{message}</span>
    </div>
  );
}
