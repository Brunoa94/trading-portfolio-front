import type { PropsWithChildren } from "react";
import { Container as ContainerS } from "@/theme/container";
import { Gradient } from "@/theme/gradient";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  transparentBg?: boolean;
}

function Container({ children, transparentBg }: Props) {
  return (
    <main
      className={clsx(
        `${ContainerS.MainContainer} flex flex-col gap-4 rounded-lg`,
        transparentBg
          ? "bg-transparent"
          : `${Gradient.GrayCard} border-secondary border`
      )}
    >
      {children}
    </main>
  );
}

export default Container;
