import { Button } from "@/components/ui/button";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

type ButtonVariantT =
  | "default"
  | "link"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";
type ButtonTypeT = "button" | "submit" | "reset" | undefined;

interface Props extends PropsWithChildren {
  ariaLabel: string;
  variant?: ButtonVariantT;
  type?: ButtonTypeT;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  role?: string;
  "aria-expanded"?: boolean;
}

const ButtonContainer = ({
  ariaLabel,
  variant = "default",
  type = "button",
  className,
  children,
  onClick,
  disabled,
  role,
  "aria-expanded": ariaExpanded,
}: Props) => (
  <Button
    aria-label={ariaLabel}
    className={className}
    type={type}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    role={role}
    aria-expanded={ariaExpanded}
  >
    {children}
  </Button>
);

const Ghost = ({
  ariaLabel,
  type = "button",
  className,
  children,
  onClick,
  disabled,
  role,
  "aria-expanded": ariaExpanded,
}: Props) => (
  <ButtonContainer
    ariaLabel={ariaLabel}
    className={clsx(
      "my-2 cursor-pointer rounded-full bg-transparent uppercase",
      className
    )}
    type={type}
    variant="ghost"
    onClick={onClick}
    disabled={disabled}
    role={role}
    aria-expanded={ariaExpanded}
  >
    {children}
  </ButtonContainer>
);

const WithVariant = ({
  ariaLabel,
  variant = "default",
  type = "button",
  className,
  children,
  onClick,
  disabled,
  role,
  "aria-expanded": ariaExpanded,
}: Props) => (
  <ButtonContainer
    ariaLabel={ariaLabel}
    className={className}
    type={type}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    role={role}
    aria-expanded={ariaExpanded}
  >
    {children}
  </ButtonContainer>
);

export const UButton = {
  WithVariant,
  Ghost,
};
