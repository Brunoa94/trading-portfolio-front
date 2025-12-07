import { useRef, useState } from "react";
import FilterTab from "./filterTab";
import AnimatedBackground from "@/theme/animatedBackground";

interface OptionItem {
  value: string;
  label: string;
}

interface OptionsTabProps {
  options?: OptionItem[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export default function OptionsTab({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value,
  onValueChange,
}: OptionsTabProps) {
  const [activeTabRef, setActiveTabRef] = useState<HTMLButtonElement | null>(
    null
  );
  const selectedValue = useRef(value || options[0]?.value || "");

  const handleValueChange = (
    newValue: string,
    buttonRef: HTMLButtonElement
  ) => {
    selectedValue.current = newValue;
    onValueChange?.(newValue);
    setActiveTabRef(buttonRef);
  };

  return (
    <div className="bg-muted text-muted-foreground relative inline-flex h-10 items-center justify-center rounded-lg p-1">
      <AnimatedBackground
        activeRef={activeTabRef}
        transitionDuration="200ms"
        borderRadius="rounded-md"
      />
      {options.map((option) => (
        <FilterTab
          value={option.value}
          label={option.label}
          handleValueChange={handleValueChange}
          isActive={option.value === selectedValue.current}
        />
      ))}
    </div>
  );
}
