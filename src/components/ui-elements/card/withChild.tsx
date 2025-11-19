import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Gradient } from "@/theme/gradient";
import type { PropsWithChildren } from "react";

type VariantT = "diagonal-purple" | "diagonal-green";
interface Props extends PropsWithChildren {
  title: string;
  variant: VariantT;
  icon?: React.ReactNode;
}

const CardVariant: Record<VariantT, string> = {
  "diagonal-purple": Gradient.DiagonalDarkGreenPurple,
  "diagonal-green": Gradient.DiagonalGreen,
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
