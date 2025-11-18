import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

function Container({ children }: Props) {
  return (
    <main className="from-accent/20 via-accent/10 border-border/50 hover:border-border mt-4 rounded-lg border bg-gradient-to-br to-transparent p-8 pb-12 shadow-lg transition-all duration-300 hover:shadow-xl">
      {children}
    </main>
  );
}

export default Container;
