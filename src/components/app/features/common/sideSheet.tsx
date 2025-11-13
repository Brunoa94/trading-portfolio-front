import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props {
  sheetTrigger: React.ReactNode;
  title: string;
  description?: string;
  content: React.ReactNode;
  submitButton?: React.ReactNode;
  closeButton?: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function SideSheet({
  sheetTrigger,
  title,
  description,
  content,
  submitButton,
  open,
  setOpen,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{sheetTrigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">{content}</div>
        <SheetFooter className="px-0">
          {submitButton}
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
