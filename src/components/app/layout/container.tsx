import type { PropsWithChildren } from "react";
import { Container as ContainerS } from "@/components/app/styles/container";
import { Gradient } from "../styles/gradient";

interface Props extends PropsWithChildren {}

function Container({ children }: Props) {
  return (
    <main
      className={`${ContainerS.MainContainer} ${Gradient.GrayCard} border-secondary flex flex-col gap-4 rounded-lg border`}
    >
      {children}
    </main>
  );
}

export default Container;
