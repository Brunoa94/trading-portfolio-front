import { TableCell } from "@/components/ui/table";
import type { TransactionI } from "@/types/transaction";
import UpdateTransactionSheet from "../../updateTransaction/updateTransactionSheet";
import DeleteTransactionButton from "../../deleteTransaction/deleteTransactionButton";
import type { PropsWithChildren } from "react";
import UpDownArrow from "@/components/ui-elements/common/graphics/upDownArrow";
import VariationBanner from "@/components/ui-elements/common/graphics/variationBanner";

interface Props extends PropsWithChildren {
  row: TransactionI;
}

const TransactionLabels = ({ row }: Props) => (
  <>
    <TableCell>{row.amount}</TableCell>
    <TableCell>{row.price_targeted}€</TableCell>
    <TableCell>{row.symbol}</TableCell>
  </>
);

const WithUpdateDelete = ({ row }: Props) => (
  <>
    <TransactionLabels row={row} />
    <TableCell>
      <UpdateTransactionSheet transaction={row} />
    </TableCell>
    <TableCell>
      <DeleteTransactionButton id={row.id} />
    </TableCell>
  </>
);

const WithVariationLabels = ({ row }: Props) => (
  <>
    <TransactionLabels row={row} />
    <TableCell>
      <UpDownArrow value={25} />
    </TableCell>
    <TableCell>
      <VariationBanner value={25} />
    </TableCell>
  </>
);

const WithIdTitleActions = ({ row }: Props) => (
  <>
    <TableCell>{row.id}</TableCell>
    <TableCell>{row.title || ""}</TableCell>
    <WithUpdateDelete row={row} />
  </>
);

export const TransactionRow = {
  WithUpdateDelete,
  WithIdTitleActions,
  WithVariationLabels,
};
