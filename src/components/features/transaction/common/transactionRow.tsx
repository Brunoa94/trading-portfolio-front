import { TableCell } from "@/components/ui/table";
import type {
  TransactionI,
  TransactionWithVariationI,
} from "@/types/transaction";
import type { PropsWithChildren } from "react";
import VariationBanner from "@/components/ui-elements/common/graphics/variationBanner";
import UpdateTransactionSheet from "../updateTransaction/updateTransactionSheet";
import DeleteTransactionButton from "../deleteTransaction/deleteTransactionButton";
import {
  FuturisticTheme,
  getFuturisticStatusStyles,
  buildStatusBar,
} from "@/theme/futuristic";

interface Props extends PropsWithChildren {
  row: TransactionI;
}

interface PropsWithVariation {
  row: TransactionWithVariationI;
}

const TransactionLabels = ({ row }: Props) => {
  return (
    <>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}
        >
          {row.amount}
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}
        >
          {row.price_targeted}€
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div className="group relative">
          <div
            className={`${FuturisticTheme.Interactive.HoverBackground} ${FuturisticTheme.Status.Neutral.gradient}`}
          />
          <div
            className={`${FuturisticTheme.Symbol.Container} ${FuturisticTheme.Padding.Container}`}
          >
            {row.asset_icon && row.asset_icon !== null ? (
              <img
                src={row.asset_icon}
                className="h-6 w-6 rounded-full"
                alt={row.symbol}
              />
            ) : (
              <span className={FuturisticTheme.Symbol.Icon}>⧫</span>
            )}
            <span className="font-mono font-bold">{row.symbol}</span>
            <div className={FuturisticTheme.Symbol.AccentLine} />
          </div>
        </div>
      </TableCell>
    </>
  );
};

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

const WithVariationLabels = ({ row }: PropsWithVariation) => {
  const variationIsPositive = row.variation.difference_percentage >= 0;
  const variationStatusStyles = getFuturisticStatusStyles(variationIsPositive);

  return (
    <>
      <TableCell className={`w-8 ${FuturisticTheme.Table.Cell}`}>
        <div className={buildStatusBar(variationStatusStyles)} />
      </TableCell>
      <TransactionLabels row={row} />
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}
        >
          {row.price_targeted}€
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}
        >
          {row.created_at}
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div className="group relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${variationStatusStyles.gradient} rounded-md transition-all duration-300 group-hover:opacity-80`}
          />
          <div
            className={`relative border bg-black/20 backdrop-blur-sm ${variationStatusStyles.border} rounded-md ${FuturisticTheme.Padding.Container} group-hover:border-opacity-60 transition-all duration-300 ${variationStatusStyles.glow}`}
          >
            <VariationBanner value={row.variation.difference_percentage} />
          </div>
          <div
            className={`absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent ${variationStatusStyles.accent} to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100`}
          />
        </div>
      </TableCell>
    </>
  );
};

const WithIdTitleActions = ({ row }: Props) => (
  <>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}
      >
        #{row.id}
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div className="group relative">
        <div
          className={`${FuturisticTheme.Interactive.HoverBackground} ${FuturisticTheme.Status.Neutral.gradient}`}
        />
        <div
          className={`${FuturisticTheme.Symbol.Container} ${FuturisticTheme.Padding.Container}`}
        >
          {row.asset_icon && row.asset_icon !== null ? (
            <img
              src={row.asset_icon}
              className="h-6 w-6 rounded-full"
              alt={row.symbol}
            />
          ) : (
            <span className={FuturisticTheme.Symbol.Icon}>⧫</span>
          )}
          <span className="font-mono font-bold">{row.symbol}</span>
          <div className={FuturisticTheme.Symbol.AccentLine} />
        </div>
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}
      >
        {row.amount}
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container} ${FuturisticTheme.Typography.Mono}`}
      >
        {row.price_targeted}€
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
      >
        {row.title || "No title"}
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <UpdateTransactionSheet transaction={row} />
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <DeleteTransactionButton id={row.id} />
    </TableCell>
  </>
);

export const TransactionRow = {
  WithUpdateDelete,
  WithIdTitleActions,
  WithVariationLabels,
};
