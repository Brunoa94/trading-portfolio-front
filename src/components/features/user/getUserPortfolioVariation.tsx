import WithChildCard from "@/components/ui-elements/card/withChild";
import type { OptionItem } from "@/components/ui-elements/common/optionsTab/optionsTab";
import OptionsTab from "@/components/ui-elements/common/optionsTab/optionsTab";
import { Spinner } from "@/components/ui/spinner";
import useErrorHandling from "@/hooks/useErrorHandling";
import { UserOverviewSchema } from "@/schemas/user";
import { UserOverviewService } from "@/services/userOverviewService";
import { Font } from "@/theme/font";
import type {
  GrowthPeriodKeysT,
  GrowVariationKeysT,
} from "@/types/userOverview";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  PortfolioVariationCard,
  PortofolioVariations,
} from "./portfolioVariationCards";

interface Props {
  user_id: number;
}

export default function GetUserPortfolioVariation({ user_id }: Props) {
  const {
    data: portfolioVariation = null,
    isPending,
    error,
  } = useQuery({
    queryKey: ["portfolio-variation", user_id],
    queryFn: () => UserOverviewService.getUserPortfolioGrowth({ user_id }),
    retry: 2,
  });
  const triggerError = useErrorHandling({ error });
  const [growthVariation, setGrowthVariation] =
    useState<GrowthPeriodKeysT>("growth_24h");

  if (error) {
    triggerError();
  }

  if (isPending) {
    return (
      <section>
        <Spinner />
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-3">
      <h3 className={`${Font.TableTitle}`}>Variation Portolio</h3>
      <OptionsTab<GrowthPeriodKeysT>
        options={PortofolioVariations}
        value={growthVariation}
        onValueChange={setGrowthVariation}
      />
      <div className="flex items-start gap-2">
        {portfolioVariation &&
          Object.entries(portfolioVariation[growthVariation]).map(
            ([key, value], index) => (
              <PortfolioVariationCard
                key={`${key}-${index}`}
                label={key as GrowVariationKeysT}
                value={Number(value)}
                index={index}
              />
            )
          )}
      </div>
    </section>
  );
}
