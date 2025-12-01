import WithChildCard, {
  type WithChildCardVariantT,
} from "@/components/ui-elements/card/withChild";
import useGetOverview from "./useGetOverview";
import type { ContainerBackgroundT } from "@/components/ui-elements/common/graphics/containerWithIcon";
import ContainerWithIcon from "@/components/ui-elements/common/graphics/containerWithIcon";
import UpDownArrow from "@/components/ui-elements/common/graphics/upDownArrow";

interface Props {
  user_id: number;
}

function NonGradientBanner({ balance }: { balance: number }) {
  return (
    <WithChildCard title="Balance" variant="gray-card">
      <div className="flex items-center">
        <span className="mr-auto text-lg">{balance}€</span>
      </div>
    </WithChildCard>
  );
}

function GradientBanner({ title, value }: { title: string; value: number }) {
  const cardVariant = (
    value > 0 ? "diagonal-green" : "diagonal-red"
  ) as WithChildCardVariantT;

  const bgColor = (value > 0 ? "green" : "red") as ContainerBackgroundT;

  return (
    <WithChildCard title={title} variant={cardVariant}>
      <div className="flex items-center">
        <span className="mr-auto text-lg">{value}%</span>
        <ContainerWithIcon bgColor={bgColor}>
          <UpDownArrow value={value} />
        </ContainerWithIcon>
      </div>
    </WithChildCard>
  );
}

export default function CreateOverviewHeader({ user_id }: Props) {
  const { data, isPending, error } = useGetOverview({ user_id });

  if (isPending) return <>Loading</>;

  if (error) return <>Error</>;

  if (!data) return <>No data</>;

  return (
    <section className="grid grid-cols-4 gap-3">
      <NonGradientBanner balance={data.balance} />
      <NonGradientBanner balance={data.balance} />
      <GradientBanner value={data.margin} title="Margin 24h" />
      <GradientBanner value={data.value_invested} title="Value Invested" />
    </section>
  );
}
