import { ArrowDown, ArrowUp } from "lucide-react";

interface Props {
  value: number;
}

function UpDownArrow({ value }: Props) {
  if (value > 0) {
    return <ArrowUp size={"sm"} className="h-6 w-6 text-emerald-400" />;
  }

  if (value === 0) {
    return <></>;
  }

  return <ArrowDown size={"sm"} className="h-6 w-6 text-red-400" />;
}

export default UpDownArrow;
