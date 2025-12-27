import { ArrowDown, ArrowUp } from "lucide-react";

interface Props {
  value: number;
}

function UpDownArrow({ value }: Props) {
  if (value > 0) {
    return (
      <ArrowUp
        size={"sm"}
        className="ml-auto h-5 w-5 shrink-0 text-emerald-400"
      />
    );
  }

  if (value === 0) {
    return <></>;
  }

  return (
    <ArrowDown size={"sm"} className="ml-auto h-5 w-5 shrink-0 text-red-400" />
  );
}

export default UpDownArrow;
