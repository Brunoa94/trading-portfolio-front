import { TableCell } from "@/components/ui/table";
import type {
  TransactionI,
  TransactionWithVariationI,
} from "@/types/transaction";
import UpdateTransactionSheet from "../../updateTransaction/updateTransactionSheet";
import DeleteTransactionButton from "../../deleteTransaction/deleteTransactionButton";
import type { PropsWithChildren } from "react";
import VariationBanner from "@/components/ui-elements/common/graphics/variationBanner";

interface Props extends PropsWithChildren {
  row: TransactionI;
}

interface PropsWithVariation {
  row: TransactionWithVariationI;
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

const WithVariationLabels = ({ row }: PropsWithVariation) => (
  <>
    <TableCell></TableCell>
    <TransactionLabels row={row} />
    <TableCell>{row.price_targeted}€</TableCell>
    <TableCell>{row.created_at}</TableCell>
    <TableCell>
      <VariationBanner value={row.variation.difference_percentage} />
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
