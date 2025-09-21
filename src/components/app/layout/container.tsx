import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

function Container({ children }: Props) {
  return (
    <div className="w-full max-w-[1000px] px-4 py-2 lg:px-0">{children}</div>
  );
}

export default Container;
