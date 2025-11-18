import { Gradient } from "@/components/styles/gradient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropsWithChildren } from "react";

type VariantT = "diagonal-purple";
interface Props extends PropsWithChildren {
  title: string;
  variant: VariantT;
  icon?: React.ReactNode;
}

const CardVariant: Record<VariantT, string> = {
  "diagonal-purple":
    "bg-gradient-to-br from-purple-900/6 via-purple-900/26 to-neutral-800 border-transaparent border-b border-b-green-900",
};

function WithChildCard({ title, children, icon }: Props) {
  return (
    <Card
      className={`border-transaparent flex w-full max-w-sm gap-6 py-4 ${Gradient.DiagonalDarkGreenPurple} bg-gradient-to-br`}
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
