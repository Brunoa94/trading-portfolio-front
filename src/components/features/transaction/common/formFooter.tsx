import { UButton } from "@/components/ui-elements/buttons/UButton";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";

interface Props {
  withFooter?: boolean;
}

export default function FormFooter({ withFooter }: Props) {
  const submitButton = (
    <UButton.WithVariant ariaLabel="Save transaction" variant="default" type="submit">
      Save Transaction
    </UButton.WithVariant>
  );

  return withFooter ? (
    <SheetFooter className="mt-auto px-0">
      {submitButton}
      <SheetClose asChild>
        <UButton.WithVariant ariaLabel="Close" variant="outline">
          Close
        </UButton.WithVariant>
      </SheetClose>
    </SheetFooter>
  ) : (
    submitButton
  );
}
