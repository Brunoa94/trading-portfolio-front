import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Border } from "@/theme/border";
import { Gradient } from "@/theme/gradient";
import type { PropsWithChildren } from "react";

export type WithChildCardVariantT =
  | "diagonal-purple"
  | "diagonal-green"
  | "diagonal-red"
  | "diagonal-dark-green-purple"
  | "gray-card";
interface Props extends PropsWithChildren {
  title: string;
  variant: WithChildCardVariantT;
  icon?: React.ReactNode;
}

const CardVariant: Record<WithChildCardVariantT, string> = {
  "diagonal-purple": Gradient.DiagonalDarkGreenPurple,
  "diagonal-green": Gradient.DiagonalGreen,
  "diagonal-red": Gradient.DiagonalRed,
  "diagonal-dark-green-purple": Border.DiagonalDarkGreenPurple,
  "gray-card": Gradient.GrayCard,
};

function WithChildCard({ title, children, icon, variant }: Props) {
  return (
    <Card
      className={`border-transaparent flex w-full max-w-sm gap-6 py-4 ${CardVariant[variant]} bg-gradient-to-br`}
    >
      <CardHeader className="flex h-3 w-full shrink-0 justify-end">
        <span className="text-primary! font-notch mr-auto text-lg font-bold">
          {title}
        </span>
        {icon}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default WithChildCard;
