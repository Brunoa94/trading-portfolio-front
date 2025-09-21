import UpDownArrow from "../global/upDownArrow";

interface Props {
  percentage: number;
}

function Percentage({ percentage }: Props) {
  return (
    <div className="flex w-full gap-2">
      <span className="flex text-3xl font-bold">{percentage}%</span>
      <UpDownArrow value={percentage} />
    </div>
  );
}

export default Percentage;
