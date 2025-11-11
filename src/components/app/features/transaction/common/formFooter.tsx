import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";

interface Props {
  withFooter?: boolean;
}

export default function FormFooter({ withFooter }: Props) {
  const submitButton = <Button type="submit">Save Transaction</Button>;

  return withFooter ? (
    <SheetFooter className="mt-auto px-0">
      {submitButton}
      <SheetClose asChild>
        <Button variant="outline">Close</Button>
      </SheetClose>
    </SheetFooter>
  ) : (
    submitButton
  );
}
