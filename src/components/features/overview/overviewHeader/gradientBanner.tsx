import type { WithChildCardVariantT } from "@/components/ui-elements/card/withChild";
import WithChildCard from "@/components/ui-elements/card/withChild";
import type { ContainerBackgroundT } from "@/components/ui-elements/common/graphics/containerWithIcon";
import ContainerWithIcon from "@/components/ui-elements/common/graphics/containerWithIcon";
import UpDownArrow from "@/components/ui-elements/common/graphics/upDownArrow";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  value: number;
}

export default function GradientBanner({ title, value, children }: Props) {
  const cardVariant = (
    value > 0 ? "diagonal-green" : "diagonal-red"
  ) as WithChildCardVariantT;

  const bgColor = (value > 0 ? "green" : "red") as ContainerBackgroundT;

  return (
    <WithChildCard title={title} variant={cardVariant}>
      <div className="flex items-center">
        <span className="mr-auto text-lg">{value}%</span>
        {children}
      </div>
    </WithChildCard>
  );
}
