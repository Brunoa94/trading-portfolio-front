"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import type { Asset } from "@/types/transaction";
import type { UseFormRegister } from "react-hook-form";

type AssetSelect = {
  value: Asset;
  label: string;
};

const frameworks: AssetSelect[] = [
  {
    value: "crypto",
    label: "Crypto Coin",
  },
  {
    value: "stock",
    label: "Funds Stocks",
  },
  {
    value: "commodity",
    label: "Pension",
  },
  {
    value: "currency",
    label: "Currency",
  },
];

interface ComboboxProps {
  placeholder?: string;
  name: string;
  defaultValue?: string;
  register: UseFormRegister<any>;
}

export const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    { placeholder = "Select framework...", name, defaultValue = "", register },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultValue);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : placeholder}
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="w-full">
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No result found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      const newValue =
                        currentValue === value ? "" : currentValue;
                      setValue(newValue);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
        <input type="hidden" value={value} readOnly {...register(name)} />
      </Popover>
    );
  }
);

Combobox.displayName = "Combobox";
