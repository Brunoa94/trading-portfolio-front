"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { UButton } from "@/components/ui-elements/buttons/UButton";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { UseFormSetValue } from "react-hook-form";
import type { AssetTypeT } from "@/types/asset";

export type ComboOptionT = {
  value: AssetTypeT | string;
  label: string;
  icon?: string;
};

interface ComboboxProps {
  placeholder?: string;
  name: string;
  defaultValue?: string;
  setValue: UseFormSetValue<any>;
  options?: ComboOptionT[];
}

export const Combobox = ({
  placeholder = "Select...",
  name,
  defaultValue = "",
  setValue: setFormValue,
  options,
}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  const handleOnSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setFormValue(name, newValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <UButton.WithVariant
          ariaLabel="Select option"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options?.find((option: ComboOptionT) => option.value === value)
                ?.label
            : placeholder}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </UButton.WithVariant>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No result found.</CommandEmpty>
            <CommandGroup>
              {options?.map((option: ComboOptionT) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleOnSelect}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 flex h-4 w-4 items-center gap-2",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.icon && (
                    <img
                      src={option.icon}
                      className="h-[16px] w-[16px] rounded-full"
                    />
                  )}
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

Combobox.displayName = "Combobox";
