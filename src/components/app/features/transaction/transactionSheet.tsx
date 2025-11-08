import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CreateTransactionForm from "./createTransactionForm/createTransactionForm";

function TransactionSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="uppercase">Add Transaction</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Transaction</SheetTitle>
          <SheetDescription>
            Add a new transaction to you transaction list
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <CreateTransactionForm withFooter />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default TransactionSheet;
