import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
}

function WithChildCard({ title, children }: Props) {
  return (
    <Card
      className="flex h-26 w-full max-w-sm gap-0 border-none"
      style={{
        background:
          "linear-gradient(163deg,rgba(48, 48, 48, 1) 46%, rgba(77, 77, 77, 1) 98%)",
      }}
    >
      <CardHeader>
        <CardTitle className="text-md">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default WithChildCard;
