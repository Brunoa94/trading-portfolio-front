import type { PropsWithChildren } from "react";

export type ContainerBackgroundT = "green" | "red" | "purple";

const BackgroundColors: Record<ContainerBackgroundT, string> = {
  green: "bg-green-500/20",
  red: "bg-red-500/20",
  purple: "bg-dark-purple/20",
};

interface Props extends PropsWithChildren {
  bgColor: ContainerBackgroundT;
}

export default function ContainerWithIcon({ children, bgColor }: Props) {
  return (
    <div className={`rounded-md p-2 ${BackgroundColors[bgColor]}`}>
      {children}
    </div>
  );
}
