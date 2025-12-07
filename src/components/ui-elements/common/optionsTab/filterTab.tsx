import clsx from "clsx";
interface Props {
  value: string;
  label: string;
  handleValueChange: (value: string, buttonRef: HTMLButtonElement) => void;
  isActive?: boolean;
}

function FilterTab({ value, label, handleValueChange, isActive }: Props) {
  return (
    <button
      key={value}
      className={clsx(
        "ring-offset-background focus-visible:ring-ring relative z-10 inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
      onClick={(e) => handleValueChange(value, e.currentTarget)}
    >
      {label}
    </button>
  );
}

export default FilterTab;
