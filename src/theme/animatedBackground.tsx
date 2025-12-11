import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  activeRef: HTMLElement | null;
  className?: string;
  transitionDuration?: string;
  borderRadius?: string;
}

export default function AnimatedBackground({
  activeRef,
  className,
  transitionDuration = "200ms",
  borderRadius = "rounded-md",
}: AnimatedBackgroundProps) {
  if (!activeRef) return null;

  return (
    <div
      className={cn(
        "bg-background absolute shadow-sm transition-all ease-in-out",
        borderRadius,
        className
      )}
      style={{
        left: activeRef.offsetLeft,
        top: activeRef.offsetTop,
        width: activeRef.offsetWidth,
        height: activeRef.offsetHeight,
        transitionDuration,
      }}
    />
  );
}
