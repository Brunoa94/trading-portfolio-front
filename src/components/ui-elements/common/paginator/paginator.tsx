import { Pagination } from "@/components/ui/pagination";
import usePaginator from "./usePaginator";
import { MoveLeft, MoveRight } from "lucide-react";
import { UButton } from "@/components/ui-elements/buttons/UButton";

interface Props {}

function Paginator() {
  const {
    currentPage,
    prevDisabled,
    nextDisabled,
    goNextPage,
    goPrevPage,

    maxPages,
  } = usePaginator({ totalItems: 25, itemsPerPage: 5 });

  return (
    <Pagination className="flex w-full items-center px-2 md:px-6">
      <UButton.WithVariant
        ariaLabel="Previous page"
        variant="default"
        onClick={goPrevPage}
        disabled={prevDisabled}
        className="mr-auto cursor-pointer"
      >
        <MoveLeft />
      </UButton.WithVariant>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">Page</span>
          <span className="text-md font-bold">{currentPage}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">of</span>
          <span className="text-md font-bold">{maxPages}</span>
        </div>
      </div>
      <UButton.WithVariant
        ariaLabel="Next page"
        variant="default"
        onClick={goNextPage}
        disabled={nextDisabled}
        className="ml-auto cursor-pointer"
      >
        <MoveRight />
      </UButton.WithVariant>
    </Pagination>
  );
}

export default Paginator;
