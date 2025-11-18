import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropsWithChildren } from "react";

type VariantT = "diagonal-purple";
interface Props extends PropsWithChildren {
  title: string;
  variant: VariantT;
}

const CardVariant: Record<VariantT, string> = {
  "diagonal-purple":
    "bg-gradient-to-br from-purple-900/6 via-purple-900/26 to-neutral-800 border-transaparent border-b border-b-green-900",
};

function WithChildCard({ title, children, variant }: Props) {
  return (
    <Card className={`flex h-26 w-full max-w-sm gap-0 ${CardVariant[variant]}`}>
      <CardHeader>
        <CardTitle className="text-md text-primary!">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default WithChildCard;
