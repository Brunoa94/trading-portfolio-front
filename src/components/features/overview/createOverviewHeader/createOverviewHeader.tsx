import WithChildCard from "@/components/ui-elements/card/withChild";
import useGetOverview from "./useGetOverview";

interface Props {
  user_id: number;
}

export default function CreateOverviewHeader({ user_id }: Props) {
  const { data, isPending } = useGetOverview({ user_id });
  return (
    <div className="grid grid-cols-4 gap-3">
      <WithChildCard title="Balance" variant="diagonal-green">
        <span>{data?.balance}</span>
      </WithChildCard>
      <WithChildCard title="Value Invested" variant="diagonal-green">
        <span>{data?.balance}</span>
      </WithChildCard>
      <WithChildCard title="Margin" variant="diagonal-green">
        <span>{data?.balance}</span>
      </WithChildCard>
      <WithChildCard title="Total Investments" variant="diagonal-green">
        <span>{data?.balance}</span>
      </WithChildCard>
    </div>
  );
}
