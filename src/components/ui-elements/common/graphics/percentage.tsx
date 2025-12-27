import NumberVariation from "./numberVariation";
import UpDownArrow from "./upDownArrow";

interface Props {
  percentage: number;
}

function Percentage({ percentage }: Props) {
  return (
    <div className="flex w-[100px] gap-2">
      <NumberVariation number={percentage} />
      <UpDownArrow value={percentage} />
    </div>
  );
}

export default Percentage;
