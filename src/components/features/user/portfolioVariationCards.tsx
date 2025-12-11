import WithChildCard from "@/components/ui-elements/card/withChild";
import type { OptionItem } from "@/components/ui-elements/common/optionsTab/optionsTab";
import type {
  GrowthPeriodKeysT,
  GrowVariationKeysT,
} from "@/types/userOverview";

export const PortofolioVariations: OptionItem<GrowthPeriodKeysT>[] = [
  {
    label: "last 24h",
    value: "growth_24h",
  },
  {
    label: "last week",
    value: "growth_week",
  },
  {
    label: "last month",
    value: "growth_month",
  },
  {
    label: "last year",
    value: "growth_year",
  },
];

type KeyMappingT = {
  [key in GrowVariationKeysT]: string;
};

const keyMapping: KeyMappingT = {
  portfolio_value: "Portfolio Value",
  absolute_diff: "€ difference",
  percentage_diff: "% difference",
};

interface Props {
  label: GrowVariationKeysT;
  value: number;
  index: number;
}

const PortfolioValue = ({ label, value, index }: Props) => {
  return (
    <WithChildCard
      variant={"gray-card"}
      key={`${label}-${index}`}
      title={keyMapping[label]}
    >
      <span>{String(value)}</span>
    </WithChildCard>
  );
};

const DifferenceValue = ({ label, value, index }: Props) => {
  return (
    <WithChildCard
      variant={Number(value) >= 0 ? "diagonal-green" : "diagonal-red"}
      key={`${label}-${index}`}
      title={keyMapping[label]}
    >
      <span>{String(value)}</span>
    </WithChildCard>
  );
};

type PortfolioVariationCardT = {
  label: GrowVariationKeysT;
  index: number;
  value: number;
};

export const PortfolioVariationCard = ({
  label,
  value,
  index,
}: PortfolioVariationCardT) => {
  if (label === "portfolio_value")
    return <PortfolioValue label={label} value={value} index={index} />;

  return <DifferenceValue label={label} value={value} index={index} />;
};
