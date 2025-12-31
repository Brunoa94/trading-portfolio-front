import { TableCell } from "@/components/ui/table";
import { FuturisticTheme } from "@/theme/futuristic";

const ShimmerBox = ({ className = "" }: { className?: string }) => (
  <div
    className={`animate-pulse rounded-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] ${className}`}
    style={{
      animation: "shimmer 2s ease-in-out infinite",
    }}
  />
);

const TransactionLabelsShimmer = () => {
  return (
    <>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
        >
          <ShimmerBox className="h-6 w-16" />
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
        >
          <ShimmerBox className="h-6 w-20" />
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div className="group relative">
          <div
            className={`${FuturisticTheme.Symbol.Container} ${FuturisticTheme.Padding.Container}`}
          >
            <div className="flex items-center gap-2">
              <ShimmerBox className="h-6 w-6 rounded-full" />
              <ShimmerBox className="h-6 w-16" />
            </div>
          </div>
        </div>
      </TableCell>
    </>
  );
};

const WithUpdateDeleteShimmer = () => (
  <>
    <TransactionLabelsShimmer />
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Interactive} ${FuturisticTheme.Padding.Container}`}
      >
        <ShimmerBox className="h-8 w-16" />
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Interactive} ${FuturisticTheme.Padding.Container}`}
      >
        <ShimmerBox className="h-8 w-16" />
      </div>
    </TableCell>
  </>
);

const WithVariationLabelsShimmer = () => {
  return (
    <>
      <TableCell className={`w-8 ${FuturisticTheme.Table.Cell}`}>
        <ShimmerBox className="h-12 w-2" />
      </TableCell>
      <TransactionLabelsShimmer />
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
        >
          <ShimmerBox className="h-6 w-20" />
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
        >
          <ShimmerBox className="h-6 w-24" />
        </div>
      </TableCell>
      <TableCell className={FuturisticTheme.Table.Cell}>
        <div
          className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
        >
          <ShimmerBox className="h-6 w-16" />
        </div>
      </TableCell>
    </>
  );
};

const WithIdTitleActionsShimmer = () => (
  <>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
      >
        <ShimmerBox className="h-6 w-12" />
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div className="group relative">
        <div
          className={`${FuturisticTheme.Symbol.Container} ${FuturisticTheme.Padding.Container}`}
        >
          <div className="flex items-center gap-2">
            <ShimmerBox className="h-6 w-6 rounded-full" />
            <ShimmerBox className="h-6 w-16" />
          </div>
        </div>
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
      >
        <ShimmerBox className="h-6 w-16" />
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
      >
        <ShimmerBox className="h-6 w-20" />
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <div
        className={`${FuturisticTheme.Container.Card} ${FuturisticTheme.Padding.Container}`}
      >
        <ShimmerBox className="h-6 w-24" />
      </div>
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <ShimmerBox className="h-8 w-16" />
    </TableCell>
    <TableCell className={FuturisticTheme.Table.Cell}>
      <ShimmerBox className="h-8 w-16" />
    </TableCell>
  </>
);

export const TransactionRowShimmer = {
  WithUpdateDelete: WithUpdateDeleteShimmer,
  WithIdTitleActions: WithIdTitleActionsShimmer,
  WithVariationLabels: WithVariationLabelsShimmer,
};
