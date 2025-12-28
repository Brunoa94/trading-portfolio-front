import type { PropsWithChildren } from "react";
import { Container as ContainerS } from "@/theme/container";
import { Gradient } from "@/theme/gradient";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  transparentBg?: boolean;
  className?: string;
}

function Container({ children, transparentBg, className }: Props) {
  return (
    <main
      className={clsx(
        `${ContainerS.MainContainer} flex flex-col gap-4 rounded-lg ${className} mb-8 pb-8`,
        transparentBg
          ? "bg-transparent !p-0"
          : `${Gradient.GrayCard} border-secondary border`
      )}
    >
      {children}
    </main>
  );
}

export default Container;
